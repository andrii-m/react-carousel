const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@assets": "src/assets",
    "@components": "src/components",
    "@data": "src/data",
    "@pages": "src/pages"
  })(config);

  return config;
};
