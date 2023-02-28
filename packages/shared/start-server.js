const newrelic = require('newrelic');
const { startServer } = require('@parameter1/base-cms-marko-web');
const { set, get, getAsObject } = require('@parameter1/base-cms-object-path');
const identityX = require('@parameter1/base-cms-marko-web-identity-x');
const loadInquiry = require('@parameter1/base-cms-marko-web-inquiry');

const document = require('./components/document');
const components = require('./components');
const fragments = require('./fragments');
const sharedRoutes = require('./routes');
const idxRouteTemplates = require('./templates/user');

const buildNativeXConfig = require('./native-x/build-config');

const routes = (siteRoutes, siteConfig) => (app) => {
  // Handle submissions on /__inquiry
  loadInquiry(app);
  // Shared/global routes (all sites)
  sharedRoutes(app, siteConfig);
  // Load site routes.
  siteRoutes(app, siteConfig);
};

module.exports = (options = {}) => {
  const { onStart } = options;
  return startServer({
    ...options,
    routes: routes(options.routes, options.siteConfig),
    document: options.document || document,
    components: options.components || components,
    fragments: options.fragments || fragments,
    onStart: async (app) => {
      if (typeof onStart === 'function') await onStart(app);
      app.set('trust proxy', 'loopback, linklocal, uniquelocal');

      // Setup GAM.
      const gamConfig = get(options, 'siteConfig.gam');
      if (gamConfig) set(app.locals, 'GAM', gamConfig);

      // Setup NativeX.
      const nativeXConfig = getAsObject(options, 'siteConfig.nativeX');
      set(app.locals, 'nativeX', buildNativeXConfig(nativeXConfig));

      // Setup IdentityX.
      const idxConfig = getAsObject(options, 'siteConfig.identityX');
      identityX(app, idxConfig, { templates: idxRouteTemplates });
    },
    onAsyncBlockError: (e) => newrelic.noticeError(e),
  });
};
