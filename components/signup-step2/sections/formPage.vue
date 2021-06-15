<template>
    <div class="form-wrapper">
        <div class="form">
            <label for="pName" class="field-info">Project Name <span>*</span></label>
            <input class='p5-ver' type="text" name="pName" v-model="form.name" :class="errors && errors.name ? 'error' : ''" :placeholder="errors && errors.name ? errors.name : 'Name'">

            <label for="pDescription" class="field-info">Project Description <span>*</span></label>
            <textarea class='p5-ver' name="pDescription" cols="30" rows="3" v-model="form.description" :class="errors && errors.description ? 'error' : ''"  :placeholder="errors && errors.description ? errors.description : 'Add a description about your project'"></textarea>

            <label for="pDescription" class="field-info">What experience / price level do you need? <span>*</span></label>
            <div class="prefer">
                <div>
                    <input class="checkbox-custom" id="junior" name="junior" value="junior" type="checkbox" v-model="form.experience">
                    <label for="junior" class="checkbox-custom-label">Junior</label>
                </div>
                <div>
                    <input class="checkbox-custom" id="medior" name="medior" value="medior" type="checkbox" v-model="form.experience">
                    <label for="medior" class="checkbox-custom-label">Mid-Level</label>
                </div>
                <div>
                    <input class="checkbox-custom" id="senior" name="senior" value="senior" type="checkbox" v-model="form.experience">
                    <label for="senior" class="checkbox-custom-label">Senior</label>
                </div>
                <div>
                    <input class="checkbox-custom" id="expert" name="expert" value="expert" type="checkbox" v-model="form.experience">
                    <label for="expert" class="checkbox-custom-label">Top Expert</label>
                </div>
            </div>
            <label for="pName" class="field-info">When does your project need to be started?</label>
            <div class="select-box" @click="startMenu = true; durationMenu = false; hoursMenu = false; $event.stopPropagation()" v-click-outside="closeEvent">
                {{ startOptions.filter(item => item.value === form.projectStart)[0].text }}
                <div class="img-arrow">
                    <img src="@/assets/signup-step2/select-arrow.svg" :class="startMenu ? 'img-rotate' : ''"/>
                </div>
                <div v-show="startMenu" @click="startMenu = false" class="select-options">
                    <!--<img  @click="startMenu = false; $event.stopPropagation()" src="@/assets/signup-step2/select-arrow.svg" :class="startMenu ? 'img-rotate' : ''"/>-->
                    <p v-for="item in startOptions" :key='item.value' @click="selectStart($event, item.value)" v-if="item.value !== 0">{{item.text}}</p>
                    <!--<p @click="selectStart($event, 'Within 2 - 12hrs (+10% surcharge)')"></p>-->
                    <!--<p @click="selectStart($event, 'Within 48hrs')"></p>-->
                    <!--<p @click="selectStart($event, 'Within 3 - 4 days')"></p>-->
                    <!--<p @click="selectStart($event, 'Within 1 - 2 weeks')"></p>-->
                    <!--<p @click="selectStart($event, 'More than 2 weeks')"></p>-->
                </div>
            </div>
            <label for="pName" class="field-info">Estimated duration of the project:</label>
            <div class="select-box" @click="durationMenu = true; startMenu = false; hoursMenu = false; $event.stopPropagation()" v-click-outside="closeEvent">
                {{ durationOptions.filter(item => item.value === form.projectDuration)[0].text }}
                <div class="img-arrow">
                    <img src="@/assets/signup-step2/select-arrow.svg" :class="durationMenu ? 'img-rotate' : ''"/>
                </div>
                <div v-show="durationMenu" @click="durationMenu = false" class="select-options">
                    <!--<img src="@/assets/signup-step2/select-arrow.svg" :class="durationMenu ? 'img-rotate' : ''" @click="durationMenu = false; $event.stopPropagation()"/>-->
                    <p v-for="item in durationOptions" :key='item.value' @click="selectDuration($event, item.value)" v-if="item.value !== 0">{{item.text}}</p>
                    <!--<p @click="selectDuration($event, 'Express - within max 1hr (+20% surcharge)')">Express - within max 1hr (+20% surcharge)</p>-->
                    <!--<p @click="selectDuration($event, 'Within 2 - 12hrs (+10% surcharge)')">Within 2 - 12hrs (+10% surcharge)</p>-->
                    <!--<p @click="selectDuration($event, 'Within 48hrs')">Within 48hrs</p>-->
                    <!--<p @click="selectDuration($event, 'Within 3 - 4 days')">Within 3 - 4 days</p>-->
                    <!--<p @click="selectDuration($event, 'Within 1 - 2 weeks')">Within 1 - 2 weeks</p>-->
                    <!--<p @click="selectDuration($event, 'More than 2 weeks')">More than 2 weeks</p>-->
                </div>
            </div>
            <label for="pName" class="field-info">How many hours per week do you need approx.?</label>
            <div class="select-box" @click="hoursMenu = true; startMenu = false; durationMenu = false; $event.stopPropagation()" v-click-outside="closeEvent">
                {{ hoursOptions.filter(item => item.value === form.projectHours)[0].text }}
                <div class="img-arrow">
                    <img src="@/assets/signup-step2/select-arrow.svg" :class="hoursMenu ? 'img-rotate' : ''"/>
                </div>
                <div v-show="hoursMenu" @click="hoursMenu = false" class="select-options">
                    <!--<img src="@/assets/signup-step2/select-arrow.svg" :class="hoursMenu ? 'img-rotate' : ''" @click="hoursMenu = false; $event.stopPropagation()"/>-->
                    <p v-for="item in hoursOptions" :key='item.value' @click="selectHours($event, item.value)" v-if="item.value !== 0">{{item.text}}</p>
                    <!--<p @click="selectHours($event, 'Express - within max 1hr (+20% surcharge)')">Express - within max 1hr (+20% surcharge)</p>-->
                    <!--<p @click="selectHours($event, 'Within 2 - 12hrs (+10% surcharge)')">Within 2 - 12hrs (+10% surcharge)</p>-->
                    <!--<p @click="selectHours($event, 'Within 48hrs')">Within 48hrs</p>-->
                    <!--<p @click="selectHours($event, 'Within 3 - 4 days')">Within 3 - 4 days</p>-->
                    <!--<p @click="selectHours($event, 'Within 1 - 2 weeks')">Within 1 - 2 weeks</p>-->
                    <!--<p @click="selectHours($event, 'More than 2 weeks')">More than 2 weeks</p>-->
                </div>
            </div>
            <!--<div class="upload-photos">-->
                <!--<h5>Upload File</h5>-->
                <!--<div class="upload-holder">-->
                    <!--<div class="upload-left">-->
                        <!--<div class="uploader">-->
                            <!--<img src="@/assets/signup-step2/upload-icon.svg"/>-->
                            <!--<p>Drag files to upload</p>-->
                            <!--<input type="file" name="addImg" id="addImg" @change="addImgs" multiple accept="image/*"/>-->
                        <!--</div>-->
                        <!--<label for="addImg">choose file</label>-->
                    <!--</div>-->
                    <!--<div class="upload-right" v-if="ImgForUpload.length > 0">-->
                        <!--<h6>Uploading</h6>-->
                        <!--<div class="progress-wrapper" v-for="(img, i) in ImgForUpload">-->
                            <!--<img :src="selectedIMG[i]"/>-->
                            <!--<div class="progress-holder">-->
                                <!--<div class="progress-info">-->
                                    <!--<span>{{img.name}}</span>-->
                                    <!--<span>{{parseFloat(img.size/1000000).toFixed(2)}} mb</span>-->
                                    <!--<span @click="removeImg(i)">&#x2716;</span>-->
                                <!--</div>-->
                                <!--<div class="progress-bar">-->
                                    <!--<p :ref="'prog'+i" id="miki"></p>-->
                                <!--</div>-->
                                <!--<div class="progres-percent" :ref="'progTex' + i">-->
                                    <!--&lt;!&ndash;<span>done</span>&ndash;&gt;-->
                                    <!--&lt;!&ndash;<span>Completed</span>&ndash;&gt;-->
                                <!--</div>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
            <div class="btn-holder">
                <button class="submit-btn" @click="submitStep2()">send request</button>
            </div>
        </div>
    </div>
</template>

<script>
    import config from '~/config'
    import axios from 'axios'
    import bus from '@/services/bus'
    import { mapGetters } from 'vuex'

    export default {
        name: "formPage",
        data () {
            return {
                form: {
                    name: '',
                    description: '',
                    experience: [],
                    projectStart: 0,
                    projectDuration: 0,
                    projectHours: 0
                },
                startMenu: false,
                startOptions: [
                    { value: 0, text: 'Choose' },
                    { value: 1, text: 'Express - within max 1hr (+20% surcharge)' },
                    { value: 2, text: 'Within 2 - 12hrs (+10% surcharge)' },
                    { value: 3, text: 'Within 48hrs' },
                    { value: 4, text: 'Within 3 - 4 days' },
                    { value: 5, text: 'Within 1 - 2 weeks' },
                    { value: 6, text: 'More than 2 weeks' }
                ],
                durationMenu: false,
                durationOptions: [
                    { value: 0, text: 'Choose' },
                    { value: 1, text: 'Few hrs of work' },
                    { value: 2, text: '1-2 days' },
                    { value: 3, text: 'A week' },
                    { value: 4, text: 'Few weeks' },
                    { value: 5, text: '1-2 months' },
                    { value: 6, text: '3-6 months' },
                    { value: 7, text: '6-12 months' },
                    { value: 8, text: 'On-going work' }
                ],
                hoursMenu: false,
                hoursOptions: [
                    { value: 0, text: 'Choose' },
                    { value: 1, text: '1-2' },
                    { value: 2, text: '3-4' },
                    { value: 3, text: '5-6' },
                    { value: 4, text: '7-9' },
                    { value: 5, text: '10-15' },
                    { value: 6, text: '16-25' },
                    { value: 7, text: '26-39' },
                    { value: 8, text: '40+' }
                ],
                selectedIMG: [],
                ImgForUpload: [],
                imagesError: false,
                errors: {

                }
            }
        },
        computed: {
            ...mapGetters({
                redirectPath: 'sign-up/redirectUser',
            }),
        },
        methods: {
            selectStart (event, text) {
                event.stopPropagation()
                this.startMenu = false
                this.form.projectStart = text
            },
            selectDuration (event, text) {
                event.stopPropagation()
                this.durationMenu = false
                this.form.projectDuration = text
            },
            selectHours (event, text) {
                event.stopPropagation()
                this.hoursMenu = false
                this.form.projectHours = text
            },
            addImgs (event) {
                let input = event.target
                if (input.files) {
                    for (let i = 0; i < input.files.length; i++) {
                        if (!input.files[i].type.match('image.*')) {
                            this.imagesError = true
                            return
                        } else {
                            this.imagesError = false
                        }
                        this.ImgForUpload.push(input.files[i])
                        let reader = new FileReader()
                        reader.onload = (e) => {
                            this.selectedIMG.push(e.target.result)
                            // this.ImgForUpload.push(input.files[i])
                        }
                        reader.onprogress = (e) => {
                            this.$refs['prog' + i][0].style.width = Math.round((e.loaded * 100) / e.total) + '%'
                            if (Math.round((e.loaded * 100) / e.total) === 100) {
                                this.$refs['progTex' + i][0].innerText = 'Completed'
                            } else {
                                this.$refs['progTex' + i][0].innerText = Math.round((e.loaded * 100) / e.total) + '% done'
                            }
                        }
                        reader.readAsDataURL(input.files[i])
                    }
                }
            },
            removeImg (i) {
                this.selectedIMG.splice(i, 1)
                this.ImgForUpload.splice(i, 1)
            },
            submitStep2 () {
                let data = {
                    customer_id: localStorage.getItem('cn-registred'),
                    name: this.form.name,
                    description: this.form.description
                    // pricing: 'free/premium'
                }

                if (this.form.experience.length > 0) {
                    data.experience_level = this.form.experience
                }
                if (this.form.projectStart !== 0) {
                    data.starting_at = this.form.projectStart
                }
                if (this.form.projectDuration !== 0) {
                    data.estimated_duration = this.form.projectDuration
                }
                if (this.form.projectHours !== 0) {
                    data.expected_hours = this.form.projectHours
                }

                axios.post(`${config.api_url}projects`, data)
                    .then((data) => {
                        bus.$emit('open-modal', { img: '/img/modalImg.svg', message: 'THANK YOU, YOUR PROJECT INFORMATION', title: 'Has been Sent!', desc: ['We usually respond within 24 hours.', 'Keep an eye on your inbox!'] })
                        this.$router.push(this.redirectPath)
                    })
                    .catch(e => {
                        // console.warn('status',error.response)
                        // that.$emit('errorMessage', error.response.data.errors )
                        if (e.response) {
                            this.errors = e.response.data.errors
                        }
                    })
            },
            closeEvent () {
                this.durationMenu = false
                this.startMenu = false
                this.hoursMenu = false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .form-wrapper {
        background-color: #F1F8E7;
        padding: 50px;
        flex: 1;
        height: calc(100vh - 100px);
        overflow: auto;
        /* Hide scrollbar for IE and Edge */
        -ms-overflow-style: none;
        /* Hide scrollbar for Chrome, Safari and Opera */
        &::-webkit-scrollbar {
            display: none;
        }
        @media screen and (max-width: 1070px) {
            height: auto;
            overflow: unset;
            margin-bottom: 70px;
        }
        @media screen and (max-width: 500px) {
            padding: 50px 20px;
        }
        .form {
            width: 90%;
            @media screen and (min-width: 1600px) {
                width: 80%;
            }
            @media screen and (max-width: 1300px) {
                width: 100%;
            }
        }
        .field-info {
            display: block;
            text-align: left;
            font-weight: 600;
            font-size: 15px;
            line-height: 32px;
            font-family:  Montserrat, sans-serif;
            letter-spacing: 0;
            color: #382A57;
            opacity: 1;
            span {
                color: #FF0000;
            }
        }
        input {
            width: 100%;
            background: #FFFFFF 0% 0% no-repeat padding-box;
            border: 1px solid #C9E3D4;
            border-radius: 4px;
            opacity: 1;
            margin-bottom: 24px;
            padding-left: 20px;
            font-weight: normal;
            font-size: 16px;
            line-height: 32px;
            font-family:  Montserrat, sans-serif;
            &::placeholder {
                font-weight: normal;
                font-size: 16px;
                line-height: 32px;
                font-family:  Montserrat, sans-serif;
                text-align: left;
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
            margin-bottom: 24px;
            width: 100%;
            /*height: 178px;*/
            background: #FFFFFF 0% 0% no-repeat padding-box;
            border: 1px solid #C9E3D4;
            border-radius: 4px;
            opacity: 1;
            padding-left: 20px;
            font-weight: normal;
            font-size: 16px;
            line-height: 32px;
            font-family:  Montserrat, sans-serif;
            &::placeholder {
                text-align: left;
                font-weight: normal;
                font-size: 16px;
                line-height: 32px;
                font-family:  Montserrat, sans-serif;
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
        .prefer {
            text-align: left;
            padding-top: 8px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            .checkbox-custom {
                display: none;
            }
            .checkbox-custom-label {
                display: inline-block;
                position: relative;
                vertical-align: middle;
                margin: 0;
                cursor: pointer;
                font-weight: 500;
                font-size: 14px;
                line-height: 32px;
                font-family:  Montserrat, sans-serif;
            }
            .checkbox-custom + .checkbox-custom-label:before {
                content: '';
                display: inline-block;
                width: 26px;
                height: 26px;
                background: #FFFFFF 0% 0% no-repeat padding-box;
                border: 1px solid #C9E3D4;
                border-radius: 5px;
                opacity: 1;
                margin-right: 5px;
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
                width: 10px;
                height: 10px;
                background: #42375B 0% 0% no-repeat padding-box;
                opacity: 1;
                top: 8px;
                left: 8px;
            }
            div {
                margin-bottom: 17px;
                margin-right: 20px;
            }
        }
        .select-box {
            width: 100%;
            position: relative;
            background: #FFFFFF 0% 0% no-repeat padding-box;
            border: 1px solid #C9E3D4;
            border-radius: 4px;
            opacity: 1;
            margin-bottom: 24px;
            padding-left: 20px;
            padding-top: 5px;
            padding-bottom: 5px;
            font-weight: normal;
            font-size: 16px;
            line-height: 32px;
            font-family:  Montserrat, sans-serif;
            cursor: pointer;
            .img-arrow {
                position: absolute;
                right: 0;
                top: 0;
                bottom: 0;
                display: flex;
                align-items: center;
                height: 100%;
                line-height: 8px;
                padding: 11px;
                border-left: 1px solid #C9E3D4;
                background-color: #ffffff;
                img {
                    transition: 200ms;
                    &.img-rotate {
                        transform: rotate(-180deg);
                    }
                }
            }
            .select-options {
                border: 1px solid #00D857;
                border-radius: 4px;
                // font: Normal 16px/32px Montserrat, sans-serif;
                cursor: pointer;
                position: absolute;
                top: -1px;
                left: 0;
                width: 100%;
                max-height: 255px;
                overflow: auto;
                background: #FFFFFF 0% 0% no-repeat padding-box;
                z-index: 9999999999;
                display: inherit !important; /* override v-show display: none */
                transition: opacity 0.5s;
                &[style*="display: none;"] {
                    opacity: 0;
                    pointer-events: none; /* disable user interaction */
                    user-select: none; /* disable user selection */
                }
                /* width */
                &::-webkit-scrollbar {
                    width: 5px;
                }

                /* Track */
                &::-webkit-scrollbar-track {
                    background: transparent;
                    border-radius: 4px;
                }

                /* Handle */
                &::-webkit-scrollbar-thumb {
                    background: #00d857;
                }

                /* Handle on hover */
                &::-webkit-scrollbar-thumb:hover {
                    background: darken(#00d857, 5%);
                }
                p {
                    padding: 5px 20px;
                    &:hover {
                        background-color: #F1F8E7;
                    }
                }
                img {
                    position: absolute;
                    top: 0;
                    right: 0;
                    border: none;
                    transition: 500ms;
                    &.img-rotate {
                        transform: rotate(-180deg);
                    }
                }
            }
        }
        .upload-photos {
            width: 100%;
            position: relative;
            background: #FFFFFF 0% 0% no-repeat padding-box;
            border: 1px solid #C9E3D4;
            border-radius: 4px;
            opacity: 1;
            margin-bottom: 24px;
            padding: 20px;
            font-weight: normal;
            font-size: 16px;
            line-height: 32px;
            font-family:  Montserrat, sans-serif;
            h5 {
                margin-bottom: 20px;
                font-weight: 500;
                font-size: 15px;
                line-height: 32px;
                font-family:  Montserrat, sans-serif;
                letter-spacing: 0;
                color: #382A57;
                padding-bottom: 10px;
                border-bottom: 1px solid #E5E5E5;
            }
            .upload-holder {
                display: flex;
                flex-direction: row;
                @media screen and (max-width: 1200px) {
                    flex-direction: column;
                }
                @media screen and (max-width: 1070px) {
                    flex-direction: row;
                }
                @media screen and (max-width: 500px) {
                    flex-direction: column;
                }
                .upload-left {
                    flex: 1;
                    text-align: center;
                    margin-right: 20px;
                    .uploader {
                        padding: 55px 20px;
                        background: #FCFFF8 0% 0% no-repeat padding-box;
                        border: 1px dashed #C9E3D4;
                        border-radius: 5px;
                        position: relative;
                        cursor: pointer;
                        p {
                            margin-top: 10px;
                            font-weight: normal;
                            font-size: 13px;
                            line-height: 16px;
                            font-family:  Montserrat, sans-serif;
                            letter-spacing: 0;
                            color: #382A57;
                        }
                        input {
                           position: absolute;
                            height: 100%;
                            width: 100%;
                            top: 0;
                            left: 0;
                            opacity: 0;
                            cursor: pointer;
                        }
                    }
                    label {
                        margin-top: 15px;
                        padding: 7px 25px;
                        display: inline-block;
                        background: #00D857 0% 0% no-repeat padding-box;
                        font-weight: bold;
                        font-size: 13px;
                        line-height: 16px;
                        font-family:  Montserrat, sans-serif;
                        letter-spacing: 0.33px;
                        color: #FFFFFF;
                        text-transform: uppercase;
                        cursor: pointer;
                    }
                }
                .upload-right {
                    flex: 2;
                    h6 {
                        text-align: left;
                        font-weight: 500;
                        font-size: 13px;
                        line-height: 32px;
                        font-family:  Montserrat, sans-serif;
                        letter-spacing: 0;
                        color: #382A57;
                    }
                    .progress-wrapper {
                        border-bottom: 1px solid #E5E5E5;
                        &:last-child {
                            border: none;
                        }
                        img {
                            width: 27px;
                            height: 27px;
                            align-self: center;
                            margin-right: 15px;
                        }
                        .progress-holder {
                            text-align: left;
                            font-weight: normal;
                            font-size: 11px;
                            line-height: 25px;
                            font-family:  Montserrat, sans-serif;
                            letter-spacing: 0;
                            color: #382A57;
                            display: inline-block;
                            width: calc(100% - 50px);
                            padding: 5px 0;
                            .progress-info {
                                span {
                                    margin-right: 10px;
                                    display: inline-block;
                                    &:last-child {
                                        float: right;
                                        cursor: pointer;
                                    }
                                }
                            }
                            .progress-bar {
                                background-color: #E6E6E6;
                                p {
                                    height: 3px;
                                    width: 0;
                                    background-color: #00D857;
                                }
                            }
                        }
                    }
                }
            }
        }
        .btn-holder {
            text-align: right;
            .submit-btn {
                margin: 70px 0;
                text-align: center;
                font-weight: bold;
                font-size: 14px;
                line-height: 19px;
                font-family:  Montserrat, sans-serif;
                letter-spacing: 0.4px;
                color: #FFFFFF;
                text-transform: uppercase;
                background-color: #00D857;
                border: none;
                padding: 10px 50px;
                cursor: pointer;
                outline: none;
                &:active {
                    background-color: darken(#00D857, 5%);
                }
            }
        }
    }
</style>