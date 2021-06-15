<template>
    <div class="skill-nav">
        <img src="/img/Icon only.svg" alt="" class="logo-skill is-hidden-mobile" @click="$root.$emit('scrollTop')">
        <article class="trigger">
            <div class="skills-trigger" :class="menuActive ? 'active' : ''" @click="triggerMenu">
                <article>
                    <img :src="require('@/assets/Group 716.svg')" alt="">
                    <span>Skills</span>
                </article>
                
            </div>
            <div class="menu-button pointer menu is-hidden-mobile" @click="$root.$emit('menuOpen')">
                <burger/>
            </div>
        </article>
        <article class="navigation-panel" v-if="nav" :class="[!menuActive ? 'hidden' : '', third !== null ? 'show' : '']">
            <single-nav-item v-for="(item, index) in nav" :key="`nav${index}`" :item="item" :index="index" :selected="selected" @selectItem="selectItem" :third="third" @thirdChange="changeThird"/>
        </article>
        <div class="nav-wrapper" v-if="nav" :class="[!menuActive ? 'hidden' : '', third !== null ? 'show' : '']"></div>

    </div>
</template>
<script>
import Burger from '@/components/common/Burger/Burger.vue'
import SingleNavItem from './SingleNavItem'
import responsivness from '@/mixins/responsivness'
export default {
    name: 'SkillNav',
    mixins: [responsivness],
    mounted () {
        this.checkActiveMenu()
        this.$nuxt.$on('close-third', () => {
            this.closeThird()
        }
        )
    },
    data () {
        return {
            menuActive: true,
            selected: null,
            third: null
        }
    },
    props: ['nav'],
    methods: {
        triggerMenu () {
            this.menuActive = !this.menuActive
            if (!this.menuActive) {
                this.selected = null
                this.third = null
            }
        },
        selectItem(payload) {
            if (this.selected === payload) {
                this.selected = null
                this.third = null
            } else {
                this.selected = payload
                this.third = null
            }
        },
        changeThird (payload) {
            if (this.third === payload) {
                this.third = null
            } else {
                this.third = payload
            }
        },
        closeThird () {
            this.third = null
        },
        checkActiveMenu () {
            const query = this.$route.params.id
            console.log('query', query)
            switch(query) {
                case 'marketing-advertising-sales':
                    this.selected = 2
                    break;
                case 'web-development':
                    this.selected = 0
                    break;
                case 'mobile-development':
                    this.selected = 0
                    break;
                case 'ux-ui-design-photo-video':
                    this.selected = 1
                    break;
                case 'development-software':
                    this.selected = 0
                    break;
                default:
                    this.selected = null
            }
        }
    },
    components: {
        Burger,
        SingleNavItem
    },
    watch: {
        isMobile(v) {
            if (v) {
                this.triggerMenu()
            }
        },
        menuActive () {
            if (this.menuActive === true) {
                this.$emit('menuActive')
            } else {
                this.$emit('menuDeactive')
            }
        }
    }
}
</script>

<style lang="scss">
    .trigger{
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 0;
        right: 0;
        width: 279px;
        height: 100px;
        background: #42375b;
        z-index: 99999;
        
        @media screen and (max-width: 768px) {
            position: relative;
            background: #ffffff;
            width: 100%;
            height: 60px;
            
        }

        div.menu{
            cursor: pointer;
            position: fixed;
            right: 0;
            top: 0;
            height: 100px;
            width: 100px;
            line-height: 100px;
            vertical-align: middle;
            align-items: right;
            margin-top: 38px;
            margin-right: 38px;        }
        div.skills-trigger {
            cursor: pointer;
            display: flex;
            position: fixed;
            right: 111px;
            top: 0;
            width: 168px;
            height: 100px;
            background: #FFFFFF 0% 0% no-repeat padding-box;
            opacity: 1;
            z-index: 9999;
            text-align: center;
            article {
                margin: 0 auto;
                @media screen and(max-width: 768px) {
                    margin-top: -20px;
                }
            }
            img{
                display: inline-block;
                vertical-align: middle;
                margin-right: 15px;
                transition: all 0.3s ease-in-out;

            }
            span{
                position: relative;
                display: inline-block;
                line-height: 100px;
                vertical-align: middle;
                color: black;
                font-weight: bold;
                font-size: 18px;
                font-family: Gibbs;
                font: Black 18px/30px Gibbs;
                letter-spacing: -0.45px;
                color: #42375B;
                opacity: 1;
            }
            &.active {
                img{
                    transform: rotate(45deg);
                }
            }
            @media screen and(max-width: 768px) {
                position: relative;
                right: 0;
                width: 100%;
                height: 60px;
                border-bottom: 1px solid #00000029;
            }
        }
    }
    .navigation-panel{
        position: fixed;
        padding-top: 40px;
        background: transparent;
        z-index: 9998;
        width: 279px;
        opacity: 1;
        height: calc(100vh - 100px);
        top: 100px;
        right: 0;
        transition: right 0.3s ease-in-out;
        &.hidden {
            right: -279px;
        }
        &.show{
            width: 558px;
        }
        overflow: auto;
        &::-webkit-scrollbar {
            display: none;
        }
    }
    .nav-wrapper{
            position: fixed;
            z-index: 9997;
            width: 279px;
            max-width: 279px;
            height: calc(100vh - 100px);
            background: #FFFFFF 0% 0% no-repeat padding-box;;
            box-shadow: 0px 3px 99px #00000012;
            top: 100px;
            right: 0;
            transition: right 0.3s ease-in-out;
            &.hidden {
                right: -279px;
            }
            &.show{
                width: 558px;
            }
            overflow: auto;
            &::-webkit-scrollbar {
                display: none;
            }
        }
    .logo-skill{
        position: fixed;
        left: 40px;
        top: 31px;
        z-index: 99999;
        cursor: pointer;
    }
</style>