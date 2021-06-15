<template>
    <div class="form-container">
        <div class="form">
            <label for="FullName">Full name <span>*</span></label>
            <input type="text" name="fullName" v-model="form.name" :class="errors && errors.name ? 'error' : ''" :placeholder="errors && errors.name ? errors.name : 'Name'">
            
            <label for="email">Email Address <span>*</span></label>
            <input type="email" name="Email" v-model="form.email" :class="errors && errors.email ? 'error' : ''" :placeholder="errors && errors.email ? errors.email : 'Email address'">
            
            <label for="phone">Phone number <span>*</span></label>
            <input type="phone" name="phone" v-model="form.phone" :class="errors && errors.phone ? 'error' : ''" :placeholder="errors && errors.phone ? errors.phone : 'Number'">

            <label for="message">Message <span>*</span></label>
            <textarea name="message" cols="30" rows="10" v-model="form.message" :class="errors && errors.message ? 'error' : ''"  :placeholder="errors && errors.message ? errors.message : 'Enter your message'"></textarea>
        </div>
        <div class="type">
            <article class="prefer">
                <p>Preferred method of contact: <span v-if="errors.contact_type && !form.contact_type.length" class="error"><br>{{errors.contact_type[0]}}</span></p>
                <div>
                    <input class="checkbox-custom" type="checkbox" id="mobile-form" value="mobile" v-model="form.contact_type">
                    <label for="mobile-form" class="checkbox-custom-label">Mobile</label>
                </div>
                <div>
                    <input class="checkbox-custom" type="checkbox" id="email-form" value="email" v-model="form.contact_type">
                    <label for="email-form" class="checkbox-custom-label">Email</label>
                </div>
                <div>
                    <input class="checkbox-custom" type="checkbox" id="in_person-form" value="in_person" v-model="form.contact_type">
                    <label for="in_person-form" class="checkbox-custom-label">Meet in person</label>
                </div>
            </article>
            <article class="devider is-hidden-mobile">
                <span>Or</span>
                <div></div>
            </article>
            <article class="social">
                <p>Rather chat via your favourite channel:</p>
                <a href="#" class="flex-row">
                    <img :src="skypeSvg"/>
                    <span>Skype</span>
                </a>
                <a href="#" class="flex-row">
                    <img :src="whatsappSvg"/>
                    <span>WhatsApp</span>
                </a>
                <a href="#" class="flex-row">
                    <img :src="telegramSvg"/>
                    <span>Telegram</span>
                </a>
                <a href="#" class="flex-row">
                    <img :src="facebookSvg"/>
                    <span>Facebook Messenger</span>
                </a>
                <button @click="doSubit">Submit</button>
            </article>
        </div>
    </div>
</template>

<script>
import config from '~/config'
import axios from 'axios'

import facebookSvg from '@/assets/icons/facebook-messenger.svg'
import skypeSvg from '@/assets/icons/skype.svg'
import telegramSvg from '@/assets/icons/telegram.svg'
import whatsappSvg from '@/assets/icons/whatsapp.svg'

export default {
    name: 'ContactForm',
    data () {
        return {
            form: {
                name: '',
                email: '',
                phone: '',
                message: '',
                contact_type: []
            },
            errors: {

            },
            facebookSvg,
            skypeSvg,
            telegramSvg,
            whatsappSvg,
        }
    },
    created () {
        this.$on('errorMessage', this.changeError)
    },
    methods: {
        doSubit () {
            const that = this
            axios.post(`${config.api_url}contact/us`,{
                name: this.form.name,
                email: this.form.email,
                phone: this.form.phone,
                message: this.form.message,
                contact_type: this.form.contact_type,
                errorHandle: false
            })
            .then((data) => {
                console.log('success', data)
            })
            .catch((error) => {
                console.warn('status',error.response)
                that.$emit('errorMessage', error.response.data.errors )
            })
        },
        changeError (payload) {
            this.errors = payload
        }
    }
}
</script>
<style lang="scss" scoped>
    .form-container {
        position: relative;
        background: #F1F8E7;
        display: flex;
        flex-direction: column;
        align-items: left;
        max-width: 56%;
        width: 100%;
        text-align: left;
        padding-left: 121px;
        @media screen and (max-width: 1400px) {
            padding-left: 50px;
        }
        @media screen and (max-width: 1400px) {
            max-width: 100%;
            flex-basis: 100%;
        }

        .form {
            padding-top: 105px;
            padding-bottom: 50px;
            max-width: 651px;
            width: 100%;
        }
        label{
            display: block;
            text-align: left;
            font-weight: 600;
            font-size: 15px;
            font-family: Montserrat, sans-serif;
            letter-spacing: 0;
            opacity: 1;
            margin-bottom: 10px;
            span {
                color: #FF0000;
            }
        }
        input {
            width: 650px;
            // width: 100%;
            height: 45px;
            background: #FFFFFF 0% 0% no-repeat padding-box;
            border: 1px solid #C9E3D4;
            border-radius: 4px;
            opacity: 1;
            margin-bottom: 24px;
            padding-left: 20px;
            font-weight: Normal;
            font-size: 15px;
            font-family: 'Montserrat', sans-serif;
            &::placeholder {
                text-align: left;
                font-size: 15px;
                font-weight: normal;
                font-family: 'Montserrat', sans-serif;
                letter-spacing: 0;
                color: #0000004D;
                opacity: 1;
            }
            &:focus {
                outline: none;
                border: 1px solid #00D857;
                &::placeholder {
                    color: #fff;;
                }
            }
            &.error {
                border: 1px solid #FF0000;
                &::placeholder {
                    color: #FF0000;
                }
                &:focus::placeholder{
                    color: #fff;
                }
            }
        }
        textarea{
            resize: none;
            width: 650px;
            // width: 100%;
            height: 178px;
            background: #FFFFFF 0% 0% no-repeat padding-box;
            border: 1px solid #C9E3D4;
            border-radius: 4px;
            opacity: 1;
            padding: 20px;
            font-weight: Normal;
            font-size: 20px;
            font-family: 'Montserrat', sans-serif;
            &::placeholder {
                text-align: left;
                font-size: 16px;
                font-weight: normal;
                font-family: 'Montserrat', sans-serif;
                letter-spacing: 0;
                color: #0000004D;
                opacity: 1;
            }
            &:focus {
                outline: none;
                border: 1px solid #00D857;
                &::placeholder {
                    color: #fff;
                }
            }
            &.error {
                border: 1px solid #FF0000;
                &::placeholder {
                    color: #FF0000;
                }
                &:focus::placeholder{
                    color: #fff;
                }
            }
        }
        @media screen and (max-width: 1400px) {
            padding-left: 30px;
            padding-right: 50px;
            
        }
        @media screen and (max-width: 768px) {
            padding-bottom: 110px;
            padding-left: 25px;
            padding-right: 25px;
            .form {
                padding-top: 50px;
            }
            input,
            textarea {
                width: 100%;
            }
        }
    }    
    .type {
        display: flex;
        flex-direction: row;
        width: 650px;
        padding-bottom: 65px;
        article {
            display: flex;
            flex-direction: column;
            flex-grow: 1; 
        }
        .devider {
            text-align: center;
            align-items: center;
            span {
                display: inline-block;
                width: 40px;
                height: 40px;
                background: #FFFFFF 0% 0% no-repeat padding-box;
                opacity: 1;
                border-radius: 50%;
                text-align: center;
                font-weight: lighter;
                font-family: Gotham;
                font-size: 12px;
                letter-spacing: 0;
                color: #42375B;
                opacity: 1;
                line-height: 40px;
            }
            div {
                margin-top: 20px;
                border: 1px solid #FFFFFF;
                opacity: 1;
                height: 149px;
            }
        }
        .prefer {
            text-align: left;
            align-items: left;
            padding-top: 8px;
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
            div {
                margin-bottom: 17px;
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
        .social {
            display: flex;
            padding-top: 8px;
            position: relative;
            button {
                cursor: pointer;
                outline: none;
                border: none;
                position: absolute;
                bottom: 35px;
                right: -238px;
                width: 238px;
                height: 50px;
                background: #00D857 0% 0% no-repeat padding-box;
                opacity: 1;
                text-align: center;
                font-weight: bold;
                font-size: 16px;
                font-style: 'Montserrat', sans-serif;
                letter-spacing: 0.4px;
                color: #FFFFFF;
                text-transform: uppercase;
                opacity: 1;
                @media screen and (max-width: 1620px) {
                    left: -90%;
                    bottom: -50px;
                }
            }
            p {
                text-align: left;
                font-size: 16px;
                font-weight: 700;
                font-family: 'Montserrat', sans-serif;
                letter-spacing: 0;
                color: #382A57;
                opacity: 1;
                margin-bottom: 33px;
            }
        }
        a {
            color: #00D857;
            font-size: 21px;
            margin-bottom: 16px;
            span {
                margin-left: 21px;
                text-align: left;
                font-weight: 500;
                font-size: 16px;
                font-family: 'Montserrat', sans-serif;
                letter-spacing: 0;
                color: #42375B;
                opacity: 1;
            }
        }
        @media screen and (max-width: 768px) {
            flex-direction: column;
            width: 100%;
            padding-bottom: 0;
            .prefer {
                margin: 30px 0;
                font-weight: bold;
            }
            .social button {
                position: initial;
                width: 100%;
                margin-top: 30px;
                font-weight: bold;
            }
        }
    }
</style>