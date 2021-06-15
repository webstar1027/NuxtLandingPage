<template lang="pug">
  .pills.flex-row.justify-center.w100
    Pill(v-for="(pill, index) in pills" :key="`pill${index}`" :pill="pill" :minWidth="minWidth" @selected="$emit('selected', idx)")
</template>

<script>
import Pill from '@/components/common/Pills/Pill'

export default {
  props: {
    pills: Array
  },
  computed: {
    minWidth() {
      return 100 / this.pills.length
    }
  },
  components: {
    Pill
  }
}
</script>

<style lang="scss" scoped>
.pills {
  justify-content: space-between;
  padding-left: 20px;
}
</style>