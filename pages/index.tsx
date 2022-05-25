import React from "react";
import InternalLink from "components/InternalLink";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { allWikis } from "contentlayer/generated";
import { normalizePath, normalizeTitle, extractLocale } from "utils/contents";

import type { GetStaticProps } from "next";
import { useRouter } from "next/router";

type PathProps = {
  locale;
};

type PageProps = {
  categories: Record<
    string,
    { path: string; title: string; priority: number }[]
  >;
};

const getStaticProps: GetStaticProps<PageProps, PathProps> = async ({
  locale,
}) => {
  const entries = allWikis
    .filter((w) => !!w.category)
    .map((w) => {
      return {
        path: normalizePath(w.slug).join("/"),
        title: w.title,
        category: w.category,
        priority: w.priority ?? 0,
      };
    });

  const categories: PageProps["categories"] = {};

  for (const entry of entries) {
    if (categories[entry.category]) {
      categories[entry.category].push(entry);
    } else {
      categories[entry.category] = [entry];
    }
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      categories,
    },
  };
};

const Home: React.VFC<PageProps> = ({ categories }) => {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col w-full">
        <div className="w-full bg-theme-primary text-theme-white">
          <div className="container mx-auto my-8">
            <h2 className="text-4xl font-bold">{t("root.title")}</h2>
            <p>いろいろあるよ！</p>
          </div>
        </div>
        <div className="container mx-auto my-8">
          <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
            {Object.keys(categories).map((key) => {
              const items = categories[key].sort(
                (a, b) => a.priority - b.priority
              );

              return (
                <div
                  key={key}
                  className="border rounded border-theme-secondary"
                >
                  <h4 className="px-4 py-2 text-lg font-bold border-b bg-theme-primary border-theme-secondary text-theme-white">
                    {key}
                  </h4>
                  <ul className="px-4 py-2">
                    {items.map((item) => {
                      const [slug, locale] = extractLocale(
                        normalizePath(item.path)
                      );
                      if (locale && router.locale !== locale) return;

                      const url = slug.join("/");

                      return (
                        <li key={url}>
                          <InternalLink href={url}>
                            {normalizeTitle(item.title)}
                          </InternalLink>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

export { getStaticProps };
