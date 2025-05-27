// const subscribe = require('./subscribe');
const privacyPolicy = require('./privacy-policy');

const topics = [
  { href: '/production-strategy', label: 'Production & Strategy' },
  { href: '/catering-design', label: 'Catering & Design' },
  { href: '/event-tech-virtual', label: 'Event Tech & Virtual' },
  { href: '/venues-destinations', label: 'Venues & Destinations' },
  { href: '/meetings-trade-shows', label: 'Meetings & Trade Shows' },
  { href: '/sports', label: 'Sports' },
  { href: '/page/build-your-brand-with-bizbash', label: 'Advertise' },
  { href: '/events', label: 'Events' },
];

const resources = [
  { href: '/on-demand', label: 'On-Demand' },
  { href: '/white-papers', label: 'White Papers & E-Books' },
  { href: '/on-demand/gathergeeks', label: 'Podcast' },
  { href: '/magazine/5b2a4e6c0305572b008b45ae', label: 'Magazine' },
  { href: '/events', label: 'Events' },
  { href: 'https://informaconnect.com/bizbash-event-experience-awards/', label: 'Awards', target: '_blank' },
  { href: 'https://cloud.mail.bizbash.com/BizBashBuzz_Subscribe', label: 'Subscribe', target: '_blank' },
];

const utilities = [
  { href: '/page/about-us', label: 'About Us' },
  { href: '/page/build-your-brand-with-bizbash', label: 'Advertise' },
  { href: '/page/get-featured', label: 'Get Featured' },
  { href: '/press-releases', label: 'Press Releases' },
  { href: 'https://cloud.mail.bizbash.com/BizBashBuzz_Subscribe', label: 'Newsletter Signup', target: '_blank' },
  { href: 'https://cloud.mail.bizbash.com/BizbashMagazineSubscribe', label: 'Subscribe to Magazine', target: '_blank' },
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
const venuesDestinations = [
  { href: '/venues-destinations/canada', label: 'Canada' },
  { href: '/venues-destinations/united-states', label: 'United States' },
  { href: '/venues-destinations/global', label: 'Global' },
];
const meetingsTradeShows = [
  { href: '/meetings-trade-shows/meetings', label: 'Meetings' },
  { href: '/meetings-trade-shows/strategy', label: 'Strategy' },
  { href: '/meetings-trade-shows/trade-shows', label: 'Trade Shows' },
  { href: '/meetings-trade-shows/people', label: 'People' },
  { href: '/meetings-trade-shows/places', label: 'Places' },
  { href: '/meetings-trade-shows/trends', label: 'Trends' },
];

const mobileMenu = {
  primary: topics,
  secondary: resources,
};

module.exports = {
  promos: [],
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
      when: ['/venues-destinations'],
      secondary: { items: resources },
      tertiary: { items: [] },
      primary: {
        items: venuesDestinations,
      },
    },
    {
      when: ['/meetings-trade-shows'],
      secondary: { items: resources },
      tertiary: { items: [] },
      primary: {
        items: meetingsTradeShows,
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
        { href: '/industry-buzz', label: 'Industry Buzz' },
        { href: '/bizbash-lists', label: 'BizBash Lists' },
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
    items: [
      privacyPolicy,
      { href: 'https://privacyportal-eu-cdn.onetrust.com/dsarwebform/c1f53e84-9f05-4169-a854-85052b63c50b/5f26b553-52cc-4973-a761-295d5634a6b6.html', label: 'CCPA: Do Not Sell My Personal Info' },
      { href: '/page/contact-us', label: 'Contact Us' },
      { href: '/site-map', label: 'Site Map' },
    ],
  },
};
