<template lang="pug">
  .fullscreen-wrapper.absolute.flex-row.center
    slot
</template>

<style lang="scss">
.fullscreen-wrapper {
  width: 100vw;
  height: 100vh;
}
</style>