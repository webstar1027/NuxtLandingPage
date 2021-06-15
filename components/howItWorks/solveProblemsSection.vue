<template>
    <div class="cards-wrapper">
        <article>
            <p class="higlight-text">Verification</p>
            <p class="regular-text">Verification and audit processes to ensure only excellent candidates make it onto the site.</p>
        </article>
        <article>
            <p class="higlight-text">Testing</p>
            <p class="regular-text">Testing and screening to award skill levels across a huge range of skill sets - every project requires multiple skills, and businesses need to know they freelancer can meet all their criteria.</p>
        </article>
        <article>
            <p class="higlight-text">Project Managers</p>
            <p class="regular-text">Project Managers to offer tailored skill sets to clients within their local area.</p>
        </article>
        <article>
            <p class="higlight-text">Free Support</p>
            <p class="regular-text">Free support packages for freelancers and clients to help make sure job descriptions are clear, and communication is streamlined.</p>
        </article>
        <article>
            <p class="higlight-text">Opportunities</p>
            <p class="regular-text">Opportunities for training, personal and professional development</p>
        </article>
        <article>
            <p class="higlight-text">Transparency</p>
            <p class="regular-text">Transparency and clarity at all times</p>
        </article>
        <article>
            <p class="higlight-text">Open Communication</p>
            <p class="regular-text">Open communication with the management team</p>
        </article>
        <article>
            <p class="higlight-text">Client Oversight</p>
            <p class="regular-text">Client oversight over their work-streams throughout the process - never finding out at the end of a project that it isn’t up to scratch!</p>
        </article>
        <!--<article>-->
            <!--<p class="higlight-text">Matching working hours per day</p>-->
            <!--<p class="regular-text">Based on South Africa time zone, your working hours and developer’s time zone and working hours there should be at least 4h per each day when you both work.</p>-->
        <!--</article>-->
    </div>
</template>

<script>
    export default {
        name: "solveProblemsSection"
    }
</script>

<style lang="scss" scoped>
    .cards-wrapper {
        text-align: left;
        display: flex;
        flex-flow: column wrap;
        align-content: space-between;
        padding: 0 50px;
        /* Your container needs a fixed height, and it
         * needs to be taller than your tallest column. */
        height: 700px;
        article {
            padding: 30px;
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
        @media screen and (max-width: 1240px) {
            height: 800px;
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
        @media screen and (max-width: 768px) {
            padding: 0 20px;
            margin-left: -10px;
            margin-right: -10px;
            article {
                margin-bottom: 5%;
            }
        }
        @media screen and (max-width: 500px) {
            padding: 0;
        }
    }
    .higlight-text {
        font: Bold 24px/25px Gibbs;
        letter-spacing: 0;
        color: #42375B;
        text-transform: capitalize;
        margin-bottom: 20px;
        @media screen and(max-width: 768px) {
            font-size: 1.3em;
            line-height: 25px;
        }
    }
    .regular-text {
        font: Normal 14px/25px Montserrat, sans-serif;
        letter-spacing: 0;
        color: #382A57;
        opacity: 1;
        
    }
</style>