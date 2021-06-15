<template>
    <div class="top-section">
        <h5>LET US EXPLAIN</h5>
        <h1>How it Works</h1>
        <p class="regular-text">The best programers in the world come from<br/> Eastern Europe.</p>
        <button type="button" @click="signup()">GET FREE QUOTE</button>
    </div>
</template>

<script>
    import bus from '@/services/bus.js'
    export default {
        name: "topWorks",
        methods: {
            signup () {
                this.$root.$emit('signupOpen')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .top-section {
        text-align: center;
        background: url('../../assets/howItWorks/Rectangle2000@2x-min.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        border-bottom-left-radius: 100px;
        margin: 0;
        height: 627px;
        padding-top: 8%;
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
            font: 38px/58px Gibbs;
            font-weight: bold;
            color: #382A57;
            @media screen and(max-width: 1400px) and(min-width: 768px) {
                font-size: 2em;
            }
        }
        .regular-text {
            letter-spacing: -0.5px;
            color: #382A57;
            font-size: 14px;
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
        @media screen and (max-width: 1023px){
            background: url('../../assets/howItWorks/Rectangle 519.png');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
        }
         @media screen and (max-width: 768px){
            padding-top: 60px;
            height: 90vh;
             h5 {
            font-size: 0.7em;
            }
            h1 {
                font-size: 1.9em;
            }
            .regular-text {
                font-size: 0.8em;
                font-weight: 500;
            }
        }
    }
</style>