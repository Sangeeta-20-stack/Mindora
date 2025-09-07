// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en/translation.json";
import hi from "./locales/hi/translation.json";
import mr from "./locales/mr/translation.json";
import bn from "./locales/bn/translation.json";
import ta from "./locales/ta/translation.json";
import te from "./locales/te/translation.json";
import gu from "./locales/gu/translation.json";
import ml from "./locales/ml/translation.json"; // ✅ Malayalam added

i18n
  .use(LanguageDetector) // detects browser language
  .use(initReactI18next) // passes i18n to react-i18next
  .init({
    resources: {
      en: { translation: en },
      hi: { translation: hi },
      mr: { translation: mr },
      bn: { translation: bn },
      ta: { translation: ta },
      te: { translation: te },
      gu: { translation: gu },
      ml: { translation: ml }, // ✅ Malayalam here
    },
    fallbackLng: "en", // default if translation missing
    interpolation: {
      escapeValue: false, // react already escapes
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"], // store user choice
    },
  });

export default i18n;
