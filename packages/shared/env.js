const { cleanEnv, validators } = require('@mindful-web/env');

const { nonemptystr } = validators;

// @todo This should be removed once contact us is moved to core and the mailer service is created.
module.exports = cleanEnv(process.env, {
  RECAPTCHA_SECRET_KEY: nonemptystr({ desc: 'The Recaptcha secret key.' }),
  RECAPTCHA_SITE_KEY: nonemptystr({ desc: 'The Recaptcha site key.' }),
  SENDGRID_API_KEY: nonemptystr({ desc: 'An API key for sending email via SendGrid.' }),
});
