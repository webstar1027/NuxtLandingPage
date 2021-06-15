<template>
<div>
    <div class="page-wrapper" ref='scrolllCont'>
        <div class="section-wrapper">
            <div class="top-section-social light-section simple-section">
                <div class="content-wrapper column">
                    <h1> Social Media Campaign </h1>
                    <div class="p10"></div>
                    <h2> Until lockdown ends! </h2>
                    <div class="p25"></div>
                    <div class="description-container">
                        <p> We are offering a generous discount from <span class="bold">4-30%.</span> </p>
                        <p> All we ask, is for you to spend a few minutes of your time helping us out. </p>
                    </div>
                </div>
            </div>
            <div class="content-section">
                <div class="grey-section simple-section">
                    <div class="content-wrapper row">
                        <div class="small-section two-images">
                            <div class="image-center">
                                <img class="fluid medium-size" src="@/assets/specialOffers/facebook-icon.svg"/>
                            </div>
                            <div class="image-right">
                                <img class="fluid medium-size" src="@/assets/specialOffers/google-icon.svg"/>
                            </div>
                        </div>
                        <div class="big-section">
                            <h1> Get a 4% Discount: </h1>
                            <p>1- Like our <a href="https://www.facebook.com/crewnewcom" target="_blank" >Facebook page</a></p>
                            <p>2- Like & share our Facebook <a href='https://www.facebook.com/crewnewcom/photos/rpp.1776148165943905/3161268547431853/?type=3&theater' target="_blank">advert</a> in your FB wall publicly with text: “Hey, get 4% discount on all hourly rates with my personal voucher code YOURNAME20”</p>
                            <p>3- Leave us a nice review at <a href="https://www.facebook.com/pg/crewnewcom/reviews/" target="_blank">Facebook</a> and <a href="https://g.page/crewnew/review?rc" target="_blank">Google</a> </p>
                            <p class="italic">If you’re too busy to write a review yourself, then ask your Project Manager, and they’ll provide you with the review text relevant to your project.</p>
                        </div>
                    </div>
                </div>
                <div class="light-section simple-section">
                    <div class="content-wrapper row">
                        <div class="big-section">
                            <h1> Get an additional 4% Discount: </h1>
                            <p>1- Follow <a href="https://www.linkedin.com/company/crewnew" target="_blank">CrewNew at LinkedIN</a></p>
                            <p>2- Join our <a href="https://www.linkedin.com/groups/8707263/" target="_blank">LinkedIN group</a></p>
                            <p>3- Copy your review about us, and paste it onto <a href="https://www.trustpilot.com/review/crewnew.com" target="_blank">TrustPilot</a></p>
                            <p>4- Follow us at <a href="http://instagram.com/crewnew_com" target="_blank">Instagram</a></p>
                        </div>
                        <div class="small-section three-images">
                            <div class="first-row">
                                <div class="image-center">
                                    <img class="fluid medium-size" src="@/assets/specialOffers/linkedin-icon.svg"/>
                                </div>
                                <div class="image-right">
                                    <img class="fluid medium-size" src="@/assets/specialOffers/instagram-icon.png"/>
                                </div>
                            </div>
                            <div class="second-row">
                                <img class="fluid medium-size" src="@/assets/specialOffers/trust-pilot-icon.svg"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grey-section simple-section is-last">
                    <div class="content-wrapper row">
                        <div class="full-width-section">
                            <h1> Get an additional 4% Discount: </h1>
                            <p>Have a “developed by Crew New Ltd Developers” message at your footer. </p>
                            <p class='semi-bold'>If you’re an agency and plan to become our partner then up to 30% discounts are available for our long term partners!</p>
                            <p class='semi-bold'>When someone becomes our customer with your voucher code, then you will earn 4% without doing anything!</p>
                            <p class='semi-bold'>So, feel free to suggest us if you want to earn some extra cash!</p>
                            <p class='semi-bold'>Or you can <a href="https://messages.crewnew.com/signup_user_complete/?id=welcome" target="_blank">sign up</a> as a Project Manager and add your freelancers to the Crew New platform and start making serious money!</p>
                            <p class='semi-bold'>We’re the first platform designed for Project Manager!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section-container :noPadding="true" :offsetAbsolute="true" smaller>
            <subscribe-card slot="absolute"/>
        </section-container>
</div>
</template>

<script>
    import SectionContainer from '@/components/containers/Section/Section'
    import TopSection from '@/components/forFreelancers/TopSection/Section'
    import SubscribeCard from '@/components/home/SubscribeCard/SubscribeCard'

    export default {
        name: "SocialMediaCampaign",
        scrollToTop: true,
        components: {
            SectionContainer,
            TopSection,
            SubscribeCard
        }
    }
</script>

<style lang="scss" scoped>
    .page-wrapper {
        .is-last {
            padding-bottom: 250px !important;
        }
        
        .bold {
            font-weight: bold !important;
        }

        .semi-bold {
            font-weight: 500 !important;
        }

        .content-wrapper {
            max-width: 965px;
            margin: 0 auto;
            width: 100%;
            display: flex;
        }

        .row {
            flex-direction: row;
        }

        .column {
            flex-direction: column;
        }

        .small-section {
            width: 35%;
            padding: 20px;
        }

        .big-section {
            width: 65%;
            padding: 20px;
        }

        .full-width-section {
            width: 100%;
            padding: 20px;
        }

        .italic {
            font-style: italic !important;
        }

        a {
            color: #42375B;
            text-decoration: underline;
        }

        .grey-section {
            background-color: #FAFAFA;
            padding-bottom: 70px;
            padding-top: 50px;
        }

        .light-section {
            padding-top: 98px;
            padding-bottom: 70px;
        }

        .medium-size {
            max-width: 164px;
            margin: -20px;
        }

        .two-images {
            .image-right {
                margin-top: -45px;
                text-align: center;
                padding-left: 30px;
            }

            .image-center {}
        }

        .three-images {
            .first-row {
                display: flex;
            }
            .second-row {
                text-align: center;
                padding-right: 30px;
                margin-top: -25px;
            }
        }
        
        .section-wrapper {

            .top-section-social {
                text-align: center;
                h1 {
                    font: 38px/58px Gibbs;
                    font-weight: 800;
                    letter-spacing: 0px;
                    color: #42375B;
                    opacity: 1;
                }
                h2 {
                    font: Bold 14px/16px Gibbs;
                    letter-spacing: 2px;
                    color: #D84166;
                    text-transform: uppercase;
                    opacity: 1;
                }
            }

            .content-section {
                h1 {
                    font: 24px/30px Gibbs;
                    letter-spacing: 0px;
                    color: #382A57;
                    font-weight: bold;
                    padding-bottom: 25px;
                }

                p, li {
                    text-align: left;
                    font: 16px/30px Montserrat, sans-serif;
                    letter-spacing: 0px;
                    color: #42375B;
                    font-weight: 400;
                    padding-bottom: 12px;
                }
            }
        }
        @media screen and (max-width: 768px) {
            .row {
                flex-direction: column;
            }
            .small-section {
                width: 100%;
            }
            .big-section {
                width: 100%;
            }
        }
    }
</style>