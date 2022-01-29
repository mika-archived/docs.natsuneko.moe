import { useEffect, useState } from "react";

const useLang = () => {
  const [lang, setLang] = useState("en-us");

  useEffect(() => {
    const path = window.location.pathname;
    const lang = path.split("/")[1];

    setLang(lang);
  }, []);

  return lang;
};

export default useLang;
