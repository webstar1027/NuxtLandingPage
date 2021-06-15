<template>
    <ul class="right-menu-wrapper" :class='stretch ? "stretch" : ""'>
        <li v-for="item in asideMenu" :key='item.name' class="menu-item" :class="{active: activeAside === item.name}" @mouseover="openAside(item.name)">
            <img class='menu-icon' :src="item.src"/>
            <transition name="list">
                <aside v-if="activeAside === item.name" @mouseleave="activeAside = false">
                    <img :src="item.srcAside"/>
                    <p class="red-text">we do</p>
                    <p class="highlight-text">{{item.title}}</p>
                    <p class="regular-text standard-p">{{item.desc}}</p>
                    <nuxt-link :to="item.link">read more</nuxt-link>
                </aside>
            </transition>
        </li>
    </ul>
</template>

<script>
    import ImgItem1 from '@/assets/about/menu-item-1.svg'
    import ImgItem2 from '@/assets/about/menu-item-2.svg'
    import ImgItem3 from '@/assets/about/menu-item-3.svg'
    import ImgItem4 from '@/assets/about/menu-item-4.svg'
    import ImgItem5 from '@/assets/about/menu-item-5.svg'
    import ImgItem6 from '@/assets/about/menu-item-6.svg'
    import ImgItem7 from '@/assets/about/menu-item-7.svg'
    import ImgAside1 from '@/assets/about/aside1.svg'
    import { mapGetters } from 'vuex'
    export default {
        name: "AboutRightMenu",
        data () {
            return {
                activeAside: false,
                asideMenu: [
                    { name: 1, src: ImgItem1, srcAside: '/img/undraw_web_devices_ad58 (1).svg', title: 'web aps', desc: 'Using most modern tech we create Single Page Applications (SPA) and websites. From small template-driven web to enterprise solutions.', link: '/skills/web-development' },
                    { name: 2, src: ImgItem2, srcAside: '/img/undraw_post_online_dkuk.svg', title: 'Mobile Apps', desc: 'At most cases today, we do Progressive Web Apps (PWA) that are better and more affordable but we have also tons of senior hybrid and native app developers.', link: '/skills/mobile-development' },
                    { name: 3, src: ImgItem3, srcAside: '/img/undraw_dev_focus_b9xo.svg', title: 'Software', desc: 'Modern API based software development in most of the programming languages & frameworks. Also, implementation and adoption of ready-made soft.', link: '/skills/development-software' },
                    { name: 4, src: ImgItem4, srcAside: '/img/undraw_design_data_khdb (1).svg', title: 'UI / UX', desc: 'Website design, art direction, user experience (UX) planning, app user interface (UI) design, product design, animations, photo, video, etc.', link: '/skills/ux-ui-design-photo-video' },
                    { name: 5, src: ImgItem5, srcAside: '/img/Group 250.svg', title: 'Marketing', desc: 'Marketing strategy, campaigns creation & management. From internet marketing to get you into the first position in Google to cold calling, door2door and more…', link: '/skills/marketing-advertising-sales' },
                    { name: 6, src: ImgItem6, srcAside: '/img/undraw_grades_j6jn.svg', title: 'Everything Else', desc: 'Whatever you need to be done - you’ll find the professional great at exactly in that skill. From robotic to copywriting. From academics to accountants…', link: '/skills/skills-services' },
                    { name: 7, src: ImgItem7, srcAside: ImgAside1, title: 'web aps', desc: 'At most cases today, we do Progressive Web Apps (PWA) that are better and more affordable but we have also tons of senior hybrid and native app developers.', link: '/skills/web-development' },
                ]
            }
        },
        computed: {
            ...mapGetters({
                stretch: 'isSideMenuStretched'
            }),
        },
        methods: {
            openAside (item) {
                this.activeAside = item
            }
        }
    }
</script>

<style lang="scss" scoped>
    .right-menu-wrapper {
        position: fixed;
        right: 16px;
        top: 100px;
        height: calc(100vh - 100px);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        background-color: #ffffff;
        z-index: 10000;
        transition: top ease 0.6s;
        &.stretch {
            top: 0px;
            height: 100%;
        }
        .menu-item {
            flex: auto;
            border: 1px solid #D1D7C8;
            padding: 0 30px;
            cursor: pointer;
            display: flex;
            align-items: center;
            position: relative;
            transition: 500ms;
            z-index: 10 !important;
            
            img {
                height: 36px;
            }
            &.active {
                background-color: #F1F8E7;
            }
            aside {
                position: absolute;
                right: 99px;
                background-color: #F1F8E7;
                min-width: 300px;
                border-radius: 25px;
                padding: 30px;
                img {
                    width: 100%;
                    height: auto;
                }
                .red-text {
                    text-align: left;
                    font: Bold 13px/17px Gibbs;
                    letter-spacing: 1px;
                    color: #D84166;
                    text-transform: uppercase;
                }
                .highlight-text {
                    margin-bottom: 15px;
                    font-size: 22px;
                    letter-spacing: 0;
                    color: #382A57;
                    font-weight: 900;
                    text-transform: capitalize;
                }
                .regular-text {
                    letter-spacing: -0.5px;
                    color: #382A57;
                    text-transform: capitalize;
                    margin-bottom: 10px;
                }
                a {
                    text-align: left;
                    font: Bold 13px/17px Gibbs;
                    letter-spacing: 0;
                    color: #D84166;
                    text-transform: capitalize;
                    &:hover {
                        color: #D84166 !important;
                        text-decoration: underline;
                    }
                }
            }
            &:nth-child(1) aside,
            &:nth-child(2) aside {
                top: 0;
                border-top-right-radius: 0;
            }
            &:nth-child(6) aside,
            &:nth-child(7) aside {
                bottom: 0;
                border-bottom-right-radius: 0;
            }
        }
        @media screen and (max-width: 992px) {
            display: none;
        }
    }

    .list-enter,
    .list-leave-to {
        visibility: hidden;
        width: 0;
        min-width: 0;
        margin: 0;
        padding: 0;
        opacity: 0;
    }

    .list-enter-active,
    .list-leave-active {
        transition: all 500ms;
    }
</style>