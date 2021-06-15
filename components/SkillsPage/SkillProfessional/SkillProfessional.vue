<template>
    <div class="prof-container" :class="!showMenu ? 'stretch' : ''">
        <article class="top-heading">
            <h3>WE HAVE EVERY</h3>  
            <h2>Skill Professionally Covered</h2>
            <p>Many of the professionals we have specialise in the following skills:</p>
        </article>
        <article class="skills">
            <single-skill v-for="(skill, index) in skills" :key="`skill${index}`" :top="skill.top" :left="skill.left" :img="skill.img" :title="skill.title" :index="index">
                <blue-gd v-if="skill.name === 'BlueGd'" :width='skill.width' :height='skill.height'/>
                <blue-mad v-if="skill.name === 'BlueMad'" :width='skill.width' :height='skill.height'/>
                <blue-pr v-if="skill.name === 'BluePr'" :width='skill.width' :height='skill.height'/>
                <green-wd v-if="skill.name === 'GreenWd'" :width='skill.width' :height='skill.height'/>
                <green-a v-if="skill.name === 'GreenA'" :width='skill.width' :height='skill.height'/>
                <pink-dp v-if="skill.name === 'PinkDp'" :width='skill.width' :height='skill.height'/>
                <pink-dd v-if="skill.name === 'PinkDd'" :width='skill.width' :height='skill.height'/>
                <pink-me v-if="skill.name === 'PinkMe'" :width='skill.width' :height='skill.height'/>
                <video-editors v-if="skill.name === 'VideoEditors'" :width='skill.width' :height='skill.height'/>
                <designers-ux v-if="skill.name === 'UiDesigners'" :width='skill.width' :height='skill.height'/>
                <copywriters v-if="skill.name === 'Copywriters'" :width='skill.width' :height='skill.height'/>
            </single-skill>
        </article>
        <article class="top-heading footer-prof">
            <p>All of the above skills are available within our database, alongside many more!</p>
        </article>
    </div>
</template>
<script>
import SingleSkill from './../SingleSkill/SingleSkill'
import BlueGd from './../../common/svgs/BlueGd'
import BlueMad from './../../common/svgs/BlueMad'
import BluePr from './../../common/svgs/BluePr'
import GreenWd from './../../common/svgs/GreenWd'
import GreenA from './../../common/svgs/GreenA'
import PinkDp from './../../common/svgs/PinkDp'
import PinkDd from './../../common/svgs/PinkDd'
import PinkMe from './../../common/svgs/PinkMe'
import VideoEditors from './../../common/svgs/VideoEditors'
import DesignersUx from './../../common/svgs/DesignersUx'
import Copywriters from './../../common/svgs/Copywriters'
import responsivness from '@/mixins/responsivness'

export default {
    name: 'SkillProfessional',
    mixins: [responsivness],
    props: {
        showMenu: Boolean
    },
    data () {
        return {
            desktop: [
                {title: 'Web Developers', left: 12, top: 57, img: '/skill/Ellipse 24.svg', name: 'GreenWd'},
                {title: 'Graphic Designers', left: 1, top: 185, img: '/skill/Ellipse 24.svg', name: 'BlueGd'},
                {title: 'Mobile App Developers', left: 1, top: 355, img: '/skill/Ellipse 24.svg', name: 'BlueMad'},
                {title: 'Proof Renders', left: 65, top: 205, img: '/skill/Ellipse 24.svg', name: 'BluePr'},
                {title: 'Animations', left: 55, top: 357, img: '/skill/Ellipse 24.svg', name: 'GreenA'},
                {title: '3D Profesionals', left: 18, top: 205, img: '/skill/Ellipse 24.svg', name: 'PinkDp'},
                {title: 'Desktop Developers', left: 38, top: 80, img: '/skill/Ellipse 24.svg', name: 'PinkDd'},
                {title: 'Marketing Experts', left: 70, top: 311, img: '/skill/Ellipse 24.svg', name: 'PinkMe'},
                {title: 'Video Editors', left: 45, top: 180, img: '/skill/Ellipse 24.svg', name: 'VideoEditors'},
                {title: 'Ui/Ux Designers', left: 36, top: 400, img: '/skill/Ellipse 24.svg', name: 'UiDesigners'},
                {title: 'Copywriters', left: 60, top: 10, img: '/skill/Ellipse 24.svg', name: 'Copywriters'},
            ],
            mobile: [
                {title: 'Web Developers', left: 1, top: 57, width: '229.91', height: '230.87', img: '/skill/Ellipse 24.svg', name: 'GreenWd'},
                {title: 'Graphic Designers', left: -5, top: 185,width: '222.36', height: '227.65', img: '/skill/Ellipse 24.svg', name: 'BlueGd'},
                {title: 'Mobile App Developers', left: -74, top: 100, width: '203.7', height: '202.89', img: '/skill/Ellipse 24.svg', name: 'BlueMad'},
                {title: 'Proof Renders', left: -5, top: 400, width: '198.94', height: '204.69', img: '/skill/Ellipse 24.svg', name: 'BluePr'},
                {title: 'Animations', left: 15, top: 257, width: '222.14', height: '245.63', img: '/skill/Ellipse 24.svg', name: 'GreenA'},
                {title: '3D Profesionals', left: 12, top: 90, width: '289.91', height: '230.87', img: '/skill/Ellipse 24.svg', name: 'PinkDp'},
                {title: 'Desktop Developers', left: -5, top: 295, width: '229.91', height: '230.87', img: '/skill/Ellipse 24.svg', name: 'PinkDd'},
                {title: 'Marketing Experts', left: 0, top: 440, width: '229.91', height: '230.87', img: '/skill/Ellipse 24.svg', name: 'PinkMe'},
                {title: 'Video Editors', left: 6, top: 200, width: '229.91', height: '230.87', name: 'VideoEditors'},
                {title: 'Ui/Ux Designers', left: 5, top: 310, width: '259.91', height: '230.87', name: 'UiDesigners'},
                {title: 'Copywriters', left: 13, top: 411, width: '259.91', height: '230.87', name: 'Copywriters'},
            ]
        }
    },
    computed: {
        skills() {
            return this.isMobile ? this.mobile : this.desktop
        }
    },
    components: {
        SingleSkill,
        BlueGd,
        BlueMad,
        BluePr,
        GreenWd,
        GreenA,
        PinkDp,
        PinkDd,
        PinkMe,
        VideoEditors,
        DesignersUx,
        Copywriters
    }
}
</script>
<style lang="scss" scoped>
    .prof-container{
        background: #F8F8F7 0% 0% no-repeat padding-box;
        border-radius: 100px 0px 0px 100px;
        opacity: 1;
        padding-right: 420px;
        margin-left: 141px;
        padding-bottom: 250px;
        margin-bottom: 100px;
        min-height: 1096px;
        position: relative;
        transition: all 0.35s ease-out;
        justify-content: center;
        &.stretch {
            padding-right: 10px;
             margin-left: 200px;
            // text-align: center;
            // justify-content: center;
            transition: all 0.35s ease-in-out;
        }
        @media screen and(max-width: 1400px) and(min-width: 768px) {
            margin-left: 40px;
        }
        .top-heading{
            width: 100%;
            text-align: left;
            padding-top: 119px;
            h3{
                position: relative;
                text-align: center;
                letter-spacing: 2.57px;
                font: Bold 14px/22px Gibbs;
                color: #D84166;
                opacity: 1;
                margin-bottom: 12px;
                @media screen and(max-width: 1400px) and(min-width: 768px) {
                    font-size: 0.7em;
                }
            }
            h2{
                position: relative;
                text-align: center;
                font:Bold 38px/58px Gibbs;
                // font-weight: bold;
                color: #42375B;
                opacity: 1;
                margin-bottom: 34px;
                @media screen and(max-width: 1400px) and(min-width: 768px) {
                    font-size: 2em;
                }
            }
            p{
                text-align: center;
                font-weight: normal;
                font-size: 14px;
                font-family: 'Montserrat';
                letter-spacing: -0.5px;
                color: #42375B;
                opacity: 1;
            }
        }
        .skills {
            position: relative;
            min-width: 1200px;
        }
        .footer-prof {
            position: absolute;
            bottom: 100px;
            padding-right: 420px;
        }
        @media screen and(max-width: 768px) {
            padding-right: 25px;
            padding-left: 25px;
            margin-left: 0px;
            padding-bottom: 0px;
            min-height: 1050px;
            // min-height: 1096px;
            h2 {
                font-size: 1.9em !important;
                line-height: 30px;
                font-weight: 800;
            }
            h3 {
                font-size: 0.9em !important;
            }
            p {
                font-size: 1em !important;
                font-weight: 500 !important;
            }
            .footer-prof {
                position: absolute;
                bottom: 50px;
                padding-right: 50px;
            }
        }
    }
</style>