const NativeXConfiguration = require('@mindful-web/marko-web-native-x/config');
const { asObject } = require('@mindful-web/utils');

module.exports = ({
  uri = 'https://ascend.native-x.parameter1.com',
  enabled = true,
  placements,
} = {}) => {
  const aliases = Object.keys(asObject(placements));
  const config = new NativeXConfiguration(uri, {
    enabled: aliases.length ? enabled : false,
  });
  aliases.forEach((alias) => {
    const id = placements[alias];
    config.setAliasPlacements(alias, [
      { name: 'default', id },
    ]);
  });
  return config;
};
