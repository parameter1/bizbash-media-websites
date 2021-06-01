const topics = [
  { href: '/production-strategy', label: 'Production & Strategy' },
  { href: '/catering-design', label: 'Catering & Design' },
  { href: '/event-tech-virtual', label: 'Event Tech & Virtual' },
  { href: '/venues-destinations', label: 'Venues & Destinations' },
  { href: '/bizbash-lists', label: 'BizBash Lists' },
];

const footerItems = [
  { href: 'https://www.pages03.net/collinsonpublishing/BizBashBuzz/', label: 'Subscribe', target: '_blank' },
  { href: '/venue-directory', label: 'Find a Venue' },
  { href: '/supplier-directory', label: 'Find a Supplier' },
];
const tertiaryItems = [
  { href: '/search', label: 'Search', icon: 'search' },
];

module.exports = {
  primary: { items: topics },
  secondary: {
    items: [
      { href: '/gathergeeks', label: 'Podcast' },
      { href: '/webinars', label: 'Webinars' },
      { href: '/page/our-events', label: 'Events & Awards' },
      { href: '/white-papers', label: 'White Papers' },
      { href: '/magazine/5b2a4e6c0305572b008b45ae', label: 'Magazines' },
      { href: 'https://www.bizbashlive.com/advertise', label: 'Advertise', target: '_blank' },
      { href: 'https://www.pages03.net/collinsonpublishing/BizBashBuzz/', label: 'Subscribe', target: '_blank' },
    ],
  },
  tertiary: { items: tertiaryItems },
  contexts: [
    {
      when: ['/production-strategy'],
      secondary: { items: topics },
      tertiary: { items: tertiaryItems },
      primary: {
        items: [
          { href: '/production-strategy/audiovisual-lighting', label: 'Audiovisual & Lighting' },
          { href: '/production-strategy/experiential-marketing-activations-sponsorships', label: 'Marketing, Activations & Sponsorships' },
          { href: '/production-strategy/event-management', label: 'Event Management' },
          { href: '/production-strategy/event-production-fabrication', label: 'Event Production & Fabrication' },
          { href: '/production-strategy/opinion-experts', label: 'Opinion & Experts' },
          { href: '/production-strategy/programming-entertainment', label: 'Programming & Entertainment' },
          { href: '/production-strategy/registration-ticketing', label: 'Registration & Ticketing' },
          { href: '/production-strategy/social-events', label: 'Social Events' },
          { href: '/production-strategy/strategy', label: 'Strategy' },
        ],
      },
    },
    {
      when: ['/catering-design'],
      secondary: { items: topics },
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
      secondary: { items: topics },
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
      secondary: { items: topics },
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
      when: ['/bizbash-lists'],
      secondary: { items: topics },
      tertiary: { items: tertiaryItems },
      primary: {
        items: [
          { href: '/bizbash-lists/top-100-events', label: 'Top 100 Events' },
          { href: '/bizbash-lists/brands-event-pros', label: 'Brands & Event Pros' },
          { href: '/bizbash-lists/meetings-conferences', label: 'Meetings & Conferences' },
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
        { href: 'https://www.pages03.net/collinsonpublishing/BizBashBuzz/', label: 'Subscribe to BizBash Buzz Newsletter', target: '_blank' },
        { href: 'https://bizbash.formstack.com/forms/magazinesubscribe2020', label: 'Subscribe to BizBash Magazine', target: '_blank' },
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
      items: topics,
    },
    {
      label: 'Other Resources',
      items: [
        { href: '/gathergeeks', label: 'GatherGeeks Podcast' },
        { href: '/webinars', label: 'Webinars' },
        { href: '/page/our-events', label: 'Events & Awards' },
        { href: '/magazine/5b2a4e6c0305572b008b45ae', label: 'Magazines' },
        { href: '/white-papers', label: 'White Papers' },
        { href: '/site-map', label: 'Site Map' },
      ],
    },
  ],
};
