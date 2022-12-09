const startServer = require('@bizbash-media/package-shared/start-server');
const document = require('@bizbash-media/package-shared/components/document');
const components = require('@bizbash-media/package-shared/components');
const fragments = require('@bizbash-media/package-shared/fragments');

const routes = require('./server/routes');
const siteConfig = require('./config/site');
const coreConfig = require('./config/core');

const { log } = console;

module.exports = startServer({
  rootDir: __dirname,
  coreConfig,
  siteConfig,
  document,
  components,
  fragments,
  routes,
  redirectHandler: ({ from }) => {
    if (from === '/marketplace') {
      const to = Math.random() * 10 > 5 ? '/venue-directory' : '/supplier-directory';
      return { to, code: 302 };
    }
    const pattern = /(\/story\/[0-9]*|\/listing\/[0-9]*|\/gallery\/[0-9]*)/;
    const matches = pattern.exec(from);
    if (matches && matches[0] !== from) return { to: matches[0] };
    return null;
  },
}).then(() => log('Website started!')).catch(e => setImmediate(() => { throw e; }));
