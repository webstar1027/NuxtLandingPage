<template lang="pug">
  .flat-button.text-bold.text-center(
    @mouseover="hoverChanged(true)"
    @mouseleave="hoverChanged(false)"
    @click="doEmit(emit, rootEmit)"
    :class="classes"
  )
    slot
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'white'
    },
    large: Boolean,
    block: Boolean,
    emit: String,
    rootEmit: Boolean
  },
  data: () => ({
    hovered: false
  }),
  computed: {
    classes() {
      const obj = {}
      obj[this.color] = true
      obj.hovered = this.hovered
      obj.large = this.large
      obj.block = this.block
      return obj
    }
  },
  methods: {
    hoverChanged(val) {
      this.hovered = val
    },
    doEmit (prop, root) {
      if (root) {
        this.$root.$emit(prop)
      } else {
        this.$emit(prop)
      }
    }
  }
}
</script>

<style lang="scss">
.flat-button {
  opacity: 1;
  min-width: 100px;
  width: 220px;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  font-family: Montserrat, sans-serif;
  letter-spacing: 0.4px;
  color: #FFFFFF;
  text-transform: uppercase;
  opacity: 1;
  &.large {
    min-width: 250px;
  }
  &.block {
    min-width: 100%;
  }

  &.white {
    background-color: #fff;
    color: #42375b;
    border: 1px solid #42375b;
    &.hovered {
      background-color: #42375b;
      color: #fff;
    }
  }
  &.green {
    background-color: #00d857;
    color: #fff;
    &.hovered {
      background-color: darken($color: #00d857, $amount: 5);
      color: #fff;
    }
  }

  cursor: pointer;
  white-space: nowrap;
  @media only screen and (max-width: 768px) {
    width: 170px;
    font-size: 0.9em;
  }
  @media screen and(max-width: 1400px) and(min-width: 768px) {
    width: 170px;
    font-size: 0.6em;
  }
  }
</style>