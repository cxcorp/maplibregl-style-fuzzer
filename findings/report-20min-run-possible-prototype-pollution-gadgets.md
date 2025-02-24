# Table of contents

1. [TypeError: validateElement is not a function](#1)
2. [TypeError: Cannot use 'in' operator to search for 'ref' in ](#2)
3. [TypeError: Cannot convert undefined or null to object](#3)
4. [TypeError: Object.prototype.toLocaleString called on null or undefined](#4)
5. [TypeError: namedColorsMatch is not iterable](#5)
6. [TypeError: Expr.parse is not a function](#6)

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

## 3

### Stack

```
TypeError: Cannot convert undefined or null to object
    at valueOf (<anonymous>)
    at validateObject (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_object.ts:38:32)
    at Object.validateSource [as source] (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_source.ts:32:22)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:96:42)
    at validateObject (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_object.ts:38:32)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:99:23)
    at validateObject (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_object.ts:38:32)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:99:23)
    at validateStyleMin (node_modules/@maplibre/maplibre-gl-style-spec/src/validate_style.min.ts:35:28)
    at src/fuzz.test.ts:175:11
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
      "valueOf": 6
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

## 4

### Stack

```
TypeError: Object.prototype.toLocaleString called on null or undefined
    at toLocaleString (<anonymous>)
    at validateObject (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_object.ts:38:32)
    at Object.validateSource [as source] (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_source.ts:32:22)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:96:42)
    at validateObject (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_object.ts:38:32)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:99:23)
    at validateObject (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_object.ts:38:32)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:99:23)
    at validateStyleMin (node_modules/@maplibre/maplibre-gl-style-spec/src/validate_style.min.ts:35:28)
    at src/fuzz.test.ts:175:11
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
      "toLocaleString": 6
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

## 5

### Stack

```
TypeError: namedColorsMatch is not iterable
    at parseCssColor (node_modules/@maplibre/maplibre-gl-style-spec/src/expression/types/parse_css_color.ts:42:27)
    at Function.parse (node_modules/@maplibre/maplibre-gl-style-spec/src/expression/types/color.ts:85:22)
    at Object.validateColor [as color] (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_color.ts:14:16)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:96:42)
    at validateProperty (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_property.ts:54:26)
    at validatePaintProperty (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_paint_property.ts:5:12)
    at * (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_layer.ts:130:36)
    at validateObject (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_object.ts:38:32)
    at paint (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_layer.ts:121:24)
    at validateObject (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_object.ts:38:32)
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
    {
      "id": "background",
      "type": "background",
      "paint": {
        "background-color": "__proto__"
      }
    }
  ]
}
```

## 6

### Stack

```
TypeError: Expr.parse is not a function
    at ParsingContext._parse (node_modules/@maplibre/maplibre-gl-style-spec/src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (node_modules/@maplibre/maplibre-gl-style-spec/src/expression/parsing_context.ts:70:21)
    at createExpression (node_modules/@maplibre/maplibre-gl-style-spec/src/expression/index.ts:152:27)
    at createPropertyExpression (node_modules/@maplibre/maplibre-gl-style-spec/src/expression/index.ts:304:24)
    at validateExpression (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_expression.ts:13:111)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:93:16)
    at validateProperty (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_property.ts:54:26)
    at validatePaintProperty (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_paint_property.ts:5:12)
    at * (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_layer.ts:130:36)
    at validateObject (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_object.ts:38:32)
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
    {
      "id": "natural_earth",
      "type": "raster",
      "source": "ne2_shaded",
      "maxzoom": 7,
      "paint": {
        "raster-opacity": [
          "valueOf",
          [
            "exponential",
            1.5
          ],
          [
            "zoom"
          ],
          0,
          0.6,
          6,
          0.1
        ]
      }
    }
  ]
}
```

