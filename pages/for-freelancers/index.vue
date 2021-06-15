<template>
<div>
    <div class="page-wrapper" ref='scrolllCont'>
        <div class="section-wrapper">
            <div class="top-section light-section simple-section">
                <div class="content-wrapper column">
                    <h1> For Freelancers </h1>
                    <div class="p10"></div>
                    <!-- <h2> Until lockdown ends! </h2>
                    <div class="p25"></div> -->
                    <div class="description-container">
                        <h5> Freelance wherever you want and enjoy the agency PM's support </h5>
                        <button type="button" class='sign-up-button' @click="goToExternal('https://crnw.uk/apply')">CREATE A FREELANCER ACCOUNT</button>
                    </div>
                </div>
            </div>
            <div class="content-section">
                <div class="grey-section simple-section">
                    <div class="content-wrapper row">
                        <div class="small-section one-image">
                            <img class="fluid medium-size" src="@/assets/for-freelancers/freelancers-left.jpg"/>
                        </div>
                        <div class="big-section">
                            <h1> For freelancers </h1>
                            <p>Calling all expert freelancers! Do you find it difficult and time consuming to find legitimate clients with viable budgets to work with? Are you finding freelance platforms inundates with fake accounts, making it impossible to compete as a genuine professional? Welcome to your new home!</p>
                        </div>
                    </div>
                </div>
                <div class="light-section simple-section">
                    <div class="content-wrapper row">
                        <div class="full-width-section">
                            <h1> What freelancers are we always looking for? </h1>
                            <p>If you would consider yourself an accomplished freelance expert in at least one specific skill, or expect soon to be, let's talk. The kind of skills we are always looking for include:</p>
                            <p>1- Expert freelance programmers in any programming language</p>
                            <p>2- Freelance developers specialising in a framework</p>
                            <p>3- Specialist UI/UX graphic designers</p>
                            <p>4- Experienced marketing freelancers</p>
                            <p>5- Quality freelance copywriters</p>
                            <p >This is just a small cross-section of the skills we offer to our clients. If your skill-set is in a different area, please do get in touch. We work with clients across all market sectors and requiring a wide array of freelance specialisms, so are in no way restricted to the types of freelance professionals we work with</p>
                            <p class="italic">What IS important is quality. We know how frustrating it can be to have years of experience and provide a dedicated service to your clients but feel lost in a sea of freelance competitors touting fake reviews. If you are good at what you do and want a secure and supported environment to work from, you have come to the right place</p>
                        </div>
                        <!-- <div class="small-section three-images">
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
                        </div> -->
                    </div>
                </div>
                <div class="grey-section simple-section">
                    <div class="content-wrapper row">
                        <div class="full-width-section">
                            <h1> What benefits does CrewNew offer to our freelancers? </h1>
                            <p>Whatever type of UK freelance jobs you are looking for, it is likely we will have clients looking for your skills. In recognition of the high quality of work we expect from every CrewNew member, we offer a competitive support package which exceeds any of the offerings from typical freelance platforms or recruitment agencies:</p>
                            <p>1- Highly organised constant flow of work - no more searching for jobs to quote on, we have plenty of freelance work to keep our candidates busy!</p>
                            <p>2- Support from professional Project Managers (PMs). Expert freelance developers are not salespeople, so whilst we have requirements for skills such as communication, we want you to concentrate on your area of expertise. PMs help with sales, direct project management, raising invoices, managing budgets, negotiating with clients and every other aspect of the project which falls outside of your skill-set</p>
                            <p>3- Very competitive rates of pay. CrewNew is a place for quality. The rates of pay we secure for our candidates reflects that</p>
                            <p>4- Direct payments to your specified bank account in your local currency. We know how hard our freelancers work, and so make sure they do not end up paying payment processing fees or incurring any form of financial penalty just to be paid for the work they have completed!</p>
                            <p>5- Friendly, supportive culture with like-minded professionals. Our structure means that freelancers are never 'out in the cold'. Project Managers are there to support you, ensuring that every partner involved in every project has a positive experience. Having a unique network of talent means our candidates can work together on projects, sharing their individual skills, experiences and ideas to produce outstanding results for their clients</p>
                            <p>6- Regular team meetings both in the UK and throughout Europe. We are real people, and know our freelancers are too. Whilst we are all busy, we value the opportunity to meet face to face and share our vision for the future, whilst hearing from you. Annual winter meetings are held in the Canarias, so if you too like to escape the cold as we do, this is a great networking event to attend!</p>
                            <p>7- Additional benefits, earnings on commissions and additional payments when working on CrewNew in-house projects and products. Help us, and we will always help you!</p>
                            <p>8- Supported continuous professional development. As the business world evolves, we must all keep pace. Our freelancers have our support in making sure they never get left behind. Our benefits package includes professional training courses at zero cost, and support with studying fees. We want the very best and will go above and beyond to help you achieve that.</p>
                            <p>9- Commissions payable for introducing your talented friends to CrewNew! If you have a network of top quality professionals and find your experiences with CrewNew to be just as good as we know they will be - invite your friends to join us! They will have access to a great new way of working, and you will receive a commission.</p>
                            <p class='semi-bold italic'>If you’re good at something, CrewNew is the best place for you: work remotely, when you want and take a positive step to enhancing your career with our supportive community!</p>
                        </div>
                    </div>
                </div>
                <div class="light-section simple-section ">
                    <div class="content-wrapper row">
                        <div class="full-width-section">
                            <h1> What does CrewNew expect from you? </h1>
                            <p>We'll say it again: quality. We DO NOT accept applications from candidates who cannot verify the skills and experiences they claim to have. Our platform is dedicated to supporting the very best talent. We do not permit any form of 'fake' reviews and have a tamper-proof system to ensure we retain our authenticity. If you are excellent at what you do - get in touch!</p>
                        </div>
                    </div>
                </div>
                <div class="grey-section simple-section ">
                    <div class="content-wrapper row">
                        <div class="full-width-section">
                            <h1>How does the verification process work?</h1>
                            <p> <a @click="$root.$emit('signupOpen')">APPLY NOW>></a>  Here is what you need to do:</p>
                            <p>1- Give us as much information as you possibly can about your specialities, skills and experiences. Don't worry about listing too much - we want to know everything you can do!</p>
                            <p>2- Tell us any additional skills you have. They might not be your specialities, but we want to form a fully rounded picture of everyone we work with. Please list every skill you have; if it isn't a strength you will have the opportunity to tell us.</p>
                            <p>3- Assign yourself a rating out of 10 for each skill. Of course, this is subjective, but we need to understand what you are excellent at, and what additional skills you can offer as secondary services. The ratings work on a 10-point system, so select the marks out of 10 you would give yourself. For example, you might be an expert App Developer and consider your skills 10/10 and have a satisfactory level of spoken English which you consider to be 5/10. We will verify everything with you, so if you're not sure make your best assessment and we can revisit if necessary.</p>
                            <p>4- Let us know what your experience is within each skill. This helps us understand your skill rating on the 10-point system. For example, if there is a skill which you use every day that would be considered your current main skill. Some skills may be from previous experience which you don't currently use. Always tell us about them; we can help with training support if you need to refresh any previous skill knowledge, so it is important to put it all on the application!</p>
                            <p>5- Any skills you are currently studying are also valid. Just make sure to tell us in the experience field that you are learning that skill.</p>
                            <p>This rating system is intended to help us really get to know what you are good at. We want to assign projects to the best freelancer for that job; be it a junior-level project or one requiring a top professional!</p>
                            <p class="italic">We also never assign a project to any freelancer who we think might struggle to meet the criteria. Our aim is for every job to run smoothly, so matching the right work to the right individual is crucial.</p>
                        </div>
                    </div>
                </div>
                <div class="light-section simple-section is-last">
                    <div class="content-wrapper row">
                        <div class="full-width-section">
                            <h1> What does the points system represent?</h1>
                            <p>Our skills rating system is a 10-point system; it works like this:</p>
                            <p>10- Top expert</p>
                            <p>8-  Senior-level</p>
                            <p>6-  Mid-level</p>
                            <p>4-  Junior</p>
                            <p>2-  Begginer</p>
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
        },
        methods: {
            goToExternal(url) {
                window.open(url, '_blank');
            }
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

        .sign-up-button {
            margin-top: 60px;
            padding: 10px 25px;
            background: #00D857 0% 0% no-repeat padding-box;
            outline: none;
            color: #ffffff;
            border: none;
            cursor: pointer;
            text-transform: uppercase;
            font-weight: bold;
            font-size: 15px;
            font-family: Montserrat, sans-serif;
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

        .one-image {
            display: flex;
            justify-content: center;
            align-items: center;
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

            .top-section {
                text-align: center;
                h1 {
                    font: Bold 38px/58px Gibbs;
                    letter-spacing: 0px;
                    color: #42375B;
                    opacity: 1;
                    @media screen and(max-width: 1400px) and(min-width: 768px) {
                        font-size: 2em;
                    }
                }
                h2 {
                    font: Bold 14px/16px Gibbs;
                    letter-spacing: 2px;
                    color: #D84166;
                    text-transform: uppercase;
                    opacity: 1;
                    @media screen and(max-width: 1400px) and(min-width: 768px) {
                        font-size: 0.7em;
                    }
                }
                h5 {
                    letter-spacing: -0.5px;
                    color: #382A57;
                    text-transform: capitalize;
                    font-size: 16px;
                    font-weight: 600;
                    font-family: Montserrat, sans-serif;
                }
            }

            .content-section {
                h1 {
                    font: 24px/30px Gibbs;
                    letter-spacing: 0px;
                    color: #382A57;
                    font-weight: bold;
                    padding-bottom: 25px;
                    @media screen and(max-width: 1400px) and(min-width: 768px) {
                        font-size: 2em;
                    }
                }

                p, li {
                    text-align: left;
                    font: 14px/30px Montserrat, sans-serif;
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