import { useState } from "react";
// import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";

type Langs = "en" | "ru";

const LanguageSwitcher = () => {
  const [lang, setLang] = useState<Langs>("en");
  const [animating, setAnimating] = useState(false);
  //   const { i18n } = useTranslation();

  const changeLanguage = () => {
    const l = lang === "en" ? "ru" : "en";
    setAnimating(true);
    setLang(l);
    // i18n.changeLanguage(l);
    console.log(l);
    setTimeout(() => setAnimating(false), 500);
  };

  return (
    <Button variant="outline" size="icon" onClick={() => changeLanguage()}>
      <div
        className={`h-[1.2rem] w-[1.2rem] flex items-center justify-center ${
          animating ? "animation-scale" : ""
        }`}
      >
        {lang === "en" ? <div>En</div> : <div>Py</div>}
      </div>
    </Button>
  );
};

export default LanguageSwitcher;
