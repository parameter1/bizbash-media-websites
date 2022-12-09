const gql = require('graphql-tag');

module.exports = gql`
fragment VenueDestinationsFragment on WebsiteSection {
  id
  name
  description
  hierarchy {
    id
    alias
    name
  }
  children(input: { pagination: { limit: 0 } }) {
    edges {
      node {
        id
        alias
        name
        children(input: { pagination: { limit: 0 }, sort: { field: name, order: asc } }) {
          edges {
            node {
              id
              alias
              name
            }
          }
        }
      }
    }
  }

}
`;
