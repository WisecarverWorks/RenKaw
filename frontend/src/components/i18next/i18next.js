import i18n from 'i18next';
import i18next from 'i18next';

import { initReactI18next } from 'react-i18next';
import  LanguageDetector  from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';

i18next.init({
    partialBundledLanguages: true,
    ns: [],
    resources: {}
  });
  i18next.addResourceBundle('en', 'namespace1', {
    key: 'hello from namespace 1'
  });
  // or via backend
  // i18next.loadNamespaces(['myNamespace1', 'myNamespace2'])
  // i18next.loadLanguages(['de', 'fr'])
  // etc.
  
  
  i18next
    .use(resourcesToBackend((language, namespace, callback) => {
      import(`./locales/${language}/${namespace}.json`)
        .then((resources) => {
          callback(null, resources)
        })
        .catch((error) => {
          callback(error, null)
        })
    }))
    .init({ /* other options */ })


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
            description: {
                part1: 'Edit <1>src/App.js</1> and save to reload.',
                part2: 'Learn React'
              }
            }
          },
          de: {
            translation: {
              description: {
                part1: 'Ändere <1>src/App.js</1> und speichere um neu zu laden.',
                part2: 'Lerne React'
              }
            }
        }
       }
    });

export default i18n;