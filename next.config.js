const { withContentlayer } = require("next-contentlayer");
const { i18n } = require("./next-i18next.config.js");

module.exports = withContentlayer({
  reactStrictMode: true,
  trailingSlash: true,
  i18n,
  async redirects() {
    return [
      {
        source: "/en-US/animation-auto-assignment/:path*",
        // prettier-ignore
        destination: "https://docs.natsuneko.cat/en-us/animation-auto-assignment/",
        locale: false,
        permanent: true,
      },
      {
        source: "/ja-JP/animation-auto-assignment/:path*",
        // prettier-ignore
        destination: "https://docs.natsuneko.cat/ja-jp/animation-auto-assignment/",
        locale: false,
        permanent: true,
      },
      {
        source: "/en-US/animator-controller-tool-post-processing/:path*",
        // prettier-ignore
        destination: "https://docs.natsuneko.cat/en-us/animator-controller-tool-post-processing/",
        locale: false,
        permanent: true,
      },
      {
        source: "/ja-JP/animator-controller-tool-post-processing/:path*",
        // prettier-ignore
        destination: "https://docs.natsuneko.cat/ja-jp/animator-controller-tool-post-processing/",
        locale: false,
        permanent: true,
      },
      {
        source: "/en-US/automatic-material-duplicator/:path*",
        // prettier-ignore
        destination: "https://docs.natsuneko.cat/en-us/automatic-material-duplicator/",
        locale: false,
        permanent: true,
      },
      {
        source: "/ja-JP/automatic-material-duplicator/:path*",
        // prettier-ignore
        destination: "https://docs.natsuneko.cat/ja-jp/automatic-material-duplicator/",
        locale: false,
        permanent: true,
      },
      {
        source: "/en-US/constraint-by-humanoid/:path*",
        // prettier-ignore
        destination: "https://docs.natsuneko.cat/en-us/constraint-by-humanoid/",
        locale: false,
        permanent: true,
      },
      {
        source: "/ja-JP/constraint-by-humanoid/:path*",
        // prettier-ignore
        destination: "https://docs.natsuneko.cat/ja-jp/constraint-by-humanoid/",
        locale: false,
        permanent: true,
      },
      {
        source: "/en-US/drag-and-drop-support/:path*",
        // prettier-ignore
        destination: "https://docs.natsuneko.cat/en-us/drag-and-drop-support/",
        locale: false,
        permanent: true,
      },
      {
        source: "/ja-JP/drag-and-drop-support/:path*",
        // prettier-ignore
        destination: "https://docs.natsuneko.cat/ja-jp/drag-and-drop-support/",
        locale: false,
        permanent: true,
      },
      {
        source: "/en-US/material-split-view/:path*",
        // prettier-ignore
        destination: "https://docs.natsuneko.cat/en-us/material-split-view/",
        locale: false,
        permanent: true,
      },
      {
        source: "/ja-JP/material-split-view/:path*",
        // prettier-ignore
        destination: "https://docs.natsuneko.cat/ja-jp/material-split-view/",
        locale: false,
        permanent: true,
      },
      {
        source: "/en-US/text-mesh-creator/:path*",
        // prettier-ignore
        destination: "https://docs.natsuneko.cat/en-us/text-mesh-creator/",
        locale: false,
        permanent: true,
      },
      {
        source: "/ja-JP/text-mesh-creator/:path*",
        // prettier-ignore
        destination: "https://docs.natsuneko.cat/ja-jp/text-mesh-creator/",
        locale: false,
        permanent: true,
      },
      {
        source: "/en-US/refined-animation-property/:path*",
        // prettier-ignore
        destination: "https://docs.natsuneko.cat/en-us/refined-animation-property/",
        locale: false,
        permanent: true,
      },
      {
        source: "/ja-JP/refined-animation-property/:path*",
        // prettier-ignore
        destination: "https://docs.natsuneko.cat/ja-jp/refined-animation-property/",
        locale: false,
        permanent: true,
      },
    ];
  },
});
