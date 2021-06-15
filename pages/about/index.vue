<template>
    <div>
        <about-right-menu/>
        <section-container :noPadding="true" noPaddingMobile >
            <top-about/>
        </section-container>
        <section-container :heading="{title: 'We pride ourselves in', desc: 'What makes us different'}" class="text-center" sticky smaller>
            <main-about/>
        </section-container>
        <section-container  :noPadding="true" smaller :heading="{title: 'We provide freelance solutions', desc: 'From Design to App Development'}" >
            <what-we-do />
        </section-container>
        <div class='wedo-padding-bottom'></div>
        <section-container :noPadding="true" :offsetAbsolute="true" smaller>
            <subscribe-card slot="absolute"/>
        </section-container>
    </div>
</template>
<script>
    import SectionContainer from '@/components/containers/Section/Section'
    import TopAbout from '@/components/about/TopSection/TopAbout'
    import MainAbout from '@/components/about/MainSection/MainAbout'
    import SubscribeCard from '@/components/home/SubscribeCard/SubscribeCard'
    import AbsoluteCard from '@/components/common/AbsoluteCard/AbsoluteCard'
    import AboutRightMenu from '@/components/about/AboutRightMenu/AboutRightMenu'
    import WhatWeDo from '@/components/home/WhatWeDo/WhatWeDo'
    export default {
        name: "about-page",
        components: {
            SectionContainer,
            TopAbout,
            MainAbout,
            AbsoluteCard,
            SubscribeCard,
            AboutRightMenu,
            WhatWeDo
        }
    }
</script>


<style lang="scss" scoped>
.wedo-padding-bottom {
     padding-bottom: 300px;
     @media screen and(max-width: 768px) {
         padding-bottom: 150px;
     }
}
</style>