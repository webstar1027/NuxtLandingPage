<template lang="pug">
  .menu-item.p15-ver(@click='$emit("click")')
    nuxt-link.fs20.text-bold.text-dark.font-family-alt(:to="item.to" ) {{ item.title }}
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.menu-item {
  a {
    transition: color 0.1s ease-in-out;
    @media screen and(max-width: 1500px) and(min-width: 768px) {
      font-size: 1em;
    }
  }
  a:hover {
    color: #00d857 !important;
  }
}
</style>