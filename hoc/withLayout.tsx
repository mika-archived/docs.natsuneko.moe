import React from "react";
import BlogLayout from "../components/layouts/Blog";
import WikiLayout from "../components/layouts/Wiki";

type Props = {
  layout: "Blog" | "Wiki";
  title: string;
};

const withLayout = (
  Component: React.ComponentType<any>,
  { title, layout }: Props
) => {
  if (layout === "Blog") {
    return (
      <BlogLayout title={title}>
        <Component />
      </BlogLayout>
    );
  }

  if (layout === "Wiki") {
    return (
      <WikiLayout title={title}>
        <Component />
      </WikiLayout>
    );
  }

  return <></>;
};

export default withLayout;
