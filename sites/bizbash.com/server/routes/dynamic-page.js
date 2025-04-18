const { withDynamicPage } = require('@mindful-web/marko-web/middleware');
const queryFragment = require('@mindful-web/marko-web-theme-monorail/graphql/fragments/dynamic-page');
const page = require('@bizbash-media/package-global/templates/dynamic-page');
const contactUs = require('@bizbash-media/package-global/templates/dynamic-page/contact-us');

module.exports = (app) => {
  app.get('/page/:alias(contact-us)', withDynamicPage({
    template: contactUs,
    queryFragment,
  }));
  app.get('/page/:alias([\\w\\d-]{1,})', withDynamicPage({
    template: page,
    queryFragment,
  }));
};
