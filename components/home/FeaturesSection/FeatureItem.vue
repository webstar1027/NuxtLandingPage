<template lang="pug">
  .feature-item.flex-row.justify-center.relative(
    @mouseover="hoverChanged(true)"
    @mouseleave="hoverChanged(false)"
  )
    .part.part-topleft.absolute(:class="{hovered}")
    .part.part-middleleft.absolute(:class="{hovered}")
    .part.part-bottomleft.absolute(:class="{hovered}")
    .part.part-topmiddle.absolute(:class="{hovered}")
    .part.part-middle.absolute(:class="{hovered}")
    .part.part-bottommiddle.absolute(:class="{hovered}")
    .part.part-topright.absolute(:class="{hovered}")
    .part.part-middleright.absolute(:class="{hovered}")
    .part.part-bottomright.absolute(:class="{hovered}")
    .content.flex-col.p20.noSidePaddingMobile
      .flex-row.align-center
        .feature-img-container(:class="{hovered}")
          .p0.bg-white.avatar.line-small
            img.feature-img(:src="feature.image" alt="")
        .flex-col.p25-left.title-container
          .feature-title.text-green.text-bold.uppercase.lspacing-2.line-medium {{ feature.title }}
          .p5-ver
          .feature-subtitle.text-bold.text-grey.fs22.line-medium {{ feature.subtitle }}
      .p10-bot
      .flex-row
        .is-hidden-mobile.p20-left
        .flex-col.font-family-alt.fs14.description
          .feature-desc.line-large.standard-p {{ feature.description }}
          .p15-bot
          //- div(style="display: inline-block; width: max-content")
          //-   nuxt-link.text-medium.text-green(:to="`/about#${feature.hash}`" @mouseover="readmoreHoverChanged(true)" @mouseleave="readmoreHoverChanged(false)") Read More
          //-   .underline(:class="{hovered: hoveredRead}")
        .is-hidden-mobile.p20-right
      .is-hidden-mobile.p25-bot
</template>

<script>
export default {
  props: {
    feature: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    hovered: false,
    hoveredRead: false
  }),
  methods: {
    hoverChanged(val) {
      this.hovered = val
    },
    readmoreHoverChanged(val) {
      this.hoveredRead = val
    }
  }
}
</script>

<style lang="scss">
.feature-item {
  @media only screen and (min-width: 768px) {
    .feature-title {
      font-size: 14px;
    }
    .feature-subtitle {
      font-size: 22px;
    }
    .title-container {
      padding-right: 45px;
    }
  }
  .part-topleft {
    left: 0;
    top: 0;
    width: 200px;
    border-top-left-radius: 72px;
    height: 200px;
  }
  .part-middleleft {
    left: 0;
    top: 200px;
    width: 100px;
    height: calc(100% - 300px);
  }
  .part-bottomleft {
    left: 0;
    bottom: 0;
    width: 100px;
    border-bottom-left-radius: 25%;
    height: 100px;
  }
  .part-topmiddle {
    left: 200px;
    top: 0;
    width: calc(100% - 300px);
    height: 200px;
  }
  .part-middle {
    left: 100px;
    top: 200px;
    width: calc(100% - 200px);
    height: calc(100% - 300px);
  }
  .part-bottommiddle {
    left: 100px;
    bottom: 0;
    width: calc(100% - 200px);
    height: 100px;
  }
  .part-topright {
    right: 0;
    top: 0;
    max-width: calc(100% - 200px);
    width: 100px;
    border-top-right-radius: 25%;
    height: 100px;
  }
  .part-middleright {
    right: 0;
    top: 100px;
    width: 100px;
    height: calc(100% - 200px);
  }
  .part-bottomright {
    right: 0;
    bottom: 0;
    width: 100px;
    border-bottom-right-radius: 25%;
    height: 100px;
  }

  .part {
    transition: 0.2s ease-in-out;
    &.hovered {
      background-color: #352c54;
    }
  }

  .content {
    z-index: 201;
    background-color: transparent;
    @media only screen and (min-width: 768px) {
      min-width: 406px;
    }
    .underline {
      margin-top: 1px;
      background-color: #00d857;
      height: 1px;
      width: 0px;
      transition: 0.3s ease-in-out;
      &.hovered {
        width: 100%;
        background-color: #00d857;
      }
    }
    .feature-img-container {
      .feature-img {
        min-width: 100px;
        width: 100px;
      }

      @media only screen and (min-width: 768px) {
        transition: 0.2s ease-in-out;
        padding: 5px 5px;
  
        &.hovered {
          padding: 0px 10px 10px 0px;
        }
        .feature-img {
          min-width: 100px;
          width: 100px;
        }
      }

    }

    .feature-desc {
      @media only screen and (min-width: 768) {
        min-width: 326px;
      }
      color: #cfccd5;
    }

    @media only screen and (max-width: 768px) {
        .feature-desc {
          font-size: 0.9em;
          color: #FFFFFF;
        }
      .feature-title {
        font-size: 0.8em;
      }
      .feature-subtitle {
        font-size: 1.2em;
        font-weight: 800;
      }
      .title-container {
        padding-right: 0px;
        padding-left: 10px;
      }
      .feature-img-container {
        .feature-img {
          min-width: 90px;
          width: 90px;
        }
      }
  }
  @media screen and(max-width: 1400px) and(min-width: 768px)  {
    .content {
      min-width: 350px;
    }
    .feature-title {
        font-size: 0.6em;
      }
      .feature-subtitle {
        font-size: 1em;
      }
      .description {
        font-size: 0.6em;
      }
      .feature-img {
          min-width: 90px !important;
          width: 90px !important;
        }
  }
  }
  @media screen and(max-width: 1400px) and(min-width: 768px) {
    .content {
      min-width: 350px;
    }
  }
}

</style>