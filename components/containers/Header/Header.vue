<template lang="pug">
  header.header.bg-dark.w100(:class="hide ? 'hide' : ''")
    .flex-row.align-center.fit
      .p10-side.is-hidden-mobile
      .p10-side
      img.pointer(src="@/assets/CN Logo White.png" alt="" @click="$router.push('/')")
      .flex-1
      .right-pane.flex-row.flex-1.justify-end.align-center.h100
        .is-hidden-mobile.flex-row.align-center.h100.w100.justify-end
          //- SearchBox
          .p5-right
          .flex-row.align-center.h100(:class="{ 'bg-white': signupOpened, 'text-white': !signupOpened }")
            .p10-side
            .sign-up-button.pointer.flex-col.align-end.justify-center(:style="$route.path === '/skills' || checkPath($route.path) ? 'margin-right: 168px;' : ''")
              span.text-medium.font-family-alt.fs16(
                @click="$emit('signupOpen')"
                @mouseover="signupHoverChanged(true)"
                @mouseleave="signupHoverChanged(false)"
              ) Sign Up Free
              .underline(:class="{hovered: signupHovered}")
            .p10-side
          .p10-side
        .menu-button.pointer(@click="$emit('menuOpen')")
          Burger
      .p10-side
      .p10-side.is-hidden-mobile
</template>

<script>
import Burger from '@/components/common/Burger/Burger'
import SearchBox from '@/components/Search/SearchBox'

export default {
  data: () => ({
    search: false,
    searchTerm: '',
    signupHovered: false,
    signupOpened: false
  }),
  props: ['hide'],
  created() {
    this.$store.dispatch('location/ADD_LOCATION')
  },
  methods: {
    toggleSearch() {
      this.search = !this.search
    },
    signupHoverChanged(val) {
      this.signupHovered = val
    },
    checkPath(str) {
      return str.includes('/skills/')
    }
  },
  components: {
    Burger,
    SearchBox
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap');

.header {
  position: fixed;
  top: 0;
  height: 100px;
  width: 100%;
  z-index: 999;
  transition: top ease 0.6s;
  &.hide{
    position: absolute;
    top: -100px;
    @media only screen and (max-width: 768px) {
      top: -70px
    }

  }

  img {
    width: 183px;
    height: 37px;
  }

  .sign-up-button {
    .underline {
      margin-top: 1px;
      background-color: #42375b;
      height: 1px;
      width: 0px;
      transition: 0.3s ease-in-out;
      box-shadow: 1px 1px rgba(250, 250, 250, .5);

      &.hovered {
        width: 100%;
        background-color: #fff;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    height: 70px;
  }
} 
</style>