<template>
    <div class="wrapper">
        <section>
            <div class="text-center">
                <img src="@/assets/howItWorks/list-projects-img-desc.png" class="is-hidden-mobile"/>
                <img src="@/assets/howItWorks/list-projects-img-mob.png" class="is-hidden-tablet"/>
            </div>
        </section>
        <section>
            <h5>Where do I</h5>
            <h1>List Projects</h1>
            <p class="regular-text">CrewNew makes the process simple. The sign-up system is similar to working with a traditional agency. The CrewNew difference is access to our giant talent pool, and the premium Apps and tools we provide. Our aim us to provide excellent hand-picked professionals at the most competitive prices you will find. How can we offer both excellent quality and superb value? Take a look below!</p>
        </section>
    </div>
</template>

<script>
    export default {
        name: "listProjectsSection"
    }
</script>

<style lang="scss" scoped>
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
            }
        }
    }
    h5 {
        font: Bold 14px/16px Gibbs;
        letter-spacing: 2px;
        color: #D84166;
        text-transform: uppercase;
        @media screen and(max-width: 1400px) and(min-width: 768px) {
            font-size: 0.6em;
        }
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
        font: Normal 14px/30px Montserrat, sans-serif;
        letter-spacing: 0;
        color: #42375B;
        
    }
    @media screen and (max-width: 768px) {
        .wrapper {
            section {
                padding: 0px;
            }
        }
        h1 {
            font-size: 1.9em;
            margin-top: 0px;
        }
        h5 {
            font-size: 0.9em;
        }
        .regular-text {
            font-size: 0.9em;
        } 
    }
</style>