<template lang="pug">
  .cookie-policy.relative(v-if='!voted')
    .cookie-policy-button.flex-col.center.text-white.fs18.pointer(v-if="!displayed" @click="displayed=true")
      .fit.p15.bg-alt.flex-col.center.insider
        //- .line-medium.expand-icon
        //-   img(:src="expandSvg")
        .line-medium.flex-col.center
          .fs13 Cookie
          .fs13 Policy
    .cookie-policy-box.bg-white(v-else)
      .relative.is-hidden-tablet
        .close-btn.absolute.flex-row.center.avatar.pointer(@click="closeSurvey")
          .p10.bg-alt.flex-row.center.avatar
            img(:src="closeLightSvg" style="min-width:17px;height:17px;")
      .flex-col.p30.text-content
        .fs17.text-bold How Tech Savvy Are You?
        .p10.p5-small-height
        .flex-row
          FlatButton(@checkbox="submitSurvey(1) " emit='checkbox')
            .fs14.p10-ver.p15-side.check-option I don't 
              br.is-hidden-tablet
              | know much
          .p5
          FlatButton(@checkbox="submitSurvey(2) " emit='checkbox')
            .fs14.p10-ver.p15-side.check-option Some tech 
              br.is-hidden-tablet
              | terms are 
              br.is-hidden-tablet
              | cool
          .p5
          FlatButton(@checkbox="submitSurvey(3) " emit='checkbox')
            .fs14.p10-ver.p15-side.check-option I'm an IT
              br.is-hidden-tablet
              | guru
        .p10.p5-small-height
        .flex-row.font-family-alt.fs11.agree-text
          .text-light By clicking one of these buttons you accept our&nbsp;
          a.text-medium.theme-link(href="/privacy-policy" target="_blank") cookies & privacy policy
      .relative.is-hidden-mobile
        .close-btn.absolute.flex-row.center.avatar.pointer(@click="closeSurvey")
          .p10.bg-alt.flex-row.center.avatar
            img(:src="closeLightSvg" style="min-width:17px;height:17px;")
</template>

<script>
import FlatButton from '@/components/common/Button/FlatButton'

import expandSvg from '@/assets/icons/expand_icon.svg'
import closeLightSvg from '@/assets/icons/close-light.svg'

export default {
  mounted() {
    this.checkLocalStorage()
    if(!this.voted) {
      this.forceDisplay()
    }
  },
  data: () => ({
    displayed: false,
    voted: false,
    expandSvg,
    closeLightSvg
  }),
  methods: {
    forceDisplay() {
      setTimeout(() => {
        this.displayed = true
    }, 3000);
    },
    submitSurvey(val) {
      localStorage.setItem('cookie-policy', val)
      this.closeSurvey()
    },
    closeSurvey() {
      this.displayed = false
      this.checkLocalStorage()
    },
    checkLocalStorage() {
      const val = localStorage.getItem('cookie-policy')
      if(val) {
        this.voted = true
      }
    }
  },
  components: {
    FlatButton
  }
}
</script>

<style lang="scss">
.cookie-policy {
  .cookie-policy-button {
    position: fixed;
    bottom: 20px;
    right: 25px;
    // height: 75px;
    // width: 75px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    z-index: 100000;
    .insider {
      padding-top: 15px;
      border-radius: 50%;
      .expand-icon {
        max-width: 13px;
      }
    }
  }

  .flat-button {
    font-family: Gibbs, sans-serif;
    text-transform: none;
    width: auto;
  }
  
  .cookie-policy-box {
    position: fixed;
    // width: 602px;
    bottom: 40px;
    right: 40px;
    z-index: 100000;
    box-shadow: 20px 50px 50px #0E032712;
    @media screen and(max-width: 768px) {
      bottom: 0px;
      right: 0px;
      left: 0px;
      width: 100%;
      z-index: 2000000001;
      .text-content {
        margin-left: -10px;
        padding-top: 20px;
        padding-bottom: 20px;
      }
      .check-option {
        text-align: left;
      }
      .agree-text {
        flex-direction: column;
      }
    }
    .theme-link {
      color: #42375b;
      font-weight: 500;
    }
  }

  .close-btn {
    width: 15px;
    height: 15px;
    bottom: -5px;
    right: -7px;
    @media screen and(max-width: 768px) {
      right: 10px;
      width: 20px;
      height: 20px;
    }
  }
  @media screen and(max-width: 1400px) and(min-width: 768px) {
    .p5-small-height {
      padding: 5px;
    }
    // .text-content {
    //   padding: 15px 30px;
    // }
    .cookie-policy-box {
      .text-bold {
        font-size: 1em;
      }
      .check-option {
        font-size: 0.6em;
      }
      .text-light, .text-medium {
        font-size: 0.6em;
      }
    }
  }
}
</style>
