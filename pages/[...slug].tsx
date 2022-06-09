import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import { allBlogs, allWikis } from "contentlayer/generated";
import Alert from "components/Alert";
import withLayout from "hoc/withLayout";
import { normalizePath, extractLocale, isArrayEquals } from "utils/contents";

import type { Blog, Wiki } from "contentlayer/generated";
import type { GetStaticPaths, GetStaticProps } from "next";

type PathProps = {
  slug: string[];
};

type PageProps = {
  entry: Blog | Wiki;
  sidebar: { title: string; url: string }[];
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
  const alLEntries = [...allBlogs, ...allWikis];
  console.log([...params.slug, locale]);
  const entry =
    alLEntries.find((w) => {
      return isArrayEquals(
        [...params.slug, locale],
        [...normalizePath(w.slug)].filter((w) => w !== undefined)
      );
    }) ??
    alLEntries.find((w) => {
      return isArrayEquals([...params.slug], [...normalizePath(w.slug)]);
    }) ??
    alLEntries.find((w) => {
      return isArrayEquals(
        [...params.slug, "index", locale],
        [...normalizePath(w.slug)].filter((w) => w !== undefined)
      );
    });

  const hasCategory = (obj?: Blog | Wiki): obj is Wiki => {
    return obj && Object.prototype.hasOwnProperty.call(obj, "category");
  };
  const items = allWikis
    .map((w) => ({
      ...w,
      normalizedSlug: extractLocale(normalizePath(w.slug))[0].join("/"),
    }))
    .filter((w) => {
      const [path, mdxLocale] = extractLocale(normalizePath(w.slug));
      if (mdxLocale) {
        return locale === mdxLocale;
      }

      return true;
    })
    .map((w) => ({ ...w, slug: w.normalizedSlug }))
    .filter((w) => {
      if (hasCategory(w) && hasCategory(entry)) {
        return entry.category === w.category;
      }

      return false;
    })
    .sort((a, b) => a.priority - b.priority);

  console.log(entry);

  const fallback = !/\.(ja-JP|en-US)\.mdx$/.exec(entry._raw.sourceFileName);

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      entry,
      sidebar: items.map((w) => ({
        title: w.title,
        url: normalizePath(w.slug).join("/"),
      })),
      fallback,
    },
  };
};

const Entry: React.VFC<PageProps> = ({ entry, sidebar, fallback }) => {
  const Component = useMDXComponent(entry.body.code);

  return (
    <>
      <NextSeo title={entry.title} />
      {withLayout(Component, {
        title: entry.title,
        layout: entry.type,
        lang: entry.lang,
        fallback,
        sidebar: (entry as any).sidebar ? sidebar : undefined,
      })}
    </>
  );
};

export { getStaticPaths, getStaticProps };

export default Entry;
