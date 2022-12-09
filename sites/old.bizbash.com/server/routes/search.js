const template = require('@bizbash-media/package-shared/templates/search');

module.exports = (app) => {
  app.get('/search', (_, res) => { res.marko(template); });
};
