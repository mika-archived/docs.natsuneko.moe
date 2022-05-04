import React from "react";
import Head from "next/head";
import { normalizeTitle } from "utils/contents";

import Sidebar from "components/Sidebar";

type Props = {
  title: string;
  sidebar?: string[];
};

const Layout: React.FC<Props> = ({ title, sidebar, children }) => {
  return (
    <>
      <Head>
        <title>{title} | Natsuneko Laboratory Docs</title>
      </Head>
      <div className="container flex flex-row h-full mx-auto my-4">
        {sidebar && (
          <div className="shrink-0">
            <Sidebar items={sidebar} />
          </div>
        )}
        <div>
          <h2 className="my-4 text-4xl font-bold">{normalizeTitle(title)}</h2>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
