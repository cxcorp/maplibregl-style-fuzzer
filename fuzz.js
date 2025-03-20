const { validateStyleMin } = require("@maplibre/maplibre-gl-style-spec");
const {
  generateStylePayloadFromBuffer,
  isIgnoredError,
} = require("./internal-fuzzing-tools");

/**
 * @param {Buffer} data
 */
module.exports.fuzz = function (data) {
  const payload = generateStylePayloadFromBuffer(data);

  try {
    validateStyleMin(payload);
  } catch (e) {
    if (isIgnoredError(e)) {
      return;
    }

    console.log(JSON.stringify(payload, null, 2))
    throw e;
  }
};
