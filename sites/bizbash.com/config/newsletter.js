
const defaults = {
  // disabled: process.env.DISABLE_IDX_NEWSLETTER_SIGNUP === 'true',
  name: 'Don’t Miss Out',
  description: 'Ideas, inspiration and the hottest industry events directly to your inbox.',
};

module.exports = {
  signupBanner: {
    ...defaults,
    name: 'You\'re Invited!',
    imagePath: 'files/base/pmmi/all/image/static/newsletter-pushdown/pw-iphone.png',
  },
  signupBannerLarge: {
    ...defaults,
  },
  signupFooter: {
    ...defaults,
    action: '/user/subscribe',
    colspan: 5,
    enable: true,
    name: 'Stay Connected',
  },
};
