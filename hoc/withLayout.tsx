import React from "react";

import FallbackHeader from "../components/FallbackHeader";
import BlogLayout from "../components/layouts/Blog";
import WikiLayout from "../components/layouts/Wiki";

type Props = {
  layout: "Blog" | "Wiki";
  lang?: string;
  title: string;
  fallback: boolean;
};

const withLayout = (
  Component: React.ComponentType<any>,
  { title, lang, layout, fallback }: Props
) => {
  if (layout === "Blog") {
    return (
      <div className="flex flex-col w-full">
        {fallback && <FallbackHeader lang={lang} />}
        <BlogLayout title={title}>
          <Component />
        </BlogLayout>
      </div>
    );
  }

  if (layout === "Wiki") {
    return (
      <div className="flex flex-col w-full">
        {fallback && <FallbackHeader lang={lang} />}
        <WikiLayout title={title}>
          <Component />
        </WikiLayout>
      </div>
    );
  }

  return (
    <>
      {fallback && <FallbackHeader lang={lang} />}
      <Component />
    </>
  );
};

export default withLayout;
