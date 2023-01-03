const gql = require('graphql-tag');

module.exports = gql`

fragment DirecotryPinnedContentListFragment on Content {
  id
  type
  labels
  typeTitled: type(input: { format: titleize })
  shortName
  teaser(input: { maxLength: 500, useFallback: false, truncatedSuffix: "" })
  siteContext {
    path
  }
  company {
    id
    type
    name
    siteContext {
      path
    }
  }
  primarySection {
    id
    name
    fullName
    canonicalPath
  }
  primaryImage {
    id
    src(input: { options: { auto: "format,compress", q: 70 } })
    alt
    isLogo
  }
  userRegistration {
    isCurrentlyRequired
  }
  ... on Addressable {
    address1
    address2
    city
    state
    zip
    country
  }
  taxonomy(input: { pagination: { limit: 100 } }) {
    edges {
      node {
        id
        name
        type
      }
    }
  }
}

`;
