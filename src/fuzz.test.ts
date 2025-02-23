"use strict";
import {
  LayerSpecification,
  StyleSpecification,
  validateStyleMin,
} from "@maplibre/maplibre-gl-style-spec";
import fc from "fast-check";
import fs from "node:fs";
import path from "node:path";
import { test } from "vitest";
import { ErrorReporter } from "./ErrorReporter";
import { writeMarkdownReportToFile } from "./markdown-report-generator";
import {
  cloneDfsTreeUntil,
  iterateDfsKeysAndValuesRecursivelyAndInjectAtSeed,
} from "./style-manipulation";

const styleJson: string = fs.readFileSync(
  path.join(__dirname, "./style.json"),
  "utf-8"
);

const deepClone = <T extends object | string | any[] | number | null>(
  o: T
): T => JSON.parse(JSON.stringify(o));

const bigListOfNaughtyStrings: string[] = JSON.parse(
  fs.readFileSync("./blns.json", "utf8")
);
bigListOfNaughtyStrings.push(
  "__proto__",
  "__proto__.__proto__",
  "valueOf",
  "__line__",
  // Below strings from:
  // https://github.com/minimaxir/big-list-of-naughty-strings/pull/215/files#diff-6791cbb36194430f2aa8cb6fcd9a3cd63486fa450f4bc4bb6a2431aeafd4037bR453
  "constructor",
  "prototype",
  "__defineGetter__",
  "__defineSetter__",
  "__lookupGetter__",
  "__lookupSetter__",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf",
  '{"__proto__":{"isAdmin":true,"data":"","list":"","items":"","attributes":"","foo":{},"url":"javascript:alert(\'pwned\')"}}',
  '{"constructor":{"prototype":{"isAdmin":true,"data":"","list":"","items":"","attributes":"","foo":{},"url":"javascript:alert(\'pwned\')"}}}'
);

test.only(
  "fuzz style spec values with fast-check anything arbitrary ",
  async () => {
    const errorReporter = new ErrorReporter();
    const originalStyle = JSON.parse(styleJson);

    const base = deepClone(originalStyle);
    base.layers = [];
    const cloneBaseStyleWithLayer = (layer: LayerSpecification) => {
      const clone = deepClone(base);
      clone.layers.push(deepClone(layer));
      return clone;
    };

    const getMaxSeed = (style: StyleSpecification) =>
      iterateDfsKeysAndValuesRecursivelyAndInjectAtSeed(
        deepClone(style),
        Number.POSITIVE_INFINITY,
        undefined
      ).i;

    const InjectionStringArb = fc.anything({
      withObjectString: true,
    });

    for (const originalLayer of originalStyle.layers) {
      const style = cloneBaseStyleWithLayer(originalLayer);
      const maxSeed = getMaxSeed(style);

      const SeedArb = fc.noBias(fc.integer({ min: 0, max: maxSeed }));

      const property = fc.property(
        SeedArb,
        InjectionStringArb,
        (seed, injectedString) => {
          const testStyle = deepClone(style);
          const { value: newStyle } =
            iterateDfsKeysAndValuesRecursivelyAndInjectAtSeed(
              testStyle,
              seed,
              injectedString
            );

          try {
            validateStyleMin(newStyle);
          } catch (e) {
            const styleClone = cloneDfsTreeUntil(newStyle, seed);
            errorReporter.report(e as Error, JSON.stringify(styleClone));
          }
        }
      );

      fc.assert(property, { numRuns: 10_000 });
    }

    const { reportedErrorCount, uniqueErrors } = errorReporter.getStats();

    console.log(`${reportedErrorCount} produced errors`);
    console.log(
      `${uniqueErrors}/${reportedErrorCount} were unique  (${(
        (uniqueErrors / reportedErrorCount) *
        100
      ).toFixed(1)}%)`
    );

    await writeMarkdownReportToFile("./findings/report.md", errorReporter.getReports());
  },
  20 * 60 * 1000
);

test(
  "fuzz every key/value in style spec layers objects with fast-check",
  async () => {
    const errorReporter = new ErrorReporter();
    const originalStyle = JSON.parse(styleJson);

    const base = deepClone(originalStyle);
    base.layers = [];
    const cloneBaseStyleWithLayer = (layer: LayerSpecification) => {
      const clone = deepClone(base);
      clone.layers.push(deepClone(layer));
      return clone;
    };

    const getMaxSeed = (style: StyleSpecification) =>
      iterateDfsKeysAndValuesRecursivelyAndInjectAtSeed(
        deepClone(style),
        Number.POSITIVE_INFINITY,
        undefined
      ).i;

    const InjectionStringArb = fc.oneof(
      // color values at least split strings by "."
      fc.string({ unit: "grapheme-ascii" }).map((s) => `__proto__.${s}`),
      fc.constantFrom(...bigListOfNaughtyStrings),
      // urls have {variable} templating
      fc.constantFrom(...bigListOfNaughtyStrings).map((s) => `{${s}}`),
      // some keys have {key:value} templating?
      fc.constantFrom(...bigListOfNaughtyStrings).map((s) => `{${s}:${s}}`),
      // metadata objects seem to have `namespace:key` keys?
      fc.constantFrom(...bigListOfNaughtyStrings).map((s) => `${s}:${s}`)
    );

    for (const originalLayer of originalStyle.layers) {
      const style = cloneBaseStyleWithLayer(originalLayer);
      const maxSeed = getMaxSeed(style);

      const SeedArb = fc.noBias(fc.integer({ min: 0, max: maxSeed }));

      const property = fc.property(
        SeedArb,
        InjectionStringArb,
        (seed, injectedString) => {
          const testStyle = deepClone(style);
          const { value: newStyle } =
            iterateDfsKeysAndValuesRecursivelyAndInjectAtSeed(
              testStyle,
              seed,
              injectedString
            );

          try {
            validateStyleMin(newStyle);
          } catch (e) {
            const styleClone = cloneDfsTreeUntil(newStyle, seed);
            errorReporter.report(e as Error, JSON.stringify(styleClone));
          }
        }
      );

      fc.assert(property, { numRuns: 50000 });
    }

    const { reportedErrorCount, uniqueErrors } = errorReporter.getStats();

    console.log(`${reportedErrorCount} produced errors`);
    console.log(
      `${uniqueErrors}/${reportedErrorCount} were unique  (${(
        (uniqueErrors / reportedErrorCount) *
        100
      ).toFixed(1)}%)`
    );

    await writeMarkdownReportToFile("./findings/report.md", errorReporter.getReports());
  },
  20 * 60 * 1000
);

test(
  "fuzz every key/value in style spec layers objects with specific injection string",
  async () => {
    const INJECTION_STRING = "__proto__.toString";
    const errorReporter = new ErrorReporter();

    const originalStyle = JSON.parse(styleJson);

    const base = deepClone(originalStyle);
    base.layers = [];
    const cloneBaseStyleWithLayer = (layer: LayerSpecification) => {
      const clone = deepClone(base);
      clone.layers.push(deepClone(layer));
      return clone;
    };

    const getMaxSeed = (style: StyleSpecification) =>
      iterateDfsKeysAndValuesRecursivelyAndInjectAtSeed(
        deepClone(style),
        Number.POSITIVE_INFINITY,
        undefined
      ).i;

    for (const originalLayer of originalStyle.layers) {
      const style = cloneBaseStyleWithLayer(originalLayer);
      const maxSeed = getMaxSeed(style);

      for (let index = 0; index < maxSeed; index++) {
        const testStyle = deepClone(style);
        const { value: newStyle } =
          iterateDfsKeysAndValuesRecursivelyAndInjectAtSeed(
            testStyle,
            index,
            INJECTION_STRING
          );

        try {
          validateStyleMin(newStyle);
        } catch (e) {
          const styleClone = cloneDfsTreeUntil(newStyle, index);
          errorReporter.report(e as Error, JSON.stringify(styleClone));
        }
      }
    }

    const { reportedErrorCount, uniqueErrors } = errorReporter.getStats();

    console.log(`${reportedErrorCount} produced errors`);
    console.log(
      `${uniqueErrors}/${reportedErrorCount} were unique  (${(
        (uniqueErrors / reportedErrorCount) *
        100
      ).toFixed(1)}%)`
    );

    await writeMarkdownReportToFile("./findings/report.md", errorReporter.getReports());
    return;
  },
  10 * 60 * 1000
);
