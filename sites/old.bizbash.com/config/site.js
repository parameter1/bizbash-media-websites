const sectionListLayouts = require('./sectionListLayouts');
const navigation = require('./navigation');
const identityX = require('./identity-x');
const nativeX = require('./native-x');
const gam = require('./gam');
const search = require('./search');

module.exports = {
  sectionListLayouts,
  navigation,
  nativeX,
  identityX,
  gam,
  search,
  company: 'Connect Biz, LLC',
  publishedContent: {
    webinars: {
      title: 'Webinars',
      description: '<p>BizBash is excited to bring our audience the latest knowledge and innovation from #eventprofs with our webinars and virtual showcases. Take a look at the latest trends in event tech, design, food and beverage, and more!</p><p>Looking to host a webinar with BizBash? Inquire <a href="https://www.bizbashlive.com/advertise" title="Advertise with Bizbash">here</a>.</p><p>Interested in sharing your insights with the BizBash virtual audience? Submit to speak <a href="https://www.bizbash.com/production-strategy/programming-entertainment/article/21109266/call-for-speakers-how-should-event-planners-kick-off-a-new-decade" title="Call for Speaking">here</a>.</p>',
    },
  },
  logos: {
    navbar: {
      src: 'https://img.bizbash.com/files/base/bizbash/bzb/image/static/logo/bzb-black-white-no-tagline.png?h=60',
      srcset: [
        'https://img.bizbash.com/files/base/bizbash/bzb/image/static/logo/bzb-black-white-no-tagline.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.bizbash.com/files/base/bizbash/bzb/image/static/logo/bzb-black-white-footer-tagline.png?h=90',
      srcset: [
        'https://img.bizbash.com/files/base/bizbash/bzb/image/static/logo/bzb-black-white-footer-tagline.png?h=180 2x',
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
  gtm: {
    containerId: process.env.GTM_CONTAINER_ID || 'GTM-5TWCFJ',
  },
  wufoo: {
    userName: 'NOT_SET',
  },
  magazines: {
    description: 'We cover the event industry like no other including: planning, production, new openings, events and trends in marketing, design and style. BizBash also offers resources for event professionals like our venues and suppliers directory, trade shows, and magazines.',
  },
  contactUs: {
    branding: {
      bgColor: '#005ea0', // @todo Move to styling!
      logo: 'https://img.bizbash.com/files/base/bizbash/bzb/image/static/logo/site_logo.png?h=60',
    },
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
};
