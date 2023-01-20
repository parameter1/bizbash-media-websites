
import MonoRail from '@parameter1/base-cms-marko-web-theme-monorail/browser';
import Inquiry from '@parameter1/base-cms-marko-web-inquiry/browser';

const ContentMeterTrack = () => import(/* webpackChunkName: "content-meter-tracker" */ './track-content-meter.vue');
const PreferenceCenter = () => import(/* webpackChunkName: "braze-preference-center" */ './braze-preference-center.vue');
const InquiryForm = () => import(/* webpackChunkName: "global-inquiry-form" */ './inquiry-form.vue');
const ImageSlider = () => import(/* webpackChunkName: "global-image-slider" */ './image-slider.vue');

export default (Browser) => {
  Inquiry(Browser, { component: InquiryForm });

  MonoRail(Browser, {
    enableOmedaIdentityX: false,
  });

  Browser.register('ContentMeterTrack', ContentMeterTrack);
  Browser.register('PreferenceCenter', PreferenceCenter);
  Browser.register('GlobalImageSlider', ImageSlider);
};
