const gql = require('graphql-tag');
const { withContent } = require('@mindful-web/marko-web/middleware');

module.exports = (params = {}) => withContent({
  ...params,
  loaderQueryFragment: gql`
    fragment WithContentPrimarySectionFragment on Content {
      primarySection {
        id
        alias
      }
    }
  `,
});
