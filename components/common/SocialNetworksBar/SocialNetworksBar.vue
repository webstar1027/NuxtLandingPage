<template lang="pug">
  .social-networks-bar.line-small.flex-row.align-center
    a(href="https://twitter.com/crewnew_com" target="_blank")
      img(:src="dark ? twitterDarkSvg : twitterWhiteSvg")
    .p20-right
    a(href="https://www.linkedin.com/company/crewnew" target="_blank")
      img(:src="dark ? linkedinDarkSvg : linkedinWhiteSvg")
    .p20-right
    a(href="https://www.facebook.com/crewnewcom" target="_blank")
      img(:src="dark ? facebookDarkSvg : facebookWhiteSvg")
    .p20-right
    a(href="https://medium.com/crewnew-com" target="_blank")
      img(:src="dark ? mediumDarkSvg : mediumWhiteSvg")
</template>

<script>
import twitterWhiteSvg from '@/assets/icons/social-white/Twitter Icon.svg'
import linkedinWhiteSvg from '@/assets/icons/social-white/LinkedIn Icon.svg'
import facebookWhiteSvg from '@/assets/icons/social-white/Facebook Icon.svg'
import mediumWhiteSvg from '@/assets/icons/social-white/iconmonstr-medium-1.svg'

import twitterDarkSvg from '@/assets/icons/social-dark/Twitter Icon.svg'
import linkedinDarkSvg from '@/assets/icons/social-dark/LinkedIn Icon.svg'
import facebookDarkSvg from '@/assets/icons/social-dark/Facebook Icon.svg'
import mediumDarkSvg from '@/assets/icons/social-dark/iconmonstr-medium-1.svg'

export default {
  props: {
    dark: Boolean
  },
  data: () => ({
    twitterWhiteSvg,
    linkedinWhiteSvg,
    facebookWhiteSvg,
    mediumWhiteSvg,
    twitterDarkSvg,
    linkedinDarkSvg,
    facebookDarkSvg,
    mediumDarkSvg
  })
}
</script>

<style lang="scss">
.social-networks-bar {
  img {
    width: 17px;
    height: 17px;
  }
}
</style>