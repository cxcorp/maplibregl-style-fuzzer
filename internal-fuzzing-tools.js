const fc = require("fast-check");
const { FuzzedDataProvider, addDictionary } = require("@jazzer.js/core");
const fs = require("node:fs");
const path = require("node:path");
const namedValues = require("./internal-fuzzing-tools/named-values");

const {
  // namedColors,
  rootPropertyNames,
  expressionNames,
  // layerPropertyNames,
  // geoJsonTokens,
  // expressionKeywords,
  // sourceKeys,
  // allSortsOfEnumValues,
} = namedValues;

const styleJson = fs.readFileSync(
  path.join(__dirname, "./seeds_full_json/style.json"),
  "utf-8"
);

const deepClone = (o) => JSON.parse(JSON.stringify(o));

const originalStyle = JSON.parse(styleJson);

const base = deepClone(originalStyle);
base.layers = [];

const cloneBaseStyleWithLayer = (layer) => {
  const clone = deepClone(base);
  clone.layers.push(deepClone(layer));
  return clone;
};

const mutateTreeAtNthIndex = (
  obj,
  targetI,
  replacement
) => {
  let i = 0;

  const recurseInternal = (obj) => {
    if (typeof obj !== "object" || obj === null) {
      // primitive or value (or function but fns not supported in json)
      return obj;
    }

    if (Array.isArray(obj)) {
      for (let j = 0; j < obj.length; j++) {
        i++;
        obj[j] = targetI === i ? replacement : recurseInternal(obj[j]);
      }
    } else {
      for (const key in obj) {
        i++;
        const result = targetI === i ? replacement : recurseInternal(obj[key]);
        delete obj[key];
        Object.defineProperty(obj, key, {
          value: result,
          writable: true,
          enumerable: true,
          configurable: true,
        });
      }
    }

    return obj;
  };

  const retValue = recurseInternal(obj);
  return { i, value: retValue };
};

const getMaxSeed = (style) =>
  mutateTreeAtNthIndex(
    deepClone(style),
    Number.POSITIVE_INFINITY,
    undefined
  ).i;

class FuzzerFedStringArb extends fc.Arbitrary {
  generate(mrng) {
    const len = mrng.nextInt(0, 255);
    const value = mrng.nextUtf8String(len);
    return new fc.Value(value);
  }

  canShrinkWithoutContext() {
    return false;
  }

  shrink() {
    return fc.Stream.nil();
  }
}

// const ColorStringArb = fc.oneof(
//   fc.constantFrom(...namedColors),
//   // hex colors
//   fc.oneof(
//     // valid hex
//     fc
//       .array(fc.constantFrom(..."0123456789abcdef".split()))
//       .map((nibbles) => `#${nibbles.join()}`),
//     // valid-ish hex
//     fc.integer({ min: 0 }).map((integer) => `#${integer.toString(16)}`),
//     // garbage anything starting with #
//     fc.string().map((s) => `#${s}`)
//   ),
//   // rgb()
//   fc.oneof(
//     // valid rgb()
//     fc
//       .tuple(
//         fc.integer({ min: 0, max: 255 }),
//         fc.integer({ min: 0, max: 255 }),
//         fc.integer({ min: 0, max: 255 })
//       )
//       .map(([r, g, b]) => `rgb(${r} ${g} ${b})`),
//     // valid-ish
//     fc
//       .array(fc.oneof(fc.maxSafeInteger(), fc.double()))
//       .map((numbers) => `rgb(${numbers.join(" ")})`)
//   )
// );

const DomainStringsArb = fc.oneof(
  new FuzzerFedStringArb()
  // ColorStringArb,
  // fc.constantFrom(...expressionNames),
  // fc.constantFrom(...layerPropertyNames),
  // fc.constantFrom(...geoJsonTokens),
  // fc.constantFrom(...rootPropertyNames),
  // fc.constantFrom(...expressionKeywords),
  // fc.constantFrom(...sourceKeys),
  // fc.constantFrom(...allSortsOfEnumValues),
  // fc.constantFrom("__proto__", "toString", "constructor")
);

const ExpressionNameArb = fc.constantFrom(...expressionNames);

const ExpressionStrArb = fc.oneof(
  DomainStringsArb
  // fc.stringMatching(/[a-zA-Z0-9\-_]+/),
  // fc.string()
);

const { array: ArrayOfNumbersOrArrayOfArraysOfNumbersArb } = fc.letrec(
  (tie) => ({
    array: fc.oneof(
      { depthSize: "small" },
      fc.array(fc.oneof(tie("leaf"), tie("array")))
    ),
    leaf: fc.double(),
  })
);

const GeoJsonFeatureArb = fc.record({
  type: fc.constant("Feature"),
  geometry: fc.oneof(
    fc.record({
      type: fc.constantFrom(
        "Point",
        "LineString",
        "Polygon",
        "MultiPoint",
        "MultiLineString",
        "MultiPolygon"
      ),
      coordinates: fc.oneof(
        // valid-ish
        ArrayOfNumbersOrArrayOfArraysOfNumbersArb,

        // messy
        fc.anything()
      ),
    })
  ),
  properties: fc.object(),
});

const { expression: ExpressionArb } = fc.letrec((tie) => ({
  value: fc.oneof(
    ExpressionStrArb,
    fc.integer(),
    fc.double(),
    tie("expression"),
    GeoJsonFeatureArb,
    fc.anything()
  ),
  values: fc.oneof(
    { depthSize: "small" },
    fc.array(tie("value"), { maxLength: 20 }),
    tie("value").map((v) => [v])
  ),
  expression: fc
    .tuple(ExpressionNameArb, tie("values"))
    .map(([key, values]) => [key, ...values]),
}));

const InjectionArb = fc.oneof(
  // strings
  fc.oneof(
    new FuzzerFedStringArb(),
    // fc.string({ unit: "grapheme-ascii" }),
    // color values at least split strings by "."
    new FuzzerFedStringArb().map((s) => `__proto__.${s}`),
    new FuzzerFedStringArb().map((s) => `{${s}}`),
    new FuzzerFedStringArb().map((s) => `{${s}:${s}}`),
    new FuzzerFedStringArb().map((s) => `${s}:${s}`)
  ),

  DomainStringsArb,
  ExpressionArb,
  GeoJsonFeatureArb,

  fc.oneof(
    // object with an object for a proto
    fc.object().map((fzz) => {
      const o = Object.create(null);
      Object.defineProperty(o, "__proto__", {
        value: fzz,
        configurable: true,
        enumerable: true,
        writable: true,
      });
      return o;
    }),

    // object with anything for a proto with extra fields
    fc
      .tuple(fc.anything({ withObjectString: true }), fc.object())
      .map(([proto, otherObj]) => {
        const o = Object.create(null);
        Object.assign(o, otherObj);
        Object.defineProperty(o, "__proto__", {
          value: proto,
          configurable: true,
          enumerable: true,
          writable: true,
        });
        return o;
      })
  ),

  fc.anything({
    stringUnit: fc.oneof(
      ExpressionStrArb,
      fc.oneof(
        new FuzzerFedStringArb().map((s) => `__proto__.${s}`),
        new FuzzerFedStringArb().map((s) => `{${s}}`),
        new FuzzerFedStringArb().map((s) => `{${s}:${s}}`),
        new FuzzerFedStringArb().map((s) => `${s}:${s}`)
      )
    ),
  }),

  fc.anything()
);

const LayerArb = fc.constantFrom(...originalStyle.layers);

class LibFuzzRandom {
  MAX_INT = 0x80000000 | 0;
  MIN_INT = 0x7fffffff | 0;

  /**
   * @type {FuzzedDataProvider}
   */
  fdp = null;

  constructor(data) {
    this.fdp = new FuzzedDataProvider(data);
  }

  /**
   * Clone the random number generator
   */
  clone() {
    return new LibFuzzRandom(this.internalRng);
  }

  next(bits) {
    return this.fdp.consumeIntegralInRange(0, (1 << bits) - 1);
    // return unsafeUniformIntDistribution(0, (1 << bits) - 1, this.internalRng);
  }

  nextBoolean() {
    return this.fdp.consumeBoolean();
    // return unsafeUniformIntDistribution(0, 1, this.internalRng) == 1;
  }

  nextInt(min, max) {
    min = min == null ? this.MIN_INT : min;
    max = max == null ? this.MAX_INT : max;

    const rangeSize = max - min;

    if (rangeSize <= this.MIN_INT) {
      return this.fdp.consumeIntegralInRange(min, max);
    }
    // hack, will overflow, whatever
    return Number(this.fdp.consumeBigIntegralInRange(BigInt(min), BigInt(max)));
  }

  nextBigInt(min, max) {
    return this.fdp.consumeBigIntegralInRange(min, max);
  }

  nextDouble() {
    return this.fdp.consumeProbabilityDouble();
  }

  nextUtf8String(maxLen) {
    return this.fdp.consumeString(maxLen);
  }

  getState() {
    return undefined;
  }
}

const generateStylePayloadFromBuffer = (data) => {
  const rng = new LibFuzzRandom(data);

  const layer = LayerArb.generate(rng).value;
  const testStyle = cloneBaseStyleWithLayer(layer);

  for (const key of rootPropertyNames) {
    if (!Object.hasOwn(testStyle, key)) {
      // add a hook point for all of the allowed root fields on the
      // JSON so that the replacement mutator can add stuff to fields
      // that don't exist in the base json
      //
      // undefined is good because it disappears in JSON.stringify()
      testStyle[key] = undefined;
    }
  }

  const maxI = getMaxSeed(testStyle);
  const seed = rng.nextInt(0, maxI - 1);
  const { value: newStyle } = mutateTreeAtNthIndex(
    testStyle,
    seed,
    InjectionArb.generate(rng).value
  );

  // json stringify & parse it to get rid of `undefined` and other non-json-representable objects
  return deepClone(newStyle);
};

const ignored = [
  // // `validateElement is not a function`,
  // `Cannot read properties of null (reading 'type')
  //   at Object.validateSource [as source] (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/validate/validate_source.ts:22:16)`,
  // `Cannot read properties of null (reading 'type')
  //   at validateSource (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/validate/validate_source.ts:22:16)`,

  // `Cannot read properties of null (reading 'id')
  //   at Object.validateLayer [as layer] (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/validate/validate_layer.ts:34:37)`,
  // `Cannot read properties of null (reading 'id')
  //   at validateLayer (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/validate/validate_layer.ts:34:37)`,

  // `Cannot read properties of null (reading 'id')
  //   at Object.validateSprite [as sprite] (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/validate/validate_sprite.ts:28:27)`,
  // `Cannot read properties of null (reading 'id')
  //   at validateSprite (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/validate/validate_sprite.ts:28:25)`,
  // `Cannot read properties of null (reading 'id')
  //   at validateSprite (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/validate/validate_sprite.ts:28:27)`,

  // `Cannot convert object to primitive value
  //   at String (<anonymous>)
  //   at Function.parse (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/expression/definitions/interpolate.ts:95:64)`,

  // `Cannot read properties of null (reading 'case-sensitive')
  //   at Function.parse (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/expression/definitions/collator.ts:31:20)`,
  // `Cannot read properties of null (reading 'type')
  //   at Function.parse (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/expression/definitions/within.ts:162:25)`,
  // `Cannot read properties of null (reading 'font-scale')
  //   at Function.parse (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/expression/definitions/format.ts:56:24)`,
  // `Cannot read properties of null (reading 'type')
  //   at Function.parse (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/expression/definitions/distance.ts:551:25)`,
  // `Cannot read properties of null (reading 'locale')
  //   at Function.parse (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/expression/definitions/number_format.ts:60:20)`,
  // `Cannot read properties of undefined (reading 'kind')
  //   at checkSubtype (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/expression/types.ts:112:11)`,

  // `Cannot read properties of undefined (reading 'kind')
  //   at ParsingContext._parse (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/expression/parsing_context.ts:121:184)`,
  // `Cannot read properties of undefined (reading 'kind')
  //   at ParsingContext._parse (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/expression/parsing_context.ts:125:141)`,
  // `Cannot read properties of undefined (reading 'kind')
  //   at ParsingContext._parse (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/expression/parsing_context.ts:140:66)`,

  // ["Expr.parse is not a function", "expression/parsing_context.ts:106:35"],

  // [
  //   "geometry.coordinates.map is not a function",
  //   "at toSimpleGeometry (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/expression/definitions/distance.ts:5",
  // ],
  // [
  //   "Cannot read properties of undefined (reading 'map')",
  //   "at toSimpleGeometry (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/expression/definitions/distance.ts:5",
  // ],
  // [
  //   "Cannot read properties of null (reading 'map')",
  //   "at toSimpleGeometry (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/expression/definitions/distance.ts:5",
  // ],
  // [
  //   "Cannot use 'in' operator to search for 'type' in",
  //   "expression/definitions/distance.ts:555:24",
  // ],
  // [
  //   "Cannot use 'in' operator to search for 'type' in",
  //   "expression/definitions/distance.ts:555:30",
  // ],
];

const isIgnoredError = (e) => {
  const msg = e.stack;
  return ignored.some((s) =>
    typeof s === "string"
      ? msg.includes(s)
      : s.every((sub) => msg.includes(sub))
  );
};

// hint libfuzzer about all of our domain strings
addDictionary(
  ...Object.values(namedValues)
    .flat()
    .map((s) => `"${s}"`)
);

module.exports = {
  LibFuzzRandom,
  InjectionArb,
  LayerArb,
  deepClone,
  cloneBaseStyleWithLayer,
  getMaxSeed,
  iterateDfsKeysAndValuesRecursivelyAndInjectAtSeed: mutateTreeAtNthIndex,
  generateStylePayloadFromBuffer,
  isIgnoredError,
  namedValues,
};
