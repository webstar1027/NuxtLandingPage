<template lang="pug">
  .subscribe-card.flex-row.center
    .subscribe-card-content.p40.bg-white.flex-col.center.animate-on-scroll.fade-in-up.delay-animation
      .subscribe-title.text-black Subscribe To Our Newsletters
      .p10-bot
      .subscribe-subtitle.text-light.font-family-alt.text-dark Subscribe to our newsletter and stay up to date with the latest news and updates.
      .p15.space-on-smaller
      .flex-row.center.w100
        .flex-row.w70.input-field
          .flex-1
            input.p10-ver.p20-side.fit.font-family-alt(placeholder="e.g. name@mail.com" v-model='email')
          FlatButton(color="green" emit='click' @click='signUp')
            .uppercase.p35-side.p10-ver.font-family-alt.fs15 Sign Up
</template>

<script>
import FlatButton from '@/components/common/Button/FlatButton'
import bus from '@/services/bus.js'

export default {
  data() {
    return {
      email: ''
    }
  },
  methods: {
    signUp() {
      console.log("signup")
      this.email = ''
      // bus.$emit('open-modal', { img: '/img/modalImg.svg', message: 'THANK YOU', title: 'for subscribing' })
    }
  },
  components: {
    FlatButton
  }
}
</script>

<style lang="scss">
.subscribe-card {
  height: 195px;
  @media only screen and (min-width: 768px) {
    height: 266px;
    min-width: 838px;
    max-width: 838px;
    width: 838px;
    margin: 0 auto;
  }

  .subscribe-card-content {
    width: 100%;
    min-width: 600px;
    box-shadow: 0px 0px 50px #42375B1A;

    .subscribe-title {
      font: 32px/38px Gibbs;
      font-weight: bold;
    }

    .subscribe-subtitle {
      font: 16px/28px Montserrat;
      letter-spacing: 0;
    }
  }
  input {
    outline: none;
    &::placeholder{
      color: #0000004D;
      font-size: 16px;
    }
    &:focus{
      border: 1px solid #00d857;
      &::placeholder{
        color: #fff;
      }
    }
  }
  @media screen and(max-width: 1400px) and(min-width: 768px) {
    min-width: 500px;
    max-width: 500px;
    width: 500px;
    padding: 25px;
    .subscribe-card-content {
    width: 100%;
    min-width: 600px;
    box-shadow: 0px 0px 50px #42375B1A;

    .space-on-smaller {
      padding: 5px;
    }

    .subscribe-title {
      font-size: 1.5em;
    }
    .subscribe-subtitle {
      font-size: 0.7em;
    }
    }
    // .input-field {
    //   width: 100%;
    // }
  }
}
</style>