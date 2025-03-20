# Table of contents

[1. TypeError: Expr.parse is not a function](#1)
[2. TypeError: namedColorsMatch is not iterable](#2)

## 1

### Stack

```
TypeError: Expr.parse is not a function
    at ParsingContext._parse (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/expression/parsing_context.ts:70:21)
    at createExpression (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/expression/index.ts:152:27)
    at createPropertyExpression (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/expression/index.ts:304:24)
    at validateExpression (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/validate/validate_expression.ts:13:111)
    at validate (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/validate/validate.ts:93:16)
    at validateProperty (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/validate/validate_property.ts:54:26)
    at validatePaintProperty (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/validate/validate_paint_property.ts:5:12)
    at * (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/validate/validate_layer.ts:135:36)
    at validateObject (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/validate/validate_object.ts:41:32)
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
          "hasOwnProperty",
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

## 2

### Stack

```
TypeError: namedColorsMatch is not iterable
    at parseCssColor (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/expression/types/parse_css_color.ts:42:27)
    at Function.parse (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/expression/types/color.ts:85:22)
    at Object.validateColor [as color] (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/validate/validate_color.ts:14:16)
    at validate (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/validate/validate.ts:96:42)
    at validateProperty (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/validate/validate_property.ts:54:26)
    at validatePaintProperty (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/validate/validate_paint_property.ts:5:12)
    at * (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/validate/validate_layer.ts:135:36)
    at validateObject (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/validate/validate_object.ts:41:32)
    at paint (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/validate/validate_layer.ts:126:24)
    at validateObject (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/validate/validate_object.ts:41:32)
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
      "id": "water",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "water",
      "filter": [
        "!=",
        [
          "get",
          "brunnel"
        ],
        "tunnel"
      ],
      "paint": {
        "fill-color": "constructor"
      }
    }
  ]
}
```

