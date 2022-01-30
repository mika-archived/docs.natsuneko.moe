import React from "react";
import InternalLink from "next/link";
import { useTranslation } from "next-i18next";

import ExternalLink from "./ExternalLink";
import { useRouter } from "next/router";

const START_YEAR = 2022;

const Footer: React.VFC = () => {
  const { t } = useTranslation("common");
  const now = new Date().getFullYear();
  const year = START_YEAR === now ? START_YEAR : `${START_YEAR} - ${now}`;

  return (
    <footer className="border-t border-zinc-600 bg-zinc-600">
      <div className="container mx-auto">
        <div className="flex flex-row-reverse items-center h-32">
          <div className="flex flex-row">
            <div className="mx-4">
              <ExternalLink
                className="hover:underline"
                href="https://natsuneko.fanbox.cc"
              >
                Blog
              </ExternalLink>
            </div>
            <div className="mx-4">
              <InternalLink href="/privacy">
                <a className="hover:underline">{t("privacy_and_cookie")}</a>
              </InternalLink>
            </div>
            <div className="ml-4">&copy; Natsuneko Laboratory {year}</div>
          </div>
          <div className="flex-grow"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
