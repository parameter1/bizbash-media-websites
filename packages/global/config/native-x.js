const NativeXConfiguration = require('@mindful-web/marko-web-native-x/config');

module.exports = ({
  uri = 'https://delivery.mindfulcms.com/bizbash/default/compat/native-website',
  enabled = true,
} = {}) => new NativeXConfiguration(uri, { enabled });
