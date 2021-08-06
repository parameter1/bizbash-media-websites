const { URL } = require('url');
const { oembedHandler } = require('@parameter1/base-cms-marko-web/utils/embedded-media');

const buildInstagramElement = ({
  href,
  lazy = true,
  width,
}) => {
  const params = {
    href: decodeURIComponent(href),
    ...(lazy && { lazy: true }),
    ...(width && { width }),
  };
  const data = Object.keys(params).map(key => `data-${key}="${params[key]}"`);
  const changeProperty = new RegExp('data-href=');
  const changetoSrc = data[0].replace(changeProperty, 'src=');
  const trailingSlashRemover = new RegExp('/"');
  const removeTrailingSlash = changetoSrc.replace(trailingSlashRemover, '');
  data[0] = removeTrailingSlash.concat('/embed/?cr=1');
  return `
  <iframe class="instagram-media instagram-media-rendered"
  ${data.join(' ')}
  allowtransparency="true"
  frameborder="0"
  height="700px"
  scrolling="no"
  style="
  background: rgb(255, 255, 255);
  border: 1px solid rgb(219, 219, 219);
  margin: 0px 0px 0px; max-width: 700px;
  width: calc(100% - 2px);
  border-radius: 4px;
  box-shadow: none;
  display: block;
  padding: 0px;">
  </iframe>
  <script async="" defer="" src="//platform.instagram.com/en_US/embeds.js"></script>`;
};

const instagram = (url) => {
  const pattern = /instagram\.com/i;
  if (!pattern.test(url)) return null; // not a instagram URL.

  const { href, host } = new URL(url);
  // after checking for instagram URLs, treat all other instagram URLs as posts.
  if (!pattern.test(host)) return null; // instagram.com appears somewhere else in the URL.
  // return instagram div element
  return buildInstagramElement({ href });
};

/**
 *
 */
module.exports = (tag, $global) => {
  // convert embeds to instagram iframes, since they no longer support oembed without auth
  const igPost = instagram(tag.id);
  if (igPost) return igPost;
  return oembedHandler(tag, $global);
};
