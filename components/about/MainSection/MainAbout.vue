<template>
    <div style="margin-bottom: 50px" ref='scrollReference'>
        <ul id='about-header'>
            <li v-for="(item, index) in meny" @click="scrollTo(item.hash)" :class="{ active: item.hash === activeTab }" :key="index">
                <h5>{{item.title}}</h5>
                <h4>
                    {{item.desc}}
                    <img class="is-hidden-mobile" src="@/assets/about/Icon ionic-ios-arrow-down.svg"/>
                </h4>
            </li>
        </ul>
        <top-tab v-show="activeTab === '1%-talent'" ref="top"/>
        <rated-tab v-show="activeTab === 'rated-&-tested'" ref="rated"/>
        <agency-tab v-show="activeTab === 'culture-&-tools'" ref="agency"/>
        <buyer-tab v-show="activeTab === 'protection'" ref="buyer"/>
        <offers-tab v-show="activeTab === 'pricing'" ref="offers"/>
        <always-tab v-show="activeTab === 'project-managed'" ref="always"/>
    </div>
</template>

<script>
    import topTab from '@/components/about/MainSection/tabs/topTab'
    import ratedTab from '@/components/about/MainSection/tabs/ratedTab'
    import agencyTab from '@/components/about/MainSection/tabs/agencyTab'
    import buyerTab from '@/components/about/MainSection/tabs/buyerTab'
    import offersTab from '@/components/about/MainSection/tabs/offersTab'
    import alwaysTab from '@/components/about/MainSection/tabs/alwaysTab'
    export default {
        name: "MainAbout",
        components: { topTab, ratedTab, agencyTab, buyerTab, offersTab, alwaysTab },
        data () {
            return {
                meny: [
                    { name: 'top', title: 'top', desc: '1% talent', hash: '1%-talent'},
                    { name: 'rated', title: 'rated & tested', desc: 'rated & tested', hash: 'rated-&-tested' },
                    { name: 'agency', title: 'agency', desc: 'culture & tools', hash: 'culture-&-tools' },
                    { name: 'buyer', title: 'buyer', desc: 'protection', hash: 'protection' },
                    { name: 'offers', title: 'offers &', desc: 'pricing', hash: 'pricing' },
                    { name: 'always', title: 'always', desc: 'project managed', hash: 'project-managed' }
                ],
                activeTab: '1%-talent'
            }
        },
        mounted () {
            if (this.$route.hash !== '') {
                let hash = this.$route.hash.replace('#','')
                this.scrollTo(hash)
            }
        },
        methods: {
            scrollTo(hash) {
                this.$router.push({hash: `${hash}`})
                this.activeTab = hash
                let element = this.$refs.scrollReference;
                let timeoutId = setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', });
                    clearTimeout(timeoutId)
                }, 100)
            },
        },
        watch: {
            $route (to, from) {
                if (this.$route.hash !== '') {
                    let hash = this.$route.hash.replace('#','')
                    this.scrollTo(hash)
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    ul {
        &.sticky {
            position: fixed;
            top: 0;
            z-index: 10;
            left: -15px;
            right: 0;
        }
        li {
            display: inline-block;
            background: #42375B 0% 0% no-repeat padding-box;
            border: 1px solid #d8d7d7;
            opacity: 1;
            padding: 25px 40px;
            cursor: pointer;
            transition: 500ms;
            @media screen and(max-width: 1500px) and(min-width: 768px) {
                padding: 20px 20px;
            }
            h5 {
                text-align: left;
                font: Bold 10px/16px Gibbs;
                letter-spacing: 2px;
                color: #D84166;
                text-transform: uppercase;
                opacity: 1;
            }
            h4 {
                text-align: left;
                font: Bold 18px/26px Gibbs;
                letter-spacing: 0;
                color: #FFFFFF;
                opacity: 1;
                text-transform: capitalize;
                img {
                    margin-left: 10px;
                    height: 9px;
                    transition: 500ms;
                }
            }
            &.active {
                background: #EAEEE4 0% 0% no-repeat padding-box;
                h4 {
                   color: #42375B;
                }
                img {
                    transform: rotate(180deg);
                }
            }
            @media screen and (max-width: 1280px){
                padding: 20px 10px 20px 20px;
            }
            @media screen and (max-width: 1160px){
                width: 33.333%;
            }
            @media screen and (max-width: 850px){
                width: 50%;
            }
            @media screen and (max-width: 768px) {
                h5 {
                    font-size: 0.5em;
                }
                h4 {
                    font-size: 0.8em;
                    font-weight: 800;
                }
            }
        }
    }
@media screen and(max-width: 1500px) and(min-width: 768px) {
    #about-header {
        margin-left: -30px;
        margin-right: -30px;
    }
}
</style>