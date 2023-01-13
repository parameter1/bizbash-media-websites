const gam = require('./gam');
const identityX = require('./identity-x');
const nativeX = require('./native-x');
const navigation = require('./navigation');
const newsletter = require('./newsletter');
const search = require('./search');

module.exports = {
  // Module configs
  gam,
  identityX,
  nativeX,
  navigation,
  newsletter,
  search,
  // Site configs
  company: 'Connect Biz, LLC',
  p1events: {
    tenant: 'bizbash',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'bizbash.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.bizbash.com/files/base/bizbash/bzb/image/static/logo/bzb-black-white-no-tagline.png?h=60&auto=format,compress',
      srcset: [
        'https://img.bizbash.com/files/base/bizbash/bzb/image/static/logo/bzb-black-white-no-tagline.png?h=60&auto=format,compress&dpr=2 2x',
      ],
      width: '198',
      height: '60',
    },
    footer: {
      src: 'https://img.bizbash.com/files/base/bizbash/bzb/image/static/logo/bzb-black-white-no-tagline.png?h=60&auto=format,compress',
      srcset: [
        'https://img.bizbash.com/files/base/bizbash/bzb/image/static/logo/bzb-black-white-no-tagline.png?h=60&auto=format,compress&dpr=2 2x',
      ],
      width: '149',
      height: '45',
    },
    corporate: {
      alt: 'Bonhill Logo',
      href: 'https://www.bonhillplc.com',
      src: 'https://p1-cms-assets.imgix.net/files/base/bonhill/all/image/static/bonhill-logo.svg?w=200&auto=format,compress',
      srcset: [
        'https://p1-cms-assets.imgix.net/files/base/bonhill/all/image/static/bonhill-logo.svg?w=200&auto=format,compress&dpr=2 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'instagram', href: 'https://www.instagram.com/bizbash' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/bizbash' },
    { provider: 'facebook', href: 'https://www.facebook.com/BizBash/' },
    { provider: 'twitter', href: 'https://twitter.com/BizBash' },
    { provider: 'pinterest', href: 'https://www.pinterest.com/bizbash/' },
    { provider: 'youtube', href: 'https://www.youtube.com/c/BizBash' },
    { provider: 'tiktok', href: 'https://www.tiktok.com/@bizbash' },
  ],
  podcastLinks: [],
  gtm: {
    containerId: 'GTM-5TWCFJ',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'connect@bizbash.com',
    sendFrom: 'BizBash.com <noreply@bizbash.com>',
    logo: 'https://img.bizbash.com/files/base/bizbash/bzb/image/static/logo/site_logo.png?h=60',
    bgColor: '#25292d', // @todo Move to styling!
    blockedEmails: [
      'salmanibhram@gmail.com',
      'salmanibrahim010@gmail.com',
      'elhameedhamza@gmail.com',
      'elhameedhamza95@gmail.com',
      'alahmadianaktor@gmail.com',
      'zamansman@gmail.com',
      'brand@weare4evr.com',
      'hello@weare4evr.com',
      'hello@weare4EVR.com',
    ],
  },
  setSearchSortFieldToScore: false,
  publishedContent: {
    webinars: {
      title: 'Webinars',
      description: '<p>BizBash is excited to bring our audience the latest knowledge and innovation from #eventprofs with our webinars and virtual showcases. Take a look at the latest trends in event tech, design, food and beverage, and more!</p><p>Looking to host a webinar with BizBash? Inquire <a href="https://www.bizbashlive.com/advertise" title="Advertise with Bizbash">here</a>.</p><p>Interested in sharing your insights with the BizBash virtual audience? Submit to speak <a href="https://www.bizbash.com/production-strategy/programming-entertainment/article/21109266/call-for-speakers-how-should-event-planners-kick-off-a-new-decade" title="Call for Speaking">here</a>.</p>',
    },
    whitepapers: {
      title: 'Whitepapers & eBooks',
      description: '',
    },
  },
  magazine: {
    publicationIds: ['5b2a4e6c0305572b008b45ae'],
  },
};
