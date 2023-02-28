const defaults = {
  // disabled: process.env.DISABLE_IDX_NEWSLETTER_SIGNUP === 'true',
  name: 'Don’t Miss Out',
  description: 'BizBash editors search the globe to deliver ideas, inspiration, and the hottest industry events directly to your inbox.',
};

module.exports = {
  signupBanner: {
    ...defaults,
    name: 'You\'re Invited!',
    imagePath: '/files/base/bizbash/bzb/image/static/logo/eventIndustryNo1Newsletter.png',
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
