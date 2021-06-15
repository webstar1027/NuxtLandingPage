<template>
    <div class="single-user" v-if="user" 
        @mouseover="isMobile ? null : toggleDesc(true)"
        @mouseleave="isMobile ? null : toggleDesc(false)"
        @click="toggleDesc()"
    >
        <img :src="imageUrl(user.profile_image)" alt="">
        <h4 class="name">@{{user.username ? user.username : user.name.toLowerCase()}}</h4>
        <article class="rate right-top">
            <p>
                from <br>
                <span>{{userCurrency}}{{user.rate.hourly_rate  ? hourlyRate(user.rate.hourly_rate)  : '--'}}</span> / ph
            </p>
        </article>
        <div class="skills">
            <skill-bar v-for="(skill, index) in skills" :key="index" :skill="skill">
            </skill-bar>
        </div>
        <div class='single-user-description p10-top slide-in-down' :class='expanded ? "active" : ""'>
            <p class='description'>{{descriptionShortener(user.profile.description)}}</p>
            <article @click="$root.$emit('signupOpen')" class="hire right-bottom pointer" :class='expanded ? "active" : ""'>
                <p>HIRE ME</p>
            </article>
        </div>
    </div>
</template>
<script>
import SkillBar from './../SkillBar/SkillBar'
import { mapGetters } from 'vuex'
import responsivness from '@/mixins/responsivness'
export default {
    name: 'SingleUser',
    mixins: [responsivness],
    props: ['user'],
    methods: {
        imageUrl(data) {
            const adminUrl = 'https://crew.crewnew.com/storage/uploads/profiles/'
            return `${adminUrl}${data}`
        },
        toggleDesc(val) {
            this.expanded = val != null ? val : !this.expanded
        },
        descriptionShortener(desc) {
            if(desc.length > 190) {
                return `${desc.substr(0, 180)}...`
            }
            return desc
        },
        hourlyRate(rate) {
            const withProvision = rate * 1.3
            return withProvision.toFixed(0)
        }
    },
    data() {
        return {
            expanded: false
        }
    },
    computed: {
        ...mapGetters({
            userCurrency: 'location/getUserCurency'
        }),
        skills() {
            const filtered = this.user.skills.filter((e,i) => i < 4)
            return !this.expanded ? filtered : this.user.skills
        }
    },
    components: {
        SkillBar
    }
}
</script>
<style lang="scss" scoped>
    .single-user {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        width: 413px;
        margin: 27px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 20px 30px 50px #00000012;
        border-radius: 25px;
        opacity: 1;
        padding: 92px 20px 20px 20px;
        @media screen and(max-width: 768px) {
            width: calc(100% - 20px);
            margin-left: 10px;
            margin-right: 10px;
        }

        

        .skills {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
        }
        .single-user-description {
            // overflow: hidden;
            // transition: max-height 0.35s ease-out;
            
            opacity: 0;
            height: 0;
            &.active {
                
                // height: 100;
            }
            font-size: 14px;
            font-family: 'Montserrat', sans-serif;
            .description {
                padding-bottom: 80px;
            }
        }
        img {
            position: absolute;
            left: 21px;
            top: 23px;
            // border-radius: 50%;
            border-bottom-right-radius: 25px;
            border-top-left-radius: 25px;
            width: 77px;
            height: 77px;
        }
        h4.name {
            position: absolute;
            left: 124px;
            top: 49px;
            text-align: left;
            font-size: 22px;
            font-family: Gibbs;
            font-weight: bold;
            letter-spacing: 0;
            color: #42375B;
            opacity: 1;
        }
        .hire {
            position: absolute;
            width: 143px;
            height: 73px;
            background: #00C951 0% 0% no-repeat padding-box;
            border-radius: 25px 0px 25px 0px;
            opacity: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s ease-in-out;
            overflow: hidden;
            p {
                color: #FFFFFF;
                font-size: 15px;
                font-family: Gibbs;
                letter-spacing: 0;
                font-weight: 700;
            }
            &.right-bottom {
                bottom: 0;
                right: 0;
                opacity: 0;
                transition-delay: 0.1s;
                &.active {
                    opacity: 1;
                }
            }
        }
        .rate{
            position: absolute;
            width: 113px;
            height: 93px;
            background: #F1F8E7 0% 0% no-repeat padding-box;
            border-radius: 0px 25px;
            opacity: 1;
            &.right-top {
                top: 0;
                right: 0;
            }
            &.left-bottom {
                bottom: 0;
                left: 0;
            }
            @media screen and(max-width: 768px) {
                width: 110px;
            }
            p{
                text-align: left;
                font-size: 14px;
                font-family: Gibbs;
                letter-spacing: 0;
                color: #42375B;
                margin-top: 32px;
                margin-left: 19px;
                @media screen and(max-width: 768px) {
                    font-size: 10px;
                }
                span{
                    text-align: left;
                    font-weight: bold;
                    font-size: 22px;
                    font-family: Gibbs;
                    letter-spacing: 0;
                    color: #42375B;
                }
            }
        }
        @media screen and(max-width: 1500px) and(min-width: 768px) {
            width: 270px;
            padding-left: 10px;
            padding-right: 10px;
            img {
                left: 10px;
                top: 10px;
                width: 22%;
                height: 20%;
                max-height: 70px;
            }
            .rate {
                width: 30%;
                height: 25%;
                max-height: 80px;
                p {
                    margin-top: 28px;
                    margin-left: 10px;
                    span {
                        font-size: 1.2em;
                    }
                }
            }
            h4.name {
                left: 90px;
                font-size: 1em;
            }
            .skill-bar {
                width: 38%;
                
            }
        }
    }
</style>