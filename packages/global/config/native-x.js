const NativeXConfiguration = require('@parameter1/base-cms-marko-web-native-x/config');

module.exports = ({
  uri = 'https://bizbash.native-x.parameter1.com',
  enabled = true,
} = {}) => new NativeXConfiguration(uri, { enabled });
