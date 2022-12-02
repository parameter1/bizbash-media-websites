const gql = require('graphql-tag');

module.exports = gql`

fragment LatestOpinionListBlockContentFragment on Content {
  id
  type
  shortName
  teaser(input: { useFallback: false, maxLength: null })
  labels
  siteContext {
    path
  }
  published
  primarySection {
    id
    name
    fullName
    canonicalPath
  }
  primaryImage {
    id
    src(input: { options: { auto: "format,compress" } })
    alt
    isLogo
  }
  ... on Authorable {
    authors {
      edges {
        node {
          id
          name
          title
          type
          siteContext {
            path
          }
          primaryImage {
            id
            src(input: { options: { auto: "format,compress" } })
            alt(input: { append: "Headshot" })
          }
        }
      }
    }
  }
}

`;
