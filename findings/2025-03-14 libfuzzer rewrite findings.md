- [Validation crashes](#validation-crashes)
   * [Cannot read properties of null (reading 'type') at validateSource (src/validate/validate_source.ts:22:16)](#cannot-read-properties-of-null-reading-type-at-validatesource-srcvalidatevalidate_sourcets2216)
   * [Cannot read properties of null (reading 'id') at validateSprite (src/validate/validate_sprite.ts:28:25)](#cannot-read-properties-of-null-reading-id-at-validatesprite-srcvalidatevalidate_spritets2825)
   * [Cannot convert object to primitive value at String (<anonymous>) at Function.parse (src/expression/definitions/interpolate.ts:95:64)](#cannot-convert-object-to-primitive-value-at-string-at-functionparse-srcexpressiondefinitionsinterpolatets9564)
   * [Cannot read properties of null (reading 'type') at Object.validateSource [as source] (src/validate/validate_source.ts:22:16)](#cannot-read-properties-of-null-reading-type-at-objectvalidatesource-as-source-srcvalidatevalidate_sourcets2216)
   * [Cannot read properties of null (reading 'id') at Object.validateSprite [as sprite] (src/validate/validate_sprite.ts:28:27)](#cannot-read-properties-of-null-reading-id-at-objectvalidatesprite-as-sprite-srcvalidatevalidate_spritets2827)
- [Expression related crashes](#expression-related-crashes)
   * [Cannot use 'in' operator to search for 'type' in 4.4186729016984846e+276 at Function.parse (src/expression/definitions/distance.ts:555:30)](#cannot-use-in-operator-to-search-for-type-in-44186729016984846e276-at-functionparse-srcexpressiondefinitionsdistancets55530)
   * [Expr.parse is not a function at ParsingContext._parse (src/expression/parsing_context.ts:106:35)](#exprparse-is-not-a-function-at-parsingcontext_parse-srcexpressionparsing_contextts10635)
   * [Cannot read properties of null (reading 'case-sensitive') at Function.parse (src/expression/definitions/collator.ts:31:20)](#cannot-read-properties-of-null-reading-case-sensitive-at-functionparse-srcexpressiondefinitionscollatorts3120)
   * [Cannot read properties of null (reading 'type') at Function.parse (src/expression/definitions/within.ts:162:25)](#cannot-read-properties-of-null-reading-type-at-functionparse-srcexpressiondefinitionswithints16225)
   * [Cannot read properties of null (reading 'font-scale') at Function.parse (src/expression/definitions/format.ts:56:24)](#cannot-read-properties-of-null-reading-font-scale-at-functionparse-srcexpressiondefinitionsformatts5624)
   * [Cannot read properties of null (reading 'type') at Function.parse (src/expression/definitions/distance.ts:551:25)](#cannot-read-properties-of-null-reading-type-at-functionparse-srcexpressiondefinitionsdistancets55125)
   * [Cannot read properties of null (reading 'locale') at Function.parse (src/expression/definitions/number_format.ts:60:20)](#cannot-read-properties-of-null-reading-locale-at-functionparse-srcexpressiondefinitionsnumber_formatts6020)
   * [Cannot read properties of undefined (reading 'kind') at checkSubtype (src/expression/types.ts:112:11)](#cannot-read-properties-of-undefined-reading-kind-at-checksubtype-srcexpressiontypests11211)
   * [Cannot read properties of undefined (reading 'kind') at ParsingContext.\_parse (src/expression/parsing_context.ts:121:184)](#cannot-read-properties-of-undefined-reading-kind-at-parsingcontext_parse-srcexpressionparsing_contextts121184)
   * [Various crashes due to `["var", "__proto__"]`: Cannot read properties of undefined (reading 'kind') at ParsingContext.\_parse (src/expression/parsing_context.ts:125:141)](#various-crashes-due-to-var-proto-cannot-read-properties-of-undefined-reading-kind-at-parsingcontext_parse-srcexpressionparsing_contextts125141)
   * [Various crashes if id is non-string: Cannot read properties of null (reading 'id') at Object.validateLayer [as layer] (src/validate/validate_layer.ts:34:37)](#various-crashes-if-id-is-non-string-cannot-read-properties-of-null-reading-id-at-objectvalidatelayer-as-layer-srcvalidatevalidate_layerts3437)
- [GeoJSON crashes](#geojson-crashes)
   * [Malformed `coordinates`: geometry.coordinates.map is not a function at toSimpleGeometry (src/expression/definitions/distance.ts:525:37)](#malformed-coordinates-geometrycoordinatesmap-is-not-a-function-at-tosimplegeometry-srcexpressiondefinitionsdistancets52537)

## Validation crashes

<details>

<summary>Validation crashes</summary>

### Cannot read properties of null (reading 'type') at validateSource (src/validate/validate_source.ts:22:16)

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
    "openmaptiles": null
  },
  "sprite": "https://tiles.openfreemap.org/sprites/ofm_f384/ofm",
  "glyphs": "https://tiles.openfreemap.org/fonts/{fontstack}/{range}.pbf",
  "layers": [
    {
      "id": "park_outline",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "park",
      "paint": {
        "line-color": "rgba(228, 241, 215, 1)",
        "line-dasharray": [
          1,
          1.5
        ]
      }
    }
  ]
}
==12404== Uncaught Exception: TypeError: Cannot read properties of null (reading 'type')
    at validateSource (src/validate/validate_source.ts:22:16)
    at validateElement (src/validate/validate.ts:96:41)
    at validateObject (src/validate/validate_object.ts:40:32)
    at validateElement (src/validate/validate.ts:99:23)
    at validateObject (src/validate/validate_object.ts:40:32)
    at validate (src/validate/validate.ts:99:23)
    at validateStyleMin (src/validate_style.min.ts:35:28)
    at module.exports.fuzz (fuzzer/fuzz.js:14:5)
MS: 0 ; base unit: 0000000000000000000000000000000000000000
0x11,0x3,0x76,0x61,0x72,
\021\003var
artifact_prefix='./'; Test unit written to ./crash-00d300caa06d6386536d4704fbbb2fcd0596a017
Base64: EQN2YXI=
Done 436 runs in 0 second(s)
```


### Cannot read properties of null (reading 'id') at validateSprite (src/validate/validate_sprite.ts:28:25)

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
    null,
    false,
    false,
    false,
    false,
    false,
    false
  ],
  "glyphs": "https://tiles.openfreemap.org/fonts/{fontstack}/{range}.pbf",
  "layers": [
    {
      "id": "tunnel_transit_rail",
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
          "tunnel"
        ],
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "transit"
          ],
          true,
          false
        ]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.4
          ],
          [
            "zoom"
          ],
          14,
          0.4,
          15,
          0.75,
          20,
          2
        ]
      }
    }
  ]
}
==12950== Uncaught Exception: TypeError: Cannot read properties of null (reading 'id')
    at validateSprite (src/validate/validate_sprite.ts:28:25)
    at validateElement (src/validate/validate.ts:96:41)
    at validateObject (src/validate/validate_object.ts:40:32)
    at validate (src/validate/validate.ts:99:23)
    at validateStyleMin (src/validate_style.min.ts:35:28)
    at module.exports.fuzz (fuzzer/fuzz.js:14:5)
MS: 0 ; base unit: 0000000000000000000000000000000000000000
0x3d,0x8b,0x8d,0x96,0x91,0x98,0x7e,0x27,
=\213\215\226\221\230~'
artifact_prefix='./'; Test unit written to ./crash-1e6e9bcd15efff4b52a06ed2178aa27a480e8c56
Base64: PYuNlpGYfic=
Done 1578 runs in 1 second(s)
```


### Cannot convert object to primitive value at String (<anonymous>) at Function.parse (src/expression/definitions/interpolate.ts:95:64)

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
      "id": "tunnel_minor",
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
          "tunnel"
        ],
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "minor"
          ],
          true,
          false
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fff",
        "line-width": [
          "interpolate",
          [
            {
              "__proto__": {}
            },
            1.2
          ],
          [
            "zoom"
          ],
          13.5,
          0,
          14,
          2.5,
          20,
          11.5
        ]
      }
    }
  ]
}
==13239== Uncaught Exception: TypeError: Cannot convert object to primitive value
    at String (<anonymous>)
    at Function.parse (src/expression/definitions/interpolate.ts:95:64)
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:70:21)
    at createExpression (src/expression/index.ts:152:27)
    at createPropertyExpression (src/expression/index.ts:304:24)
    at validateExpression (src/validate/validate_expression.ts:13:111)
    at validateSpec (src/validate/validate.ts:93:16)
    at validateProperty (src/validate/validate_property.ts:58:26)
    at validatePaintProperty (src/validate/validate_paint_property.ts:5:12)
    at validateElement (src/validate/validate_layer.ts:138:36)
    at validateObject (src/validate/validate_object.ts:40:32)
    at validateElement (src/validate/validate_layer.ts:129:24)
    at validateObject (src/validate/validate_object.ts:40:32)
    at Object.validateLayer [as layer] (src/validate/validate_layer.ts:87:28)
    at validateArrayElement (src/validate/validate.ts:96:42)
    at Object.validateArray [as array] (src/validate/validate_array.ts:40:32)
    at validateElement (src/validate/validate.ts:96:42)
    at validateObject (src/validate/validate_object.ts:40:32)
    at validate (src/validate/validate.ts:99:23)
    at validateStyleMin (src/validate_style.min.ts:35:28)
    at module.exports.fuzz (fuzzer/fuzz.js:14:5)
MS: 0 ; base unit: 0000000000000000000000000000000000000000
0xff,0xa2,0xff,
\377\242\377
artifact_prefix='./'; Test unit written to ./crash-d64e91e4308e4e3b34587cc66557bebdd130c464
Base64: /6L/
Done 184 runs in 0 second(s)
```

### Cannot read properties of null (reading 'type') at Object.validateSource [as source] (src/validate/validate_source.ts:22:16)

```
{
  "version": 8,
  "metadata": {
    "mapbox:autocomposite": false,
    "maputnik:renderer": "mbgljs",
    "openmaptiles:version": "3.x"
  },
  "sources": {
    "": false,
    "__proto__": null
  },
  "sprite": "https://tiles.openfreemap.org/sprites/ofm_f384/ofm",
  "glyphs": "https://tiles.openfreemap.org/fonts/{fontstack}/{range}.pbf",
  "layers": [
    {
      "id": "label_village",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 9,
      "filter": [
        "==",
        [
          "get",
          "class"
        ],
        "village"
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-image": [
          "step",
          [
            "zoom"
          ],
          "circle_11_black",
          10,
          ""
        ],
        "icon-optional": false,
        "icon-size": 0.2,
        "text-anchor": "bottom",
        "text-field": [
          "case",
          [
            "has",
            "name:nonlatin"
          ],
          [
            "concat",
            [
              "get",
              "name:latin"
            ],
            "\n",
            [
              "get",
              "name:nonlatin"
            ]
          ],
          [
            "coalesce",
            [
              "get",
              "name_en"
            ],
            [
              "get",
              "name"
            ]
          ]
        ],
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-max-width": 8,
        "text-size": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          7,
          10,
          11,
          12
        ]
      },
      "paint": {
        "text-color": "#000",
        "text-halo-blur": 1,
        "text-halo-color": "#fff",
        "text-halo-width": 1
      }
    }
  ]
}
==14807== Uncaught Exception: TypeError: Cannot read properties of null (reading 'type')
    at Object.validateSource [as source] (src/validate/validate_source.ts:22:16)
    at validateElement (src/validate/validate.ts:96:42)
    at validateObject (src/validate/validate_object.ts:40:32)
    at validateElement (src/validate/validate.ts:99:23)
    at validateObject (src/validate/validate_object.ts:40:32)
    at validate (src/validate/validate.ts:99:23)
    at validateStyleMin (src/validate_style.min.ts:35:28)
    at module.exports.fuzz (fuzzer/fuzz.js:14:5)
MS: 0 ; base unit: 0000000000000000000000000000000000000000
0x2c,0x6f,0x6d,0x72,0x0,0x4,0xff,0x67,
,omr\000\004\377g
artifact_prefix='./'; Test unit written to ./crash-90619f0263e665433f9e03a3d087eb3086e675c9
Base64: LG9tcgAE/2c=
Done 683 runs in 0 second(s)
```

### Cannot read properties of null (reading 'id') at Object.validateSprite [as sprite] (src/validate/validate_sprite.ts:28:27)

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
    null,
    false,
    false,
    false,
    false,
    false,
    false
  ],
  "glyphs": "https://tiles.openfreemap.org/fonts/{fontstack}/{range}.pbf",
  "layers": [
    {
      "id": "tunnel_transit_rail",
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
          "tunnel"
        ],
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "transit"
          ],
          true,
          false
        ]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.4
          ],
          [
            "zoom"
          ],
          14,
          0.4,
          15,
          0.75,
          20,
          2
        ]
      }
    }
  ]
}
==14442== Uncaught Exception: TypeError: Cannot read properties of null (reading 'id')
    at Object.validateSprite [as sprite] (src/validate/validate_sprite.ts:28:27)
    at validateElement (src/validate/validate.ts:96:42)
    at validateObject (src/validate/validate_object.ts:40:32)
    at validate (src/validate/validate.ts:99:23)
    at validateStyleMin (src/validate_style.min.ts:35:28)
    at module.exports.fuzz (fuzzer/fuzz.js:14:5)
MS: 0 ; base unit: 0000000000000000000000000000000000000000
0x3d,0x8b,0x8d,0x96,0x91,0x98,0x7e,0x27,
=\213\215\226\221\230~'
artifact_prefix='./'; Test unit written to ./crash-1e6e9bcd15efff4b52a06ed2178aa27a480e8c56
Base64: PYuNlpGYfic=
Done 674 runs in 0 second(s)
```

</details>

## Expression related crashes

<details>

<summary>Expression related crashes</summary>


### Cannot use 'in' operator to search for 'type' in 4.4186729016984846e+276 at Function.parse (src/expression/definitions/distance.ts:555:30)

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
      "id": "aeroway_runway",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "aeroway",
      "minzoom": 11,
      "filter": [
        "all",
        [
          "match",
          [
            "geometry-type"
          ],
          [
            "LineString",
            "MultiLineString"
          ],
          true,
          false
        ],
        [
          "==",
          [
            "get",
            "class"
          ],
          "runway"
        ]
      ],
      "paint": {
        "line-color": "#f0ede9",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "distance",
            4.4186729016984846e+276
          ],
          11,
          3,
          20,
          16
        ]
      }
    }
  ]
}
==9494== Uncaught Exception: TypeError: Cannot use 'in' operator to search for 'type' in 4.4186729016984846e+276
    at Function.parse (src/expression/definitions/distance.ts:555:30)
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:68:63)
    at Function.parse (src/expression/definitions/interpolate.ts:106:25)
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:70:21)
    at createExpression (src/expression/index.ts:152:27)
    at createPropertyExpression (src/expression/index.ts:304:24)
    at validateExpression (src/validate/validate_expression.ts:13:111)
    at validateSpec (src/validate/validate.ts:93:16)
    at validateProperty (src/validate/validate_property.ts:58:26)
    at validatePaintProperty (src/validate/validate_paint_property.ts:5:12)
    at validateElement (src/validate/validate_layer.ts:138:36)
    at validateObject (src/validate/validate_object.ts:40:32)
    at validateElement (src/validate/validate_layer.ts:129:24)
    at validateObject (src/validate/validate_object.ts:40:32)
    at Object.validateLayer [as layer] (src/validate/validate_layer.ts:87:28)
    at validateArrayElement (src/validate/validate.ts:96:42)
    at Object.validateArray [as array] (src/validate/validate_array.ts:40:32)
    at validateElement (src/validate/validate.ts:96:42)
    at validateObject (src/validate/validate_object.ts:40:32)
    at validate (src/validate/validate.ts:99:23)
    at validateStyleMin (src/validate_style.min.ts:35:28)
    at module.exports.fuzz (fuzzer/fuzz.js:14:5)
MS: 2 CMP-CrossOver- DE: "../../jaz_zer"-; base unit: df93f17a0c3b5837c7ede810b91d6d2e5871da95
0x2e,0x2e,0x2f,0x2e,0x2e,0x2f,0x6a,0x61,0x7a,0x5f,0x7a,0x65,0x72,0xe8,0xe8,0xe8,0xa3,0xbe,0x83,0x83,0xff,0x7d,0x28,0x41,0x0,0xe8,0x4f,0xf9,0x2,0xe8,0xe8,0xe8,0xf7,0xd3,0x83,
../../jaz_zer\350\350\350\243\276\203\203\377}(A\000\350O\371\002\350\350\350\367\323\203
artifact_prefix='./'; Test unit written to ./crash-bd81e60c4758b7a63bf9b772a6037c621eadac1d
Base64: Li4vLi4vamF6X3plcujo6KO+g4P/fShBAOhP+QLo6Oj304M=
Done 17071 runs in 5 second(s)
```

### Expr.parse is not a function at ParsingContext._parse (src/expression/parsing_context.ts:106:35)

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
      "id": "bridge_transit_rail_hatching",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "class"
          ],
          "transit"
        ],
        [
          "__proto__",
          [
            "get",
            "brunnel"
          ],
          "bridge"
        ]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-dasharray": [
          0.2,
          8
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.4
          ],
          [
            "zoom"
          ],
          14.5,
          0,
          15,
          3,
          20,
          8
        ]
      }
    }
  ]
}
==11195== Uncaught Exception: TypeError: Expr.parse is not a function
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:68:63)
    at Function.parse (src/expression/compound_expression.ts:108:49)
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:70:21)
    at createExpression (src/expression/index.ts:152:27)
    at validateExpression (src/validate/validate_expression.ts:13:111)
    at validateElement (src/validate/validate_filter.ts:12:16)
    at validateObject (src/validate/validate_object.ts:40:32)
    at Object.validateLayer [as layer] (src/validate/validate_layer.ts:87:28)
    at validateArrayElement (src/validate/validate.ts:96:42)
    at Object.validateArray [as array] (src/validate/validate_array.ts:40:32)
    at validateElement (src/validate/validate.ts:96:42)
    at validateObject (src/validate/validate_object.ts:40:32)
    at validate (src/validate/validate.ts:99:23)
    at validateStyleMin (src/validate_style.min.ts:35:28)
    at module.exports.fuzz (fuzzer/fuzz.js:14:5)
MS: 1 ChangeByte-; base unit: f6e32b4aa120bac67aa6e7e001b97c1007d9cf03
0x62,0x60,0x64,0x2b,0x72,0x5,0x21,0x52,
b`d+r\005!R
artifact_prefix='./'; Test unit written to ./crash-5726aa50e37aa4caed03f47c5491c9f5688d345a
Base64: YmBkK3IFIVI=
Done 227825 runs in 65 second(s)
```

### Cannot read properties of null (reading 'case-sensitive') at Function.parse (src/expression/definitions/collator.ts:31:20)

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
      "id": "waterway_river",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "waterway",
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "class"
          ],
          [
            "collator",
            null
          ]
        ],
        [
          "!=",
          [
            "get",
            "brunnel"
          ],
          "tunnel"
        ]
      ],
      "layout": {
        "line-cap": "round"
      },
      "paint": {
        "line-color": "#a0c8f0",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          11,
          0.5,
          20,
          6
        ]
      }
    }
  ]
}
==15245== Uncaught Exception: TypeError: Cannot read properties of null (reading 'case-sensitive')
    at Function.parse (src/expression/definitions/collator.ts:31:20)
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:68:63)
    at Function.parse (src/expression/definitions/comparison.ts:89:31)
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:68:63)
    at Function.parse (src/expression/compound_expression.ts:108:49)
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:70:21)
    at createExpression (src/expression/index.ts:152:27)
    at validateExpression (src/validate/validate_expression.ts:13:111)
    at validateElement (src/validate/validate_filter.ts:12:16)
    at validateObject (src/validate/validate_object.ts:40:32)
    at Object.validateLayer [as layer] (src/validate/validate_layer.ts:87:28)
    at validateArrayElement (src/validate/validate.ts:96:42)
    at Object.validateArray [as array] (src/validate/validate_array.ts:40:32)
    at validateElement (src/validate/validate.ts:96:42)
    at validateObject (src/validate/validate_object.ts:40:32)
    at validate (src/validate/validate.ts:99:23)
    at validateStyleMin (src/validate_style.min.ts:35:28)
    at module.exports.fuzz (fuzzer/fuzz.js:14:5)
MS: 3 ShuffleBytes-CMP-InsertRepeatedBytes- DE: "\377\377\377\377"-; base unit: 3d7d602cbcd510223fb564e06530c0e2217d4298
0xff,0x5f,0xff,0xff,0xff,0xff,0x3e,0x2e,0x7a,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x43,0x2c,0xf9,0x5f,0xf5,0x5c,0x10,0x87,0xed,
\377_\377\377\377\377>.zCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC,\371_\365\\\020\207\355
artifact_prefix='./'; Test unit written to ./crash-6c3229f1ccac93b54fa8f07da2b942de63b65b97
Base64: /1//////Pi56Q0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQyz5X/VcEIft
Done 79584 runs in 24 second(s)
```

### Cannot read properties of null (reading 'type') at Function.parse (src/expression/definitions/within.ts:162:25)

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
      "id": "landuse_track",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "landuse",
      "filter": [
        "==",
        [
          "within",
          null
        ],
        "track"
      ],
      "paint": {
        "fill-color": "#DEE3CD"
      }
    }
  ]
}
==19916== Uncaught Exception: TypeError: Cannot read properties of null (reading 'type')
    at Function.parse (src/expression/definitions/within.ts:162:25)
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:68:63)
    at Function.parse (src/expression/definitions/comparison.ts:84:31)
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:70:21)
    at createExpression (src/expression/index.ts:152:27)
    at validateExpression (src/validate/validate_expression.ts:13:111)
    at validateElement (src/validate/validate_filter.ts:12:16)
    at validateObject (src/validate/validate_object.ts:40:32)
    at Object.validateLayer [as layer] (src/validate/validate_layer.ts:87:28)
    at validateArrayElement (src/validate/validate.ts:96:42)
    at Object.validateArray [as array] (src/validate/validate_array.ts:40:32)
    at validateElement (src/validate/validate.ts:96:42)
    at validateObject (src/validate/validate_object.ts:40:32)
    at validate (src/validate/validate.ts:99:23)
    at validateStyleMin (src/validate_style.min.ts:35:28)
    at module.exports.fuzz (fuzzer/fuzz.js:14:5)
MS: 0 ; base unit: 0000000000000000000000000000000000000000
0xd4,0xad,0x24,0x2c,0xb5,0xa,
\324\255$,\265\012
artifact_prefix='./'; Test unit written to ./crash-ba9adf7dc81c2af36a40eda0b81ff02993ea096d
Base64: 1K0kLLUK
Done 475 runs in 0 second(s)
```

### Cannot read properties of null (reading 'font-scale') at Function.parse (src/expression/definitions/format.ts:56:24)

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
      "id": "boundary_3",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "boundary",
      "minzoom": 5,
      "filter": [
        "all",
        [
          ">=",
          [
            "get",
            "admin_level"
          ],
          3
        ],
        [
          "<=",
          [
            "format",
            ">=",
            null,
            -2147483547,
            "a"
          ],
          6
        ],
        [
          "!=",
          [
            "get",
            "maritime"
          ],
          1
        ],
        [
          "!=",
          [
            "get",
            "disputed"
          ],
          1
        ],
        [
          "!",
          [
            "has",
            "claimed_by"
          ]
        ]
      ],
      "paint": {
        "line-color": "hsl(0,0%,70%)",
        "line-dasharray": [
          1,
          1
        ],
        "line-width": [
          "interpolate",
          [
            "linear",
            1
          ],
          [
            "zoom"
          ],
          7,
          1,
          11,
          2
        ]
      }
    }
  ]
}
==20390== Uncaught Exception: TypeError: Cannot read properties of null (reading 'font-scale')
    at Function.parse (src/expression/definitions/format.ts:56:24)
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:68:63)
    at Function.parse (src/expression/definitions/comparison.ts:84:31)
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:68:63)
    at Function.parse (src/expression/compound_expression.ts:108:49)
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:70:21)
    at createExpression (src/expression/index.ts:152:27)
    at validateExpression (src/validate/validate_expression.ts:13:111)
    at validateElement (src/validate/validate_filter.ts:12:16)
    at validateObject (src/validate/validate_object.ts:40:32)
    at Object.validateLayer [as layer] (src/validate/validate_layer.ts:87:28)
    at validateArrayElement (src/validate/validate.ts:96:42)
    at Object.validateArray [as array] (src/validate/validate_array.ts:40:32)
    at validateElement (src/validate/validate.ts:96:42)
    at validateObject (src/validate/validate_object.ts:40:32)
    at validate (src/validate/validate.ts:99:23)
    at validateStyleMin (src/validate_style.min.ts:35:28)
    at module.exports.fuzz (fuzzer/fuzz.js:14:5)
MS: 0 ; base unit: 0000000000000000000000000000000000000000
0x65,0x6d,0x62,0x6d,0x27,0x65,0x72,0x28,0xe7,0x4,0x28,0xa,0x33,0x23,0xc4,
embm'er(\347\004(\0123#\304
artifact_prefix='./'; Test unit written to ./crash-ef4da7bdd7c9486574887ff6e59dda9e5b4793c2
Base64: ZW1ibSdlcijnBCgKMyPE
Done 1354 runs in 0 second(s)
```

### Cannot read properties of null (reading 'type') at Function.parse (src/expression/definitions/distance.ts:551:25)

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
      "id": "tunnel_major_rail_hatching",
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
          "tunnel"
        ],
        [
          "==",
          [
            "get",
            "class"
          ],
          "rail"
        ]
      ],
      "paint": {
        "line-color": [
          "distance",
          null
        ],
        "line-dasharray": [
          0.2,
          8
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.4
          ],
          [
            "zoom"
          ],
          14.5,
          0,
          15,
          3,
          20,
          8
        ]
      }
    }
  ]
}
==21012== Uncaught Exception: TypeError: Cannot read properties of null (reading 'type')
    at Function.parse (src/expression/definitions/distance.ts:551:25)
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:70:21)
    at createExpression (src/expression/index.ts:152:27)
    at createPropertyExpression (src/expression/index.ts:304:24)
    at validateExpression (src/validate/validate_expression.ts:13:111)
    at validateSpec (src/validate/validate.ts:93:16)
    at validateProperty (src/validate/validate_property.ts:58:26)
    at validatePaintProperty (src/validate/validate_paint_property.ts:5:12)
    at validateElement (src/validate/validate_layer.ts:138:36)
    at validateObject (src/validate/validate_object.ts:40:32)
    at validateElement (src/validate/validate_layer.ts:129:24)
    at validateObject (src/validate/validate_object.ts:40:32)
    at Object.validateLayer [as layer] (src/validate/validate_layer.ts:87:28)
    at validateArrayElement (src/validate/validate.ts:96:42)
    at Object.validateArray [as array] (src/validate/validate_array.ts:40:32)
    at validateElement (src/validate/validate.ts:96:42)
    at validateObject (src/validate/validate_object.ts:40:32)
    at validate (src/validate/validate.ts:99:23)
    at validateStyleMin (src/validate_style.min.ts:35:28)
    at module.exports.fuzz (fuzzer/fuzz.js:14:5)
MS: 3 ChangeBit-ShuffleBytes-ShuffleBytes-; base unit: 2f5a66269a3ee2393bec8925b809b5b6b98c768f
0xf8,0x95,0x95,0x95,0x95,0x3a,0xa4,0x91,0x95,0x93,0x95,0x95,0x95,0x95,0x95,0x95,
\370\225\225\225\225:\244\221\225\223\225\225\225\225\225\225
artifact_prefix='./'; Test unit written to ./crash-53d342ac4c3853829c00e8226cbb602dbb065dea
Base64: +JWVlZU6pJGVk5WVlZWVlQ==
Done 7885 runs in 3 second(s)
```

### Cannot read properties of null (reading 'locale') at Function.parse (src/expression/definitions/number_format.ts:60:20)

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
      "id": "aeroway_runway",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "aeroway",
      "minzoom": 11,
      "filter": [
        "all",
        [
          "match",
          [
            "number-format",
            1.8603309361367333e-103,
            null
          ],
          [
            "LineString",
            "MultiLineString"
          ],
          true,
          false
        ],
        [
          "==",
          [
            "get",
            "class"
          ],
          "runway"
        ]
      ],
      "paint": {
        "line-color": "#f0ede9",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          11,
          3,
          20,
          16
        ]
      }
    }
  ]
}
==21457== Uncaught Exception: TypeError: Cannot read properties of null (reading 'locale')
    at Function.parse (src/expression/definitions/number_format.ts:60:20)
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:68:63)
    at Function.parse (src/expression/definitions/match.ts:88:31)
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:68:63)
    at Function.parse (src/expression/compound_expression.ts:108:49)
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:70:21)
    at createExpression (src/expression/index.ts:152:27)
    at validateExpression (src/validate/validate_expression.ts:13:111)
    at validateElement (src/validate/validate_filter.ts:12:16)
    at validateObject (src/validate/validate_object.ts:40:32)
    at Object.validateLayer [as layer] (src/validate/validate_layer.ts:87:28)
    at validateArrayElement (src/validate/validate.ts:96:42)
    at Object.validateArray [as array] (src/validate/validate_array.ts:40:32)
    at validateElement (src/validate/validate.ts:96:42)
    at validateObject (src/validate/validate_object.ts:40:32)
    at validate (src/validate/validate.ts:99:23)
    at validateStyleMin (src/validate_style.min.ts:35:28)
    at module.exports.fuzz (fuzzer/fuzz.js:14:5)
MS: 5 PersAutoDict-CopyPart-ChangeBit-InsertRepeatedBytes-ChangeByte- DE: "error"-; base unit: 5865d10a68f8fd76765a8a73bc3e6618fefe3295
0x73,0x2a,0xc3,0x1,0x91,0x91,0x65,0x3f,0x10,0xdb,0xef,0xef,0x91,0x91,0x91,0x91,0x28,0x91,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0xb5,0x91,0x91,0x91,0x91,0x91,0x91,0x91,0x91,0x91,0x93,0xaa,0xaa,0xaa,0xdb,0x2d,0xef,0x91,0x91,0x91,0x91,0xaa,0xaa,0x8a,0xaa,0xaa,0x65,0xd8,0xc,0x95,0x89,0x83,
s*\303\001\221\221e?\020\333\357\357\221\221\221\221(\221\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\265\221\221\221\221\221\221\221\221\221\223\252\252\252\333-\357\221\221\221\221\252\252\212\252\252e\330\014\225\211\203
artifact_prefix='./'; Test unit written to ./crash-9e1833efee630de4d26038827ad2d4e9a58f79f5
Base64: cyrDAZGRZT8Q2+/vkZGRkSiRtbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1kZGRkZGRkZGRk6qqqtst75GRkZGqqoqqqmXYDJWJgw==
Done 131910 runs in 43 second(s)
```

### Cannot read properties of undefined (reading 'kind') at checkSubtype (src/expression/types.ts:112:11)

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
      "id": "highway-shield-us-interstate",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "transportation_name",
      "minzoom": 7,
      "filter": [
        "all",
        [
          "<=",
          [
            "in",
            [
              "typeof"
            ],
            [
              "string",
              [
                "var",
                "toString"
              ],
              [
                "string",
                -2147483536
              ],
              "a"
            ]
          ],
          6
        ],
        [
          "match",
          [
            "geometry-type"
          ],
          [
            "LineString",
            "MultiLineString"
          ],
          true,
          false
        ],
        [
          "match",
          [
            "get",
            "network"
          ],
          [
            "us-interstate"
          ],
          true,
          false
        ]
      ],
      "layout": {
        "icon-image": [
          "concat",
          [
            "get",
            "network"
          ],
          "_",
          [
            "get",
            "ref_length"
          ]
        ],
        "icon-rotation-alignment": "viewport",
        "icon-size": 1,
        "symbol-placement": [
          "step",
          [
            "zoom"
          ],
          "point",
          7,
          "line",
          8,
          "line"
        ],
        "symbol-spacing": 200,
        "text-field": [
          "to-string",
          [
            "get",
            "ref"
          ]
        ],
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-rotation-alignment": "viewport",
        "text-size": 10
      }
    }
  ]
}
==22338== Uncaught Exception: TypeError: Cannot read properties of undefined (reading 'kind')
    at checkSubtype (src/expression/types.ts:112:11)
    at ParsingContext.checkSubtype (src/expression/parsing_context.ts:204:23)
    at ParsingContext._parse (src/expression/parsing_context.ts:131:37)
    at ParsingContext.parse (src/expression/parsing_context.ts:68:63)
    at Function.parse (src/expression/definitions/assertion.ts:77:35)
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:68:63)
    at Function.parse (src/expression/definitions/in.ts:37:34)
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:68:63)
    at Function.parse (src/expression/definitions/comparison.ts:84:31)
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:68:63)
    at Function.parse (src/expression/compound_expression.ts:108:49)
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:70:21)
    at createExpression (src/expression/index.ts:152:27)
    at validateExpression (src/validate/validate_expression.ts:13:111)
    at validateElement (src/validate/validate_filter.ts:12:16)
    at validateObject (src/validate/validate_object.ts:40:32)
    at Object.validateLayer [as layer] (src/validate/validate_layer.ts:87:28)
    at validateArrayElement (src/validate/validate.ts:96:42)
    at Object.validateArray [as array] (src/validate/validate_array.ts:40:32)
    at validateElement (src/validate/validate.ts:96:42)
    at validateObject (src/validate/validate_object.ts:40:32)
    at validate (src/validate/validate.ts:99:23)
    at validateStyleMin (src/validate_style.min.ts:35:28)
    at module.exports.fuzz (fuzzer/fuzz.js:14:5)
MS: 2 ShuffleBytes-ChangeBinInt-; base unit: dffe17642fcd0b3b22504176345b96421fc55202
0x70,0x4f,0xdf,0x58,0x58,0x58,0x58,0xa8,0xa7,0xa7,0xfa,0xa8,0x58,0x58,0x58,0x58,0x58,0xaa,0x58,0x65,0xc8,0x65,0x41,0xbf,0xd2,
pO\337XXXX\250\247\247\372\250XXXXX\252Xe\310eA\277\322
artifact_prefix='./'; Test unit written to ./crash-31773ca1d85af2aeecb5abe33ba5fe5fae18f2af
Base64: cE/fWFhYWKinp/qoWFhYWFiqWGXIZUG/0g==
Done 101905 runs in 34 second(s)
```

### Cannot read properties of undefined (reading 'kind') at ParsingContext.\_parse (src/expression/parsing_context.ts:121:184)

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
      "id": "tunnel_link",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          [
            "get",
            "ramp"
          ],
          1
        ],
        [
          "var",
          "__proto__"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fff4c6",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          12.5,
          0,
          13,
          1.5,
          14,
          2.5,
          20,
          11.5
        ]
      }
    }
  ]
}
==23906== Uncaught Exception: TypeError: Cannot read properties of undefined (reading 'kind')
    at ParsingContext._parse (src/expression/parsing_context.ts:121:184)
    at ParsingContext.parse (src/expression/parsing_context.ts:68:63)
    at Function.parse (src/expression/compound_expression.ts:108:49)
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:70:21)
    at createExpression (src/expression/index.ts:152:27)
    at validateExpression (src/validate/validate_expression.ts:13:111)
    at validateElement (src/validate/validate_filter.ts:12:16)
    at validateObject (src/validate/validate_object.ts:40:32)
    at Object.validateLayer [as layer] (src/validate/validate_layer.ts:87:28)
    at validateArrayElement (src/validate/validate.ts:96:42)
    at Object.validateArray [as array] (src/validate/validate_array.ts:40:32)
    at validateElement (src/validate/validate.ts:96:42)
    at validateObject (src/validate/validate_object.ts:40:32)
    at validate (src/validate/validate.ts:99:23)
    at validateStyleMin (src/validate_style.min.ts:35:28)
    at module.exports.fuzz (fuzzer/fuzz.js:14:5)
MS: 1 CMP- DE: "fill"-; base unit: 7533f3adedd4afeaa036833067a3f41bca467eae
0x66,0x69,0x6c,0x6c,0x1,0x1,0x2,0x20,0x20,
fill\001\001\002
artifact_prefix='./'; Test unit written to ./crash-db851544373c592c79bb86914e8fc6d5e40fcbd2
Base64: ZmlsbAEBAiAg
Done 110801 runs in 39 second(s)
```

### Various crashes due to `["var", "__proto__"]`: Cannot read properties of undefined (reading 'kind') at ParsingContext.\_parse (src/expression/parsing_context.ts:125:141)

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
      "id": "label_village",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 9,
      "filter": [
        "==",
        [
          "get",
          "class"
        ],
        "village"
      ],
      "layout": {
        "icon-allow-overlap": true,
        "icon-image": [
          "step",
          [
            "zoom"
          ],
          "circle_11_black",
          10,
          [
            "var",
            "constructor"
          ]
        ],
        "icon-optional": false,
        "icon-size": 0.2,
        "text-anchor": "bottom",
        "text-field": [
          "case",
          [
            "has",
            "name:nonlatin"
          ],
          [
            "concat",
            [
              "get",
              "name:latin"
            ],
            "\n",
            [
              "get",
              "name:nonlatin"
            ]
          ],
          [
            "coalesce",
            [
              "get",
              "name_en"
            ],
            [
              "get",
              "name"
            ]
          ]
        ],
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-max-width": 8,
        "text-size": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          7,
          10,
          11,
          12
        ]
      },
      "paint": {
        "text-color": "#000",
        "text-halo-blur": 1,
        "text-halo-color": "#fff",
        "text-halo-width": 1
      }
    }
  ]
}
==4862== Uncaught Exception: TypeError: Cannot read properties of undefined (reading 'kind')
    at ParsingContext._parse (src/expression/parsing_context.ts:125:141)
    at ParsingContext.parse (src/expression/parsing_context.ts:68:63)
    at Function.parse (src/expression/definitions/step.ts:64:36)
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:70:21)
    at createExpression (src/expression/index.ts:152:27)
    at createPropertyExpression (src/expression/index.ts:304:24)
    at validateExpression (src/validate/validate_expression.ts:13:111)
    at validateSpec (src/validate/validate.ts:93:16)
    at validateProperty (src/validate/validate_property.ts:58:26)
    at validateLayoutProperty (src/validate/validate_layout_property.ts:5:12)
    at validateElement (src/validate/validate_layer.ts:123:36)
    at validateObject (src/validate/validate_object.ts:40:32)
    at validateElement (src/validate/validate_layer.ts:114:24)
    at validateObject (src/validate/validate_object.ts:40:32)
    at Object.validateLayer [as layer] (src/validate/validate_layer.ts:87:28)
    at validateArrayElement (src/validate/validate.ts:96:42)
    at Object.validateArray [as array] (src/validate/validate_array.ts:40:32)
    at validateElement (src/validate/validate.ts:96:42)
    at validateObject (src/validate/validate_object.ts:40:32)
    at validate (src/validate/validate.ts:99:23)
    at validateStyleMin (src/validate_style.min.ts:35:28)
    at module.exports.fuzz (fuzzer/fuzz.js:14:5)
MS: 3 CrossOver-ChangeBit-InsertByte-; base unit: d0f63469ca13ea2fd28cce0e7c628b80c82a7b82
0x65,0x62,0x0,0x67,0xfa,0x25,0x7a,0x67,
eb\000g\372%zg
artifact_prefix='./'; Test unit written to ./crash-3040bf01eade9a1caa97bdf4c85b345f7b193d56
Base64: ZWIAZ/olemc=
Done 141334 runs in 95 second(s)
```

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
      "id": "road_service_track",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "match",
          [
            "get",
            "brunnel"
          ],
          [
            "bridge",
            "tunnel"
          ],
          false,
          true
        ],
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "service",
            "track"
          ],
          [
            "log10",
            -192908699,
            -4.510611199454975e+301,
            [
              "var",
              "toString"
            ],
            -1814794123,
            2.332079096664025e-278
          ],
          false
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fff",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          15.5,
          0,
          16,
          2,
          20,
          7.5
        ]
      }
    }
  ]
}
==4858== Uncaught Exception: TypeError: Cannot read properties of undefined (reading 'kind')
    at ParsingContext._parse (src/expression/parsing_context.ts:140:66)
    at ParsingContext.parse (src/expression/parsing_context.ts:68:63)
    at Function.parse (src/expression/compound_expression.ts:151:40)
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:68:63)
    at Function.parse (src/expression/definitions/match.ts:82:36)
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:68:63)
    at Function.parse (src/expression/compound_expression.ts:108:49)
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:70:21)
    at createExpression (src/expression/index.ts:152:27)
    at validateExpression (src/validate/validate_expression.ts:13:111)
    at validateElement (src/validate/validate_filter.ts:12:16)
    at validateObject (src/validate/validate_object.ts:40:32)
    at Object.validateLayer [as layer] (src/validate/validate_layer.ts:87:28)
    at validateArrayElement (src/validate/validate.ts:96:42)
    at Object.validateArray [as array] (src/validate/validate_array.ts:40:32)
    at validateElement (src/validate/validate.ts:96:42)
    at validateObject (src/validate/validate_object.ts:40:32)
    at validate (src/validate/validate.ts:99:23)
    at validateStyleMin (src/validate_style.min.ts:35:28)
    at module.exports.fuzz (fuzzer/fuzz.js:14:5)
MS: 4 ShuffleBytes-ChangeBinInt-CopyPart-CrossOver-; base unit: 1ea2589be05d3c7f1d04d0d8047b9a37d7ac2696
0x63,0x6f,0x5f,0x74,0x79,0x70,0xd4,0x13,0x3a,0xcb,0x5c,0x0,0x6f,0x1,0x70,0x72,0x0,0x2e,0x6a,0x61,0x29,0x5f,0x1,0x7a,0x65,0x72,0x80,0x74,0x9d,0x10,0x3a,0x86,0x20,0x75,0x3a,0x86,0x20,0x75,0x70,0xd4,0x13,0xdf,0xf1,0xcb,0x0,0x6f,0x1,0x70,0x72,0x0,0x2e,0x6a,0x61,0x29,0x5f,0x1,0x7a,0x65,0x72,0x80,0x74,0x9d,0x10,0x3a,0x86,0x2c,0x2c,0xa2,
co_typ\324\023:\313\\\000o\001pr\000.ja)_\001zer\200t\235\020:\206 u:\206 up\324\023\337\361\313\000o\001pr\000.ja)_\001zer\200t\235\020:\206,,\242
artifact_prefix='./'; Test unit written to ./crash-99da4369422ee9a1c9fb06b36deb15f684d1bb72
Base64: Y29fdHlw1BM6y1wAbwFwcgAuamEpXwF6ZXKAdJ0QOoYgdTqGIHVw1BPf8csAbwFwcgAuamEpXwF6ZXKAdJ0QOoYsLKI=
Done 367350 runs in 248 second(s)
```

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
      "id": "road_one_way_arrow",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 16,
      "filter": [
        "==",
        [
          "get",
          "oneway"
        ],
        1
      ],
      "layout": {
        "icon-image": [
          "var",
          "__proto__"
        ],
        "symbol-placement": "line"
      }
    }
  ]
}
==4864== Uncaught Exception: TypeError: Cannot read properties of undefined (reading 'kind')
    at ParsingContext._parse (src/expression/parsing_context.ts:125:141)
    at ParsingContext.parse (src/expression/parsing_context.ts:70:21)
    at createExpression (src/expression/index.ts:152:27)
    at createPropertyExpression (src/expression/index.ts:304:24)
    at validateExpression (src/validate/validate_expression.ts:13:111)
    at validateSpec (src/validate/validate.ts:93:16)
    at validateProperty (src/validate/validate_property.ts:58:26)
    at validateLayoutProperty (src/validate/validate_layout_property.ts:5:12)
    at validateElement (src/validate/validate_layer.ts:123:36)
    at validateObject (src/validate/validate_object.ts:40:32)
    at validateElement (src/validate/validate_layer.ts:114:24)
    at validateObject (src/validate/validate_object.ts:40:32)
    at Object.validateLayer [as layer] (src/validate/validate_layer.ts:87:28)
    at validateArrayElement (src/validate/validate.ts:96:42)
    at Object.validateArray [as array] (src/validate/validate_array.ts:40:32)
    at validateElement (src/validate/validate.ts:96:42)
    at validateObject (src/validate/validate_object.ts:40:32)
    at validate (src/validate/validate.ts:99:23)
    at validateStyleMin (src/validate_style.min.ts:35:28)
    at module.exports.fuzz (fuzzer/fuzz.js:14:5)
MS: 2 CrossOver-ChangeBit-; base unit: f1cbc2c2b547b6c145a7c27fd48870b26786841d
0x65,0xc0,0x6e,0xa,0xff,0x72,0x21,0x12,0x12,0xe2,0x65,0x2,0x21,0x29,0xe9,0x1a,0x1f,0x25,0x20,0x4f,0x21,0x12,0x2a,0xdd,0x2,0x1,0x25,0x20,0x3d,
e\300n\012\377r!\022\022\342e\002!)\351\032\037% O!\022*\335\002\001% =
artifact_prefix='./'; Test unit written to ./crash-033c37ca8a5dbdd4ebd163d27a85b8b54ef415e4
Base64: ZcBuCv9yIRIS4mUCISnpGh8lIE8hEirdAgElID0=
Done 455280 runs in 309 second(s)
```

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
      "id": "landuse_residential",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "landuse",
      "maxzoom": 12,
      "filter": [
        "==",
        [
          "get",
          "class"
        ],
        "residential"
      ],
      "paint": {
        "fill-color": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          9,
          [
            "var",
            "__proto__"
          ],
          12,
          "hsla(35,57%,88%,0.49)"
        ]
      }
    }
  ]
}
==4860== Uncaught Exception: TypeError: Cannot read properties of undefined (reading 'kind')
    at ParsingContext._parse (src/expression/parsing_context.ts:125:141)
    at ParsingContext.parse (src/expression/parsing_context.ts:68:63)
    at Function.parse (src/expression/definitions/interpolate.ts:132:36)
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:70:21)
    at createExpression (src/expression/index.ts:152:27)
    at createPropertyExpression (src/expression/index.ts:304:24)
    at validateExpression (src/validate/validate_expression.ts:13:111)
    at validateSpec (src/validate/validate.ts:93:16)
    at validateProperty (src/validate/validate_property.ts:58:26)
    at validatePaintProperty (src/validate/validate_paint_property.ts:5:12)
    at validateElement (src/validate/validate_layer.ts:138:36)
    at validateObject (src/validate/validate_object.ts:40:32)
    at validateElement (src/validate/validate_layer.ts:129:24)
    at validateObject (src/validate/validate_object.ts:40:32)
    at Object.validateLayer [as layer] (src/validate/validate_layer.ts:87:28)
    at validateArrayElement (src/validate/validate.ts:96:42)
    at Object.validateArray [as array] (src/validate/validate_array.ts:40:32)
    at validateElement (src/validate/validate.ts:96:42)
    at validateObject (src/validate/validate_object.ts:40:32)
    at validate (src/validate/validate.ts:99:23)
    at validateStyleMin (src/validate_style.min.ts:35:28)
    at module.exports.fuzz (fuzzer/fuzz.js:14:5)
MS: 2 ChangeBit-ChangeBit-; base unit: 4d6317a3d4f6ab17afdff0c0bdef146bf26a1827
0xda,0xfc,0x1,0x1,0x3a,0x79,0xe2,
\332\374\001\001:y\342
artifact_prefix='./'; Test unit written to ./crash-8ad0a4a47879a85dba462430a90ff47265ec03a2
Base64: 2vwBATp54g==
Done 701778 runs in 465 second(s)
```

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
      "id": "road_service_track",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "match",
          [
            "get",
            "brunnel"
          ],
          [
            "bridge",
            "tunnel"
          ],
          false,
          true
        ],
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "service",
            "track"
          ],
          [
            "any",
            [
              "e",
              [
                "var",
                "constructor"
              ],
              "id"
            ],
            "a"
          ],
          false
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fff",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          15.5,
          0,
          16,
          2,
          20,
          7.5
        ]
      }
    }
  ]
}
==25995== Uncaught Exception: TypeError: Cannot read properties of undefined (reading 'kind')
    at ParsingContext._parse (src/expression/parsing_context.ts:140:66)
    at ParsingContext.parse (src/expression/parsing_context.ts:68:63)
    at Function.parse (src/expression/compound_expression.ts:151:40)
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:68:63)
    at Function.parse (src/expression/compound_expression.ts:108:49)
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:68:63)
    at Function.parse (src/expression/definitions/match.ts:82:36)
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:68:63)
    at Function.parse (src/expression/compound_expression.ts:108:49)
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:70:21)
    at createExpression (src/expression/index.ts:152:27)
    at validateExpression (src/validate/validate_expression.ts:13:111)
    at validateElement (src/validate/validate_filter.ts:12:16)
    at validateObject (src/validate/validate_object.ts:40:32)
    at validateLayer (src/validate/validate_layer.ts:87:28)
    at validateArrayElement (src/validate/validate.ts:96:41)
    at validateArray (src/validate/validate_array.ts:40:32)
    at validateElement (src/validate/validate.ts:96:41)
    at validateObject (src/validate/validate_object.ts:40:32)
    at validate (src/validate/validate.ts:99:23)
    at validateStyleMin (src/validate_style.min.ts:35:28)
    at module.exports.fuzz (fuzzer/fuzz.js:14:5)
MS: 1 ChangeBinInt-; base unit: b78bc4d1890c321a6d6873963237d997090190ca
0x74,0x75,0xa4,0xc6,0x79,0xdf,0x54,0x3a,0x86,0x20,0x7e,0x3a,0x86,0x20,0x75,0x2c,0x2c,0xa2,
tu\244\306y\337T:\206 ~:\206 u,,\242
artifact_prefix='./'; Test unit written to ./crash-052b4e684327c6cec92c6c5eb76dd213b6dada4b
Base64: dHWkxnnfVDqGIH46hiB1LCyi
Done 683182 runs in 415 second(s)
```

### Various crashes if id is non-string: Cannot read properties of null (reading 'id') at Object.validateLayer [as layer] (src/validate/validate_layer.ts:34:37)

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
    null,
    {
      "id": -9007190681704961,
      "aa": false
    },
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ]
}
==4857== Uncaught Exception: TypeError: Cannot read properties of null (reading 'id')
    at Object.validateLayer [as layer] (src/validate/validate_layer.ts:34:37)
    at validateArrayElement (src/validate/validate.ts:96:42)
    at Object.validateArray [as array] (src/validate/validate_array.ts:40:32)
    at validateElement (src/validate/validate.ts:96:42)
    at validateObject (src/validate/validate_object.ts:40:32)
    at validate (src/validate/validate.ts:99:23)
    at validateStyleMin (src/validate_style.min.ts:35:28)
    at module.exports.fuzz (fuzzer/fuzz.js:14:5)
MS: 2 InsertRepeatedBytes-ChangeByte-; base unit: bb8a2caa65f00ae7f8fa62816f684a36aa8830ed
0xff,0xff,0x0,0x4,0x20,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0x25,0xfe,0xfe,0x1,0x0,0x0,0x1,0x0,0x0,0x0,0x2,0xfe,0xfe,0xfe,0xfe,0x0,0x0,0x0,0x0,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0x27,0x27,0x27,0x27,0x27,0x27,0x27,0x27,0x27,0x27,0x27,0x27,0x27,0x27,0x27,0x27,0x27,0x27,0x27,0x27,0x27,0x27,0x27,0x27,0x27,0x27,0x27,0x27,0x27,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0x5f,0xfe,0xfe,0xfe,0x30,0x1f,0x4f,0x21,0x12,0x83,
\377\377\000\004 \376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376%\376\376\001\000\000\001\000\000\000\002\376\376\376\376\000\000\000\000\376\376\376\376\376\376\376\376\376\376'''''''''''''''''''''''''''''\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376_\376\376\3760\037O!\022\203
artifact_prefix='./'; Test unit written to ./crash-4d25f31bd8ae204425affbb43513bfd908a2824d
Base64: //8ABCD+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v4l/v4BAAABAAAAAv7+/v4AAAAA/v7+/v7+/v7+/icnJycnJycnJycnJycnJycnJycnJycnJycnJycn/v7+/v7+/v7+/v7+/v7+/v5f/v7+MB9PIRKD
Done 1252444 runs in 833 second(s)
```

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
    {},
    5738855616770928,
    null,
    {
      "": false
    },
    {
      "id": true
    },
    false,
    {
      "id": true
    },
    false,
    null
  ]
}
==15169== Uncaught Exception: TypeError: Cannot read properties of null (reading 'id')
    at validateLayer (src/validate/validate_layer.ts:34:37)
    at validateArrayElement (src/validate/validate.ts:96:41)
    at validateArray (src/validate/validate_array.ts:40:32)
    at validateElement (src/validate/validate.ts:96:41)
    at validateObject (src/validate/validate_object.ts:40:32)
    at validate (src/validate/validate.ts:99:23)
    at validateStyleMin (src/validate_style.min.ts:35:28)
    at module.exports.fuzz (fuzzer/fuzz.js:14:5)
MS: 1 PersAutoDict- DE: "constructor"-; base unit: 0860c5e29ca7f4e52bf327ea58d88de558cb4372
0xff,0xff,0x0,0x4,0x20,0xfe,0xfe,0xfe,0xfe,0xfe,0x5f,0xfe,0x0,0x0,0x1,0x0,0x0,0x0,0x2,0xfe,0xfe,0xfe,0xfe,0xfe,0x0,0x0,0x1,0x0,0x0,0x0,0x2,0xfe,0xfe,0xfe,0xfe,0x0,0x0,0x0,0x0,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0x63,0x6f,0x6e,0x73,0x74,0x72,0x75,0x63,0x74,0x6f,0x72,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0x5f,0xfe,0xfe,0xfe,0xfe,0x1f,0x4f,0x21,0x12,0x83,
\377\377\000\004 \376\376\376\376\376_\376\000\000\001\000\000\000\002\376\376\376\376\376\000\000\001\000\000\000\002\376\376\376\376\000\000\000\000\376\376\376\376\376\376constructor\376\376\376\376\376\376\376\376\376\376\376_\376\376\376\376\037O!\022\203
artifact_prefix='./'; Test unit written to ./crash-6ab8b89d2e201a29f8796bfcbae3f11652f8437c
Base64: //8ABCD+/v7+/l/+AAABAAAAAv7+/v7+AAABAAAAAv7+/v4AAAAA/v7+/v7+Y29uc3RydWN0b3L+/v7+/v7+/v7+/l/+/v7+H08hEoM=
Done 130241 runs in 92 second(s)
```

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
    {},
    {},
    {},
    5752045410873392,
    5738855616770928,
    null,
    {},
    {
      "id": true
    },
    true
  ]
}
==4861== Uncaught Exception: TypeError: Cannot read properties of null (reading 'id')
    at Object.validateLayer [as layer] (src/validate/validate_layer.ts:34:37)
    at validateArrayElement (src/validate/validate.ts:96:42)
    at Object.validateArray [as array] (src/validate/validate_array.ts:40:32)
    at validateElement (src/validate/validate.ts:96:42)
    at validateObject (src/validate/validate_object.ts:40:32)
    at validate (src/validate/validate.ts:99:23)
    at validateStyleMin (src/validate_style.min.ts:35:28)
    at module.exports.fuzz (fuzzer/fuzz.js:14:5)
MS: 2 ShuffleBytes-ManualDict- DE: "constructor.prototype"-; base unit: c5f92ce7e329f8bdd24e9f0f3c503ec363a8be03
0xff,0xff,0x0,0x4,0x20,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0x25,0xfe,0x1,0x0,0x0,0x1,0x0,0x0,0x0,0x2,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0x63,0x6f,0x6e,0x73,0x74,0x72,0x75,0x63,0x74,0x6f,0x72,0x2e,0x70,0x72,0x6f,0x74,0x6f,0x74,0x79,0x70,0x65,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0x1f,0x4f,0x21,0x12,0x83,
\377\377\000\004 \376\376\376\376\376\376\376\376\376\376\376\376%\376\001\000\000\001\000\000\000\002\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376constructor.prototype\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\037O!\022\203
artifact_prefix='./'; Test unit written to ./crash-410d19292bb467c46bcbebc226872d14f8ea25c9
Base64: //8ABCD+/v7+/v7+/v7+/v4l/gEAAAEAAAAC/v7+/v7+/v7+/v7+/v7+Y29uc3RydWN0b3IucHJvdG90eXBl/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v4fTyESgw==
Done 1107127 runs in 728 second(s)
```

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
      "``": 3500174991097600
    },
    {},
    null,
    {},
    {
      "id": true
    },
    true,
    {},
    {},
    {
      "": 8724620454592258
    }
  ]
}
==4859== Uncaught Exception: TypeError: Cannot read properties of null (reading 'id')
    at Object.validateLayer [as layer] (src/validate/validate_layer.ts:34:37)
    at validateArrayElement (src/validate/validate.ts:96:42)
    at Object.validateArray [as array] (src/validate/validate_array.ts:40:32)
    at validateElement (src/validate/validate.ts:96:42)
    at validateObject (src/validate/validate_object.ts:40:32)
    at validate (src/validate/validate.ts:99:23)
    at validateStyleMin (src/validate_style.min.ts:35:28)
    at module.exports.fuzz (fuzzer/fuzz.js:14:5)
MS: 1 ChangeByte-; base unit: b8e9a7677ddd4c5c70f1fb523adbe45e1bd28a7a
0xff,0xff,0x0,0x4,0x20,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0x25,0xfe,0xfe,0x1,0x0,0x0,0x1,0x0,0x0,0x0,0x2,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0x1f,0x4f,0x21,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0x25,0xfe,0xfe,0x1,0x0,0x0,0x1,0x0,0x0,0x0,0x2,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xde,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0xfe,0x63,0x6f,0x6c,0x6f,0x72,0xfe,0xfe,0xff,0xfe,0xfe,0xfe,0xfe,0xfe,0x1f,0x4f,0x21,0x12,0x83,
\377\377\000\004 \376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376%\376\376\001\000\000\001\000\000\000\002\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\037O!\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376%\376\376\001\000\000\001\000\000\000\002\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\376\336\376\376\376\376\376\376\376\376\376\376\376\376\376\376color\376\376\377\376\376\376\376\376\037O!\022\203
artifact_prefix='./'; Test unit written to ./crash-7106a7c1594f15f261e20470f3aaf82067af5915
Base64: //8ABCD+/v7+/v7+/v7+/v7+/v7+/v7+/v7+Jf7+AQAAAQAAAAL+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+H08h/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/iX+/gEAAAEAAAAC/v7+/v7+/v7+/v7+/v7+/t7+/v7+/v7+/v7+/v7+/mNvbG9y/v7//v7+/v4fTyESgw==
Done 1325234 runs in 867 second(s)
```

</details>

## GeoJSON crashes

<details>

<summary>GeoJSON crashes</summary>


### Malformed `coordinates`: geometry.coordinates.map is not a function at toSimpleGeometry (src/expression/definitions/distance.ts:525:37)

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
      "id": "tunnel_transit_rail",
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
          [
            "distance",
            {
              "type": "Feature",
              "geometry": {
                "type": "MultiPoint",
                "coordinates": 5469449248675223
              },
              "properties": {
                ":         ": false,
                "": false
              }
            }
          ]
        ],
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "transit"
          ],
          true,
          false
        ]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.4
          ],
          [
            "zoom"
          ],
          14,
          0.4,
          15,
          0.75,
          20,
          2
        ]
      }
    }
  ]
}
==16995== Uncaught Exception: TypeError: geometry.coordinates.map is not a function
    at toSimpleGeometry (src/expression/definitions/distance.ts:525:37)
    at Function.parse (src/expression/definitions/distance.ts:554:46)
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:68:63)
    at Function.parse (src/expression/definitions/comparison.ts:89:31)
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:68:63)
    at Function.parse (src/expression/compound_expression.ts:108:49)
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:70:21)
    at createExpression (src/expression/index.ts:152:27)
    at validateExpression (src/validate/validate_expression.ts:13:111)
    at validateElement (src/validate/validate_filter.ts:12:16)
    at validateObject (src/validate/validate_object.ts:40:32)
    at validateLayer (src/validate/validate_layer.ts:87:28)
    at validateArrayElement (src/validate/validate.ts:96:41)
    at validateArray (src/validate/validate_array.ts:40:32)
    at validateElement (src/validate/validate.ts:96:41)
    at validateObject (src/validate/validate_object.ts:40:32)
    at validate (src/validate/validate.ts:99:23)
    at validateStyleMin (src/validate_style.min.ts:35:28)
    at module.exports.fuzz (fuzzer/fuzz.js:14:5)
MS: 1 ChangeBit-; base unit: cf1e5ce34d2ec2ef4b985ae2167ac809aa311fc7
0xd8,0x20,0x25,0xff,0x95,0x95,0x95,0x63,0x6f,0x6e,0x73,0x74,0x72,0x75,0x63,0x7c,0x6f,0x72,0x95,0x3a,0x8d,0x27,
\330 %\377\225\225\225construc|or\225:\215'
artifact_prefix='./'; Test unit written to ./crash-d5b2447a3a533234ecb5a58faf78f3cd92539cf7
Base64: 2CAl/5WVlWNvbnN0cnVjfG9ylTqNJw==
Done 93801 runs in 28 second(s)
```

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
      "id": "road_service_track_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "match",
          [
            "get",
            "brunnel"
          ],
          [
            "bridge",
            "tunnel"
          ],
          false,
          true
        ],
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "service",
            "track"
          ],
          [
            "distance",
            {
              "type": "Feature",
              "geometry": {
                "type": "MultiPolygon",
                "coordinates": {
                  "": ""
                }
              },
              "properties": {}
            }
          ],
          false
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#cfcdca",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          15,
          1,
          16,
          4,
          20,
          11
        ]
      }
    }
  ]
}
==17884== Uncaught Exception: TypeError: geometry.coordinates.map is not a function
    at toSimpleGeometry (src/expression/definitions/distance.ts:509:37)
    at Function.parse (src/expression/definitions/distance.ts:554:46)
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:68:63)
    at Function.parse (src/expression/definitions/match.ts:82:36)
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:68:63)
    at Function.parse (src/expression/compound_expression.ts:108:49)
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:70:21)
    at createExpression (src/expression/index.ts:152:27)
    at validateExpression (src/validate/validate_expression.ts:13:111)
    at validateElement (src/validate/validate_filter.ts:12:16)
    at validateObject (src/validate/validate_object.ts:40:32)
    at validateLayer (src/validate/validate_layer.ts:87:28)
    at validateArrayElement (src/validate/validate.ts:96:41)
    at validateArray (src/validate/validate_array.ts:40:32)
    at validateElement (src/validate/validate.ts:96:41)
    at validateObject (src/validate/validate_object.ts:40:32)
    at validate (src/validate/validate.ts:99:23)
    at validateStyleMin (src/validate_style.min.ts:35:28)
    at module.exports.fuzz (fuzzer/fuzz.js:14:5)
MS: 1 ChangeBit-; base unit: 8c153be3b506c03a6deda259fd1741a09745f883
0x21,0x72,0x9a,0x72,0x20,0x81,0x95,0x91,0x91,0x95,0xaa,0xaa,0x2b,
!r\232r \201\225\221\221\225\252\252+
artifact_prefix='./'; Test unit written to ./crash-c1fd0a8301b2ed40e30d1161290127a8528ba1e3
Base64: IXKaciCBlZGRlaqqKw==
Done 24106 runs in 8 second(s)
```

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
      "id": "road_service_track_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "match",
          [
            "get",
            "brunnel"
          ],
          [
            "bridge",
            "tunnel"
          ],
          false,
          true
        ],
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "service",
            "track"
          ],
          [
            "in",
            -3.1746446701868767e+108,
            [
              "distance",
              {
                "type": "Feature",
                "geometry": {
                  "type": "MultiLineString",
                  "coordinates": null
                },
                "properties": {
                  "N,M     ": true,
                  "Q(": 134550394212758
                }
              }
            ]
          ],
          false
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#cfcdca",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.2
          ],
          [
            "zoom"
          ],
          15,
          1,
          16,
          4,
          20,
          11
        ]
      }
    }
  ]
}
==18558== Uncaught Exception: TypeError: Cannot read properties of null (reading 'map')
    at toSimpleGeometry (src/expression/definitions/distance.ts:517:37)
    at Function.parse (src/expression/definitions/distance.ts:554:46)
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:68:63)
    at Function.parse (src/expression/definitions/in.ts:37:34)
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:68:63)
    at Function.parse (src/expression/definitions/match.ts:82:36)
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:68:63)
    at Function.parse (src/expression/compound_expression.ts:108:49)
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:70:21)
    at createExpression (src/expression/index.ts:152:27)
    at validateExpression (src/validate/validate_expression.ts:13:111)
    at validateElement (src/validate/validate_filter.ts:12:16)
    at validateObject (src/validate/validate_object.ts:40:32)
    at validateLayer (src/validate/validate_layer.ts:87:28)
    at validateArrayElement (src/validate/validate.ts:96:41)
    at validateArray (src/validate/validate_array.ts:40:32)
    at validateElement (src/validate/validate.ts:96:41)
    at validateObject (src/validate/validate_object.ts:40:32)
    at validate (src/validate/validate.ts:99:23)
    at validateStyleMin (src/validate_style.min.ts:35:28)
    at module.exports.fuzz (fuzzer/fuzz.js:14:5)
MS: 5 ChangeBinInt-ShuffleBytes-ChangeByte-ChangeByte-CopyPart-; base unit: 68fe32aaf3e1b31f1fd3c70c2578afc29510b74b
0x80,0x74,0xa1,0x1d,0xbd,0x1d,0xfe,0xff,0x94,0x91,0x73,0x74,0x5f,0x7a,0x60,0x65,0xde,0x67,0x31,0xde,0xb,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x8c,0x6b,0x2e,0x60,0x65,0xde,0x67,0x31,0xde,0xb,0x2e,0x2f,0xe8,0xe8,0xe8,0x4,0x61,0x7a,0x4,0x65,0x3a,0x5f,0x7a,0x29,0x72,0x65,0x40,0x65,0x72,0xaa,0x2b,
\200t\241\035\275\035\376\377\224\221st_z`e\336g1\336\013\000\000\000\000\000\000\000\214k.`e\336g1\336\013./\350\350\350\004az\004e:_z)re@er\252+
artifact_prefix='./'; Test unit written to ./crash-d00ef86c78bc6069449d1c33feea300c6b159333
Base64: gHShHb0d/v+UkXN0X3pgZd5nMd4LAAAAAAAAAIxrLmBl3mcx3gsuL+jo6ARhegRlOl96KXJlQGVyqis=
Done 72419 runs in 23 second(s)
```

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
      "id": "tunnel_transit_rail",
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
          [
            "distance",
            {
              "type": "Feature",
              "geometry": {
                "type": "MultiLineString",
                "coordinates": {
                  "       ": false,
                  "": false
                }
              },
              "properties": {}
            }
          ]
        ],
        [
          "match",
          [
            "get",
            "class"
          ],
          [
            "transit"
          ],
          true,
          false
        ]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.4
          ],
          [
            "zoom"
          ],
          14,
          0.4,
          15,
          0.75,
          20,
          2
        ]
      }
    }
  ]
}
==19338== Uncaught Exception: TypeError: geometry.coordinates.map is not a function
    at toSimpleGeometry (src/expression/definitions/distance.ts:517:37)
    at Function.parse (src/expression/definitions/distance.ts:554:46)
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:68:63)
    at Function.parse (src/expression/definitions/comparison.ts:89:31)
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:68:63)
    at Function.parse (src/expression/compound_expression.ts:108:49)
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:70:21)
    at createExpression (src/expression/index.ts:152:27)
    at validateExpression (src/validate/validate_expression.ts:13:111)
    at validateElement (src/validate/validate_filter.ts:12:16)
    at validateObject (src/validate/validate_object.ts:40:32)
    at validateLayer (src/validate/validate_layer.ts:87:28)
    at validateArrayElement (src/validate/validate.ts:96:41)
    at validateArray (src/validate/validate_array.ts:40:32)
    at validateElement (src/validate/validate.ts:96:41)
    at validateObject (src/validate/validate_object.ts:40:32)
    at validate (src/validate/validate.ts:99:23)
    at validateStyleMin (src/validate_style.min.ts:35:28)
    at module.exports.fuzz (fuzzer/fuzz.js:14:5)
MS: 1 ChangeByte-; base unit: 3e4c3cdf209c6bde4232bc8010cbf580c8a334f6
0xd8,0xff,0x95,0x5f,0x28,0x67,0x63,0x95,0x3a,0x8d,0x27,
\330\377\225_(gc\225:\215'
artifact_prefix='./'; Test unit written to ./crash-027edd984c592b91d6aed3cfb6397d4dd1749f9e
Base64: 2P+VXyhnY5U6jSc=
Done 10110 runs in 4 second(s)
```

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
      "id": "road_transit_rail_hatching",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "match",
          [
            "get",
            "brunnel"
          ],
          [
            "bridge",
            "tunnel"
          ],
          false,
          true
        ],
        [
          "==",
          [
            "get",
            "class"
          ],
          "transit"
        ]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-dasharray": [
          0.2,
          8
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.4
          ],
          [
            "distance",
            {
              "type": "Feature",
              "geometry": {
                "type": "MultiLineString"
              },
              "properties": {
                "44444": [
                  [
                    true,
                    false,
                    true,
                    false,
                    false
                  ],
                  false,
                  false,
                  false,
                  false
                ],
                "": false
              }
            }
          ],
          14.5,
          0,
          15,
          3,
          20,
          8
        ]
      }
    }
  ]
}
==20478== Uncaught Exception: TypeError: Cannot read properties of undefined (reading 'map')
    at toSimpleGeometry (src/expression/definitions/distance.ts:517:37)
    at Function.parse (src/expression/definitions/distance.ts:554:46)
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:68:63)
    at Function.parse (src/expression/definitions/interpolate.ts:106:25)
    at ParsingContext._parse (src/expression/parsing_context.ts:106:35)
    at ParsingContext.parse (src/expression/parsing_context.ts:70:21)
    at createExpression (src/expression/index.ts:152:27)
    at createPropertyExpression (src/expression/index.ts:304:24)
    at validateExpression (src/validate/validate_expression.ts:13:111)
    at validateSpec (src/validate/validate.ts:93:16)
    at validateProperty (src/validate/validate_property.ts:58:26)
    at validatePaintProperty (src/validate/validate_paint_property.ts:5:12)
    at validateElement (src/validate/validate_layer.ts:138:36)
    at validateObject (src/validate/validate_object.ts:40:32)
    at validateElement (src/validate/validate_layer.ts:129:24)
    at validateObject (src/validate/validate_object.ts:40:32)
    at validateLayer (src/validate/validate_layer.ts:87:28)
    at validateArrayElement (src/validate/validate.ts:96:41)
    at validateArray (src/validate/validate_array.ts:40:32)
    at validateElement (src/validate/validate.ts:96:41)
    at validateObject (src/validate/validate_object.ts:40:32)
    at validate (src/validate/validate.ts:99:23)
    at validateStyleMin (src/validate_style.min.ts:35:28)
    at module.exports.fuzz (fuzzer/fuzz.js:14:5)
MS: 1 InsertByte-; base unit: 2b0052f43b595ae2333b0edf78fe3eb0dd397ec4
0x27,0x0,0x9a,0x7a,0x73,0x73,0x73,0x73,0x73,0x73,0x73,0x73,0x73,0x73,0x73,0x73,0x73,0x73,0x73,0x73,0x73,0x74,0x45,0x72,0xff,0x28,0x91,0x91,0x95,0xaa,0xaa,0xab,
'\000\232zssssssssssssssssstEr\377(\221\221\225\252\252\253
artifact_prefix='./'; Test unit written to ./crash-c75998879ae143dc19c5601dbe87e5fc224869b7
Base64: JwCaenNzc3Nzc3Nzc3Nzc3Nzc3NzdEVy/yiRkZWqqqs=
Done 104619 runs in 36 second(s)
```

</details>