const { URL } = require('url');
const { oembedHandler } = require('@parameter1/base-cms-marko-web/utils/embedded-media');

const buildInstagramElement = ({
  href,
  lazy = true,
  width,
  showText,
}) => {
  const params = {
    href: decodeURIComponent(href),
    ...(lazy && { lazy: true }),
    ...(width && { width }),
    ...(showText && { 'show-text': true }),
  };
  const data = Object.keys(params).map(key => `data-${key}="${params[key]}"`);
  const strip = new RegExp('data-href=');
  const stripped = data[0].replace(strip, 'src=');
  const stripAgain = new RegExp('/"');
  const strippedAgain = stripped.replace(stripAgain, '');
  data[0] = strippedAgain.concat('/embed/?cr=1');
  return `<iframe class="instagram-media instagram-media-rendered" ${data.join(' ')} allowtransparency="true" frameborder="0" height="700px" scrolling="no" style="background: rgb(255, 255, 255); border: 1px solid rgb(219, 219, 219); margin: 0px 0px 0px; max-width: 700px; width: calc(100% - 2px); border-radius: 4px; box-shadow: none; display: block; padding: 0px;"></iframe><script async="" defer="" src="//platform.instagram.com/en_US/embeds.js"></script>`;
};

const instagram = (url) => {
  const pattern = /instagram\.com/i;
  if (!pattern.test(url)) return null; // not a instagram URL.

  const { href, host, searchParams } = new URL(url);

  if (/instagram\.com\/plugins\//i.test(url)) {
    // matches a plugin url, e.g. plugins/video.php plugins/post.php, etc
    if (!searchParams.has('href')) return '<div></div>'; // no `href` query param found. remove.
    // return instagram div element
    return buildInstagramElement({
      href: searchParams.get('href'),
      showText: searchParams.get('show_text') === 'true',
      // @todo determine if the requested width should be preserved
      // width: searchParams.get('width'),
    });
  }
  // after checking for instagram plugin URLs, treat all other instagram URLs as posts.
  if (!pattern.test(host)) return null; // instagram.com appears somewhere else in the URL.
  // return instagram div element
  return buildInstagramElement({ href, showText: true });
};

/**
 *
 */
module.exports = (tag, $global) => {
  // convert embeds to instagram divs, since they no longer support oembed without auth
  const fbPost = instagram(tag.id);
  if (fbPost) return fbPost;
  return oembedHandler(tag, $global);
};
