<template lang="pug">
  .top-section.flex-col
    .p10-ver.is-hidden-desktop
    .flex-row.justify-center.columns.h100
      .flex-row.center.column.align-self-center
        .columns
          .p15.is-hidden-mobile
          .p10.is-hidden-desktop
          .column.flex-col.text-white
            .p45-top.is-hidden-mobile.above-text
            .offer.text-alt.above-title.text-bold.fade-in-left.active TOP GRADE DEVELOPERS & DESIGNERS
            .p10.is-hidden-mobile.hide-on-small-heigh
            .p5.is-hidden-desktop
            .is-hidden-mobile.p10.hide-on-small-heigh
            .line-medium.top-title.fade-in-left-long.active
              .text-black Agency Quality
              .text-black At Freelancer Prices.
            .p10.is-hidden-mobile
            .p5.is-hidden-desktop
            .guarantee.text-white.font-family-alt.p5-left.fade-in-left.active Guaranteed peace of mind.
            .p35-ver.is-hidden-mobile.small-heigh-vertical
            .p20-ver.is-hidden-desktop
            FlatButton.fade-in-up.active(color="green" rootEmit emit="signupOpen" )
              .uppercase.p35-side.p15-ver.signUp-button GET FREE QUOTE
      .is-hidden-mobile.image-holder.w60.column
        BackgroundImage
        //- img.fluid(src="@/assets/cn_illustration_home.svg" alt="")
</template>

<script>
import FlatButton from '@/components/common/Button/FlatButton'
import BackgroundImage from '@/components/home/TopSection/BackgroundImage'

export default {
  components: {
    FlatButton,
    BackgroundImage
  }
}
</script>

<style lang="scss">


.top-section {
  height: 100%;
  .image-holder {
    max-width: 70vh;
    align-self: flex-end;
  }
  // @media screen and(min-width: 1300px) {
  //   min-height: 550px;
  // }
  // @media screen and(min-width: 768px) and(max-width: 1300px) {
  //   min-height: 600px;
  // }
  .offer {
    letter-spacing: 2.57px;
    font: Bold 19px/22px Gibbs;
  }

  .top-title {
    .text-black, .text-light {
      font: 60px/70px Gibbs;
      letter-spacing: 2.57px;
      @media screen and(max-width: 1500px) {
        font: 50px/60px Gibbs;
        letter-spacing: 2px;
      }
    }
    .text-light {
      font-weight: 300;
    }
    .text-black {
      font-weight: 800;
    }
    
  }

  .guarantee {
    letter-spacing: -0.55px;
    font: 22px/25px Montserrat, sans-serif;
    font-weight: 500;
  }
  .desc {
    letter-spacing: 0;
    font-size: 60px;
  }
  .align-self-center {
    align-self: center;
  }


  @media only screen and (max-width: 768px) {
      .signUp-button {
        padding-left: 0px;
        padding-right: 0px;
        padding-top: 10px;
        padding-bottom: 10px;
      }
    .top-title {
      .text-black, .text-light {
        font-size: 2.3em;
        letter-spacing: 0;
        font-weight: 800;
        line-height: 45px;
      }
    }
    .offer {
      font-size: 0.8em;
    }
    .guarantee {
      font-size: 17px;
    }
    .desc {
      font-size: 36px;
    }
  }

  @media only screen and (min-width: 768px) {
    min-width: 65vh;
  }

  @media screen and(max-width: 1400px){
    min-height: auto;
    // margin-top: -5%;
  }

}
// @media only screen and (max-height: 800px) {
   
//   }

  @media screen and(max-width: 1400px) and(min-width: 768px) {
     .image-holder {
      align-self: flex-end;
      max-width: 40%;
    }
    .guarantee {
    font-size: 1em !important;
  }
    .offer {
      font-size: 0.6em !important;
    }
    .top-title {
    .text-black, .text-light {
      font-size: 2.5em !important;
      line-height: 40px !important;
    }
    }
    .hide-on-small-heigh {
      display: none;
    }

    .small-heigh-vertical {
      padding-top: 20px;
      padding-bottom: 20px;
    }
    .above-text {
      padding-top: 15px;
    }
  }
</style>