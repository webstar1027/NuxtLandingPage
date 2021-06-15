<template lang="pug">
  .pros-section.w100
    .columns.is-mobile.is-multiline
      .column.is-one-fifth-desktop.is-half-mobile(v-for="(pro, idx) in limitPros" :key="idx")
        ProItem(:proItem="pro")
</template>

<script>
import ProItem from '@/components/home/ProsSection/ProItem'

export default {
  props: {
    pros: Array
  },
  computed: {
    limitPros() {
      return this.pros.slice(0,15)
    }
  },
  components: {
    ProItem
  }
}
</script>