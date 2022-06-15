import Backend from 'i18next-chained-backend';
import i18next from 'i18next';
import Locize from 'i18next-locize-backend'; // if you want to load from a service
import HttpApi from 'i8next-http-backend'; // for Http fallback

i18next
  .use(Backend)
  .init({
      backend: {
        backends: [
          Locize,  // primary
          HttpApi  // fallback
        ],
        backendOptions: [{
          projectId: 'myLocizeProjectId'
        }, {
          loadPath: '/locales/{{lng}}/{{ns}}.json' // http api load path for my own fallback
        }]
    }
});
// As with all modules you can either pass the constructor function (class) to the i18next.use or a concrete instance.
// If you don't use a module loader it will be added to window.i18nextChainedBackend
// {
    // array of existing i18next backends from source = https://www.i18next.com/plugins-and-utils.html#backends
    // backends: [],
    // // array of options in order of backends above
    // backendOptions: []

// }
// we can pass options in:   on construction:  calling init:  ===> Giving us a more complete sample;


