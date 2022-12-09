const { withContent } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('@bizbash-media/package-shared/graphql/fragments/content-page');
const companyQueryFragment = require('@bizbash-media/package-shared/graphql/fragments/content-company');
const contactQueryFragment = require('@bizbash-media/package-shared/graphql/fragments/content-contact');
const company = require('@bizbash-media/package-shared/templates/content/company');
const content = require('@bizbash-media/package-shared/templates/content');
const contact = require('@bizbash-media/package-shared/templates/content/contact');
const venueSupplier = require('@bizbash-media/package-shared/templates/content/venue-supplier');
const document = require('@bizbash-media/package-shared/templates/content/document');

module.exports = (app) => {
  app.get('/*?company/:id(\\d{8})*', withContent({
    template: company,
    queryFragment: companyQueryFragment,
  }));
  app.get('/*?contact/:id(\\d{8})*', withContent({
    template: contact,
    queryFragment: contactQueryFragment,
  }));
  app.get('/*?venue/:id(\\d{8})*', withContent({
    template: venueSupplier,
    queryFragment,
  }));
  app.get('/*?supplier/:id(\\d{8})*', withContent({
    template: venueSupplier,
    queryFragment,
  }));
  app.get('/*?document/:id(\\d{8})*', withContent({
    template: document,
    queryFragment,
  }));
  app.get('/*?:id(\\d{8})*', withContent({
    template: content,
    queryFragment,
  }));
};
