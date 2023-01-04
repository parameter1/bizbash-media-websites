const gql = require('graphql-tag');

module.exports = gql`
fragment ContentPageFragment on Content {
  id
  name
  labels
  teaser(input: { useFallback: false, maxLength: null })
  body
  status
  published
  siteContext {
    path
  }
  company {
    id
    name
    siteContext {
      path
    }
  }
  taxonomy(input: { type: Category }) {
    edges {
      node {
        id
        name
        hierarchy {
          id
          name
        }
      }
    }
  }
  primarySection {
    id
    name
    alias
    canonicalPath
    hierarchy {
      id
      name
      alias
      canonicalPath
    }
  }
  primaryImage {
    id
    src(input: { useCropRectangle: true, options: { auto: "format,compress", q: 70 } })
    alt
    caption
    credit
    isLogo
    cropDimensions {
      aspectRatio
    }
    primaryImageDisplay
  }
  images(input:{ pagination: { limit: 100 }, sort: { order: values } }) {
    edges {
      node {
        id
        src(input: { options: { auto: "format,compress", q: 70 } })
        alt
        displayName
        caption
        credit
        isLogo
      }
    }
  }
  companies: relatedContent(input: { includeContentTypes: [Company] }) {
    edges {
      node {
        id
      }
    }
  }
  gating {
    surveyType
    surveyId
  }
  userRegistration {
    isCurrentlyRequired
    accessLevels
  }
  ... on ContentVideo {
    embedCode
  }
  ... on ContentNews {
    source
    byline
  }
  ... on ContentEvent {
    endDate
    startDate
  }
  ... on ContentArticle {
    sidebars
  }
  ... on ContentTopList {
    relatedTo(input:{ pagination: { limit: 100 }, sort: { order: values } }) {
      edges {
        node {
          id
          type
          shortName
          canonicalPath
          images(input:{ pagination: { limit: 100 }, sort: { order: values } }) {
            edges {
              node {
                id
                src
                alt
                displayName
              }
            }
          }
        }
      }
    }
  }
  ... on ContentVenue {
    enableRmi
    spaces(input:{ pagination: { limit: 25 } }) {
      edges {
        node {
          id
          name
          area
          capacityMin
          capacityMaxSeated
          capacityMaxStanding
          floorPlan {
            id
            src
          }
        }
      }
    }
  }
  ... on ContentWebinar {
    linkUrl
    startDate
    sponsors {
      edges {
        node {
          id
          name
          siteContext {
            path
          }
        }
      }
    }
  }
  ... on Addressable {
    address1
    address2
    cityStateZip
    country
  }
  ... on Contactable {
    phone
    tollfree
    fax
    website
    title
    mobile
    publicEmail
  }
  ... on ContentCompany {
    email
  }
  ... on SocialLinkable {
    socialLinks {
      provider
      url
      label
    }
  }
  ... on Media {
    fileSrc
  }
  ... on Authorable {
    authors {
      edges {
        node {
          id
          name
          type
          siteContext {
            path
          }
        }
      }
    }
    contributors {
      edges {
        node {
          id
          name
          type
          siteContext {
            path
          }
        }
      }
    }
    photographers {
      edges {
        node {
          id
          name
          type
          siteContext {
            path
          }
        }
      }
    }
  }
}
`;
