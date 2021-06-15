<template>
    <div>
        <section-container :heading="{title: 'rated & tested', desc: 'Rated & Tested'}" noPaddingMobile>
            <div class="section-wrapper">
                <section>
                    <img src="@/assets/about/Group 870.svg" class="is-hidden-mobile hid-tabl-img p20-left"/>
                    <div class="left-bottom-section">
                        <p class="higlight-text">“Give the right tasks to the right people who are the best at exactly what you require!”</p>
                    </div>
                </section>
                <section>
                    <p class="higlight-text">CrewNew tests the strengths and skills of every member of our crew.</p>
                    <img src="@/assets/about/Group 870.svg" class="is-hidden-desktop"/>
                    <p class="red-text">This includes testing technical skills as well as parameters such as spoken English. We then apply a rating score out of 10 against each skill.</p>
                    <p class="regular-text">This ensures that you only consider candidates who meet your criteria and have the expertise you require. We also verify the portfolio of each developer to confirm the authenticity of the information provided within their profile. Supporting information is collated from comments, ratings, portfolio projects and test scores to give a fully rounded summary of every freelancer we work with.</p>
                    <p class="regular-text">This process saves you valuable time. Our filtering tools allow you to search by your specific criteria to quickly find the freelancer with the exact skill set you need. This could be finding someone skilled in a specific programming language, framework or software you use, or having the right design or marketing experience for the job.</p>
                    <p class="regular-text">We also offer other parameters to fine tune your search, including indicative costs, location (and/or time difference from your base), availability, language(s) and working speed.</p>
                </section>
            </div>
            <div class="bottom-cards">
                <article>
                    <p class="higlight-text">Laravel</p>
                    <p class="red-text">Laravel at least 8 points (out of 10)</p>
                    <p class="regular-text">Considering the budget and limited complexity of the project, we would suggest that top experts with a rating of 9-10 might be more expensive than necessary. In this example we might recommend using a top expert for the planning and team leadership only in a larger scale project. Simple but time-consuming projects are usually best suited to more junior developers with a rating <5.</p>
                </article>
                <article>
                    <p class="higlight-text">MariaDB</p>
                    <p class="red-text">at least 7</p>
                    <p class="regular-text">MariaDB is less popular than MySQL, as an example, and has a more complex DB structure, so we would include this in initial filtering. Should we not find a perfect match, then we might remove this parameter before narrowing other filters to identify the right database of candidates.</p>
                </article>
                <article>
                    <p class="higlight-text">JavaScript</p>
                    <p class="red-text">at least 6</p>
                    <p class="regular-text">The best person for this project will preferably have an in-depth knowledge of JS, and therefore would also be able to work on the calculators. In this instance, we would exclude anybody without this specific knowledge.</p>
                </article>
                <article>
                    <p class="higlight-text">English</p>
                    <p class="red-text">Spoken at least 6 & written at least 8</p>
                    <p class="regular-text">Where projects require written communication with a UK client, the candidate must possess ‘very good’ written English, and at least ‘good’ spoken English. This is a key parameter, and so we would retain this filter regardless of how else the filtering might be narrowed down.</p>
                </article>
                <article>
                    <p class="higlight-text">Rating</p>
                    <p class="red-text">at least 8 based on the last 10 projects/customers</p>
                    <p class="regular-text">Whilst our platform offers escrow buyer protection, for larger projects we only consider well-tested and experienced candidates. This ensures no risk of missed deadlines where turnaround time is critical. Newer candidates would initially be assigned small, lower budget projects to ensure that they can showcase their skills and proficiency before moving onto to bigger, more complex projects.</p>
                </article>
                <article>
                    <p class="higlight-text">Communication speed</p>
                    <p class="red-text">at least 7</p>
                    <p class="regular-text">Communication is set at a default, but if the speed is not as important as other criteria this can be turned off to prioritise other factors.</p>
                </article>
                <article>
                    <p class="higlight-text">Available hours per week</p>
                    <p class="red-text">at least 10h/week</p>
                    <p class="regular-text">Dependant on the start date and duration of the project.</p>
                </article>
                <article>
                    <p class="higlight-text">Hourly rate</p>
                    <p class="red-text">between {{userCurrency}} 15 - {{userCurrency}} 20</p>
                    <p class="regular-text">Considering 10h per week for at least 20 weeks.</p>
                </article>
                <article>
                    <p class="higlight-text">Matching working hours per day</p>
                    <p class="red-text">at least 4h</p>
                    <p class="regular-text">Based on {{userTimezone}} time zone, your working hours and developer’s time zone and working hours there should be at least 4h per each day when you both work.</p>
                </article>
            </div>
        </section-container>
    </div>
</template>

<script>
import SectionContainer from '@/components/containers/Section/Section'
import { mapGetters } from 'vuex'
export default {
    name: "ratedTab",
    computed: {
        ...mapGetters({
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
            flex-direction: column-reverse;
            section {
                width: 100%;
            }
            .hid-tabl-img {
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
        
    }
    .left-bottom-section {
        padding: 80px 0;
        background-image: url('../../../../assets/about/Path 2478.svg');
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    }
    .bottom-cards {
        text-align: left;
        display: flex;
        flex-flow: column wrap;
        align-content: space-between;
        /* Your container needs a fixed height, and it
         * needs to be taller than your tallest column. */
        height: 1440px;
        article {
            padding: 0 30px;
            background: #FFFFFF 0% 0% no-repeat padding-box;
            box-shadow: 20px 50px 50px #42375B12;
            border: 1px solid #F5F4F4;
            border-radius: 25px;
            opacity: 1;
            width: 32%;
            margin-bottom: 2%; /* Optional */
        }
        article:nth-child(3n+1) { order: 1; }
        article:nth-child(3n+2) { order: 2; }
        article:nth-child(3n)   { order: 3; }

        &::before,
        &::after {
            content: "";
            flex-basis: 100%;
            width: 0;
            order: 2;
        }
        @media screen and (min-width: 1400px) {
            height: 1050px;
        }
        @media screen and (min-width: 1300px) {
            height: 1135px;
        }
        @media screen and (max-width: 1240px) {
            height: 1730px;
            article {
                width: 49%;
            }
            article:nth-child(2n+1) { order: 1; }
            article:nth-child(2n) { order: 2; }
        }
        @media screen and (max-width: 1023px) {
            height: auto;
            flex-direction: row;
            article {
                width: 100%;
            }
            article:nth-child(1n) { order: 1; }
        }
        @media screen and(max-width: 768px) {
            margin-left: -10px;
            margin-right: -10px;
        }
    }
</style>