const patterns = [];

module.exports = ({ req }) => {
  const { originalUrl } = req;
  for (let i = 0; i < patterns.length; i += 1) {
    const { pattern, to, code } = patterns[i];
    const match = pattern.test(originalUrl);
    if (match) return { to, code: code || 301 };
  }
  return null;
};
