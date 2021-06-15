<template>
    <div>
        <section-container :heading="{title: 'top', desc: '1% Talent'}" noPaddingMobile simple-inner-page>
            <div class="section-wrapper">
                <section>
                    <img src="@/assets/about/Group 883.svg" class="is-hidden-mobile right-img"/>
                    <div class="">
                        <p class="higlight-text">We are continuously improving and enhancing our web scraping techniques to source the best talent worldwide. We carefully analyse the Big Data and curate only the very best!</p>
                        <p class="regular-text">As you would expect from a professional agency, our HR team and Project Managers work diligently to retain A-grade developers. A developer at C-Grade has satisfactory skills but requires a high degree of support and guidance to get the job done. B-Grade developers are more experienced can work autonomously. An A-Grade developer is able not only to complete the work independently but brings the added value of being able to make recommendations to optimise the work, and the results.</p>
                        <p class="regular-text">We work with outstanding professionals and provide excellent support services to ensure they never wish to work anywhere else! Bringing together great clients and superb professionals gives us the most talented pool of candidates, and the ideal resource for skilled candidates to find rewarding and well paid work.</p>
                        <p class="regular-text">CrewNew offers all users opportunities to earn rewards when they introduce new talent to our agency! Suggest talent>></p>
                        <p class="regular-text">Our ethos is one of continuous development. To be a highly ranked CrewNew professional, you can’t only be good; you must be committed to constantly improving. We offer a growing database of the best learning materials and resources to support our developers in continuing to upskill.</p>
                        <p class="higlight-text">No cheating!!!</p>
                        <p class="regular-text">We want to break away from the freelance culture where candidates can say pretty much anything they like. CrewNew is very proud of the candidates who represent our agency, and we verify all the information provided for every profile page. Whilst it is increasingly common for manual verification to avoided, we believe in never taking shortcuts. Having this added level of screening means every developer and client can work together through our platform with complete confidence.</p>
                        <p class="regular-text">Another growing trend is for unethical practices to be used to generate multiple fake freelancer accounts, and to generate positive feedbacks and ratings through self-hiring. You will never encounter these freelancers on CrewNew; we hand-pick and rigorously test every candidate supported by a robust system which prevents any reviews or ratings being faked.</p>
                        <p class="regular-text">Reference checks are an important part of what we do, with every new candidate needing to provide at least three. We understand that safety, security and transparency are essential when working with somebody new.</p>
                    </div>
                </section>
            </div>
        </section-container>
    </div>
</template>

<script>
    import SectionContainer from '@/components/containers/Section/Section'
    export default {
        name: "topTab",
        components: {
            SectionContainer
        }
    }
</script>

<style lang="scss" scoped>
    .section-wrapper {
        display: flex;
        flex-direction: row;
        margin-top: -50px;
        max-width: 920px;
        margin: 0 auto;
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
        font: Bold 14px/30px Montserrat, sans-serif;
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
    .left-bottom-section {
        padding: 80px 0;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        button {
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
            &:hover {
                span { display: none }
                &:before { content: 'SIGN UP'; }
            }
        }
    }
    .right-wrapper {
        padding: 10px 40px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 20px 50px 50px #42375B12;
        border: 1px solid #F5F4F4;
        border-radius: 25px;
        opacity: 1;
        p {
            margin: 20px 0;
        }
    }

</style>