import React from "react";
import Head from "next/head";
import Script from "next/script";
import { appWithTranslation, useTranslation } from "next-i18next";
import { DefaultSeo } from "next-seo";

import nextI18nextConfig from "../next-i18next.config";
import GlobalLayout from "../components/layouts/Global";

import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DefaultSeo
        defaultTitle={t("root.title")}
        titleTemplate={`%s | ${t("root.title")}`}
      />
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
      <Script
        src="https://kit.fontawesome.com/691aea7802.js"
        crossOrigin="anonymous"
      />
    </>
  );
};

export default appWithTranslation(App, nextI18nextConfig);
