# maplibregl-style-fuzzer

Fuzzes maplibregl style spec validator with `fast-check`'s arbitraries and big-list-of-naughty-strings values.

## Motivation

I was looking at MapLibreGL and noticed that many places just suggest using someone else's hosted style JSON via an URL. I was immediately curious as to what is the worst a malicious JSON could do.

After manually looking at the [maplibre-style-spec](https://github.com/maplibre/maplibre-style-spec) repo which contains the validators, I noticed multiple places that access things like `objectWithConstantKeys[attackerControlledValue]` which do funny things if I pass `"__proto__"` or `{valueOf: null}` as a value. I decided to try to fuzz the style validators. I tried to find a quick way to cover a lot of ground without having to handicraft fast-check arbitraries according to maplibre-style-spec, so the fuzzer works like this:

1. Start with a large, existing style which hopefully uses as many style features as possible
2. Recurse the style objects and increment an index for each object key and value (and array value etc.)
3. This recursion gives us a range between 0 and `n` (for our example style, something like 5000) of positions where we can inject something nasty, e.g. in an object key name or a value
4. Generate a random index and a random arbitrary malicious value, replace the value, then try to validate the style
5. Gather every error, deduplicate them by the first couple of stack trace lines
6. Run for as long as you have patience to wait (just leave it for an hour?)
7. ???
8. Profit?

See `src/fuzz.test.ts` for the "fuzzer" and `./findings` for results.

The findings of the current style and iteration of fuzzer are probably exhausted and further findings would require either finding larger styles, or handcrafting more specific examples.

## Example findings

~~~md
# Table of contents

[1. TypeError: validateElement is not a function](#1)
[2. TypeError: Cannot use 'in' operator to search for 'ref' in ](#2)
[3. TypeError: Cannot convert undefined or null to object](#3)
[4. TypeError: Object.prototype.toLocaleString called on null or undefined](#4)
[5. TypeError: namedColorsMatch is not iterable](#5)
[6. TypeError: Expr.parse is not a function](#6)

## 1

### Stack

```
TypeError: validateElement is not a function
    at validateObject (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_object.ts:38:32)
    at Object.validateSource [as source] (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_source.ts:32:22)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:96:42)
    at validateObject (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_object.ts:38:32)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:99:23)
    at validateObject (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_object.ts:38:32)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:99:23)
    at validateStyleMin (node_modules/@maplibre/maplibre-gl-style-spec/src/validate_style.min.ts:35:28)
    at src/fuzz.test.ts:175:11
    at Property.predicate (file://node_modules/fast-check/lib/esm/check/property/Property.js:14:54)
```

### Example

```
{
  "version": 8,
  "metadata": {
    "mapbox:autocomposite": false,
    "maputnik:renderer": "mbgljs",
    "openmaptiles:version": "3.x"
  },
  "sources": {
    "ne2_shaded": {
      "maxzoom": 6,
      "tileSize": 256,
      "tiles": [
        "https://tiles.openfreemap.org/natural_earth/ne2sr/{z}/{x}/{y}.png"
      ],
      "type": "raster",
      "__proto__.": 6
    },
    "openmaptiles": {
      "type": "vector",
      "url": "https://tiles.openfreemap.org/planet"
    }
  },
  "sprite": "https://tiles.openfreemap.org/sprites/ofm_f384/ofm",
  "glyphs": "https://tiles.openfreemap.org/fonts/{fontstack}/{range}.pbf",
  "layers": [
    {
      "id": "background",
      "type": "background",
      "paint": {
        "background-color": "#f8f4f0"
      }
    }
  ]
}
```

## 2

### Stack

```
TypeError: Cannot use 'in' operator to search for 'ref' in 
    at Object.validateLayer [as layer] (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_layer.ts:34:14)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:96:42)
    at Object.validateArray [as array] (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_array.ts:40:32)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:96:42)
    at validateObject (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_object.ts:38:32)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:99:23)
    at validateStyleMin (node_modules/@maplibre/maplibre-gl-style-spec/src/validate_style.min.ts:35:28)
    at src/fuzz.test.ts:175:11
    at Property.predicate (file://node_modules/fast-check/lib/esm/check/property/Property.js:14:54)
    at Property.run (file://node_modules/fast-check/lib/esm/check/property/Property.generic.js:46:33)
```

### Example

```
{
  "version": 8,
  "metadata": {
    "mapbox:autocomposite": false,
    "maputnik:renderer": "mbgljs",
    "openmaptiles:version": "3.x"
  },
  "sources": {
    "ne2_shaded": {
      "maxzoom": 6,
      "tileSize": 256,
      "tiles": [
        "https://tiles.openfreemap.org/natural_earth/ne2sr/{z}/{x}/{y}.png"
      ],
      "type": "raster"
    },
    "openmaptiles": {
      "type": "vector",
      "url": "https://tiles.openfreemap.org/planet"
    }
  },
  "sprite": "https://tiles.openfreemap.org/sprites/ofm_f384/ofm",
  "glyphs": "https://tiles.openfreemap.org/fonts/{fontstack}/{range}.pbf",
  "layers": [
    ""
  ]
}
```
~~~

## Running

Install npm deps.

Modify `src/fuzz.test.ts` to have `test.only()` on only the type of fuzzing you want to run, alter the fastcheck run count to something like 1000, and run `npm run vitest`.

10000 iterations is around one minute.

## License

### My code

Copyright 2025 Joona Heikkilä

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

### Others' code

- `blns.json`: MIT license, Copyright (c) 2015-2020 Max Woolf, https://github.com/minimaxir/big-list-of-naughty-strings
- `src/style.json`: originally the OpenFreeMap Liberty style with small bits and pieces mashed from other things, see license in https://github.com/hyperknot/openfreemap/blob/main/LICENSE.md
