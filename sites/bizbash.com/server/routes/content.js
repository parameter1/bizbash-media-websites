const withContent = require('@bizbash-media/package-global/middleware/with-content');
const queryFragment = require('@bizbash-media/package-global/graphql/fragments/content-page');
const contact = require('@bizbash-media/package-global/templates/content/contact');
const company = require('../templates/content/company');
const content = require('../templates/content');

module.exports = (app) => {
  app.get('/*?contact/:id(\\d{8})*', withContent({
    template: contact,
    queryFragment,
  }));

  app.get('/*?company/:id(\\d{8})*', withContent({
    template: company,
    queryFragment,
  }));

  app.get('/*?/:id(\\d{8})/*|/:id(\\d{8})(/|$)', withContent({
    template: content,
    queryFragment,
  }));
};
