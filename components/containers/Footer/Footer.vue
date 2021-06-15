<template lang="pug">
  footer.footer-el.bg-dark.p40-side.relative
    .content.flex-col
      .p40
      .is-hidden-mobile.p40
      .columns
        .is-hidden-mobile.p30-side
        .column.is-two-fifths-desktop.is-full-mobile
          .flex-col
            div
              img.pointer(src="@/assets/CN Logo White.png" alt="")
            .p15
            SocialNetworksBar.is-hidden-mobile
        .column.is-one-fourth-desktop.is-full-mobile
          .flex-col
            .uppercase.text-bold.fs15 About
            .p15
            .p5-ver.about-links(@click="goToPage('#1%-talent')") Top 1% talent
            .p5-ver.about-links(@click="goToPage('#rated-&-tested')") All skills rated and tested
            .p5-ver.about-links(@click="goToPage('#culture-&-tools')") Agency culture & tools
            .p5-ver.about-links(@click="goToPage('#protection')") Buyer protection
            .p5-ver.about-links(@click="goToPage('#pricing')") Pricing and offers
            .p5-ver.about-links(@click="goToPage('#roject-managed')") Always project managed
        .column.is-one-fourth-desktop.is-full-mobile
          .flex-col
            .uppercase.text-bold.fs15 Message Us
            .p15
            .p5-ver
              a.flex-row.align-center(href="https://join.skype.com/invite/hn6ZHvTHDfax"  target="_blank")
                img(:src="skypeSvg")
                .p10
                span Skype
            .p5-ver
              a.flex-row.align-center(href="https://wa.me/447588699948" target="_blank")
                img(:src="whatsappSvg")
                .p10
                span WhatsApp
            .p5-ver
              a.flex-row.align-center(href="https://t.me/crewnew" target="_blank")
                img(:src="telegramSvg")
                .p10
                span Telegram
            .p5-ver
              a.flex-row.align-center(href="https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2F1776148165943905%2F%3Fmessaging_source%3Dsource%253Apages%253Amessage_shortlink" target="_blank")
                img(:src="facebookSvg")
                .p10
                span Facebook Messenger
        .column.is-one-fourth-desktop.is-full-mobile
          .flex-col
            .uppercase.text-bold.fs15 Contact Us
            .p15
            .p5-ver
              .flex-row
                div
                  img(:src="arrowRightSvg")
                .p10
                .flex-col
                  span 11 Marshalsea Road,
                  span London SE11EN
            .p5-ver
              .flex-row
                div
                  img(:src="arrowRightSvg")
                .p10
                .flex-col
                  a(href="tel:+44 203 98 4949 5") +44 203 98 4949 5
                  a(href="tel:+44 75 886 999 48") +44 75 886 999 48
            .p5-ver
              .flex-row
                div
                  img(:src="arrowRightSvg")
                .p10
                .flex-col
                  a(href="https://www.facebook.com/crewnewcom" target="_blank") Facebook chat
                  a( @click="$router.push('/contact')") Contact form
        .column.is-hidden-desktop.is-full-mobile
          .p25-ver
            SocialNetworksBar
        .is-hidden-mobile.p30-side
      .is-hidden-mobile.p30
      .columns.space-between.lower-footer
        .is-hidden-mobile.p30-side
        .is-hidden-mobile.column.is-narrow.is-paddingless
          .fs14.font-family-alt(style="opacity: 0.5;") ©2020 All Rights Reserved
        .column
          .columns.w100.justify-end
            .column.is-narrow.is-paddingless
              a.uppercase.fs12.font-family-alt.lspacing-2(href="/privacy-policy" target="_blank") Privacy Policy
            .is-hidden-mobile.p20-side
            .column.is-narrow.is-paddingless
              a.uppercase.fs12.font-family-alt.lspacing-2(href="/privacy-policy" target="_blank") Terms and Conditions
        .is-hidden-mobile.p30-side
      .p20
</template>

<script>
import SocialNetworksBar from '@/components/common/SocialNetworksBar/SocialNetworksBar'

import facebookSvg from '@/assets/icons/facebook-messenger.svg'
import skypeSvg from '@/assets/icons/skype.svg'
import telegramSvg from '@/assets/icons/telegram.svg'
import whatsappSvg from '@/assets/icons/whatsapp.svg'
import arrowRightSvg from '@/assets/icons/Icon feather-arrow-right.svg'

export default {
  data: () => ({
    facebookSvg,
    skypeSvg,
    telegramSvg,
    whatsappSvg,
    arrowRightSvg
  }),
  components: {
    SocialNetworksBar
  },
  methods: {
    goToPage (id) {
      this.$router.push('/about/' + id)
    }
  }
}
</script>

<style lang="scss">
.footer-el {
  margin-top: -75px;
  z-index: 9996;
  color: #cfcdd6;
  border-top-left-radius: 100px;

  a {
    color: #cfcdd6;
  }

  .lower-footer {
    a {
      color: #a09bad;
    }
  }
  .about-links {
    cursor: pointer;
  }
}
</style>