import { useTranslation } from "next-i18next";
import React from "react";
import useLang from "../hooks/useLang";

type Props = {
  lang?: string;
};

const Header: React.VFC<Props> = ({ lang: contentLang }) => {
  const lang = useLang();
  const { t } = useTranslation();

  return (
    <div>
      {lang !== contentLang && (
        <header className="flex flex-col justify-center min-h-[64px] py-4 align-bottom border-b border-theme-secondary text-theme-white bg-theme-primary">
          <div className="container mx-auto">
            <p>{t("global.fallback_contents")}</p>
          </div>
        </header>
      )}
    </div>
  );
};

export default Header;
