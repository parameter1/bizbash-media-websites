const GAMConfiguration = require('@parameter1/base-cms-marko-web-gam/config');

const config = new GAMConfiguration('21802476813');

config
  .setTemplate('lb1', {
    size: [[970, 250], [970, 90], [970, 66], [728, 90], [320, 50], [300, 50], [300, 100]],
    sizeMapping: [
      { viewport: [980, 0], size: [[970, 250], [970, 90], [970, 66], [728, 90]] },
      { viewport: [750, 0], size: [728, 90] },
      { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
    ],
  })
  .setTemplate('lb2', {
    size: [[970, 90], [728, 90], [300, 50]],
    sizeMapping: [
      { viewport: [980, 0], size: [[970, 90], [728, 90]] },
      { viewport: [750, 0], size: [728, 90] },
      { viewport: [320, 0], size: [300, 50] },
    ],
  })
  .setTemplate('lb-sticky-bottom', {
    size: [[970, 90], [728, 90]],
    sizeMapping: [
      { viewport: [980, 0], size: [[970, 90], [728, 90]] },
      { viewport: [0, 0], size: [] },
    ],
  })
  .setTemplate('rail', {
    size: [[300, 250], [300, 600]],
  })
  .setTemplate('video', {
    size: [[400, 300], [640, 480]],
  });

config
  .setAliasAdUnits('default', [
    { name: 'lb1', templateName: 'lb1', path: 'default/lb1' },
    { name: 'lb2', templateName: 'lb2', path: 'default/lb2' },
    { name: 'lb-sticky-bottom', templateName: 'lb-sticky-bottom', path: 'default/lb1' },
    { name: 'rail1', templateName: 'rail', path: 'default/rail1' },
    { name: 'rail2', templateName: 'rail', path: 'default/rail2' },
    { name: 'load-more', path: 'default/load-more' },
    { name: 'reskin', path: 'default/reskin' },
    { name: 'wa', path: 'default/wa' },
    { name: 'vid', templateName: 'video', path: 'bb_vid' },
  ]);

const aliases = [
  'production-strategy',
  'style-decor',
  'catering',
  'bizbash-lists',
  'local-venues-destinations',
  'gathergeeks',
  'hubilo',
];

aliases.forEach(alias => config.setAliasAdUnits(alias, [
  { name: 'lb1', templateName: 'lb1', path: `${alias}/lb1` },
  { name: 'lb2', templateName: 'lb2', path: `${alias}/lb2` },
  { name: 'lb-sticky-bottom', templateName: 'lb-sticky-bottom', path: `${alias}/lb1` },
  { name: 'rail1', templateName: 'rail', path: `${alias}/rail1` },
  { name: 'rail2', templateName: 'rail', path: `${alias}/rail2` },
  { name: 'load-more', path: `${alias}/load-more` },
  { name: 'reskin', path: `${alias}/reskin` },
]));

module.exports = config;
