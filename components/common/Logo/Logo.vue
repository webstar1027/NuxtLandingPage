<template lang="pug">
  .logo-container.flex-row.center.p20.bg-white
    .logo
</template>

<style lang="scss">
  .logo-container {
    display: inline-block;
    border-radius: 25px;
    box-shadow: 0px 3px 6px #0000001A;

    .logo {
      background-image: url('/img/Icon only.svg');
      background-size: cover;
      width: 45px;
      height: 39px;
      background-repeat: none;
    }
  }
</style>