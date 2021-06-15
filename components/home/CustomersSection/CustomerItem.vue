<template lang="pug">
  .customer-item.flex-row.center(
    @mouseover="hoverChanged(true)"
    @mouseleave="hoverChanged(false)"
  )
    img.customer-img.fluid(:src="customerItem.image" :class="{hovered}")
</template>

<script>
export default {
  props: {
    customerItem: {
      type: Object,
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
  .customer-img {
    transition: 0.2s ease-in-out;
    opacity: 0.7;
    &.hovered {
      opacity: 1;
    }
  }
</style>