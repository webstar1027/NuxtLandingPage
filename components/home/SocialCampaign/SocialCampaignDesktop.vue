<template lang="pug">
  .w100.flex-row.center
    .social-campaign.w70.relative
      .left.w-third.absolute
        .circle.absolute.h100
        .flat.absolute.w75.h100
      .side-content.lefta.w25.absolute.h100
        .fit.text-white.flex-row.center
          img.heart-icon.line-small(:src="heartSvg" height="48px")
          .p10.side
          .flex-col.justify-center.fs20.text-bold.line-medium
            span Social
            span Campaign
      .middle.absolute.w50.text-black.fs16
        .flex-row.space-around.h100
          .middle-item.left.flex-1.flex-col.center(
            @mouseover="hoverChanged('left', true)"
            @mouseleave="hoverChanged('left', false)"
            :class="{'hovered': hovers.left}"
            @click='goTo("social-media-campaign")'
          )
            .flex-col.line-medium
              span.text-green 4-16% Discount
              span till {{endingCampaignDate.day}} {{endingCampaignDate.month}}
          .middle-item.middle.bg-white.flex-1.flex-col.center(
            @mouseover="hoverChanged('middle', true)"
            @mouseleave="hoverChanged('middle', false)"
            :class="{'hovered': hovers.middle}"
            @click='goTo("social-media-campaign")'
          )
            .flex-col.p10-side.line-medium
              span Claim
              span your 
                span.text-green FREE
              span discount here
          .middle-item.right.flex-1.flex-col.center(
            @mouseover="hoverChanged('right', true)"
            @mouseleave="hoverChanged('right', false)"
            :class="{'hovered': hovers.right}"
          )
            .flex-col.p10-side.line-medium
              span Up to 1hr
              span consultation
              span for 
                span.text-green FREE
      .side-content.righta.w25.absolute.h100
        .fit.text-white.flex-row.center
          .flex-col.justify-center
            .flex-row
              .p5-right
              a(href="https://g.page/crewnew/review?rc" target="_blank")
                img(:src="googleWhiteSvg" style="height: 17px")
              .p15-right
              a(href="https://www.linkedin.com/company/crewnew" target="_blank")
                img(:src="linkedinWhiteSvg" style="height: 17px")
              .p15-right
              a(href="https://www.facebook.com/crewnewcom" target="_blank")
                img(:src="facebookWhiteSvg" style="height: 17px")
            .p5-top
              a(href="https://www.trustpilot.com/review/crewnew.com" target="_blank")
                img(:src="trustpilotWhiteSvg" style="height: 24px")
      .right.w-third.absolute
        .flat.absolute.w75.h100
        .circle.absolute.h100
</template>

<script>
import googleWhiteSvg from '@/assets/icons/social-white/iconfinder_google_1608914.svg'
import linkedinWhiteSvg from '@/assets/icons/social-white/Flat_copy.svg'
import facebookWhiteSvg from '@/assets/icons/social-white/iconfinder_social-facebook_216078.svg'
import trustpilotWhiteSvg from '@/assets/icons/social-white/Trustpilot.svg'
import heartSvg from '@/assets/icons/heart_icon.svg'
import endingCampaign from '@/mixins/endingCampaign'

export default {
  mixins: [endingCampaign],
  data: () => ({
    hovers: {
      left: false,
      middle: false,
      right: false
    },
    googleWhiteSvg,
    linkedinWhiteSvg,
    facebookWhiteSvg,
    trustpilotWhiteSvg,
    heartSvg
  }),
  methods: {
    hoverChanged(side, val) {
      this.hovers[side] = val
    },
    goTo(url) {
      this.$router.push(`/${url}`)
    }
  }
}
</script>

<style lang="scss">
.social-campaign {
  height: 117px;
  @media screen and(max-width: 1400px) and(min-width: 768px) {
    width: 90%;
    max-width: 90%;
  }
  .heart-icon{
    height: 42px;
  }
  > .left {
    height: 100%;
    top: 0;
    z-index: 2;

    > div {
      background: #00d857;
    }

    > .circle {
      border-top-left-radius: 50%;
      border-bottom-left-radius: 50%;
      left: 0;
      width: 150px;
    }

    > .flat {
      left: 25%;
    }
    left: 0%;
  }

  .middle {
    height: 100%;
    left: 25%;
    top: 0;
    z-index: 3;

    .middle-item {
      box-shadow: -1px -1px 20px rgba(100, 100, 100, 0.4);
      border-top-left-radius: 50%;
    }

    .left {
      transition: 0.2s ease-in-out;
      box-shadow: -20px 0px 20px #00000012;
      border-radius: 50px 0px 0px 0px;
      opacity: 1;
      padding-right: 50px;
      height: 117px;
      width: 239px;
      margin-right: -50px;
      &.hovered {
        margin-top: -13px;
        height: 135px;
        box-shadow: -20px 0px 20px #00000012;
        border-radius: 50px 0px;
        opacity: 1;
      }
    }
    .middle {
      transition: 0.2s ease-in-out;
      box-shadow: -20px 0px 20px #00000012;
      border-radius: 50px 0px 0px 0px;
      opacity: 1;
      height: 117px;
      width: 239px;
      padding-right: 50px;
      margin-right: -50px;
      &.hovered {
        height: 135px;
        margin-top: -13px;
        box-shadow: -20px 0px 20px #00000012;
        border-radius: 50px 0px;
        opacity: 1;
      }
    }
    .right {
      z-index: 1000;
      transition: 0.2s ease-in-out;
      transition: 0.2s ease-in-out;
      box-shadow: -20px 0px 20px #00000012;
      border-radius: 50px 0px;
      opacity: 1;
      height: 135px;
      width: 172px;
      margin-top: -13px;
      &.hovered {
        margin-top: -26px;
        height: 153px;
        box-shadow: -20px 0px 20px #00000012;
        border-radius: 50px 0px;
        opacity: 1;
      }
    }

    .left,
    .middle,
    .right {
      background: #fff;
      cursor: pointer;
    }
  }

  > .right {
    height: 100%;
    top: 0;
    z-index: 2;

    > div {
      background: #42375b;
    }

    > .circle {
      border-top-right-radius: 50%;
      border-bottom-right-radius: 50%;
      right: 0;
      width: 150px;
    }
    
    > .flat {
      right: 25%;
    }
    right: 0%;
  }

  > div {
    display: inline-block;
  }

  .side-content {
    z-index: 4;
    background-color: transparent;

    .heart-icon {
      width: 79px;
    }

    &.lefta {
      left: 0;
    }

    &.righta {
      right: 0;
    }
  }
}
</style>