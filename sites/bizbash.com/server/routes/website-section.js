const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const section = require('@bizbash-media/package-global/templates/website-section');
const queryFragment = require('@bizbash-media/package-global/graphql/fragments/website-section-page');

const venueDestinationFragment = require('../graphql/fragments/venue-destinations-page');
const eventplannerschoiceTemplate = require('../templates/website-section/eventplannerschoice');
const gatherGeeksTemplate = require('../templates/website-section/gathergeeks');
const supplierDirectory = require('../templates/website-section/supplier-directory');
const venueDirectory = require('../templates/website-section/venue-directory');
const bermudaTemplate = require('../templates/website-section/bermuda');
const industryBuzzTemplate = require('../templates/website-section/industry-buzz');
const venuesDestinationsTemplate = require('../templates/website-section/venues-destinations');
const sectionWithListsTemplate = require('../templates/website-section');

module.exports = (app) => {
  app.get('/:alias(supplier-directory)', withWebsiteSection({
    template: supplierDirectory,
    queryFragment,
  }));

  app.get('/:alias(venue-directory)', withWebsiteSection({
    template: venueDirectory,
    queryFragment,
  }));

  app.get('/:alias(on-demand/gathergeeks)', withWebsiteSection({
    template: gatherGeeksTemplate,
    queryFragment,
  }));

  app.get('/:alias(eventplannerschoice)', withWebsiteSection({
    template: eventplannerschoiceTemplate,
    queryFragment,
  }));

  app.get('/:alias(production-strategy)', withWebsiteSection({
    template: sectionWithListsTemplate,
    queryFragment,
  }));

  app.get('/:alias(catering-design)', withWebsiteSection({
    template: sectionWithListsTemplate,
    queryFragment,
  }));

  app.get('/:alias(event-tech-virtual)', withWebsiteSection({
    template: sectionWithListsTemplate,
    queryFragment,
  }));

  app.get('/:alias(venues-destinations)', withWebsiteSection({
    template: venuesDestinationsTemplate,
    queryFragment: venueDestinationFragment,
  }));

  app.get('/:alias(bizbash-lists)', withWebsiteSection({
    template: sectionWithListsTemplate,
    queryFragment,
  }));

  app.get('/:alias(bermuda)', withWebsiteSection({
    template: bermudaTemplate,
    queryFragment,
  }));

  app.get('/:alias(industry-buzz)', withWebsiteSection({
    template: industryBuzzTemplate,
    queryFragment,
  }));

  app.get('/:alias(hubilo)', withWebsiteSection({
    template: sectionWithListsTemplate,
    queryFragment,
  }));

  app.get('/:alias(on-demand)', withWebsiteSection({
    template: sectionWithListsTemplate,
    queryFragment,
  }));

  app.get('/:alias(meetings-trade-shows)', withWebsiteSection({
    template: sectionWithListsTemplate,
    queryFragment,
  }));

  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
