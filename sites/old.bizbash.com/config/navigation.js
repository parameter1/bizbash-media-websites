const topics = [
  { href: '/production-strategy', label: 'Production & Strategy' },
  { href: '/catering-design', label: 'Catering & Design' },
  { href: '/event-tech-virtual', label: 'Event Tech & Virtual' },
  { href: '/venues-destinations', label: 'Venues & Destinations' },
  { href: '/meetings-trade-shows', label: 'Meetings & Trade Shows' },
];

const secondaryItems = [
  { href: '/on-demand', label: 'On-Demand' },
  { href: '/white-papers', label: 'White Papers & E-Books' },
  { href: '/on-demand/gathergeeks', label: 'Podcast' },
  { href: '/magazine/5b2a4e6c0305572b008b45ae', label: 'Magazines' },
  { href: '/events', label: 'Events' },
  { href: 'https://www.bizbashlive.com/EEA21', label: 'Awards', target: '_blank' },
  { href: 'https://www.bizbashlive.com/advertise', label: 'Advertise', target: '_blank' },
  { href: 'https://cloud.mail.bizbash.com/BizBashBuzz_Subscribe', label: 'Subscribe', target: '_blank' },
];

const footerItems = [
  { href: 'https://cloud.mail.bizbash.com/BizBashBuzz_Subscribe', label: 'Subscribe', target: '_blank' },
  { href: '/venue-directory', label: 'Find a Venue' },
  { href: '/supplier-directory', label: 'Find a Supplier' },
  { href: '/page/privacy-policy', label: 'Privacy Policy' },
];
const tertiaryItems = [
  { href: '/search', label: 'Search', icon: 'search' },
];

module.exports = {
  primary: { items: topics },
  secondary: { items: secondaryItems },
  tertiary: { items: tertiaryItems },
  contexts: [
    {
      when: ['/production-strategy'],
      secondary: { items: secondaryItems },
      tertiary: { items: tertiaryItems },
      primary: {
        items: [
          { href: '/production-strategy/audiovisual-lighting', label: 'AV & Lighting' },
          { href: '/production-strategy/experiential-marketing-activations-sponsorships', label: 'Experiential' },
          { href: '/production-strategy/event-management', label: 'Management' },
          { href: '/production-strategy/event-production-fabrication', label: 'Production' },
          { href: '/production-strategy/opinion-experts', label: 'Opinion' },
          { href: '/production-strategy/programming-entertainment', label: 'Entertainment' },
          { href: '/production-strategy/registration-ticketing', label: 'Registration' },
          { href: '/production-strategy/social-events', label: 'Social Events' },
          { href: '/production-strategy/strategy', label: 'Strategy' },
        ],
      },
    },
    {
      when: ['/catering-design'],
      secondary: { items: secondaryItems },
      tertiary: { items: tertiaryItems },
      primary: {
        items: [
          { href: '/catering-design/beverages', label: 'Beverages' },
          { href: '/catering-design/food-trends', label: 'Food Trends' },
          { href: '/catering-design/event-design-decor', label: 'Event Design & Decor' },
          { href: '/catering-design/florals', label: 'Florals' },
          { href: '/catering-design/gifts-swag', label: 'Gifts & Swag' },
          { href: '/catering-design/rentals', label: 'Rentals' },
          { href: '/catering-design/tabletop', label: 'Tabletop' },
          { href: '/catering-design/printing-graphics', label: 'Printing & Graphics' },
        ],
      },
    },
    {
      when: ['/event-tech-virtual'],
      secondary: { items: secondaryItems },
      tertiary: { items: tertiaryItems },
      primary: {
        items: [
          { href: '/event-tech-virtual/event-tech-tools', label: 'Event Tech & Tools' },
          { href: '/event-tech-virtual/hybrid-virtual-event-production', label: 'Hybrid & Virtual Event Production' },
          { href: '/event-tech-virtual/strategy', label: 'Strategy' },
          { href: '/event-tech-virtual/virtual-entertainment-gifts', label: 'Virtual Entertainment & Gifts' },
        ],
      },
    },
    {
      when: ['/venues-destinations'],
      secondary: { items: secondaryItems },
      tertiary: { items: tertiaryItems },
      primary: {
        items: [
          { href: '/venues-destinations/canada', label: 'Canada' },
          { href: '/venues-destinations/united-states', label: 'United States' },
          { href: '/venues-destinations/global', label: 'Global' },
        ],
      },
    },
    {
      when: ['/meetings-trade-shows'],
      secondary: { items: secondaryItems },
      tertiary: { items: tertiaryItems },
      primary: {
        items: [
          { href: '/meetings-trade-shows/meetings', label: 'Meetings' },
          { href: '/meetings-trade-shows/strategy', label: 'Strategy' },
          { href: '/meetings-trade-shows/trade-shows', label: 'Trade Shows' },
          { href: '/meetings-trade-shows/people', label: 'People' },
          { href: '/meetings-trade-shows/places', label: 'Places' },
          { href: '/meetings-trade-shows/trends', label: 'Trends' },
        ],
      },
    },
  ],

  'sticky-footer': {
    items: footerItems,
  },
  menu: [
    {
      label: 'Get to Know Us',
      items: [
        { href: '/page/about-us', label: 'About Us' },
        { href: 'https://www.bizbashlive.com/enventu/home', label: 'Community Involvement', target: '_blank' },
        { href: 'https://cloud.mail.bizbash.com/BizBashBuzz_Subscribe', label: 'Subscribe to BizBash Buzz Newsletter', target: '_blank' },
        { href: 'https://cloud.mail.bizbash.com/BizbashMagazineSubscribe', label: 'Subscribe to BizBash Magazine', target: '_blank' },
        { href: 'https://www.linkedin.com/groups/46028/', label: 'Join Our Event Pros Gather Group on LinkedIn', target: '_blank' },
        { href: 'https://www.facebook.com/groups/eventplannersgather', label: 'Join Our Event Pros Gather Group on Facebook', target: '_blank' },
        { href: 'https://www.bizbashlive.com/advertise', label: 'Advertise With Us', target: '_blank' },
        { href: '/page/contact-us', label: 'Contact Us' },
        { href: '/page/careers', label: 'Careers' },
        { href: '/page/privacy-policy', label: 'Privacy Policy' },
      ],
    },
    {
      label: 'Find Inspiration',
      items: [
        { href: '/bizbash-lists', label: 'BizBash Lists' },
        ...topics,
        { href: '/industry-buzz', label: 'Industry Buzz' },
      ],
    },
    {
      label: 'Other Resources',
      items: [
        { href: '/page/get-featured', label: 'Get Featured' },
        { href: '/on-demand/gathergeeks', label: 'GatherGeeks Podcast' },
        { href: '/on-demand', label: 'On-Demand' },
        { href: '/events', label: 'Events' },
        // { href: '/page/awards', label: 'Awards' },
        { href: '/magazine/5b2a4e6c0305572b008b45ae', label: 'Magazines' },
        { href: '/white-papers', label: 'White Papers & E-Books' },
      ],
    },
  ],
};
