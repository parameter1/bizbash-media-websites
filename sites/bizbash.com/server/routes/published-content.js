const template = require('@bizbash-media/package-global/templates/published-content/index');

const types = [
  {
    alias: 'webinars',
    name: 'Webinars',
    queryParams: {
      includeContentTypes: ['Webinar'],
      sort: {
        field: 'startDate',
        order: 'asc',
      },
    },
    withAds: true,
    description: '<p>BizBash is excited to bring our audience the latest knowledge and innovation from #eventprofs with our webinars and virtual showcases. Take a look at the latest trends in event tech, design, food and beverage, and more!</p><p>Looking to host a webinar with BizBash? Inquire <a href="https://www.bizbashlive.com/advertise" title="Advertise with Bizbash">here</a>.</p><p>Interested in sharing your insights with the BizBash virtual audience? Submit to speak <a href="https://www.bizbash.com/production-strategy/programming-entertainment/article/21109266/call-for-speakers-how-should-event-planners-kick-off-a-new-decade" title="Call for Speaking">here</a>.</p>',
  },
  {
    alias: 'white-papers',
    name: 'White Papers',
    queryParams: {
      includeContentTypes: ['Whitepaper'],
    },
    withAds: true,
  },
  {
    alias: 'videos',
    name: 'Videos',
    queryParams: {
      includeContentTypes: ['Video'],
    },
    withAds: true,
  },
  {
    alias: 'podcast',
    name: 'Podcast',
    queryParams: {
      includeContentTypes: ['Podcast'],
    },
    withAds: true,
  },
  {
    alias: 'downloads',
    name: 'Downoloads',
    queryParams: {
      includeContentTypes: ['Document'],
    },
    withAds: true,
  },
];

module.exports = (app) => {
  // app.get('/events', (_, res) => { res.marko(events); });
  // app.get('/supplier-events', (_, res) => { res.marko(supplierEvents); });
  types.forEach(({
    alias,
    name,
    description,
    queryParams,
    withAds,
  }) => {
    app.get(`/${alias}`, (_, res) => {
      res.marko(template, {
        alias,
        name,
        description,
        queryParams,
        withAds,
      });
    });
  });
};
