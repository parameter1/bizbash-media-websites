const startServer = require('@bizbash-media/package-global/start-server');

const routes = require('./server/routes');
const siteConfig = require('./config/site');
const coreConfig = require('./config/core');
const redirectHandler = require('./redirect-handler');

const { log } = console;

module.exports = startServer({
  rootDir: __dirname,
  coreConfig,
  siteConfig,
  routes,
  redirectHandler,
}).then(() => log('Website started!')).catch(e => setImmediate(() => { throw e; }));
