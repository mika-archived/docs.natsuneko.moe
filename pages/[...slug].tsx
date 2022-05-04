import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { allBlogs, allWikis } from "contentlayer/generated";

import withLayout from "hoc/withLayout";
import { normalizePath, extractLocale, isArrayEquals } from "utils/contents";

import type { Blog, Wiki } from "contentlayer/generated";
import type { GetStaticPaths, GetStaticProps } from "next";

type PathProps = {
  slug: string[];
};

type PageProps = {
  entry: Blog | Wiki;
  fallback: boolean;
};

const getStaticPaths: GetStaticPaths<PathProps> = () => {
  const entries = [...allBlogs, ...allWikis].map((w) => ({
    slug: normalizePath(w.slug),
  }));

  const locales = ["ja-JP", "en-US"];
  const paths = entries.flatMap((w) => {
    const [path, loc] = extractLocale(w.slug);
    if (loc == undefined) {
      const localesPaths: any[] = [];
      for (const locale of locales) {
        localesPaths.push({
          params: { slug: w.slug, fallback: "true" },
          locale,
        });
      }

      return localesPaths;
    }

    return { params: { slug: path }, locale: loc };
  });

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps: GetStaticProps<PageProps, PathProps> = async ({
  params,
  locale,
}) => {
  const entry = [...allBlogs, ...allWikis].find((w) =>
    isArrayEquals(normalizePath(w.slug), [...params.slug, locale])
  );

  const fallback = !/\.(ja-JP|en-US)\.mdx$/.exec(entry._raw.sourceFileName);

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      entry,
      fallback,
    },
  };
};

const Entry: React.VFC<PageProps> = ({ entry, fallback }) => {
  const Component = useMDXComponent(entry.body.code, {
    h1: "",
  });

  return withLayout(Component, {
    title: entry.title,
    layout: entry.type,
    lang: entry.lang,
    fallback,
    sidebar: (entry as any).sidebar,
  });
};

export { getStaticPaths, getStaticProps };

export default Entry;
