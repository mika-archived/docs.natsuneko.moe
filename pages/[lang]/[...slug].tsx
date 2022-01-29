import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allBlogs, allWikis } from ".contentlayer/data";

import withLayout from "../../hoc/withLayout";

import type { Blog, Wiki } from ".contentlayer/types";
import type { GetStaticPaths, GetStaticProps } from "next";

type PathProps = {
  lang: string;
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
  const ja = [...allBlogs, ...allWikis].map((w) => ({
    slug: normalizePath(w.slug),
    lang: "ja-jp",
  }));
  const en = [...allBlogs, ...allWikis].map((w) => ({
    slug: normalizePath(w.slug),
    lang: "en-us",
  }));
  const paths = [...ja, ...en].map((w) => ({ params: w }));

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps: GetStaticProps<PageProps, PathProps> = async ({
  params,
}) => {
  const entry = [...allBlogs, ...allWikis].find((w) =>
    isArrayEquals(normalizePath(w.slug), params.slug)
  );

  return { props: { entry } };
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
