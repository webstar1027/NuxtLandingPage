<template lang="pug">
  .pros-section.w100
    .columns.is-mobile.is-multiline
      .column.is-full(v-for="(pro, idx) in pros" :key="idx")
        TeamItem(:proItem="pro")
</template>

<script>
import TeamItem from '@/components/team/TeamItem'

export default {
    name: 'TeamSection',
    props: {
        pros: Array
    },
    components: {
        TeamItem
    }
}
</script>