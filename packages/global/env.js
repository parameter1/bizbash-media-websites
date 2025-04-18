const { cleanEnv, validators } = require('@mindful-web/env');

const { nonemptystr } = validators;

module.exports = cleanEnv(process.env, {
  RECAPTCHA_V3_SITE_KEY: nonemptystr({ desc: 'The Recaptcha Site key.' }),
  RECAPTCHA_V3_SECRET_KEY: nonemptystr({ desc: 'The Recaptcha secret key.' }),
});
