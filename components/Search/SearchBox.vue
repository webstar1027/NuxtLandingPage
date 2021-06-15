<template lang="pug">
  .search-container.flex-row.align-center.w100.h100.relative.justify-end(
    @mouseover="hoverChanged(true)"
    @mouseleave="hoverChanged(false)"
  )
    form.search-box.flex-row.align-center.text-white.h100.w100(@submit.prevent="onSubmit" :class="{hovered: boxVisible}")
      .p10-right
      input.p10-ver.p20-side.flat-input.font-family-alt.fs17.w100(v-model.trim="searchTerm" placeholder="Search" style="background:transparent;border:none;color:white;outline:none;")
    .absolute.flex-row.justify-end.align-center(style="right:0;")
      img.search-icon.pointer.line-small(:src="searchSvg")
      .p5-right
      .spacer(:class="{hovered: boxVisible}")
    .p10-right
</template>

<script>
import searchSvg from '@/assets/icons/search.svg'

export default {
  data: () => ({
    searchTerm: '',
    boxVisible: false,
    searchSvg
  }),
  methods: {
    hoverChanged(val) {
      this.boxVisible = val
    },
    onSubmit() {
      this.$emit('searched', searchTerm)
    }
  }
}
</script>

<style lang="scss">
.search-container {
  max-width: 400px;

  .search-icon {
    width: 16px;
  }

  .search-box {
    transition: 0.3s ease-in-out;
    background-color: #42375b;
    max-width: 0%;
    overflow: hidden;
    &.hovered {
      max-width: 100%;
      background-color: #382a57;
    }
  }

  .spacer {
    transition: 0.3s ease-in-out;
    padding-right: 5px;

    &.hovered {
      padding-right: 35px;
    }
  }
}
</style>