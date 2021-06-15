<template>
    <div>
        <section-container :heading="{title: 'always', desc: 'Project Managed'}" noPaddingMobile>
            <div class="section-wrapper">
                <section>
                    <p class="higlight-text is-hidden-desktop">We want all the projects to succeed so up to 1h project management & consultation is free also on free plans.</p>
                    <div class="text-center">
                        <img src="@/assets/about/Group 968.svg"/>
                    </div>
                    <p class="red-text is-hidden-desktop">Most expensive service at all freelancer sites is the recruiter service where professionals help you to pick the right professional. That start from {{userCurrency}}50 on freelancer sites and go up to {{userCurrency}}400 per month (UpWork for example).</p>
                    <p class="regular-text is-hidden-desktop">With projects bigger than {{userCurrency}}200 there will also always be with all plans free project management service to make sure the projects succeeds. We know that missing the profession project manager (PM) is the main reason why way more than 50% of software projects fail (not working, too late, out of budget, buggy, users reject etc.):</p>
                    <p class="higlight-text bcg-img bcg-content-1">Social and technical communication fails without PM between customer and developers as they speak different languages in terms of technology.</p>
                    <p class="higlight-text bcg-img bcg-content-2 is-hidden-desktop">Without professional PM there will be most probably poorly written together requirements that can be understood in many ways.</p>
                    <div class="card-box is-hidden-mobile hidden-tablet">
                        <p class="higlight-text bcg-img bcg-content-3">Hard to pick the right technology / stack for the requirements without IT experienced PM.</p>
                    </div>
                    <p class="higlight-text bcg-img bcg-content-3 is-hidden-desktop">Hard to pick the right technology / stack for the requirements without IT experienced PM.</p>
                    <p class="higlight-text bcg-img bcg-content-4 is-hidden-desktop">Complicated to invite and pick the right developers / team members for the current skill set / project needs without prior HR/IT experience.</p>
                    <p class="higlight-text bcg-img bcg-content-5">Not able to see any potential red flags / things going wrong during the development process without being a professional PM.</p>
                </section>
                <section class="is-hidden-mobile hidden-tablet">
                    <p class="higlight-text">We want all the projects to succeed so up to 1h project management & consultation is free also on free plans.</p>
                    <p class="red-text">Most expensive service at all freelancer sites is the recruiter service where professionals help you to pick the right professional. That start from {{userCurrency}}50 on freelancer sites and go up to {{userCurrency}}400 per month (UpWork for example).</p>
                    <p class="regular-text">With projects bigger than {{userCurrency}}200 there will also always be with all plans free project management service to make sure the projects succeeds. We know that missing the profession project manager (PM) is the main reason why way more than 50% of software projects fail (not working, too late, out of budget, buggy, users reject etc.):</p>
                    <div class="card-box">
                        <p class="higlight-text bcg-img bcg-content-2">Without professional PM there will be most probably poorly written together requirements that can be understood in many ways.</p>
                    </div>
                    <p class="higlight-text bcg-img bcg-content-4">Complicated to invite and pick the right developers / team members for the current skill set / project needs without prior HR/IT experience.</p>
                </section>
            </div>
            <div class="card-box">
                <div class="flex-row">
                    <div class="faild-wrapper">
                        <h5>Let us the percentage of</h5>
                        <h1>faild project</h1>
                        <p class="regular-text">Is way higher at freelancer sites compared to professional agencies that have professional project managers.</p>
                    </div>
                    <div class="is-hidden-mobile hidden-tablet"><img src="@/assets/about/Group 977.svg"/></div>
                </div>
                <p class="higlight-text">Googling statistics of the <u>percentage of software development projects that fail</u> you’ll see very sad numbers around 60-80% and some even <u>claiming around 90%</u>.</p>
                <p class="regular-text">That’s why we are combining everything that one professional agency has (PMs, company culture, common tools and practices, etc) and the top freelancers we hand pick.</p>
            </div>
        </section-container>
    </div>
</template>

<script>
    import SectionContainer from '@/components/containers/Section/Section'
    import { mapGetters } from 'vuex'
    export default {
        name: "alwaysTab",
        computed: {
            ...mapGetters({
                userCurrency: 'location/getUserCurency',
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
            .hidden-tablet {
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
        @media screen and (max-width: 1023px) {
            margin: 80px 0;
        }
    }
    .higlight-text {
        font: Bold 24px/40px Gibbs;
        letter-spacing: 0;
        color: #382A57;
        opacity: 1;
        text-align: left;
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
        font: Normal 14px/30px Montserrat, sans-serif;
        letter-spacing: 0;
        color: #42375B;
        opacity: 1;
        margin: 50px 0;
        text-align: left;
        
    }
    .bcg-img {
        position: relative;
        z-index: 0;
    }

    .bcg-img:before {
        position: absolute;
        top: 0;
        left: -40px;
        z-index: -1;
        font: Bold 231px/114px Gibbs;
        letter-spacing: 0;
        color: #F1F8E7;
        opacity: 1;
    }
    .bcg-content-1:before {
        content: "1.";
    }
    .bcg-content-2:before {
        content: "2.";
    }
    .bcg-content-3:before {
        content: "3.";
    }
    .bcg-content-4:before {
        content: "4.";
    }
    .bcg-content-5:before {
        content: "5.";
    }
    .card-box {
        margin: 80px 0;
        padding: 20px 40px 40px 40px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 20px 50px 50px #42375B12;
        border: 1px solid #F5F4F4;
        border-radius: 25px;
        opacity: 1;
        p {
            margin: 20px 0;
        }
        @media screen and (max-width: 768px) {
            padding: 10px;
            margin-left: -10px;
            margin-right: -10px;
        }
    }
    .faild-wrapper {
        align-self: center;

        h5 {
            font-size: 14px;
            text-transform: uppercase;
            text-align: left;
            font: Bold 14px/16px Gibbs;
            letter-spacing: 2px;
            color: #D84166;
            opacity: 1;
        }
        h1 {
            margin-bottom: 15px;
            text-transform: capitalize;
            text-align: left;
            font: 900 35px/58px Gibbs;
            letter-spacing: 0;
            color: #42375B;
            opacity: 1;
        }
        .regular-text {
            text-align: left;
            font: Normal 14px/30px Montserrat, sans-serif;
            letter-spacing: 0;
            color: #382A57;
            opacity: 1;
            
        }
    }
</style>