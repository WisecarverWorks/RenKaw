import i18next from 'i18next';
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
  .use(Backend)
  .init({
    backend: {
      // for all available options read the backend's repository readme file
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    }
});

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
