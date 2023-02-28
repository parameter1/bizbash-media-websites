const configureGAM = require('@bizbash-media/package-global/config/gam');

const config = configureGAM({ basePath: '' });

config.enableRevealAd = true;

config.lazyLoad = {
  enabled: true, // set to true to enable lazy loading
  fetchMarginPercent: 100, // fetch ad when one viewport away
  renderMarginPercent: 50, // render ad when half viewport away
  mobileScaling: 2, // double these on mobile
};

config.setAliasAdUnits('default', [
  { name: 'lb-sticky-bottom', templateName: 'LB-STICKY-BOTTOM', path: 'default/lb1' },
  { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'default/lb1' },
  { name: 'rotation', templateName: 'ROTATION', path: 'rotation' },
  { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'rotation' },
  { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'rotation' },
  { name: 'rail', templateName: 'RAIL', path: 'default/rail1' },
  { name: 'rail1', templateName: 'RAIL', path: 'default/rail1' },
  { name: 'rail2', templateName: 'RAIL', path: 'default/rail2' },
  // Below based on enableRevealAd
  { name: 'reskin', path: 'default/reskin' },
  { name: 'wa', path: 'default/wa' },
]);

const aliases = [];

aliases.forEach((alias) => config.setAliasAdUnits(alias, [
  { name: 'leaderboard', templateName: 'LEADERBOARD', path: `${alias}-leaderboard` },
  { name: 'rotation', templateName: 'ROTATION', path: `${alias}-rotation` },
  { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: `${alias}-rotation` },
  { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: `${alias}-rotation` },
  { name: 'rail', templateName: 'RAIL', path: `${alias}/rail1` },
  { name: 'rail1', templateName: 'RAIL', path: `${alias}/rail1` },
  { name: 'rail2', templateName: 'RAIL', path: `${alias}/rail2` },
  { name: 'reskin', path: `${alias}/reskin` },
]));

module.exports = config;
