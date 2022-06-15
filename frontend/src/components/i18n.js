import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import  LanguageDetector  from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
    // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, //this escapes by default, not needed by react
    },
    resources: {
      en: {
        translation: {
          // here translations are placed...
        }
      }
    }
  });

export default i18n;