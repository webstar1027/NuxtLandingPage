<template lang="pug">
  .pill.flex-col.center.bg-white(
    @mouseover="hoverChanged(true)"
    @mouseleave="hoverChanged(false)"
    @click="$root.$emit('scrollToAbout', pill.ref ? pill.ref : '')"
    style="max-width: 200px"
    :style="{'min-width': minWidth + 'px'}"
    :class="{hovered}"
  )
    img.pill-img(:src="pill.img" alt="")
    .p10-ver
    .p10-side.pill-text.text-bold.text-center.line-medium.text-dark.fs14 {{ pill.title }} <br> {{pill.title2}}
</template>

<script>
export default {
  props: {
    pill: {
      type: Object,
      required: true
    },
    minWidth: {
      type: Number,
      required: true
    }
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
.pill {
  display: inline-flex;
  box-shadow: 20px 50px 50px #42375B12;
  border: 1px solid #F5F4F4;
  border-radius: 30px;
  opacity: 1;
  width: 155px;
  height: 165px;
  margin: 0 5px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &.hovered {
    height: 205px;
  }

  .pill-img {
    width: 55px;
    width: auto;
    display: block;
  }

  .pill-text {
    letter-spacing: 0;
    text-transform: uppercase;
    opacity: 1;
  }
  @media screen and(min-width: 1400px) and(max-width: 1500px) {
    width: 12%;
    height: 150px;
    .pill-img {
      width: 5.5vh;
    }
  }
  @media screen and(max-width: 1400px) and(min-width: 768px) {
    width: 12%;
    height: 130px;
    .pill-img {
      width: 5.5vh;
    }
    .pill-text {
      font-size: 0.6em;
    }
  }
} 
</style>