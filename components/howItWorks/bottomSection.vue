<template>
    <div class="wrapper">
        <section>
            <h5>WHAT HAPPENS IF YOU</h5>
            <h1>Require a Particular Skill?</h1>
            <p class="regular-text">Never a problem! All of our teams cooperate across projects as required, which means that every individual project has access to a huge talent pool. Each freelancer is tested and verified to validate their skill set, and our PMs work hard to procure the finest talent to ensure we can cover every skill required. Should your project be extremely niche and be an unusual area of knowledge not already curated into our talent pool, we work with dozens of platforms who can help track down the right professional for the job - without you needing to do anything at all!</p>
            <p class="highlight-text">Today we offer 3526 skills covered by 2527 curated freelancers, with 95% of our professionals based in Europe.</p>
        </section>
        <section>
            <div class="text-center">
                <img src="@/assets/howItWorks/group-macbook@2x.png" class="is-hidden-mobile"/>
                <img src="@/assets/howItWorks/group-macbook.png" class="is-hidden-tablet"/>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "bottomSection"
    }
</script>

<style lang="scss" scoped>
    .wrapper {
        display: flex;
        flex-direction: row;
        margin-bottom: 50px;
        section {
            flex-grow: 1;
            width: 50%;
            padding: 0 20px;
            text-align: left;
            &:nth-child(2) {
                display: flex;
                align-items: center;
            }
        }
        @media screen and (max-width: 1023px) {
            flex-direction: column;
            // margin-bottom: 200px;
            section {
                width: 100%;
            }
        }
        @media screen and (max-width: 768px) {
            margin-bottom: 0;
            .section {
                padding: 0px;
            }
        }
    }
    h5 {
        font: Bold 14px/16px Gibbs;
        letter-spacing: 2px;
        color: #D84166;
        text-transform: uppercase;
    }
    h1 {
        margin-bottom: 30px;
        margin-top: 15px;
        font: Bold 38px/58px Gibbs;
        letter-spacing: 0;
        color: #42375B;
        @media screen and(max-width: 1400px) and(min-width: 768px) {
            font-size: 2em;
        }
    }
    .regular-text {
        font: Normal 14px/30px Montserrat , sans-serif;
        letter-spacing: 0;
        color: #42375B;
        
    }
    .highlight-text {
        font: Bold 18px/30px Montserrat, sans-serif;
        letter-spacing: 0;
        color: #42375B;
    }
    p {
        margin: 20px 0;
    }

    @media screen and(max-width: 768px) {
        .wrapper {
            section {
                padding: 0px;
            }
        }
        h1 {
            font-size: 1.9em;
            margin-top: 10px;
            line-height: 35px;
            font-weight: 800;
        }
        h5 {
            font-size: 0.9em;
        }
        .regular-text {
            font-size: 0.9em;
        }
    }
</style>