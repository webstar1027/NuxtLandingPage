<template lang="pug">
.member-container
    .back-button.pointer(@click='$router.push("/team")')
        img(:src='BackBtn')
    .columns.is-multiline
        .column.is-half.left-column
            img(src="@/assets/team/team-big.png")
            .basic-member-info.columns
                .dark-box
                    p {{member.email}}
                .ligh-icon-box
                    img(:src='DarkLnkd')
        .column.is-half.right-container
            .right-column
                .flex.name
                    h1 {{member.name}}
                .flex-row.proffesion
                    PlusButton(:hovered="hovered")
                    h2 {{member.proffesion}}
                .flex.full-description
                    p {{member.fullDesc}}
                    p {{member.fullDesc}}
                    p {{member.fullDesc}}
            .our-core
                .content-container
                    .subtitle
                        h2 OUR CORE
                    .title
                        h1 Team Members
                    team-section(:pros='allMembers')
</template>

<script>
import ImageSection from "@/components/team/id/ImageSection"
import Description from "@/components/team/id/Description"
import PlusButton from '@/components/common/Button/PlusButton'
import TeamSection from '@/components/team/id/TeamSection'
import BackBtn from '@/assets/team/back-btn.svg'
import DarkLnkd from '@/assets/team/dark-linkedin.svg'

export default {
    props: {
        member: Object,
        allMembers: Array
    },
    data() {
        return {
            hovered: true,
            BackBtn,
            DarkLnkd
        }
    },
    computed: {
        imageSrc() {
            return `../../assets/team/${this.member.profile_image.big}`
        }
    },
    components: {
        ImageSection,
        Description,
        PlusButton,
        TeamSection
    }
}
</script>

<style lang="scss" scoped>
.member-container {
    background-color: #FFFFFF;
    position: relative;
    .back-button {
        position: absolute;
        right: 70px;
        top: 50px;
        transition: all 0.3s ease-in-out;
        z-index: 100000000;
        &:hover {
            transform: scale(1.2);
        }
        @media screen and(max-width: 768px) {
            right: 10px;
            top: 20px;
        }
    }
    .left-column {
        margin-right: -0.75rem;
        position: relative;
        img {
            height: calc(100vh - 100px);
            width: 100%;
            @media screen and(max-width: 768px) {
                height:100%;
            }
        }
        .basic-member-info {
            position: absolute;
            bottom: 50px;
            right: 50px;
            display: flex;
            p {
                text-align: center;
                font: 14px/22px Montserrat, sans-serif;
                letter-spacing: -0.35px;
                color: #FFFFFF;
                opacity: 1;
                font-weight: bold;

            }
            .dark-box {
                // width: 100%;
                width: 225px;
                background: #382A57 0% 0% no-repeat padding-box;
                padding: 20px 20px;
                margin-right: 20px;
            }
            .ligh-icon-box {
                width: 66px;
                background: #FFFFFF 0% 0% no-repeat padding-box;
                justify-content: center;
                align-items: center;
                display: flex;
                img {
                    width: 25px;
                    height: 25px;
                }
            }
        }
    }
    .right-container {
        max-height: calc(100vh - 80px);
        overflow-y: scroll;
        position: relative;
         &::-webkit-scrollbar {
                    width: 15px;
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
        @media screen and(max-width: 768px) {
            max-height:100%;
        }
        
    }
    .right-column {
        padding-left: 70px;
        max-width: calc(591px + 140px);
        padding-right: 70px;
        padding-bottom: 70px;
        .name {
            padding-top: 100px;
            h1 {
                text-align: left;
                font: 40px/85px Gibbs;
                letter-spacing: 0px;
                color: #382A57;
                opacity: 1;
                font-weight: 900;
                 @media screen and(max-width: 768px) {
                    font: 40px/55px Gibbs;
                    font-weight: 900;
                }
            }
        }
        @media screen and(max-width: 768px) {
            padding-right: 25px;
            padding-left: 25px;
            .name {
                padding-top: 50px;
            }
        }
        .proffesion {
            padding-top: 10px;
            h2 {
                text-align: left;
                font: 18px/30px Montserrat, sans-serif;
                letter-spacing: -0.45px;
                color: #382A57;
                opacity: 1;
                font-weight: bold;
            }
        }
        .full-description {
            padding-top: 60px;
            p {
                padding-top: 20px;
                text-align: left;
                font: 15px/25px Montserrat, sans-serif;
                letter-spacing: -0.38px;
                color: #382A57;
                opacity: 1;
                font-weight: 400;
            }
        }
    }
    .our-core {
        padding-top: 70px;
        background: #F8F8F7 0% 0% no-repeat padding-box;
        margin-left: -0.75rem;
        padding-left: calc(0.75rem + 70px);
        .content-container {
            max-width: 425px;
        }
        @media screen and(max-width: 768px) {
            padding-left: 25px;
            .content-container {
                max-width: 100%;
                padding-left: 15px;
                padding-right: 25px;
                padding-bottom: 100px;
            }
        }
        h2 {
            text-align: left;
            font: 16px/19px Gibbs;
            letter-spacing: 2.29px;
            color: #D84166;
            opacity: 1;
            font-weight: bold;
        }
        h1 {
            text-align: left;
            font: 30px/85px Gibbs;
            letter-spacing: 0px;
            color: #382A57;
            opacity: 1;
            font-weight: 800;
        }
    }
}
</style>