<template lang="pug">
  article.wedo-card.flex-col.bg-white.animate-on-scroll.fade-in-up(
    @mouseover="isMobile ? null : toggleDesc(true)"
    @mouseleave="isMobile ? null : toggleDesc(false)"
    @click="toggleDesc()"
  )
    .is-hidden-mobile
      .flex-row.justify-center
        img.wedo-img(:src="card.img" alt="")
      .p10
    .flex-row.space-between.align-center
      .flex-col
        .wedo-text.lspacing-2.text-bold.text-alt.fs14.line-small WE DO
        .is-hidden-mobile.p5-top
        .p10-top
        .wedo-title.text-black.fs22.line-small {{ card.title }}
      .caret-container.flex-col
        img.pointer.caret.line-small(:src="angleDownSvg" :class="{expanded}")
    .wedo-desc.standard-p.flex-col(:style="{ 'max-height': expanded ? '400px' : '0' }")
      .p20-top {{ card.description }}
      .p5
      .is-hidden-mobile.p5
      .flex-1
      nuxt-link.text-medium.text-alt.fs15.font-family-alt.read-more(
        :to="card.url"
        @mouseover="readmoreHoverChanged(true)"
        @mouseleave="readmoreHoverChanged(false)") Read More
        .underline(:class="{hovered: hovered}")

</template>

<script>
import angleDownSvg from '@/assets/icons/Icon ionic-ios-arrow-down.svg'
import responsivness from '@/mixins/responsivness'

export default {
  mixins: [responsivness],
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    windowWidth: 1080,
    expanded: false,
    angleDownSvg,
    hovered: false
  }),
  methods: {
    toggleDesc(val) {
      this.expanded = val != null ? val : !this.expanded
    },
    readmoreHoverChanged(val) {
      this.hovered = val
    }
  }
}
</script>

<style lang="scss">
.wedo-card {
  &.delay-animation {
  -webkit-animation-delay: 1s;
  -moz-animation-delay: 1s;
  animation-delay: 1s;
}
  box-shadow: 20px 50px 50px #0E032712;
  border: 1px solid #F5F4F4;
  border-radius: 25px;

  min-width: 300px;
  

  @media only screen and (min-width: 768px) and (max-width: 1500px) {
    min-width: auto;
    // margin: 15px;
  }
  .wedo-img {
    height: 186px;
    width: auto;
  }

  .wedo-desc {
    overflow: hidden;
    transition: max-height 0.25s ease-in-out;
  }

  .caret-container {
    @media only screen and (min-width: 768px) {
      align-self: flex-end;
      padding-bottom: 3px;
    }

    .caret {
      width: 21px;
      transition: transform 0.25s ease-in-out;

      &.expanded {
        transform: rotateZ(180deg);
      }
    }
  }

  margin: 30px;
  padding: 25px 30px;

  @media only screen and (max-width: 768px) {
    margin: 0;
    box-shadow: none;
    border-radius: 0px;
    .wedo-text {
      font-size: 0.8em;
    }
    .wedo-title {
      font-size: 1.3em;
    }
  }
}
.read-more {
  display: inline-block;
  width: max-content;
  .underline {
    margin-top: 1px;
    background-color: #d84166;
    height: 1px;
    width: 0px;
    transition: 0.3s ease-in-out;
    &.hovered {
      width: 100%;
      background-color: #d84166;
    }
  }
}


</style>