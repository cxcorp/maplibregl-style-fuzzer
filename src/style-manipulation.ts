import { StyleSpecification } from "@maplibre/maplibre-gl-style-spec";

export const iterateDfsKeysAndValuesRecursivelyAndInjectAtSeed = (
  obj: StyleSpecification,
  targetI: number,
  replacement: any
) => {
  let i = 0;

  const recurseInternal = (obj: unknown) => {
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
        // i++;
        // if (targetI === i) {
        //   obj[replacement] = recurseInternal(obj[key]);
        // }
        i++;
        delete obj[key];
        Object.defineProperty(obj, key, {
          value: targetI === i ? replacement : recurseInternal(obj[key]),
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

export const cloneDfsTreeUntil = (obj: StyleSpecification, targetI: number) => {
  let i = 0;

  const recurseInternal = (obj: unknown) => {
    if (typeof obj !== "object" || obj === null) {
      // primitive or value (or function but fns not supported in json)
      return [false, obj];
    }

    if (Array.isArray(obj)) {
      for (let j = 0; j < obj.length; j++) {
        i++;
        if (i === targetI) {
          const clone = [...obj];
          return [true, clone];
        } else {
          const [shouldStop, retValue] = recurseInternal(obj[j]) ?? [
            false,
            undefined,
          ];

          obj[j] = retValue;

          if (shouldStop) {
            const clone = [...obj];
            return [true, clone];
          }
        }
      }

      return [false, obj];
    }

    for (const key of Object.keys(obj)) {
      // i++;
      // if (i === targetI) {
      //   return [true, obj];
      // }
      i++;
      if (i === targetI) {
        return [true, obj];
      } else {
        const [shouldStop, retValue] = recurseInternal(obj[key]) ?? [
          false,
          undefined,
        ];

        Object.defineProperty(obj, key, {
          value: retValue,
          configurable: true,
          enumerable: true,
          writable: true,
        });

        if (shouldStop) {
          return [true, obj];
        }
      }
    }

    return [false, obj];
  };

  const [, value] = recurseInternal({ ...obj }) ?? [undefined, undefined];
  return value;
};
