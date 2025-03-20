# Table of contents

1. [TypeError: Cannot use 'in' operator to search for 'ref' in 3](#1)
2. [TypeError: Cannot read properties of null (reading 'type')](#2)
3. [TypeError: Cannot read properties of null (reading 'type')](#3)
4. [TypeError: Cannot read properties of undefined (reading 'id')](#4)
5. [TypeError: Cannot read properties of undefined (reading 'type')](#5)
6. [TypeError: Cannot read properties of null (reading 'id')](#6)
7. [TypeError: Cannot read properties of undefined (reading 'type')](#7)
8. [TypeError: Cannot convert object to primitive value](#8)
9. [TypeError: Expr.parse is not a function](#9)
10. [TypeError: Cannot convert undefined or null to object](#10)
11. [TypeError: validateElement is not a function](#11)
12. [TypeError: Cannot convert object to primitive value](#12)
13. [TypeError: Cannot convert object to primitive value](#13)

## 1

### Stack

```
TypeError: Cannot use 'in' operator to search for 'ref' in 3
    at Object.validateLayer [as layer] (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_layer.ts:34:14)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:96:42)
    at Object.validateArray [as array] (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_array.ts:40:32)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:96:42)
    at validateObject (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_object.ts:38:32)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:99:23)
    at validateStyleMin (node_modules/@maplibre/maplibre-gl-style-spec/src/validate_style.min.ts:35:28)
    at src/fuzz.test.ts:179:11
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
    3
  ]
}
```

## 2

### Stack

```
TypeError: Cannot read properties of null (reading 'type')
    at Object.validateSource [as source] (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_source.ts:22:16)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:96:42)
    at validateObject (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_object.ts:38:32)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:99:23)
    at validateObject (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_object.ts:38:32)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:99:23)
    at validateStyleMin (node_modules/@maplibre/maplibre-gl-style-spec/src/validate_style.min.ts:35:28)
    at src/fuzz.test.ts:179:11
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
    ";0/JjzsA>": null,
    "": ").R_X+",
    "H6t&;x!": "&'=",
    "j+je": false
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

## 3

### Stack

```
TypeError: Cannot read properties of null (reading 'type')
    at Object.validateLayer [as layer] (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_layer.ts:18:16)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:96:42)
    at Object.validateArray [as array] (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_array.ts:40:32)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:96:42)
    at validateObject (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_object.ts:38:32)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:99:23)
    at validateStyleMin (node_modules/@maplibre/maplibre-gl-style-spec/src/validate_style.min.ts:35:28)
    at src/fuzz.test.ts:179:11
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
    null
  ]
}
```

## 4

### Stack

```
TypeError: Cannot read properties of undefined (reading 'id')
    at Object.validateSprite [as sprite] (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_sprite.ts:28:27)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:96:42)
    at validateObject (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_object.ts:38:32)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:99:23)
    at validateStyleMin (node_modules/@maplibre/maplibre-gl-style-spec/src/validate_style.min.ts:35:28)
    at src/fuzz.test.ts:179:11
    at Property.predicate (file://node_modules/fast-check/lib/esm/check/property/Property.js:14:54)
    at Property.run (file://node_modules/fast-check/lib/esm/check/property/Property.generic.js:46:33)
    at runIt (file://node_modules/fast-check/lib/esm/check/runner/Runner.js:18:30)
    at check (file://node_modules/fast-check/lib/esm/check/runner/Runner.js:62:11)
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
  "sprite": [
    false,
    null
  ],
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
TypeError: Cannot read properties of undefined (reading 'type')
    at Object.validateSource [as source] (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_source.ts:22:16)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:96:42)
    at validateObject (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_object.ts:38:32)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:99:23)
    at validateObject (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_object.ts:38:32)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:99:23)
    at validateStyleMin (node_modules/@maplibre/maplibre-gl-style-spec/src/validate_style.min.ts:35:28)
    at src/fuzz.test.ts:179:11
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

## 6

### Stack

```
TypeError: Cannot read properties of null (reading 'id')
    at Object.validateSprite [as sprite] (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_sprite.ts:28:27)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:96:42)
    at validateObject (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_object.ts:38:32)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:99:23)
    at validateStyleMin (node_modules/@maplibre/maplibre-gl-style-spec/src/validate_style.min.ts:35:28)
    at src/fuzz.test.ts:179:11
    at Property.predicate (file://node_modules/fast-check/lib/esm/check/property/Property.js:14:54)
    at Property.run (file://node_modules/fast-check/lib/esm/check/property/Property.generic.js:46:33)
    at runIt (file://node_modules/fast-check/lib/esm/check/runner/Runner.js:18:30)
    at check (file://node_modules/fast-check/lib/esm/check/runner/Runner.js:62:11)
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
  "sprite": [
    6355950528823089,
    -1252839744999334,
    null,
    true,
    true
  ],
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

## 7

### Stack

```
TypeError: Cannot read properties of undefined (reading 'type')
    at Object.validateLayer [as layer] (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_layer.ts:18:16)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:96:42)
    at Object.validateArray [as array] (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_array.ts:40:32)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:96:42)
    at validateObject (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_object.ts:38:32)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:99:23)
    at validateStyleMin (node_modules/@maplibre/maplibre-gl-style-spec/src/validate_style.min.ts:35:28)
    at src/fuzz.test.ts:179:11
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
    null
  ]
}
```

## 8

### Stack

```
TypeError: Cannot convert object to primitive value
    at Object.validateLayer [as layer] (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_layer.ts:58:58)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:96:42)
    at Object.validateArray [as array] (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_array.ts:40:32)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:96:42)
    at validateObject (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_object.ts:38:32)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:99:23)
    at validateStyleMin (node_modules/@maplibre/maplibre-gl-style-spec/src/validate_style.min.ts:35:28)
    at src/fuzz.test.ts:179:11
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
    {
      "id": "natural_earth",
      "type": "raster",
      "source": {
        "2": {
          "y(]~DW": -5.159048894702752e+67,
          "": 6158530768050753,
          "\"zn": -1175630623398436,
          "TD)>gQ]Z[Q": true,
          " Nb9NBO=@g": 1.2377980411539574e+204,
          "Qiu<": "I\"<0",
          "DKwfr(;IQ": 2.078386164124177e-229,
          "1<fHC5": "},]"
        },
        "": -19,
        "s44q": "p)ce)>}Q",
        "Kc>v02$h": -1349849886132623,
        "n": 6409353639426613,
        "N6x ;85P": -1.6240953185617492e+157,
        "eV": -1.797693134862308e+308,
        "IV^\"Q86`": 4.1041691862847763e+214
      },
      "maxzoom": 7,
      "paint": {
        "raster-opacity": [
          "interpolate",
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

## 9

### Stack

```
TypeError: Expr.parse is not a function
    at ParsingContext._parse (node_modules/@maplibre/maplibre-gl-style-spec/src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (node_modules/@maplibre/maplibre-gl-style-spec/src/expression/parsing_context.ts:70:21)
    at createExpression (node_modules/@maplibre/maplibre-gl-style-spec/src/expression/index.ts:152:27)
    at validateExpression (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_expression.ts:13:111)
    at validateFilter (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_filter.ts:12:16)
    at validateObject (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_object.ts:38:32)
    at Object.validateLayer [as layer] (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_layer.ts:79:28)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:96:42)
    at Object.validateArray [as array] (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_array.ts:40:32)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:96:42)
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
        "toString",
        [
          "get",
          "brunnel"
        ],
        "tunnel"
      ],
      "paint": {
        "fill-color": "rgb(158,189,255)"
      }
    }
  ]
}
```

## 10

### Stack

```
TypeError: Cannot convert undefined or null to object
    at valueOf (<anonymous>)
    at validateObject (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_object.ts:38:32)
    at Object.validateLayer [as layer] (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_layer.ts:79:28)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:96:42)
    at Object.validateArray [as array] (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_array.ts:40:32)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:96:42)
    at validateObject (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_object.ts:38:32)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:99:23)
    at validateStyleMin (node_modules/@maplibre/maplibre-gl-style-spec/src/validate_style.min.ts:35:28)
    at src/fuzz.test.ts:179:11
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
      "valueOf": [
        -1803934412008446,
        ",f.Y|VH90"
      ],
      "1d?F": "G0",
      "\\M4\\]": 2.3811771128348645e-46,
      "ga(": -2.0694517823458063e-127
    }
  ]
}
```

## 11

### Stack

```
TypeError: validateElement is not a function
    at validateObject (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_object.ts:38:32)
    at Object.validateLayer [as layer] (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_layer.ts:79:28)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:96:42)
    at Object.validateArray [as array] (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_array.ts:40:32)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:96:42)
    at validateObject (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_object.ts:38:32)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:99:23)
    at validateStyleMin (node_modules/@maplibre/maplibre-gl-style-spec/src/validate_style.min.ts:35:28)
    at src/fuzz.test.ts:179:11
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
      "R3h2,q0": false,
      "}PHUoShL": -479237.9052014041,
      "": null,
      "__proto__": false,
      ",ay.7": "\"lL1xbd\"",
      "h": [
        "f5@_1[NMWF",
        2.0310805353354712e+116,
        7519859210592533,
        "6*{2",
        true,
        false
      ]
    }
  ]
}
```

## 12

### Stack

```
TypeError: Cannot convert object to primitive value
    at validateProperty (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_property.ts:15:60)
    at validateLayoutProperty (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_layout_property.ts:5:12)
    at * (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_layer.ts:115:36)
    at validateObject (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_object.ts:38:32)
    at layout (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_layer.ts:106:24)
    at validateObject (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_object.ts:38:32)
    at Object.validateLayer [as layer] (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_layer.ts:79:28)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:96:42)
    at Object.validateArray [as array] (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_array.ts:40:32)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:96:42)
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
      "id": "bridge_secondary_tertiary",
      "type": {
        "toString": true,
        "D0*s5": "{\"':2P@[\":-1299652018840212,\"o65E\":[]}",
        "X Ia": [
          -3580324866330332,
          null,
          239189569652901,
          -4.938101144636833e+54,
          "EF=>-tn!a"
        ]
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "bridge"
        ],
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "secondary",
            "tertiary"
          ],
          true,
          false
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fea",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          6.5,
          0,
          7,
          0.5,
          20,
          10
        ]
      }
    }
  ]
}
```

## 13

### Stack

```
TypeError: Cannot convert object to primitive value
    at String (<anonymous>)
    at Function.parse (node_modules/@maplibre/maplibre-gl-style-spec/src/expression/definitions/interpolate.ts:95:64)
    at ParsingContext._parse (node_modules/@maplibre/maplibre-gl-style-spec/src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (node_modules/@maplibre/maplibre-gl-style-spec/src/expression/parsing_context.ts:70:21)
    at createExpression (node_modules/@maplibre/maplibre-gl-style-spec/src/expression/index.ts:152:27)
    at createPropertyExpression (node_modules/@maplibre/maplibre-gl-style-spec/src/expression/index.ts:304:24)
    at validateExpression (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_expression.ts:13:111)
    at validate (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate.ts:93:16)
    at validateProperty (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_property.ts:54:26)
    at validatePaintProperty (node_modules/@maplibre/maplibre-gl-style-spec/src/validate/validate_paint_property.ts:5:12)
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
      "id": "bridge_trunk_primary",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "brunnel"
          ],
          "bridge"
        ],
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "primary",
            "trunk"
          ],
          true,
          false
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fea",
        "line-width": [
          "interpolate",
          [
            {
              "5": -7211281757470677,
              "null": 8884936647260137,
              "toString": "null",
              "O ": false,
              "5~OH": "true"
            },
            1.2
          ],
          [
            "zoom"
          ],
          5,
          0,
          7,
          1,
          20,
          18
        ]
      }
    }
  ]
}
```
