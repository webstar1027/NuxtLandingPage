<template>
  <div class="fluid" v-html="backgroundImage" />
</template>

<script>
  import backgroundImage from "~/assets/cn_illustration_home.svg?raw";

  export default {
    data() {
      return { backgroundImage };
    },
  };
</script>