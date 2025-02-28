const { withWebsiteSection } = require('@mindful-web/marko-web/middleware');
const queryFragment = require('@mindful-web/marko-web-theme-monorail/graphql/fragments/website-section-page');
const section = require('../templates/website-section');

const supplierDirectory = require('../templates/website-section/supplier-directory');
const venueDirectory = require('../templates/website-section/venue-directory');

module.exports = (app) => {
  app.get('/:alias(supplier-directory)', withWebsiteSection({
    template: supplierDirectory,
    queryFragment,
  }));
  app.get('/:alias(venue-directory)', withWebsiteSection({
    template: venueDirectory,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
