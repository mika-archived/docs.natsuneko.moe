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
        <header className="bg-purple-800/30 text-slate-200 min-h-full h-16 flex flex-col justify-center align-bottom">
          <div className="container mx-auto">
            <p>{t("global.fallback_contents")}</p>
          </div>
        </header>
      )}
    </div>
  );
};

export default Header;
