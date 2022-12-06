const subscribe = require('./subscribe');
const privacyPolicy = require('./privacy-policy');

const topics = [
  { href: '/production-strategy', label: 'Production & Strategy' },
  { href: '/catering-design', label: 'Catering & Design' },
  { href: '/event-tech-virtual', label: 'Event Tech & Virtual' },
  { href: '/venues-destinations', label: 'Venues & Destinations' },
  { href: '/meetings-trade-shows', label: 'Meetings & Trade Shows' },
];

const resources = [
  { href: '/on-demand', label: 'On-Demand' },
  { href: '/white-papers', label: 'White Papers & E-Books' },
  { href: '/on-demand/gathergeeks', label: 'Podcast' },
  { href: '/magazine/5b2a4e6c0305572b008b45ae', label: 'Magazines' },
  { href: '/events', label: 'Events' },
  { href: 'https://www.bizbashlive.com/EEA21', label: 'Awards', target: '_blank' },
  { href: 'https://www.bizbashlive.com/advertise', label: 'Advertise', target: '_blank' },
  { href: 'https://cloud.mail.bizbash.com/BizBashBuzz_Subscribe', label: 'Subscribe', target: '_blank' },
  { href: '/hubilo', label: 'BizBash x Hubilo', modifiers: ['gold'] },
];

const utilities = [
  { href: 'https://industrialmedia.dragonforms.com/loading.do?omedasite=ien_signup', label: 'Newsletter Signup', target: '_blank' },
  { href: 'https://tcc.dragonforms.com/loading.do?omedasite=TCC1_IEnew', label: 'Subscribe to Magazine', target: '_blank' },
];

const productionStrategy = [
  { href: '/production-strategy/audiovisual-lighting', label: 'AV & Lighting' },
  { href: '/production-strategy/experiential-marketing-activations-sponsorships', label: 'Experiential' },
  { href: '/production-strategy/event-management', label: 'Management' },
  { href: '/production-strategy/event-production-fabrication', label: 'Production' },
  { href: '/production-strategy/opinion-experts', label: 'Opinion' },
  { href: '/production-strategy/programming-entertainment', label: 'Entertainment' },
  { href: '/production-strategy/registration-ticketing', label: 'Registration' },
  { href: '/production-strategy/social-events', label: 'Social Events' },
  { href: '/production-strategy/strategy', label: 'Strategy' },
];

const cateringDesign = [
  { href: '/catering-design/beverages', label: 'Beverages' },
  { href: '/catering-design/food-trends', label: 'Food Trends' },
  { href: '/catering-design/event-design-decor', label: 'Event Design & Decor' },
  { href: '/catering-design/florals', label: 'Florals' },
  { href: '/catering-design/gifts-swag', label: 'Gifts & Swag' },
  { href: '/catering-design/rentals', label: 'Rentals' },
  { href: '/catering-design/tabletop', label: 'Tabletop' },
  { href: '/catering-design/printing-graphics', label: 'Printing & Graphics' },
];
const eventTechVirtual = [
  { href: '/event-tech-virtual/event-tech-tools', label: 'Event Tech & Tools' },
  { href: '/event-tech-virtual/hybrid-virtual-event-production', label: 'Hybrid & Virtual Event Production' },
  { href: '/event-tech-virtual/strategy', label: 'Strategy' },
  { href: '/event-tech-virtual/virtual-entertainment-gifts', label: 'Virtual Entertainment & Gifts' },
];
const industry = [
  { href: '/industry/adviser-moves', label: 'Adviser Moves' },
  { href: '/industry/broker-dealers', label: 'Broker-Dealers' },
  { href: '/industry/clearing-firms', label: 'Clearing Firms' },
  { href: '/industry/custodians', label: 'Custodians' },
  { href: '/industry/earnings', label: 'Earnings' },
  { href: '/industry/independent-broker-dealers', label: 'Independent Broker-Dealers' },
  { href: '/industry/mergers-acquisitions', label: 'Mergers & Acquisitions' },
  { href: '/industry/regional-brokerages', label: 'Regional Brokerages' },
  { href: '/industry/registered-investment-advisers', label: 'Registered Investment Advisers' },
  { href: '/industry/wirehouses', label: 'Wirehouses' },
];
const fintech = [
  { href: '/fintech/cybersecurity', label: 'Cybersecurity' },
  { href: '/fintech/hardware', label: 'Hardware' },
  { href: '/fintech/online', label: 'Online' },
  { href: '/fintech/social-media', label: 'Social Media' },
  { href: '/fintech/software', label: 'Software' },
];
const regulationLegislation = [
  { href: '/regulation-and-legislation/regulation', label: 'Regulation' },
  { href: '/regulation-and-legislation/legislation', label: 'Legislation' },
];

const mobileMenu = {
  primary: topics,
  secondary: resources,
};

module.exports = {
  type: 'navbar-c',
  promos: [
    {
      title: subscribe.label,
      callToAction: subscribe.label,
      link: subscribe.href,
    },
  ],
  user: {
    items: [
      // {
      //   href: '/page/account',
      //   label: 'Sign In',
      //   when: 'logged-out',
      //   modifiers: ['user'],
      // },
      // {
      //   href: '/login',
      //   label: 'Sign In',
      //   when: 'logged-out',
      //   modifiers: ['user'],
      // },
      // {
      //   href: '/logout',
      //   label: 'Sign Out',
      //   when: 'logged-in',
      //   modifiers: ['user'],
      // },
    ],
    tools: [
      // {
      //   href: '/page/account',
      //   label: 'Sign In',
      //   when: 'logged-out',
      //   modifiers: ['user'],
      // },
      // {
      //   href: '/login',
      //   label: 'Sign In',
      //   when: 'logged-out',
      //   modifiers: ['user'],
      // },
      // {
      //   href: '/user/profile',
      //   label: 'Modify profile',
      //   when: 'logged-in',
      //   modifiers: ['user'],
      // },
      // {
      //   href: '/logout',
      //   label: 'Sign Out',
      //   when: 'logged-in',
      //   modifiers: ['user'],
      // },
    ],
  },
  mobileMenu,
  topics,
  primary: {
    items: topics,
  },
  secondary: {
    items: resources,
  },
  tertiary: {
    items: [],
  },
  contexts: [
    {
      when: ['/production-strategy'],
      secondary: { items: resources },
      tertiary: { items: [] },
      primary: {
        items: productionStrategy,
      },
    },
    {
      when: ['/catering-design'],
      secondary: { items: resources },
      tertiary: { items: [] },
      primary: {
        items: cateringDesign,
      },
    },
    {
      when: ['/event-tech-virtual'],
      secondary: { items: resources },
      tertiary: { items: [] },
      primary: {
        items: eventTechVirtual,
      },
    },
    {
      when: ['/industry'],
      secondary: { items: resources },
      tertiary: { items: [] },
      primary: {
        items: industry,
      },
    },
    {
      when: ['/fintech'],
      secondary: { items: resources },
      tertiary: { items: [] },
      primary: {
        items: fintech,
      },
    },
    {
      when: ['/regulation-legislation'],
      secondary: { items: resources },
      tertiary: { items: [] },
      primary: {
        items: regulationLegislation,
      },
    },
  ],
  // toggleMenu: {
  //   col1: {
  //     label: 'Retirement',
  //     items: [],
  //   },
  //   col2: {
  //     label: 'Regulation',
  //     items: [],
  //   },
  //   col3: {
  //     label: 'Technology',
  //     items: [],
  //   },
  //   col4: {
  //     label: 'Topic 4',
  //     items: [],
  //   },
  //   col5: {
  //     label: 'Topic 5',
  //     items: [],
  //   },
  // },
  toggleMenu: {
    about: {
      // label: 'About',
      // items: utilities,
    },
    leftColumn: {
      label: 'Topics',
      items: [
        ...topics,
      ],
    },
    midColumn: {
      items: [
        ...resources,
      ],
    },
    rightColumn: {
      label: 'User Tools',
      items: utilities,
    },
  },
  'sticky-footer': {
    items: [
      { href: 'https://cloud.mail.bizbash.com/BizBashBuzz_Subscribe', label: 'Subscribe', target: '_blank' },
      { href: '/venue-directory', label: 'Find a Venue' },
      { href: '/supplier-directory', label: 'Find a Supplier' },
      { href: '/page/privacy-policy', label: 'Privacy Policy' },
    ],
  },
  footer: {
    col1: {
      label: 'Topics',
      colspan: 5,
      items: topics,
    },
    col2: {
      label: 'Resources',
      items: resources,
    },
    items: [
      privacyPolicy,
      { href: '/page/contact-us', label: 'Contact Us' },
      { href: '/site-map', label: 'Site Map' },
    ],
  },
};
