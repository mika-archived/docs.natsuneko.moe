import React from "react";
import InternalLink from "next/link";
import { useTranslation } from "next-i18next";

import ExternalLink from "./ExternalLink";

const START_YEAR = 2022;

const Footer: React.VFC = () => {
  const { t } = useTranslation("common");
  const now = new Date().getFullYear();
  const year = START_YEAR === now ? START_YEAR : `${START_YEAR} - ${now}`;

  return (
    <footer className="border-t text-neutral-200 border-neutral-600 bg-neutral-600">
      <div className="container mx-auto">
        <div className="flex flex-row-reverse items-center h-24 ml-2 md:ml-0">
          <div className="flex flex-row flex-wrap gap-x-4 gap-y-2">
            <div>
              <ExternalLink
                className="hover:underline"
                href="https://natsuneko.fanbox.cc"
              >
                {t("global.blog")}
              </ExternalLink>
            </div>
            <div>
              <InternalLink href="/privacy">
                <a className="hover:underline">
                  {t("global.privacy_and_cookie")}
                </a>
              </InternalLink>
            </div>
            <div>&copy; Natsuneko Laboratory {year}</div>
          </div>
          <div className="flex-grow"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
