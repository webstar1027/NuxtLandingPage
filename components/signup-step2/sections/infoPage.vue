<template>
    <div class="info-wrapper">
        <div class='content-info-wrapper'>
            <img src="@/assets/signup-step2/step2-info.svg"/>
            <h5>thank you for signing up!</h5>
            <h1>Please tell us a little more about your project?</h1>
            <p>Please, add as many details as possible about your project, add any drawings (can be done with pen & paper and picture with smartphone for example), any similar websites/apps, competitors, any design materials (logo, print materials, whatever you have), etc.</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "infoPage"
    }
</script>

<style lang="scss" scoped>
    .info-wrapper {
        text-align: center;
        // height: calc(100vh - 100px);
        padding: 100px;
        flex: 1;
        .content-info-wrapper {
            max-width: 591px;
            margin: 0 auto;

        }
        @media screen and (max-width: 500px) {
            padding: 50px 20px;
        }
        img {
            max-height: 270px;
        }
        h5 {
            font: Bold 13px/16px Gibbs;
            letter-spacing: 2px;
            color: #D84166;
            text-transform: uppercase;
            margin: 20px 0;
        }
        h1 {
            font: 700 40px/45px Gibbs;
            letter-spacing: 0;
            color: #42375B;
            margin: 20px 0;
        }
        p {
            font: 18px/30px Montserrat, sans-serif;
            letter-spacing: 0;
            color: #42375B;
            margin-top: 30px;
            font-weight: 400;
            max-width: 526px;
            margin-left: auto;
            margin-right: auto;
        }
    }
</style>