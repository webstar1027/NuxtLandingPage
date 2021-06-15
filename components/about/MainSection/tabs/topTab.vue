<template>
    <div>
        <section-container :heading="{title: 'top', desc: '1% Talent'}" noPaddingMobile>
            <div class="section-wrapper">
                <section>
                    <p class="higlight-text">How can you find the very best freelance web developers? CrewNew only selects freelancers and professionals of the highest calibre.</p>
                    <img src="@/assets/about/Group 883.svg" class="is-hidden-desktop"/>
                    <p class="red-text">Usually the top 1% of applicants are assigned 70% of available work.</p>
                    <p class="regular-text">Around 30% of projects are completed by mid-level or junior developers such as Laravel developers according to the simplicity of the project or available budget.</p>
                    <p class="regular-text bcg-img bcg-content-1">Our team works hard to ensure we have the very best talent on board. We like to think of ourselves as the Google of HR consultancy; we scrape them all! Using Artificial Intelligence (AI) and resources such as static code checkers and tests, we filter through hundreds of thousands of candidates to identify those who are really something special. We then hand pick, test and personally verify every candidate, so we know how talented our people are.</p>
                    <p class="regular-text bcg-img bcg-content-2">To make sure we find the most outstanding professionals, we consider candidates from a huge variety of sources. These include learning, certification and exam sites; recruitment, HR and freelancer platforms; developer, designer and professional forums, and Quality Assurance (QA) discussion websites.</p>
                    <p class="regular-text bcg-img bcg-content-3">One of the key issues for clients looking for reliable, genuine and skilled freelancers to outsource their projects to is having confidence that they will find a professional who is up to the task. CrewNew takes the sting out of the search. Every candidate you see has been verified. No fake qualifications, no fabricated reviews. We test every freelancer, so we have ultimate confidence that the skills and abilities on their profiles are exactly what they can offer you.</p>
                    <p class="regular-text bcg-img bcg-content-4">Here are CrewNew we love the world of freelance, and the opportunities it opens up to the world of business. We know from our years of experience that there is an international team of outstanding freelance web developers with the best portfolios imaginable out there. We make it our mission to find them, offer excellent support, and connect the very best pros with the clients who need them most.</p>
                    <p class="regular-text bcg-img bcg-content-5">When somebody shines, we make sure to find them! We try to make the sign-up process as smooth as possible, so if you apply to work with us the chances are we already have your details in our database and can very quickly and easily create a profile.</p>
                    <div class="left-bottom-section">
                        <p class="higlight-text">CrewNew offers all users opportunities to earn rewards when they introduce new talent to our agency!</p>
                        <button type="button" @click="$root.$emit('signupOpen')"><span>SUGGEST TALENT</span></button>
                    </div>
                </section>
                <section>
                    <img src="@/assets/about/Group 883.svg" class="is-hidden-mobile right-img"/>
                    <div class="right-wrapper">
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
        @media screen and(max-width: 768px) {
            section {
                 padding: 0px;
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
        background-image: url('../../../../assets/about/Path 2478.svg');
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
        @media screen and(max-width: 768px) {
            padding: 10px 25px;
            margin-left: -10px;
            margin-right: -10px;
        }
    }

</style>