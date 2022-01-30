const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "default",
    locales: ["default", "ja-JP", "en-US"],
    localeDetection: false,
  },
  keySeparator: ".",
  localePath: path.resolve("./public/locales"),
};
