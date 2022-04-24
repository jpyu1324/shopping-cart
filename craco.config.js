const CracoAlias = require("craco-alias");
const { ESLINT_MODES } = require("@craco/craco");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        tsConfigPath: "tsconfig.paths.json"
      }
    }
  ],
  eslint: {
    mode: ESLINT_MODES.file
  }
};
