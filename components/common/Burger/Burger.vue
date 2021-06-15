<template lang="pug">
  .burger(
    @mouseover="hoverChanged(true)"
    @mouseleave="hoverChanged(false)"
  )
    .burger.flex-col.align-end.justify-center
      .line.c(:class="{hovered}")
      .spacing
      .line.b(:class="{hovered}")
      .spacing
      .line.a(:class="{hovered}")
</template>

<script>
export default {
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
.burger {
  min-width: 46px;
  .spacing {
    width: 1px;
    height: 8px;
  }

  .line {
    background-color: #fff;
    height: 2px;
    transition: 0.2s ease-in-out;

    &.hovered {
      background-color: #00D857;
    }

    &.a {
      width: 25px;
      &.hovered {
        width: 35px;
      }
    }
    &.b {
      width: 46px;
    }
    &.c {
      width: 15px;
      &.hovered {
        width: 28px;
      }
    }
  }
}
</style>