const { withMagazineIssue, withMagazinePublication } = require('@parameter1/base-cms-marko-web/middleware');
const publication = require('@bizbash-media/package-shared/templates/magazine/publication');
const publicationFragment = require('@bizbash-media/package-shared/graphql/fragments/magazine-publication-page');
const issue = require('@bizbash-media/package-shared/templates/magazine/issue');
const issueFragment = require('@bizbash-media/package-shared/graphql/fragments/magazine-issue-page');

module.exports = (app) => {
  app.get('/magazine/:id([a-fA-F0-9]{24})', withMagazinePublication({
    template: publication,
    queryFragment: publicationFragment,
  }));

  app.get('/magazine/:id(\\d+)', withMagazineIssue({
    template: issue,
    queryFragment: issueFragment,
  }));
};
