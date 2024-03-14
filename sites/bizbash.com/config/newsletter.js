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
    description: 'Sign up to receive information about upcoming Bizbash events, and other event updates. You can opt out of receiving these messages from Informa at any time by clicking unsubscribe or contacting us. You can find more information in our <a href="https://www.informa.com/privacy-policy/" target="_blank" rel="noopener" data-feathr-click-track="true">Privacy Policy</a>.',
    action: '/user/subscribe',
    colspan: 5,
    enable: true,
    name: 'Stay Connected',
  },
};
