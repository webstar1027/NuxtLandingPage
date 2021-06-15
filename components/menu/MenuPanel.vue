<template lang="pug">
  .menu-panel.absolute(:style="getStyle")
    .columns(style="height:101.5vh;")
      .column.is-three-quarters.h100.is-hidden-mobile(@click="$emit('menuClose')")
      .column.is-one-quarter.bg-white.h100.side-menu-small-devices
        .flex-col.w100.p30-side.p40-ver
          .is-hidden-mobile
            .flex-row.w100.justify-end
              .flex-1
              .pointer(@click="$emit('menuClose')")
                img.close-btn(:src="closeDarkSvg")
          .is-hidden-desktop
            .flex-row.w100.space-between.align-center
              .search-container.flex-row.align-center.flex-1
                //- input.search-input.p10-ver.flat-input.font-family-alt(v-model="searchTerm" type="text" placeholder="Search" :class="{expanded:search, 'p20-side':search}")
                //- .p15-left(v-if="search")
                //- img.w10.pointer(:src="searchSvg" @click="toggleSearch")
              .text-medium.font-family-alt(v-if="!search" @click="openSignup") Sign Up Free
          .p30-ver
          .flex-col.p30-side
            MenuItem(v-for="(item, idx) in items" :key="idx" :item="item" @click="$emit('menuClose')")
            .p30-ver
            SocialNetworksBar(dark)
            .p30-ver
            .flex-col.font-family-alt
              .p5-ver
                .flex-row.align-center.pointer
                  a.flex-row.align-center(href="https://join.skype.com/invite/hn6ZHvTHDfax"  target="_blank")
                    img(:src="skypeSvg")
                    .p10
                    .fs12.text-medium Skype
              .p5-ver
                .flex-row.align-center
                  a.flex-row.align-center(href="https://wa.me/447588699948" target="_blank")
                    img(:src="whatsappSvg")
                    .p10
                    .fs12.text-medium WhatsApp
              .p5-ver
                .flex-row.align-center
                  a.flex-row.align-center(href="https://t.me/crewnew" target="_blank")
                    img(:src="telegramSvg")
                    .p10
                    .fs12.text-medium Telegram
              .p5-ver
                .flex-row.align-center
                  a.flex-row.align-center(href="https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2F1776148165943905%2F%3Fmessaging_source%3Dsource%253Apages%253Amessage_shortlink" target="_blank")
                    img(:src="facebookSvg")
                    .p10
                    .fs12.text-medium Facebook Messenger
</template>

<script>
import MenuItem from '@/components/menu/MenuItem'
import SocialNetworksBar from '@/components/common/SocialNetworksBar/SocialNetworksBar'

import skypeSvg from '@/assets/icons/skype.svg'
import whatsappSvg from '@/assets/icons/whatsapp.svg'
import telegramSvg from '@/assets/icons/telegram.svg'
import facebookSvg from '@/assets/icons/facebook-messenger.svg'

import searchSvg from '@/assets/icons/search.svg'
import closeDarkSvg from '@/assets/icons/close-dark.svg'

export default {
  props: {
    opened: Boolean
  },
  data: () => ({
    search: false,
    searchTerm: '',
    items: [
      { title: 'Home', to: '/' },
      { title: 'About & Pricing', to: '/about/' },
      { title: 'How It Works', to: '/how-it-works' },
      { title: 'Skills & Services', to: '/skills' },
      { title: 'For Freelancers', to: '/for-freelancers' },
      // { title: 'Team', to: '/team' },
      { title: 'Get In Touch', to: '/contact' }
    ],
    skypeSvg,
    telegramSvg,
    whatsappSvg,
    facebookSvg,
    searchSvg,
    closeDarkSvg
  }),
  computed: {
    getStyle() {
      const obj = {}
      obj.height = '100vh'
      obj.width = this.opened ? '100vw' : '0'
      obj['max-width'] = this.opened ? '100vw' : '0'
      return obj
    }
  },
  methods: {
    toggleSearch() {
      this.search = !this.search
    },
    openSignup() {
      this.$emit('signupOpen')
      this.$emit('menuClose')
    }
  },
  components: {
    MenuItem,
    SocialNetworksBar
  }
}
</script>

<style lang="scss">
.menu-panel {
  right: 0;
  top: 0;
  z-index: 9999;
  zoom: 1;
  transition: 0.25s ease-in-out;
  overflow: hidden;
  a {
    color: inherit;
  }
  .search-input {
    width: 0;
    opacity: 0;
    transition: 0.25s ease-in-out;
    &.expanded {
      width: 100%;
      opacity: 1;
    }
  }

  .close-btn {
    transition: 0.3s ease-in-out;
  }
  .close-btn:hover {
    transform: scale(1.2);
  }
  @media screen and(max-width: 1500px) and(min-width: 768px) {
    .side-menu-small-devices {
      // width: 335px;
      height: 102vh;
      overflow: scroll;
    }
    .close-btn {
      max-width: 30px;
    }
  }
}
</style>