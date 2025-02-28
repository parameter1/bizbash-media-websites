import DefaultTheme from '@mindful-web/marko-web-theme-default/browser';
import GTM from '@mindful-web/marko-web-gtm/browser';
import GAM from '@mindful-web/marko-web-gam/browser';
import IdentityX from '@mindful-web/marko-web-identity-x/browser';
import Inquiry from '@mindful-web/marko-web-inquiry/browser';
import RevealAd from '@mindful-web/marko-web-reveal-ad/browser';
import SocialSharing from '@mindful-web/marko-web-social-sharing/browser';
import Search from '@mindful-web/marko-web-search/browser';

const ImageSlider = () => import(/* webpackChunkName: "global-image-slider" */ './image-slider.vue');
const InquiryForm = () => import(/* webpackChunkName: "global-inquiry-form" */ './inquiry-form.vue');

export default (Browser) => {
  DefaultTheme(Browser);
  GTM(Browser);
  GAM(Browser);
  IdentityX(Browser);
  Inquiry(Browser, { component: InquiryForm });
  RevealAd(Browser);
  Search(Browser);
  SocialSharing(Browser);

  Browser.register('GlobalImageSlider', ImageSlider);
};
