import React, { useContext, useState } from "react";
import InternalLink from "next/link";

import { DrawerContext } from "components/Drawer";
import ExternalLink from "components/ExternalLink";
import FontAwesome from "components/FontAwesome/Icon";
import useLang from "hooks/useLang";

const Header: React.VFC = () => {
  const lang = useLang();
  const context = useContext(DrawerContext);

  return (
    <header className="border-b border-theme-secondary text-theme-white bg-theme-primary">
      <div className="container mx-auto">
        <div className="flex flex-row items-center h-16">
          <div className="flex flex-row items-center flex-grow ">
            <div
              className="block w-12 text-2xl cursor-pointer md:hidden"
              onClick={() => {
                context.setDrawerState(!context.drawerState);
              }}
            >
              <FontAwesome fa="solid" icon="bars" />
            </div>
            <h1 className="flex-grow text-2xl">
              <InternalLink href={`/${lang}/`}>
                natsuneko.moe | Docs
              </InternalLink>
            </h1>
          </div>
          <div className="hidden w-64 md:inline-block">
            <ExternalLink href="https://github.com/natsuneko-laboratory/docs.natsuneko.moe">
              <div className="flex flex-row items-center w-64 text-theme-white">
                <FontAwesome fa="brands" icon="github" className="text-2xl" />
                <span className="overflow-hidden whitespace-nowrap text-ellipsis">
                  &nbsp;natsuneko-laboratory/docs.natsuneko.moe
                </span>
              </div>
            </ExternalLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
