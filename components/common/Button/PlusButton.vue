<template lang="pug">
  .plus-button.relative(
    :class="{hovered}"
  )
    .layer.layer-a
    .layer.layer-b(:class="{hovered}")
</template>

<script>
export default {
  data: () => ({
  }),
  props: ['hovered'],
  methods: {
 
  }
}
</script>

<style lang="scss">
.plus-button {
  width: 30px;
  height: 30px;

  transition: width, margin 0.2s ease-in-out;
  &.hovered {
    width: 30px;
    margin-right: 15px;
  }

  .layer {
    position: absolute;
    top: 0;
    left: 50%;
    width: 2px;
    height: 34px;
    background-color: #00d857;
  }

  .layer-a {
    z-index: 500;
  }
  .layer-b {
    z-index: 501;
    transition: 0.2s ease-in-out;
    &.hovered {
      transform: rotateZ(90deg);
    }
  }
}
</style>