<template lang="pug">
  FullscreenWrapper
    .signup-panel.absolute(:style="getStyle" @click="$emit('panelClose')")
      form.columns(ref="signupForm")
        .is-hidden-mobile.flex-row
          .p10-side
          Burger(style="opacity: 0;pointer-events: none;")
          .p20-side
        .column.is-paddingless(@click.stop="")
          .is-hidden-mobile.flex-row.w100.sign-up-top-leap
            .flex-1
            .flex-row.align-center.h100.bg-greenish
              .p10-side
              .sign-up-button.pointer.flex-col.align-end.justify-center
                span.text-medium.font-family-alt Sign Up
              .p10-side
          .panel-content.bg-white.flex-col.w100.relative
            .is-hidden-mobile.colored-sections.absolute.fit
              .columns.fit.is-marginless
                .column.is-one-third.is-paddingless
                .column.is-two-thirds.is-paddingless.bg-greenish
            .close-panel.flex-row.w100.p25-right.p35-top
              .is-hidden-desktop.flex-row.center.pointer.p30-left(@click="$emit('panelClose')")
                img.back-icon(:src="caretLeftDarkSvg")
              .flex-1
              .is-hidden-mobile.flex-row.center.pointer.p10-right(@click="$emit('panelClose')")
                img.close-icon(:src="closeDarkSvg")
            //- .p15-ver
            .columns.text-dark.is-5.is-variable.is-marginless.most-visible
              .column.is-one-third.is-full-mobile
                .flex-col.w100.center
                  img.w50.avatar-image(:src="avatarSvg")
                  .p15-ver
                  .provide.text-bold.uppercase.line-medium.text-alt.fs13 Provide your details to
                  .p20-bot
                  .text-black.fs40.line-small Sign Up Now
                  .p35-ver
                  .flex-col.center.line-large.font-family-alt.text-center.fs15.left-side-p
                    div Create a free account.
                    div A local project manager will contact you.
                    div Receive up to 1h free consultation.
                    .is-hidden-desktop.p30-ver
              .panel-right.column.is-two-thirds.is-full-mobile.bg-greenish.font-family-alt
                .flex-row.justify-center.w100
                  div(style="width: 4%")
                  .flex-col.flex-1
                    .columns.is-variable.is-7
                      .column.is-half-desktop.is-full-mobile.custom-column
                        TextField(label="Full Name" required v-model="signupInfo.name" placeholder="Name" :error="errors && errors.name ? true : false")
                        p.error(v-if='errors && errors.name') {{errors.name[0]}}
                      .column.is-half-desktop.is-full-mobile.custom-column
                        TextField(label="Work Email" required type="email" v-model="signupInfo.email" placeholder="Work Email" :error="errors && errors.email ? true : false")
                        p.error(v-if='errors && errors.email') {{errors.email[0]}}
                    .columns.is-variable.is-7
                      .column.is-half-desktop.is-full-mobile.custom-column
                        TextField(label="Password" required type="password" v-model="signupInfo.password" placeholder="Password" :error="errors && errors.password ? true : false")
                        p.error(v-if='errors && errors.password') {{errors.password[0]}}
                      .column.is-half-desktop.is-full-mobile.custom-column
                        TextField(label="Re-type Password" required type="password" v-model="signupInfo.password_confirmation" placeholder="Confirm Password" :error="errors && errors.password_confirmation ? true : false")
                        p.error(v-if='errors && errors.password_confirmation') {{errors.password_confirmation[0]}}
                    .columns.is-variable.is-7
                      .column.is-half-desktop.is-full-mobile.custom-column
                        TextField(label="Organisation" v-model="signupInfo.company" placeholder="Organisation")
                      .column.is-half-desktop.is-full-mobile.custom-column
                        TextField(label="Project or Company Website" v-model="signupInfo.website" placeholder="Website" :error="errors && errors.website ? true : false")
                        p.error(v-if='errors && errors.website') {{errors.website[0]}}
                    .columns.is-variable.is-7
                      .column.is-half-desktop.is-full-mobile.custom-column
                        TextField(label="Mobile Number" required v-model="signupInfo.contacts[0].contact" placeholder="Mobile Number" :error="errors && errors['contacts.0.contact'] ? true : false")
                          .flex-row.align-center.justify-end.whatsup
                            .p10
                            input(type="checkbox" class="checkbox-custom" id="whatsapp" name="whatsapp" v-model="whatsapp")
                            label(class="checkbox-custom-label" for="whatsapp") Whatsapp
                        p.error(v-if='errors && errors["contacts.0.contact"]') {{errors['contacts.0.contact'][0]}}
                      .column.is-half-desktop.is-full-mobile.username-messenger.custom-column
                        TextField(label="Preferred Messenger" required v-model="signupInfo.messenger.username" placeholder="Username")
                          .flex-row.align-center.justify-end.messenger-type.is-hidden-mobile
                            .p10
                            DropDown(:options='messengers' label='Choose' v-model='signupInfo.messenger.type')
                        .flex-row.p20-top.align-center.justify-end.messenger-type.is-hidden-tablet
                            .p10
                            DropDown(:options='messengers' label='Choose' v-model='signupInfo.messenger.type')
                            //- select(v-model="signupInfo.messenger.type" required)
                            //-   option(v-if="!signupInfo.messenger.type" :value="null" selected disabled) Choose
                            //-   option(v-for="(messenger, idx) in messengers" :key="idx" :value="messenger.value") {{ messenger.name }}
                  div(style="width: 4%")
                .panel-bottom.flex-col.bg-greenish
                  .columns.is-marginless
                    //- .is-hidden-mobile.column.is-one-third.bg-white
                    .column
                      .flex-row.flex-wrap.space-between.align-center.p10-side.text-medium.font-family-alt.fs15
                        div Preferred method of contact:
                        .is-hidden-desktop.p10-ver.w100
                        .is-hidden-mobile.p20-side
                        .preferred-methods.flex-row.space-around.flex-1
                          .flex-row.align-center
                            input(type="checkbox" class="checkbox-custom" id="messenger" name="messenger" v-model="signupInfo.contact_method" value="messenger")
                            label(class="checkbox-custom-label" for="messenger") Messenger
                          .is-hidden-desktop.p5-top
                          .flex-row.align-center
                            input(type="checkbox" class="checkbox-custom" id="mobile" name="mobile" v-model="signupInfo.contact_method" value="mobile")
                            label(class="checkbox-custom-label" for="mobile") Mobile
                          .is-hidden-desktop.p5-top
                          .flex-row.align-center
                            input(type="checkbox" class="checkbox-custom" id="email" name="email" v-model="signupInfo.contact_method" value="email")
                            label(class="checkbox-custom-label" for="email") Email
                          .is-hidden-desktop.p5-top
                          .flex-row.align-center
                            input(type="checkbox" class="checkbox-custom" id="inperson" name="inperson" v-model="signupInfo.contact_method" value="inperson")
                            label(class="checkbox-custom-label" for="inperson") Meet in {{userCity.length > 0 ? userCity : "person"}}
                  .columns.is-marginless
                    //- .is-hidden-mobile.column.is-one-third.bg-white
                    .column
                      .is-hidden-mobile.p20-ver.p5-ver-on-small
                      .flex-row.flex-wrap.space-between.align-center.p10-side
                        .fs17.by-signin-in * By signing up you agree to the <a href="/privacy-policy" target="_blank">Terms and Conditions.</a>
                        .is-hidden-desktop.p20-ver.w100
                        FlatButton(@submitReg="onSignupClick" emit="submitReg" color="green" large)
                          .uppercase.p35-side.p10-ver.font-family-alt.fs15 Sign Up
                      .is-hidden-mobile.p10-ver
        .is-hidden-mobile.flex-row
          .p10-side
          Burger(style="opacity:0;pointer-events: none;")
          .p20-side
</template>

<script>
import axios from 'axios'
import config from '@/config'
import FullscreenWrapper from '@/components/common/Fullscreen/FullscreenWrapper'

import TextField from '@/components/common/Inputs/TextField'
import FlatButton from '@/components/common/Button/FlatButton'
import DropDown from '@/components/common/Button/DropDown'

import Burger from '@/components/common/Burger/Burger' // just to fill the space equally

import avatarSvg from '@/assets/avatar.svg'
import closeDarkSvg from '@/assets/icons/close-dark.svg'
import caretLeftDarkSvg from '@/assets/icons/Icon feather-caret-left.svg'
import { mapGetters } from 'vuex'

export default {
  props: {
    opened: Boolean
  },
  data: () => ({
    signupInfo: {
      name: '',
      email: '',
      company: '',
      website: '',
      contacts: [{contact: '', type: 'mobile'}],
      messenger: {
        username: '',
        type: null
      },
      contact_method: [],
      password: '',
      password_confirmation: ''
    },
    messengers: [
    {
      name: 'Skype',
      value: 'skype'
    },
    {
      name: 'Telegram',
      value: 'telegram'
    },{
      name: 'Facebook Messenger',
      value: 'facebook'
    },{
      name: 'Twitter',
      value: 'twitter'
    },{
      name: 'Instagram',
      value: 'instagram'
    },{
      name: 'Viber',
      value: 'viber'
    },{
      name: 'HangOuts',
      value: 'hangouts'
    },{
      name: 'Line',
      value: 'line'
    },{
      name: 'WeChat',
      value: 'wechat'
    },{
      name: 'IMO',
      value: 'imo'
    }, {
      name: 'Other',
      value: 'other'
    }],
    avatarSvg,
    closeDarkSvg,
    caretLeftDarkSvg,
    errors: null,
    whatsapp: false
  }),
  computed: {
    getStyle() {
      const obj = {}
      obj.height = this.opened ? '100vh' : '0'
      obj['max-height'] = this.opened ? '100vh' : '0'
      obj.width = '100vw'
      return obj
    },
    ...mapGetters({
      userCity: 'location/getUserCity',
    }),
  },
  methods: {
    onSignupClick() {
      
      // if (this.$refs.signupForm.checkValidity()) {
      //   this.submitSignup()
      // } else {
      //   this.$refs.signupForm.reportValidity()
      // }
      this.submitSignup()
    },
    submitSignup() {
      if (this.whatsapp) {
        this.signupInfo.contacts.push({contact: this.signupInfo.contacts[0].contact, type: 'whatsapp'})
      }
      axios.post(`${config.api_url}customers`, 
        this.signupInfo
      )
      .then(res => {
        console.log('success', res.data.data.id)
        const userId = res.data.data.id
        if (process.client) {
          localStorage.setItem('cn-registred', userId)
          this.$root.$emit('signupOff')
          this.$router.push('/signup-step2')
        }
        response
      })
      .catch(e => {
        if (e.response) {
          this.errors = e.response.data.errors
        }
      })
    }
  },
  components: {
    FullscreenWrapper,
    TextField,
    FlatButton,
    Burger,
    DropDown
  }
}
</script>

<style lang="scss" scoped>
.signup-panel {
  font-family: Gibbs, sans-serif;
  color: #42375b !important;

  left: 0;
  top: 0;
  z-index: 9999;
  zoom: 1;
  transition: 0.3s ease-in-out;
  overflow: hidden;
  a {
    color: #42375b;
  }
  .sign-up-top-leap {
    height: 100px;
  }
  .panel-content {
    border-bottom-left-radius: 100px;
    height: 91%;
    overflow: hidden;
    
    .panel-bottom {
      padding-top: 25px;
    }
    .panel-right {
      height: 680px;
      max-height: calc(100vh - 130px);
      overflow-y: auto;
      overflow-x: hidden;
      :-webkit-scrollbar {
        width: 0px;
      }
 
      ::-webkit-scrollbar-track {
          -webkit-box-shadow: transparent; 
          border-radius: 0px;
      }
 
      ::-webkit-scrollbar-thumb {
          -webkit-box-shadow: transparent; 
          border-radius: 0px;
      }
      .messenger-type {
        min-width: 133px;
        @media screen and(max-width: 768px) {
          min-width: 90px;
          width: 170px;
          float: right;
        }
      }
      .whatsup {
        min-width: 151px;
      }
    }
    .most-visible {
      z-index: 4;
    }
    .colored-sections {
      top: 0;
      left: 0;
      z-index: 1;
    }

    .close-panel {
      top: 0;
      left: 0;
      z-index: 2;

      .back-icon {
        width: 25px;
        height: 25px;
      }

      .close-icon {
        width: 32px;
       
      }
       @media screen and(max-width: 1400px) and(min-width: 768px) {
          .close-icon {
            width: 25px;
          }
          padding-top: 20px;
        }
    }

    > div {
      z-index: 2;
    }
  }

  .provide {
    letter-spacing: 1.57px;
  }

  .close-btn {
    transition: 0.3s ease-in-out;
  }
  .close-btn:hover {
    transform: scale(1.2);
  }

  overflow: hidden;
  @media only screen and (max-width: 768px) {
    overflow-y: auto;

    .panel-content {
      padding: 0px;
      border-radius: 0;

      .panel-right,
      .panel-bottom {
        // padding: 30px;
        .preferred-methods {
          flex-direction: column;
        }
      }
    }
  }
}
  .error {
    color: red;
    font-size: 14px;
  }
.preferred-methods, .whatsup {
  .checkbox-custom {
      display: none;
  }
  .checkbox-custom-label {
      display: inline-block;
      position: relative;
      vertical-align: middle;
      line-height: 32px;
      margin: 0px;
      cursor: pointer;
      font-weight: 500;

  }
  .checkbox-custom + .checkbox-custom-label:before {
      content: '';
      display: inline-block;
      width: 32px;
      height: 32px;
      background: #FFFFFF 0% 0% no-repeat padding-box;
      border: 1px solid #C9E3D4;
      border-radius: 5px;
      opacity: 1;
      margin-right: 14px;
      line-height: 32px;
      vertical-align: middle;
  }
  .checkbox-custom:checked + .checkbox-custom-label:before {
      border: 1px solid #00D857;
  }

  .checkbox-custom:checked + .checkbox-custom-label:after {
      content: "";
      padding: 2px;
      position: absolute;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      background: #42375B 0% 0% no-repeat padding-box;
      opacity: 1;
      top: 11px;
      left: 10px;
  }

  p {
      position: relative;
      text-align: left;
      font-size: 16px;
      font-weight: 700;
      font-family: 'Montserrat', sans-serif;
      letter-spacing: 0;
      color: #382A57;
      opacity: 1;
      margin-bottom: 33px;
      span.error{
          position: absolute;
          left: 0;
          top: 0;
          color: red;
          font-size: 14px;
      }
  }
  
}
@media screen and(max-width: 1400px) and(min-width: 768px) {
    .custom-column {
      padding-top: 5px;
      padding-bottom: 5px;
    }
    .sign-up-top-leap {
      height: 13% !important;
    }
    .panel-bottom {
      padding-top: 5px !important;
    }
    .p5-ver-on-small {
      padding-top: 2.5px;
      padding-bottom: 2.5px;
    }
    .by-signin-in {
      font-size: 0.8em;
    }
    .avatar-image {
      width: 30%;
    }
    .provide {
      font-size: 0.66em;
    }
    .text-black {
      font-size: 2.2em;
    }
    .left-side-p {
      font-size: 0.8em;
    }
  }

</style>