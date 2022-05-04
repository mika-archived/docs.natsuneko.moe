import React from "react";
import InternalLink from "next/link";

import ExternalLink from "components/ExternalLink";
import FontAwesome from "components/FontAwesome/Icon";
import useLang from "hooks/useLang";

const Header: React.VFC = () => {
  const lang = useLang();

  return (
    <header className="border-b bg-neutral-800 text-neutral-200 border-zinc-600">
      <div className="container mx-auto">
        <div className="flex flex-row items-center h-16">
          <h1 className="flex-grow text-2xl">
            <InternalLink href={`/${lang}/`}>natsuneko.moe | Docs</InternalLink>
          </h1>
          <div className="hidden w-64 md:inline-block">
            <ExternalLink href="https://github.com/natsuneko-laboratory/docs.natsuneko.moe">
              <div className="flex flex-row items-center w-64">
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
