import { GetStaticProps } from "next";
import { i18n } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const getStaticProps: GetStaticProps = async ({ locale }) => {
  if (process.env.NODE_ENV === "development") {
    if (i18n !== null) {
      await i18n.reloadResources();
    }
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export { getStaticProps };
