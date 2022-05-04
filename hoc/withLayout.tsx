import React from "react";

import FallbackHeader from "components/FallbackHeader";
import Markdown from "components/Markdown";
import BlogLayout from "components/layouts/Blog";
import WikiLayout from "components/layouts/Wiki";

type Props = {
  layout: "Blog" | "Wiki";
  lang?: string;
  title: string;
  sidebar?: string[];
  fallback: boolean;
};

const withLayout = (
  Component: React.ComponentType<any>,
  { title, lang, layout, fallback, sidebar }: Props
) => {
  if (layout === "Blog") {
    return (
      <div className="flex flex-col w-full h-full">
        {fallback && <FallbackHeader lang={lang} />}
        <BlogLayout title={title}>
          <Component components={{ ...Markdown }} />
        </BlogLayout>
      </div>
    );
  }

  if (layout === "Wiki") {
    return (
      <div className="flex flex-col w-full">
        {fallback && <FallbackHeader lang={lang} />}
        <WikiLayout title={title} sidebar={sidebar}>
          <Component components={{ ...Markdown }} />
        </WikiLayout>
      </div>
    );
  }

  return (
    <>
      {fallback && <FallbackHeader lang={lang} />}
      <Component components={{ ...Markdown }} />
    </>
  );
};

export default withLayout;
