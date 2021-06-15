<template lang="pug">
  .blog-item.fit.flex-row.relative(
    @mouseover="hoverChanged(true)"
    @mouseleave="hoverChanged(false)"
    :class="{hovered}"
  )
    .flex-col.flex-1.fluid
      .w100.text-center.relative
        .blog-img-pad
        img.blog-img.fluid(:src="blogItem.image")
        .blog-date.absolute.flex-row.center.avatar
          .flex-col.text-bold.uppercase.line-medium
            span {{ blogItem.day }}
            span {{ blogItem.month }}
        .blog-img-antipad
      .p25-top.flex-col.justify-center.flex-1
        .blog-category.text-bold.text-alt.uppercase.lspacing-2 {{ blogItem.category }}
        .is-hidden-mobile.p5-ver
        .blog-title.text-bold.line-medium {{ blogItem.title }}
        .flex-1
        .p10-bot
        .is-hidden-mobile.p5-bot
        .blog-description.standard-p {{ blogItem.description }}
        .flex-1
        .is-hidden-mobile.p5
        a.text-medium.text-alt.fs12.font-family-alt(:href="blogItem.url" target="_blank") More
</template>

<script>
export default {
  props: {
    blogItem: {
      type: Object,
      required: true
    },
  },
  data: () => ({
    hovered: false
  }),
  methods: {
    hoverChanged(val) {
      this.hovered = val
    }
  }
}
</script>

<style lang="scss">
.blog-item {
  .blog-img-pad {
    margin-bottom: 10px;
    transition: 0.4s ease-in-out;
  }

  .blog-img-antipad {
    margin-bottom: 0px;
    transition: 0.4s ease-in-out;
  }

  img.blog-img {
    height: 200px; 
    overflow: hidden;
    margin: 0;
  }

  .blog-date {
    left: -25px;
    bottom: 55%;
    background-color: white;
    transition: 0.3s ease-in-out;
    box-shadow: 0px 30px 20px #0000001A;
    border: 1px solid #f0f0f0;
    width: 72px;
    height: 72px;
  }

  .blog-category {
    font: 14px/16px Gibbs;
    letter-spacing: 0px;
    font-weight: 600;
  }

  .blog-title {
    font: 20px/24px Gibbs;
    font-weight: 700;
    @media screen and(max-width: 768px) {
      padding-top: 10px;
    }
  }

  .blog-description {
    // font: Regular 14px/24px Montserrat;
    // @media screen and(max-width: 768px) {
    //   font-size: 0.8em;
    // }
  }

  &.hovered {
    .blog-date {
      top: auto;
      bottom: -20px;
    }
    .blog-img-pad {
      margin-bottom: 0;
    }
    .blog-img-antipad {
      margin-bottom: 10px;
    }
  }
}
</style>