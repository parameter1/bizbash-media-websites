const htmlSitemap = require('@mindful-web/marko-web-html-sitemap/routes');
const renderBlock = require('@mindful-web/marko-web-theme-monorail/routes/render-block');
const magazine = require('@mindful-web/marko-web-theme-monorail-magazine/routes');
const search = require('@mindful-web/marko-web-theme-monorail/routes/search');
const taxonomy = require('@mindful-web/marko-web-theme-monorail/routes/taxonomy');
const feed = require('./feed');
const nativeX = require('./native-x');
const printContent = require('./print-content');
const publicFiles = require('./public-files');
const redirects = require('./redirects');
const staticPage = require('./static-page');

module.exports = (app, siteConfig) => {
  // Magazine
  magazine(app);

  // Feed
  feed(app);

  // NativeX (Story rendering)
  nativeX(app);

  // Shared Print Content
  printContent(app);

  // Shared Public Files (e.g. ads.txt)
  publicFiles(app);

  // Redirects
  redirects(app);

  // Remote component/block loader
  renderBlock(app);

  // Taxonomy pages (for handling redirects from old WP sites)
  taxonomy(app);

  // Search routes
  search(app, siteConfig);

  // Static pages
  staticPage(app);

  // HTML Sitemap
  htmlSitemap(app);
};
