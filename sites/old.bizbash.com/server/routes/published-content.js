const events = require('@bizbash-media/package-shared/templates/published-content/events');
const supplierEvents = require('@bizbash-media/package-shared/templates/published-content/supplier-events');
const webinars = require('@bizbash-media/package-shared/templates/published-content/webinars');
const whitePapers = require('@bizbash-media/package-shared/templates/published-content/white-papers');
const videos = require('@bizbash-media/package-shared/templates/published-content/videos');
const podcasts = require('@bizbash-media/package-shared/templates/published-content/podcasts');
const documents = require('@bizbash-media/package-shared/templates/published-content/documents');

module.exports = (app) => {
  app.get('/events', (_, res) => { res.marko(events); });
  app.get('/supplier-events', (_, res) => { res.marko(supplierEvents); });
  app.get('/webinars', (_, res) => { res.marko(webinars); });
  app.get('/white-papers', (_, res) => { res.marko(whitePapers); });
  app.get('/videos', (_, res) => { res.marko(videos); });
  app.get('/podcasts', (_, res) => { res.marko(podcasts); });
  app.get('/downloads', (_, res) => { res.marko(documents); });
};
