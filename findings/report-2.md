# Table of contents

[1. TypeError: Cannot read properties of undefined (reading 'type')](#1)
[2. TypeError: Cannot read properties of null (reading 'type')](#2)

## 1

### Stack

```
TypeError: Cannot read properties of undefined (reading 'type')
    at Object.validateSource [as source] (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/validate/validate_source.ts:22:16)
    at validate (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/validate/validate.ts:96:42)
    at validateObject (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/validate/validate_object.ts:41:32)
    at validate (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/validate/validate.ts:99:23)
    at validateObject (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/validate/validate_object.ts:41:32)
    at validate (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/validate/validate.ts:99:23)
    at validateStyleMin (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/validate_style.min.ts:35:28)
    at /home/joona/Projects/maplibre-testing-proto/testharness/src/fuzz.test.ts:117:13
    at Property.predicate (file:///home/joona/Projects/maplibre-testing-proto/testharness/node_modules/fast-check/lib/esm/check/property/Property.js:14:54)
    at Property.run (file:///home/joona/Projects/maplibre-testing-proto/testharness/node_modules/fast-check/lib/esm/check/property/Property.generic.js:46:33)
```

### Example

```
{
  "sources": {}
}
```

## 2

### Stack

```
TypeError: Cannot read properties of null (reading 'type')
    at Object.validateSource [as source] (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/validate/validate_source.ts:22:16)
    at validate (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/validate/validate.ts:96:42)
    at validateObject (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/validate/validate_object.ts:41:32)
    at validate (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/validate/validate.ts:99:23)
    at validateObject (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/validate/validate_object.ts:41:32)
    at validate (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/validate/validate.ts:99:23)
    at validateStyleMin (/home/joona/Projects/maplibre-testing-proto/maplibre-style-spec/src/validate_style.min.ts:35:28)
    at /home/joona/Projects/maplibre-testing-proto/testharness/src/fuzz.test.ts:117:13
    at Property.predicate (file:///home/joona/Projects/maplibre-testing-proto/testharness/node_modules/fast-check/lib/esm/check/property/Property.js:14:54)
    at Property.run (file:///home/joona/Projects/maplibre-testing-proto/testharness/node_modules/fast-check/lib/esm/check/property/Property.generic.js:46:33)
```

### Example

```
{
  "sources": {}
}
```

