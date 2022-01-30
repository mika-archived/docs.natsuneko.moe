import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { allBlogs, allWikis } from ".contentlayer/data";

import withLayout from "../hoc/withLayout";

import type { Blog, Wiki } from ".contentlayer/types";
import type { GetStaticPaths, GetStaticProps } from "next";

type PathProps = {
  slug: string[];
};

type PageProps = {
  entry: Blog | Wiki;
};

const normalizePath = (path: string): string[] =>
  path
    .replace(/\/index$/, "/")
    .replace(/^(wiki|blog)\//, "")
    .split("/")
    .filter((w) => w !== "");

const isArrayEquals = (a: string[], b: string[]): boolean =>
  a.every((w) => b.includes(w));

const getStaticPaths: GetStaticPaths<PathProps> = () => {
  const entries = [...allBlogs, ...allWikis].map((w) => ({
    slug: normalizePath(w.slug),
  }));

  const locales = ["ja-jp", "en-us"];
  const paths = entries.flatMap((w) =>
    locales.map((locale) => ({ params: { slug: w.slug }, locale }))
  );

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
    isArrayEquals(normalizePath(w.slug), params.slug)
  );

  return {
    props: { ...(await serverSideTranslations(locale, ["common"])), entry },
  };
};

const Entry: React.VFC<PageProps> = ({ entry }) => {
  const Component = useMDXComponent(entry.body.code);

  return withLayout(Component, {
    title: entry.title,
    layout: entry.type,
  });
};

export { getStaticPaths, getStaticProps };

export default Entry;
