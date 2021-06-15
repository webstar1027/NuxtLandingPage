<template>
    <div class="text-center">
        <h5>How do I find the</h5>
        <h1>Right freelancer for my project?</h1>
        <div class="icons-wrapper">
            <div class="icons-holder">
                <img src="@/assets/howItWorks/users.svg"/>
                <img src="@/assets/howItWorks/chat.svg"/>
                <img src="@/assets/howItWorks/cash.svg"/>
            </div>
            <hr>
            <img src="@/assets/howItWorks/Ellipse.svg" class="ellipse-left is-hidden-mobile"/>
            <img src="@/assets/howItWorks/Ellipse.svg" class="ellipse-right is-hidden-mobile"/>
        </div>
        <div class="wrapper">
            <section>
                <div class="text-wrapper">
                    <div class="num-wrapper">
                        <span>1</span>
                    </div>
                    <p class="regular-text">Write down your initial requirements>> Tell us exactly what you need; this specification will be used throughout 20+ freelance sites and be accessed by multiple agencies, avoiding the need to post your project requirements multiple times.</p>
                </div>
                <div class="text-wrapper is-hidden-desktop">
                    <div class="num-wrapper">
                        <span>2</span>
                    </div>
                    <p class="regular-text">A professional {{userCity}} based Project Manager (PM) will provide 1 HOUR OF FREE CONSULTATION (offer till 15.01.2020). Your PM will work closely with you to make sure your spec is inclusive and will provide support with analysis, market research, suggesting any new technological solutions that might help your business, to to help draw up the wireframes for your site.</p>
                </div>
                <div class="text-wrapper">
                    <div class="num-wrapper">
                        <span>3</span>
                    </div>
                    <p class="regular-text">The work will be carried out to your requirements by the team of professionals best suited for your project. Teams work closely together and have proven track records. Whether your project involved coding, design work, text, video or any other product, the team will publish their work daily to the Git or design/text platforms. You are always able to control and monitor the process, with the support of your PM. Clients receive daily progress reports, and can review screenshots, keyboard/mouse activities and see the apps or websites visited during their work. Full transparency, always.</p>
                </div>
                <div class="text-wrapper is-hidden-desktop">
                    <div class="num-wrapper">
                        <span>4</span>
                    </div>
                    <p class="regular-text">Your PM will carry out the Quality Assurance processes and testing to ensure that your work is delivered to a perfect standard, and to review for any bugs or tweaks.</p>
                </div>
                <div class="text-wrapper">
                    <div class="num-wrapper">
                        <span>5</span>
                    </div>
                    <p class="regular-text">All customers receive a full Warranty and 100% Money-back Guarantee as you would expect from a high quality agency. We pride ourselves on providing excellent service and support, and so always honour our promise of top quality work. This gives our clients peace of mind and helps us to demonstrate our confidence in the abilities of all of our freelancers.</p>
                </div>
                <div class="text-wrapper is-hidden-desktop">
                    <div class="num-wrapper">
                        <span>6</span>
                    </div>
                    <p class="regular-text">CrewNew provides ongoing support and training opportunities. We know that business is ever evolving and work longer term with our clients to keep their company moving forward. Support is tailored to your industry and business model, and can include marketing pros, copywriters, European language translators, animators, and audio/video/photo professionals to name but a few.</p>
                </div>
            </section>
            <section>
                <div class="text-wrapper">
                    <div class="num-wrapper">
                        <span>2</span>
                    </div>
                    <p class="regular-text">A professional {{userCity}} based Project Manager (PM) will provide 1 HOUR OF FREE CONSULTATION (offer till 15.01.2020). Your PM will work closely with you to make sure your spec is inclusive and will provide support with analysis, market research, suggesting any new technological solutions that might help your business, to to help draw up the wireframes for your site.</p>
                </div>
                <div class="text-wrapper">
                    <div class="num-wrapper">
                        <span>4</span>
                    </div>
                    <p class="regular-text">Your PM will carry out the Quality Assurance processes and testing to ensure that your work is delivered to a perfect standard, and to review for any bugs or tweaks.</p>
                </div>
                <div class="text-wrapper">
                    <div class="num-wrapper">
                        <span>6</span>
                    </div>
                    <p class="regular-text">CrewNew provides ongoing support and training opportunities. We know that business is ever evolving and work longer term with our clients to keep their company moving forward. Support is tailored to your industry and business model, and can include marketing pros, copywriters, European language translators, animators, and audio/video/photo professionals to name but a few.</p>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: "aboveBottomSection",
    computed: {
        ...mapGetters({
            userCity: 'location/getUserCity',
        }),
    }
}
</script>

<style lang="scss" scoped>
    h5 {
        color: #D84166;
        font-size: 14px;
        line-height: 1.2;
        font-weight: 700;
        font-family: Gibbs, sans-serif;
        text-transform: uppercase;
        letter-spacing: 2.57px;
        @media screen and(max-width: 1400px) and(min-width: 768px) {
            font-size: 0.6em;
        }
    }
    h1 {
        font-size: 38px;
        line-height: 1.2;
        letter-spacing: 0;
        color: #ffffff;
        font-weight: 900;
        margin-bottom: 30px;
        @media screen and(max-width: 1400px) and(min-width: 768px) {
            font-size: 2em;
        }
    }
    .icons-wrapper {
        position: relative;
        margin: 80px 0;
        .icons-holder {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            img {
                height: 100px;
                width: auto;
            }
        }
        hr {
            margin-top: -50px;
            background-color: #00D857;
        }
        .ellipse-right {
            position: absolute;
            right: 0;
            top: 38px;
            background-color: #42375b;
        }
        .ellipse-left {
            position: absolute;
            left: 0;
            top: 38px;
            background-color: #42375b;
        }
    }
    .wrapper {
        display: flex;
        flex-direction: row;
        section {
            flex-grow: 1;
            width: 50%;
            padding: 0 20px;
            text-align: left;
        }
        @media screen and (max-width: 1023px) {
            flex-direction: column;
            section {
                width: 100%;
                &:nth-child(2) {
                    display: none;
                }
            }
        }
    }
    .text-wrapper {
        display: flex;
        flex-direction: row;
        margin: 30px 0;
        .num-wrapper {
            span {
                height: 43px;
                width: 43px;
                margin-right: 20px;
                padding-top: 8px;
                display: inline-block;
                background-color: #ffffff;
                color: #00C951;
                border-radius: 100%;
                text-align: center;
                font: Bold 21px/25px Gibbs;
            }
        }
        @media screen and (max-width: 1023px) {
            flex-direction: column;
        }
    }
    .regular-text {
        font: Normal 14px/30px Montserrat, sans-serif;
        letter-spacing: 0;
        color: #FFFFFF;
        opacity: 1;
    }
    @media screen and (max-width: 768px) {
        .wrapper {
            section {
                padding: 0px;
            }
        }
        h1 {
            font-size: 1.9em;
            margin-top: 10px;
        }
        h5 {
            font-size: 0.9em;
        }
        .regular-text {
            font-size: 0.9em;
        }
        .icons-wrapper {
            margin-left: -25px;
            margin-right: -25px;
            .icons-holder {
                img {
                    height: 80px;
                    width: auto;
                }
            }
        }
    }
</style>