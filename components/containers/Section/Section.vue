<template lang="pug">
  .section-wrapper.fit(:class="basisClass")
    section.section-container.flex-col.is-marginless.w100.bg-white.relative(:class="[sectionClasses, {'home': homepage}]")

      absolute-card(v-if="hasAbsolute" :small="logo" :big="offsetAbsolute" :class="[{'is-hidden-mobile': !logo}, smaller ? 'smaller' : '']")
        logo(v-if="logo")
        slot(v-else name="absolute")

      .is-hidden-mobile(v-if="!noPadding && sidePadding != 0" :class="{'': logo || !hasAbsolute, 'p80-ver p80-small-ver': hasAbsolute && !logo}")

      .flex-row.w100(v-if="heading")
        .is-hidden-mobile(v-if="!noPadding && sidePadding != 0" :class="sidePaddingClass")
        .mobile-gutter.is-hidden-desktop

        .flex-col.has-text-centered-desktop(style="flex: 1 0 0" v-if='simpleInnerPage')
          .section-heading-b.text-black.line-black.line-medium(:class="{dark, 'sticky-about': sticky}" ) {{ heading.desc }}
          .p5-ver
          .p5-ver.is-hidden-mobile
          .section-heading-a.text-bold.uppercase.line-bold.line-medium(:class="{dark, 'text-alt': !dark, 'text-green': dark}") {{ heading.title }}

        .flex-col.has-text-centered-desktop(style="flex: 1 0 0" v-else)
          .section-heading-a.text-bold.uppercase.line-bold.line-medium.animate-on-scroll.fade-in-down(:class="{dark, 'text-alt': !dark, 'text-green': dark}") {{ heading.title }}
          .p5-ver
          .p5-ver.is-hidden-mobile
          .section-heading-b.text-black.line-black.line-medium.animate-on-scroll.fade-in-up(:class="{dark, 'sticky-about': sticky}" ) {{ heading.desc }}

        .mobile-gutter.is-hidden-desktop
        .is-hidden-mobile(v-if="!noPadding && sidePadding != 0" :class="sidePaddingClass")

      template(v-if="heading")
        .p20-ver.is-hidden-mobile
        .p20-ver

      .flex-row.w100(:class='[{"h100": homepage}]')
        .is-hidden-mobile(v-if="!noPadding && sidePadding != 0" :class="sidePaddingClass")
        .mobile-gutter.is-hidden-desktop(v-if="!noPaddingMobile")

        .flex-col.flex-1(style="flex: 1 0 0" :class="[smaller ? 'smaller' : '', homepage ? 'h100' : '']")
          slot(:class="slotClasses")

        .mobile-gutter.is-hidden-desktop(v-if="!noPaddingMobile")
        .is-hidden-mobile(v-if="!noPadding && sidePadding != 0" :class="sidePaddingClass")
</template>

<script>
import AbsoluteCard from '@/components/common/AbsoluteCard/AbsoluteCard'
import Logo from '@/components/common/Logo/Logo'

export default {
  props: {
    homepage: Boolean,
    large: Boolean,
    smaller: Boolean,
    marginTop: Boolean,
    overlap: Boolean,
    overlapInside: Boolean,
    light: Boolean,
    dark: Boolean,
    basis: String,
    offsetAbsolute: Boolean,
    top: Boolean,
    bottom: Boolean,
    noPadding: Boolean,
    noPaddingMobile: Boolean,
    noBorderBottom: Boolean,
    bottomShadow: Boolean,
    logo: Boolean,
    heading: Object,
    sticky: Boolean,
    simpleInnerPage: Boolean,
    sidePadding: {
      type: Number | String,
      default: 30
    }
  },
  computed: {
    sectionClasses() {
      return {
        'bg-dark': this.dark,
        'is-paddingless': this.noPadding,
        'no-border-bottom': this.noBorderBottom,
        'negative-top': this.marginTop,
        light: this.light,
        top: this.top,
        bottom: this.bottom,
        relative: this.hasAbsolute,
        'bottom-shadow': this.bottomShadow,
        'overlap': this.overlapInside,
      }
    },
    basisClass() {
      const obj = {
        'overlap': this.overlap
      }
      if (this.basis) obj[`bg-${this.basis}`] = true
      return obj
    },
    slotClasses() {
      return {
        large: this.large
      }
    },
    sidePaddingClass() {
      const obj = {}
      if (!this.noPadding) {
        obj[`m${this.sidePadding}-left`] = true
      }
      return obj
    },
    hasAbsolute() {
      return !!this.$slots.absolute || this.logo
    }
  },
  components: {
    AbsoluteCard,
    Logo
  }
}
</script>

<style lang="scss">

.section-wrapper {
  .home {
    height: 75vh;
    @media screen and(max-height: 700px) {
      height: 73vh;
    }
  }
  .align-self-end {
    align-self: flex-end;
  }
  border: none;

  &.overlap {
    z-index: 999;
    margin-top: -100px;
  }
}

.section-container {
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;

  padding-top: 80px;
  padding-bottom: 80px;

  &.negative-top {
    margin-top: -100px !important;
    z-index: 0;
  }

  &.top {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    margin-top: 0;
    padding-top: 0;
  }

  &.light {
    background: #F5FCF8 url('./../../../assets/world-map.svg') 0% 0% no-repeat padding-box!important;
    background-position-x: center!important;
    opacity: 1;
  }

  &.bottom {
    padding-bottom: 0px;
  }
  &.no-border-bottom {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    margin-bottom: 0px;
  }
  &.bottom-shadow {
    box-shadow: 0px 50px 50px #42375B1A;
  }

  &.overlap {
    z-index: 1000;
    padding-bottom: 120px;
  }

  .section-heading-a {
    font: Bold 14px/16px Gibbs;
    letter-spacing: 2.57px;

    &.dark {
      color: #00d857;
    }
  }

  .section-heading-b {
    font: 38px/58px Gibbs;
    font-weight: bold;
    &.dark {
      color: #fff;
    }
  }

  .mobile-gutter {
    width: 25px;
  }
  @media only screen and (max-width: 768px) {
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    .section-heading-b {
      font-size: 1.9em;
      line-height: 30px;
      font-weight: 800;
    }
    .section-heading-a {
      font-size: 0.9em;
    }
  }
  @media screen and(max-width: 1400px) and(min-width: 768px) {
    .p80-small-ver {
      padding-top: 40px;
      padding-bottom: 40px;
    }
    .section-heading-a {
      font-size: 0.6em;
      
    }
    .section-heading-b {
      font-size: 2em;
    }
  }
}
.smaller {
  @media only screen and (min-width: 1500px) { 
    max-width: 1362px;
    width: 100%;
    margin: 0 auto;
    right: 0;
    left: 0;
  }
  @media only screen and (min-width: 768px) and (max-width: 1500px) {
    max-width: 87%;
    padding-left: 50px;
    padding-right: 50px;
    width: 100%;
    margin: 0 auto;
    right: 0;
    left: 0;
  }
}
</style>