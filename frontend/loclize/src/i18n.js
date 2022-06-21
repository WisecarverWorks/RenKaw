import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LanguageDetector } from 'i18next-browser-languagedetector';

i18n
    // detect your language
    .use(LanguageDetector)

    // pass ht ei18n instanct to react-i18next
    .use(initReactI18next)    
    // init i18next
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: { 
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    // here we will place translations...
                }
            }
        }
    });

export default i18n;