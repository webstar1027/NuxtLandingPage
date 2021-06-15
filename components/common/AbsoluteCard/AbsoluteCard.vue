<template lang="pug">
  .absolute-card(:class="{small, big}")
    slot
</template>

<script>
export default {
  props: {
    small: Boolean,
    big: Boolean
  }
}
</script>

<style lang="scss">
.absolute-card {
  position: absolute;
  top: -82px;
  left: 0;
  margin: 0 auto;
  width: 100%;
  text-align: center;
  z-index: 9998;

  &.small {
    top: -40px;
  }

  &.big {
    top: -200px;
  }
  @media screen and(max-width: 1400px) and(min-width: 768px) {
    top: -62px;
  }
}
</style>