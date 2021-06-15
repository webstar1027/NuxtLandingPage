<template>
    <div class="about-top-section p50-ver columns">
        <div class='smaller'>
            <div class="column">
                <img class="fluid medium-size" src="@/assets/about/Group 1002.svg"/>
            </div>
            <div class="column al-self-center mobile-pad-fix">
                <h5>LET US EXPLAIN</h5>
                <h1>About & Pricing</h1>
                <p>We're a massive agency that functions like an agency, </p>
                <p>but we charge freelancer prices!</p>
                <button type="button" @click="$root.$emit('signupOpen')">GET FREE QUOTE</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TopAbout"
    }
</script>

<style lang="scss" scoped>
    .about-top-section {
        background-color: #EDE9E7;
        border-bottom-left-radius: 100px;
        min-height: 627px;
        margin: 0;

        .smaller {
            max-width: 1362px;
            margin: 0 auto;
            display: flex;
            flex-direction: row;
        }
        .medium-size {
            max-width: 427px;
        }
        @media screen and (max-width: 768px) {
            flex-direction: column-reverse;
            text-align: center;
            height: 90vh;
            .medium-size {
                max-width: 100%;
            }
            .smaller {
                flex-direction: column-reverse;
                
            }
        }
    }
    .al-self-center {
        align-self: center;
    }
    h5 {
        color: #D84166;
        letter-spacing: 2.57px;
        font: Bold 14px/22px Gibbs;
        @media screen and(max-width: 1400px) and(min-width: 768px) {
            font-size: 0.7em;
        }
    }
    h1 {
        margin-bottom: 15px;
        color: #382A57;
        font: 38px/58px Gibbs;
        font-weight: bold;
        @media screen and(max-width: 1400px) and(min-width: 768px) {
            font-size: 2em;
        }
    }
    p {
        letter-spacing: -0.5px;
        color: #382A57;
        text-transform: capitalize;
        font-size: 16px;
        font-weight: 600;
        font-family: Montserrat, sans-serif;
    }
    button {
        margin-top: 60px;
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
    }
    @media screen and (max-width: 768px) {
        
        h5 {
            font-size: 0.7em;
        }
        h1 {
            font-size: 1.9em;
        }
        p {
            font-size: 0.8em;
            font-weight: 500;
        }
        .mobile-pad-fix {
            padding-left: 30px;
            padding-right: 30px;
        }
    }
</style>