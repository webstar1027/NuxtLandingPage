<template lang="pug">
  .w100.flex-col.center
    .social-campaign-mobile.relative.w100
      .top.absolute.w100
      .top-text.absolute.w100
        .fit.text-white.flex-row.center
          img.heart-icon.line-small(:src="heartSvg")
          .p10.side
          .flex-col.fs28.text-bold.line-small.campaign-title
            span Social
            .p5-bot
            span Campaign
      .bottom.absolute.w100
      .bottom-text.absolute.w100
        .fit.text-white.flex-row.center
          .flex-col.justify-center.align-center
            .flex-row
              a(href="https://g.page/crewnew/review?rc" target="_blank")
                img(:src="googleWhiteSvg")
              .p15-right
              a(href="https://www.linkedin.com/company/crewnew" target="_blank")
                img(:src="linkedinWhiteSvg")
              .p15-right
              a(href="https://www.facebook.com/crewnewcom" target="_blank")
                img(:src="facebookWhiteSvg")
            .p5-top
              a(href="https://www.trustpilot.com/review/crewnew.com" target="_blank")
                img(:src="trustpilotWhiteSvg")
      .middle.absolute.w100.text-black.fs24.line-medium
        .slices.flex-col.h100.relative(@click='goTo("social-media-campaign")')
          .slice.flex-1.flex-col.align-center.absolute.w100
            .flex-col.h-third.justify-center.normal-span
              span.text-green 4-16% Discount
              span till 31st May
          .slice.flex-1.flex-col.align-center.absolute.w100
            .flex-col.h-third.justify-center.normal-span
              span Claim your 
                span.text-green FREE
              span discount here
          .slice.flex-1.flex-col.align-center.absolute.w100.p5-top
            .flex-col.h-third.justify-center.normal-span
              span Up to 1hr
              span consultation for
              span.text-green FREE
</template>

<script>
import googleWhiteSvg from '@/assets/icons/social-white/iconfinder_google_1608914.svg'
import linkedinWhiteSvg from '@/assets/icons/social-white/Flat_copy.svg'
import facebookWhiteSvg from '@/assets/icons/social-white/iconfinder_social-facebook_216078.svg'
import trustpilotWhiteSvg from '@/assets/icons/social-white/Trustpilot.svg'
import heartSvg from '@/assets/icons/heart_icon.svg'

export default {
  data: () => ({
    googleWhiteSvg,
    linkedinWhiteSvg,
    facebookWhiteSvg,
    trustpilotWhiteSvg,
    heartSvg
  }),
  methods: {
    goTo(url) {
      this.$router.push(`/${url}`)
    }
  }
}
</script>

<style lang="scss">
.social-campaign-mobile {
  height: 80vh;
  .campaign-title {
    font-size: 1.5em;
    font-weight: 800;
  }
  .normal-span {
    font-size: 0.8em;
  }
  .top {
    height: 50%;
    background:#00d857;
    top: 0;
    border-top-left-radius: 35%;
    border-top-right-radius: 35%;
  }

  .heart-icon {
      width: 59px;
    }

  .top-text {
    height: 25%;
    top: 0;
  }

  .middle {
    height: 50%;
    background:#fff;
    top: 25%;
    border-top-left-radius: 35%;
    border-bottom-right-radius: 35%;

    .slices {
      overflow: hidden;

      .slice {
        height: 100%;
        border-top-left-radius: 35%;
        box-shadow: -1px -1px 20px rgba(100, 100, 100, 0.4);

        &:nth-child(1) {
          top: 0;
          z-index: 400;
          box-shadow: none;
        }
        &:nth-child(2) {
          top: 33%;
          z-index: 401;
        }
        &:nth-child(3) {
          top: 66%;
          z-index: 402;
          border-bottom-right-radius: 35%;
        }
      }

    }
  }

  .bottom-text {
    height: 25%;
    bottom: 0;
  }

  .bottom {
    height: 50%;
    background:#42375b;
    bottom: 0;
    border-bottom-left-radius: 35%;
    border-bottom-right-radius: 35%;
  }
}
</style>