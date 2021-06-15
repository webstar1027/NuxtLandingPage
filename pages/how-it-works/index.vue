<template>
    <div class="page-wrapper">
        <about-right-menu/>
        <section-container :noPadding="true" noPaddingMobile>
            <top-works/>
        </section-container>
        <section-container :heading="{title: 'how do I find the', desc: 'Right freelancer for my UK business?'}" class="text-center" smaller>
            <under-top-section/>
        </section-container>
        <section-container smaller :noPadding="true" :heading="{title: 'how do we do things differently to', desc: 'Solve Problems'}" class="text-center">
            <solve-problems-section/>
        </section-container>
        <section-container smaller>
            <list-projects-section/>
        </section-container>
        <section-container :dark="true" smaller>
            <above-bottom-section/>
        </section-container>
        <section-container smaller >
            <bottom-section/>
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
    import TopWorks from '@/components/howItWorks/topWorks'
    import UnderTopSection from '@/components/howItWorks/underTopSection'
    import SolveProblemsSection from '@/components/howItWorks/solveProblemsSection'
    import ListProjectsSection from '@/components/howItWorks/listProjectsSection'
    import AboveBottomSection from '@/components/howItWorks/aboveBottomSection'
    import BottomSection from '@/components/howItWorks/bottomSection'
    import SubscribeCard from '@/components/home/SubscribeCard/SubscribeCard'
    import AboutRightMenu from '@/components/about/AboutRightMenu/AboutRightMenu'
    import WhatWeDo from '@/components/home/WhatWeDo/WhatWeDo'
    export default {
        name: "howItWorks",
        components: {
            SectionContainer,
            TopWorks,
            UnderTopSection,
            SolveProblemsSection,
            ListProjectsSection,
            AboveBottomSection,
            BottomSection,
            SubscribeCard,
            AboutRightMenu,
            WhatWeDo
        }
    }
</script>

<style lang="scss" scoped>
    .page-wrapper {
        padding-right: 65px;
        .wedo-padding-bottom {
            padding-bottom: 300px;
        }
        @media screen and (max-width: 1023px) {
            padding-right: 30px;
        }
        @media screen and (max-width: 992px) {
            padding-right: 0;
        }
        @media screen and (max-width: 768px) {
            .wedo-padding-bottom {
                padding-bottom: 150px;
            }
        }
    }
</style>