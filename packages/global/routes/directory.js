const { withWebsiteSection } = require('@mindful-web/marko-web/middleware');
const MarkoWebSearchConfig = require('@mindful-web/marko-web-search/config');
const MarkoWebSearch = require('@mindful-web/marko-web-search');
const queryFragment = require('../graphql/fragments/website-directory-section-page');
const directory = require('../templates/directory/index');

module.exports = (app, rootAlias = 'directory') => {
  const config = new MarkoWebSearchConfig({
    resultsPerPage: { default: 18 },
    contentTypes: ['Company'],
  });

  const searchMiddleware = (req, res, next) => {
    res.locals.$markoWebSearch = new MarkoWebSearch({
      config,
      query: {
        ...req.query,
      },
    });
    next();
  };

  app.get(`/:alias(${rootAlias})`, searchMiddleware, withWebsiteSection({
    template: directory,
    queryFragment,
  }));
  app.get(`/:alias(${rootAlias}/[a-z0-9-/]+)`, searchMiddleware, withWebsiteSection({
    template: directory,
    queryFragment,
  }));
};
