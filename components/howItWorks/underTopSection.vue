<template>
    <div class="wrapper">
        <section>
            <div class="text-center">
                <img src="@/assets/howItWorks/new-profileImg-mob.png" class="is-hidden-desktop"/>
                <!--<img src="@/assets/howItWorks/profileImg-tab.png" class="is-hidden-mobile is-hidden-desktop"/>-->
                <img src="@/assets/howItWorks/new-profileImg-desc.png" class="is-hidden-mobile hidden-tablet"/>
            </div>
        </section>
        <section>
            <p class="higlight-text">We understand that finding the right freelance developer or professional for your business is crucial.</p>
            <p class="red-text">Outsourcing can save valuable time and money, so long as you are confident that your freelancer has the right skills and experience for you.</p>
            <p class="regular-text">One of the biggest issues for businesses is finding freelance UK programmers they can trust. Confidence that the job will be fit for purpose, on budget, delivered on time, and be of a high quality.</p>
            <p class="regular-text">One of the biggest issues for quality UK freelancers is the lack of reputable platforms for them to showcase the skills they can offer. Finding UK freelance jobs amongst prolific spam accounts is often time wasted.</p>
        </section>
    </div>
</template>

<script>
    export default {
        name: "underTopSection"
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
        .hidden-tablet {
            @media screen and (max-width: 1023px) and (min-width: 769px) {
                display: none !important;
            }
        }
        .higlight-text {
            font: Bold 24px/40px Gibbs;
            letter-spacing: 0;
            color: #382A57;
            opacity: 1;
        }
        .red-text {
            font: Bold 13px/30px Montserrat , sans-serif;
            letter-spacing: 0;
            color: #D84166;
            text-transform: uppercase;
        }
        .regular-text {
            font: Normal 14px/30px Montserrat , sans-serif;
            letter-spacing: 0;
            color: #42375B;
            opacity: 1;
            
        }
        p {
            margin: 20px 0;
        }
        @media screen and (max-width: 768px) {
            section {
                padding: 0px
            }
            .higlight-text {
                font-size: 1.1em;
                line-height: 25px;
            }
            .red-text {
                font-size: 0.9em;
                line-height: 25px;
            }
        }    
    }
</style>