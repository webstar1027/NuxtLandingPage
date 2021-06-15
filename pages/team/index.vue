<template>
    <div class="page-wrapper">
        <div>
            <section-container :noPadding="true" noPaddingMobile>
                <top-team/>
            </section-container>
            <section-container :noPadding="true"  smaller>
                <team-section :pros='coreTeam' />
            </section-container>
             <div class="footer-separator"></div>
            <section-container :noPadding="true" :offsetAbsolute="true" smaller>
                <subscribe-card slot="absolute"/>
            </section-container>
        </div>
        <div class='member-showcase' v-if='memberShowcase'>
            <member-container :member='activeMember' :all-members='coreTeam'/>
        </div>
    </div>
</template>

<script>
import SectionContainer from '@/components/containers/Section/Section'
import TopTeam from "@/components/team/TopTeam"
import SubscribeCard from '@/components/home/SubscribeCard/SubscribeCard'
import TeamSection from '@/components/team/TeamSection'
import MemberContainer from '@/components/team/id/MemberContainer'

export default {
    props: ['test'],
    created() {
        this.checkForChildRoute(this.$route)
    },
    data() {
        return {
            memberShowcase: false,
            activeMemberId: 0,
            coreTeam: [{
                id: 0,
                name: 'Kaspar L. Palgi',
                proffesion: 'Project Manager, Programmer, Strategist',
                fullDesc: 'I have close to 25 years of experience in software development by now. I have experience in working in big companies but most of my life been freelancer and owner of my own web agency. Past years we’re a team of senior freelancers used to work together. Laravel & NodeJS in the BE and React/Vue in front-end is today our main stack but we do more and more Python/Django these days, too. I’m also experienced in deep learning, big data & AI. For mobile development, I mostly use Flutter but also use React Native and do native apps. Well, the stack list is way longer actually that I have experience in and/or some of our senior team members do have experience. I do work also with a world-class senior designer so all together we cover all you may need.',
                profile_image: {
                    small: 'team-small.png',
                    big: 'team-big.png'
                },
                email: 'kaspar@crewnew.com'
            }, {
                id: 1,
                name: 'Slavco Cvetanovski',
                proffesion: 'Project Manager, Programmer, Strategist',
                fullDesc: 'I have close to 25 years of experience in software development by now. I have experience in working in big companies but most of my life been freelancer and owner of my own web agency. Past years we’re a team of senior freelancers used to work together. Laravel & NodeJS in the BE and React/Vue in front-end is today our main stack but we do more and more Python/Django these days, too. I’m also experienced in deep learning, big data & AI. For mobile development, I mostly use Flutter but also use React Native and do native apps. Well, the stack list is way longer actually that I have experience in and/or some of our senior team members do have experience. I do work also with a world-class senior designer so all together we cover all you may need.',
                profile_image: {
                    small: 'team-small.png',
                    big: 'team-big.png'
                },
                email: 'slavco@crewnew.com'
            }, {
                id: 2,
                name: 'Zeljko Marenovic',
                proffesion: 'Project Manager, Programmer, Strategist',
                fullDesc: 'I have close to 25 years of experience in software development by now. I have experience in working in big companies but most of my life been freelancer and owner of my own web agency. Past years we’re a team of senior freelancers used to work together. Laravel & NodeJS in the BE and React/Vue in front-end is today our main stack but we do more and more Python/Django these days, too. I’m also experienced in deep learning, big data & AI. For mobile development, I mostly use Flutter but also use React Native and do native apps. Well, the stack list is way longer actually that I have experience in and/or some of our senior team members do have experience. I do work also with a world-class senior designer so all together we cover all you may need.',
                profile_image: {
                    small: 'team-small.png',
                    big: 'team-big.png'
                },
                email: 'zeljko@crewnew.com'
            }, {
                id: 3,
                name: 'Josh Sowter',
                proffesion: 'Project Manager, Programmer, Strategist',
                fullDesc: 'I have close to 25 years of experience in software development by now. I have experience in working in big companies but most of my life been freelancer and owner of my own web agency. Past years we’re a team of senior freelancers used to work together. Laravel & NodeJS in the BE and React/Vue in front-end is today our main stack but we do more and more Python/Django these days, too. I’m also experienced in deep learning, big data & AI. For mobile development, I mostly use Flutter but also use React Native and do native apps. Well, the stack list is way longer actually that I have experience in and/or some of our senior team members do have experience. I do work also with a world-class senior designer so all together we cover all you may need.',
                profile_image: {
                    small: 'team-small.png',
                    big: 'team-big.png'
                },
                email: 'josh@crewnew.com'
            }, {
                id: 4,
                name: 'Bruce',
                proffesion: 'Project Manager, Programmer, Strategist',
                fullDesc: 'I have close to 25 years of experience in software development by now. I have experience in working in big companies but most of my life been freelancer and owner of my own web agency. Past years we’re a team of senior freelancers used to work together. Laravel & NodeJS in the BE and React/Vue in front-end is today our main stack but we do more and more Python/Django these days, too. I’m also experienced in deep learning, big data & AI. For mobile development, I mostly use Flutter but also use React Native and do native apps. Well, the stack list is way longer actually that I have experience in and/or some of our senior team members do have experience. I do work also with a world-class senior designer so all together we cover all you may need.',
                profile_image: {
                    small: 'team-small.png',
                    big: 'team-big.png'
                },
                email: 'bruce@crewnew.com'
            }, {
                id: 5,
                name: 'Test',
                proffesion: 'Project Manager, Programmer, Strategist',
                fullDesc: 'I have close to 25 years of experience in software development by now. I have experience in working in big companies but most of my life been freelancer and owner of my own web agency. Past years we’re a team of senior freelancers used to work together. Laravel & NodeJS in the BE and React/Vue in front-end is today our main stack but we do more and more Python/Django these days, too. I’m also experienced in deep learning, big data & AI. For mobile development, I mostly use Flutter but also use React Native and do native apps. Well, the stack list is way longer actually that I have experience in and/or some of our senior team members do have experience. I do work also with a world-class senior designer so all together we cover all you may need.',
                profile_image: {
                    small: 'team-small.png',
                    big: 'team-big.png'
                },
                email: 'test@crewnew.com'
            }]
        }
    },
    watch: {
        '$route' (to, from) {
            this.checkForChildRoute(to)
        }
    },
    computed: {
        activeMember() {

            return this.coreTeam[this.activeMemberId]
        }
    },
    methods: {
        checkForChildRoute(to) {
            if(!isNaN(to.query.member)) {
                this.memberShowcase = true
                this.activeMemberId = to.query.member
            } else {
                this.memberShowcase = false
            }
        }
    },
    components: {
        SectionContainer,
        TopTeam,
        TeamSection,
        SubscribeCard,
        MemberContainer
    }
}
</script>

<style lang="scss" scoped>
.member-showcase {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 100000000;
    right: 0;
    left: 0;
    @media screen and(max-width: 768px) {
        overflow-y: scroll;
    }
}
.footer-separator {
    height: 350px;
}
</style>