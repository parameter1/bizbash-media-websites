import MonoRail from '@parameter1/base-cms-marko-web-theme-monorail/browser';

const ContentMeterTrack = () => import(/* webpackChunkName: "content-meter-tracker" */ './track-content-meter.vue');
const InquiryForm = () => import(/* webpackChunkName: "global-inquiry-form" */ './inquiry-form.vue');
const ImageSlider = () => import(/* webpackChunkName: "global-image-slider" */ './image-slider.vue');

export default (Browser) => {
  MonoRail(Browser, {
    enableOmedaIdentityX: false,
    inquiryArgs: { component: InquiryForm },
  });

  Browser.register('ContentMeterTrack', ContentMeterTrack);
  Browser.register('GlobalImageSlider', ImageSlider);
};
