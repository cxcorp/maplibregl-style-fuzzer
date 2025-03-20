# maplibregl-style-fuzzer

A structured, generative, somewhat mutation-based coverage guided fuzzer for the maplibre-gl-js style spec.

This is a fuzzer based on Jazzer.js to fuzz `@maplibre/maplibre-gl-style-spec`'s JSON style spec at the JavaScript library level.

## Discovered crashes

See [./findings](./findings).

## Install and run

1. Install Node v22
2. Clone this repo
3. Clone https://github.com/cxcorp/jazzer.js to a directory next to this clone (it's referred to with `file:../jazzer.js` in package.json)
4. `cd jazzer.js` and install its npm packages and `npm run prebuild` the native fuzzer (you might need to install a compiler) and then `npm run build` the workspace
5. cd to this repo
6. run npm install
7. mkdir corpus
8. npm start
9. wait 0-3000 seconds
10. profit

## Motivation

I was looking at MapLibreGL and noticed that many places just suggest using someone else's hosted style JSON via an URL. I was immediately curious as to what is the worst a malicious JSON could do.

After manually looking at the [maplibre-style-spec](https://github.com/maplibre/maplibre-style-spec) repo which contains the validators, I noticed multiple places that access things like `objectWithConstantKeys[attackerControlledValue]` which do funny things if I pass `"__proto__"` or `{valueOf: null}` as a value. I decided to try to fuzz the style validators. I tried to find a quick way to cover a lot of ground without having to handicraft fast-check arbitraries according to maplibre-style-spec, so the first version of the fuzzer (see branch `self-made-prototype`) worked like this:

1. Start with a large, existing style which hopefully uses as many style features as possible
2. Recurse the style objects and increment an index for each object key and value (and array value etc.)
3. This recursion gives us a range between 0 and `n` (for our example style, something like 5000) of positions where we can inject something nasty, e.g. in an object key name or a value
4. Generate a random index and a random arbitrary malicious value, replace the value, then try to validate the style
5. Gather every error, deduplicate them by the first couple of stack trace lines
6. Run for as long as you have patience to wait (just leave it for an hour?)
7. ???
8. Profit?

After finding success, I decided to investigate existing coverage guided JS fuzzers to make the fuzzing less black box. I discovered jazzer.js and jsfuzz, of which jazzer.js showed deeper instrumentation and used the well known libFuzzer.

This is the latest version, which uses jazzer.js.

## License

### My code

Copyright 2025 Joona Heikkilä

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

### Others' code

`seeds_full_json/style.json`: originally the OpenFreeMap Liberty style with small bits and pieces mashed from other things, see license in https://github.com/hyperknot/openfreemap/blob/main/LICENSE.md
