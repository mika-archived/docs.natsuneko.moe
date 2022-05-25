import React, { useContext, useState } from "react";
import { normalizeTitle } from "utils/contents";

import Sidebar from "components/Sidebar";
import WikiHeader from "components/WikiHeader";
import Drawer, { DrawerContext } from "components/Drawer";

type Props = {
  title: string;
  sidebar?: { title: string; url: string }[];
};

const Layout: React.FC<Props> = ({ title, sidebar, children }) => {
  const context = useContext(DrawerContext);

  return (
    <div className="flex flex-col w-full h-full mx-auto md:container md:flex-row">
      {sidebar && (
        <>
          <div className="hidden w-64 h-full mr-4 border-r shrink-0 md:block border-neutral-200">
            <Sidebar items={sidebar} />
          </div>
          <Drawer isOpen={context.drawerState} onClose={() => {}}>
            <div className="z-50 w-full bg-white">
              <Sidebar items={sidebar} />
            </div>
          </Drawer>
        </>
      )}
      <div className="container w-full mx-auto">
        <h2 className="pb-4 my-4 text-4xl font-bold border-b border-neutral-200">
          {normalizeTitle(title)}
        </h2>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
