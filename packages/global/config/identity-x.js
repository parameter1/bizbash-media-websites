const IdentityXConfiguration = require('@mindful-web/marko-web-identity-x/config');
const newrelic = require('newrelic');

module.exports = ({
  appId,
  hiddenFields,
  requiredServerFields,
  requiredClientFields,
  ...rest
} = {}) => {
  const config = new IdentityXConfiguration({
    appId,
    apiToken: process.env.IDENTITYX_API_TOKEN,
    hiddenFields,
    requiredServerFields,
    requiredClientFields,
    booleanQuestionsLabel: 'Choose your subscriptions:',
    onHookError: newrelic.noticeError.bind(newrelic),
    ...rest,
  });
  return config;
};
