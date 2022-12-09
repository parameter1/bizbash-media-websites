const baseConfig = {
  action: '/user/subscribe',
  hiddenInputs: [],
};

module.exports = {
  signupBannerLarge: {
    ...baseConfig,
    name: 'Don’t Miss Out',
    description: 'Ideas, inspiration and the hottest industry events directly to your inbox.',
  },
  signupFooter: {
    ...baseConfig,
    colspan: 5,
    enable: true,
    name: 'Stay Connected',
    description: 'Ideas, inspiration and the hottest industry events directly to your inbox.',
  },
};
