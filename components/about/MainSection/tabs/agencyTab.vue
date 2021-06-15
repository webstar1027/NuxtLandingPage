<template>
    <div>
        <section-container :heading="{title: 'agency', desc: 'Culture & Tools'}" noPaddingMobile>
            <div class="section-wrapper">
                <section>
                    <p class="higlight-text">Professional agency support & resources.</p>
                    <div class="text-center">
                        <img src="@/assets/about/Group 888.svg" class="is-hidden-desktop"/>
                    </div>
                    <p class="red-text">CrewNew offers competitive freelancer pricing, with the quality and resources of a professional agency!</p>
                    <p class="regular-text standard-p">Value for money is essential in finding the best freelancer to provide an excellent standard of work within your budget. As many top developers are based in Eastern Europe, we are uniquely qualified to identify and work with these outstanding professionals. Our database includes thousands of skilled developers, who can offer exemplary service at pricing which is extremely competitive when compared to other agencies in {{userTimezone}}. We want to offer the best value possible, alongside great service.</p>
                    <div class="card-box">
                        <p class="higlight-text">CrewNew agency support</p>
                        <p class="red-text">What we bring to the table</p>
                        <ul>
                            <li class="regular-text standard-p">Trust & Security - our teams provide ongoing, long term support whenever you need us, just as you would expect from a traditional or local recruitment agency</li>
                            <li class="regular-text standard-p" >Experience or providing cohesive collaboration between our teams to offer seamless support.</li>
                            <li class="regular-text standard-p">Guarantees of quality & good communication</li>
                            <li class="regular-text standard-p">Local understanding; CrewNew Project Managers (PMs) operate locally and know local markets. We currently have 11 active PMs in {{userCity}} and {{userContry}} in total</li>
                            <li class="regular-text standard-p">Respect and cultural behaviour; we appoint only professional candidates, and require everybody we work with to do so in line with our standards</li>
                            <li class="regular-text standard-p">Celebrating success with a positive team environment</li>
                        </ul>
                    </div>
                    <div class="left-bottom-section">
                        <p class="higlight-text">Our agency is a new concept in the freelancer world; acting as a traditional agency but only working with freelancers. We are the first and only agency of our kind; which is in fact the collaboration of many, many micro-agencies contained under one roof!</p>
                        <p class="regular-text standard-p">Once a project or service has been completed, we ensure that all source files, GIT versions, documents, graphics and server details are provided to you in one place. This means that you will always have open access and can easily revisit materials should you wish to continue developing your product or service once our project is complete.</p>
                    </div>
                </section>
                <section>
                    <div class="text-center">
                        <img src="@/assets/about/Group 888.svg" class="is-hidden-mobile right-img"/>
                    </div>
                    <div class="card-box">
                        <p class="higlight-text">Free High Value Tools & Resources</p>
                        <p class="red-text">or CrewNew users (nominal rate of at least {{userCurrency}}100/month):</p>
                        <ul>
                            <li class="regular-text standard-p">Powerful team chat resource for communication, collaboration and support – comparable to resources such as Flock, Slack etc. ({{userCurrency}}7/month/user with limited storage)</li>
                            <li class="regular-text standard-p">The best time tracking software, which compares with TimeDoctor ({{userCurrency}}9/month/user) or other lower quality competitors (from {{userCurrency}}4/month)</li>
                            <li class="regular-text standard-p">Unique and high functioning Applicant Tracking System (ATS) – no similar competitors</li>
                            <li class="regular-text standard-p">Project management Kanban board like Trello or Asana but all integrated with messaging, Git, Time tracker and all other apps</li>
                            <li class="regular-text standard-p">Team Git + CI/CD automated testing - delivery pipelines to build, test and deploy software (comparable combos start from {{userCurrency}}20/month)</li>
                            <li class="regular-text standard-p">Professional invoicing & accounting software pre-configured (comparable options from {{userCurrency}}15/month)</li>
                            <li class="regular-text standard-p">Secure payment processing system ({{userContry}}, whole Europe and Global)</li>
                            <li class="regular-text standard-p">Unique pricing offers, CRM and marketing automation (usually from {{userCurrency}}10-30/month but goes up to hundreds)</li>
                            <li class="regular-text standard-p">LMS (learning managment system) and exams to support our drive towards continuous professional development</li>
                        </ul>
                        <p class="higlight-text">CrewNew have developed and combined the best bank of open-source and freemium software, alongside our own newly developed apps combined via APIs. These resources are unique to CrewNew and cannot be found anywhere else.</p>
                    </div>
                </section>
            </div>
        </section-container>
    </div>
</template>

<script>
    import SectionContainer from '@/components/containers/Section/Section'
    import { mapGetters } from 'vuex'
    export default {
        name: "agencyTab",
        computed: {
            ...mapGetters({
                userCity: 'location/getUserCity',
                userContry: 'location/getUserContry',
                userCurrency: 'location/getUserCurency',
                userTimezone: 'location/getUserTimezone'
            }),
        },
        components: {
            SectionContainer
        }
    }
</script>

<style lang="scss" scoped>
    .section-wrapper {
        display: flex;
        flex-direction: row;
        section {
            flex-grow: 1;
            text-align: left;
            width: 50%;
            padding: 0 20px;
        }
        @media screen and (max-width: 1023px) {
            flex-direction: column;
            section {
                width: 100%;
            }
            .right-img {
                display: none;
            }
        }
        @media screen and (max-width: 768px) {
            section {
                padding: 0;
            }
        }
    }
    p {
        margin: 20px 0;
    }
    .higlight-text {
        font: Bold 24px/40px Gibbs;
        letter-spacing: 0;
        color: #382A57;
        opacity: 1;
        @media screen and(max-width: 768px) {
            font-size: 1.3em;
            line-height: 25px;
        }
    }
    .red-text {
        font: Bold 13px/30px Montserrat, sans-serif;
        letter-spacing: 0;
        color: #D84166;
        text-transform: uppercase;
    }
    .regular-text {
        // font: Normal 13px/30px Montserrat, sans-serif;
        letter-spacing: 0;
        color: #42375B;
        opacity: 1;
        margin: 50px 0;
    }
    .left-bottom-section {
        padding: 80px 0;
        background-image: url('../../../../assets/about/Path 2478.svg');
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    }
    .card-box {
        padding: 20px 40px 40px 40px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 20px 50px 50px #42375B12;
        border: 1px solid #F5F4F4;
        border-radius: 25px;
        opacity: 1;
        p {
            margin: 20px 0;
        }
        ul {
            list-style: disc;
            padding-left: 20px;
            li {
                padding-left: 10px;
                margin: 10px 0;
            }
            @media screen and (max-width: 1023px) {
                list-style: none;
                padding-left: 0;
                li {
                    padding-left: 0;
                }
            }
        }
        @media screen and (max-width: 768px) {
            padding: 20px;
            margin-left: -10px;
            margin-right: -10px;
        }
    }
</style>