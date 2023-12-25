import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      // translation file path
      loadPath: "/assets/i18n/{{ns}}/{{lng}}.json",
    },
    fallBackLng: "fa",
    //disabled in production mode
    debug: false,
    ns: ["echart", "hero", "sidebar", "upcoming"],
    interpolation: {
      escapeValue: false,
      formatSeperator: ",",
    },
    react: {
      wait: true,
    },
  });

export default i18n;
