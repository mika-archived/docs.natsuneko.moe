const { withContentlayer } = require("next-contentlayer");
const { i18n } = require("./next-i18next.config");

module.exports = withContentlayer()({
  reactStrictMode: true,
  trailingSlash: true,
  i18n,
});
