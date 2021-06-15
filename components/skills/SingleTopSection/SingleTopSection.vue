<template>
    <div class="top-container" :class="isStretched ? 'stretch' : ''" v-if="skill">
        <h3>WE OFFER FREELANCERS FOR</h3>
        <h1>{{skill.title}}</h1>
        <div class="content" v-html="skill.content"></div>
    </div>
</template>
<script>
export default {
    name: 'SingleTopSection',
    props: ['skill', 'stretch'],
    computed: {
        isStretched () {
            return this.stretch
        }
    }
}
</script>
<style lang="scss" scoped>
    .top-container{
        padding-top: 157px;
        padding-bottom: 129px;
        display: block;
        margin-right: 279px;
        text-align: center;
        transition: all 0.35s ease-out;
        // @media screen and (max-width: 1260px) {
        //     max-width: 90%;
        //     margin: 0 auto
        // }
        &.stretch {
            transition: all 0.35s ease-out;
            margin-right: 0;
        }
        h3{
            text-align: center;
            font-weight: bold;
            font-family: Gibbs;
            font-size: 14px;
            letter-spacing: 2.57px;
            color: #D84166;
            opacity: 1;
            @media screen and(max-width: 1400px) and(min-width: 768px) {
                font-size: 0.7em;
            }
        }
        h1{
            text-align: center;
            font-weight: bold;
            font-family: Gibbs;
            font-size: 38px;
            letter-spacing: 0;
            color: #382A57;
            opacity: 1;
            margin: 13px auto 35px auto;
            @media screen and(max-width: 1400px) and(min-width: 768px) {
                font-size: 2em;
            }
        }
        .content{
            margin: 0 auto;
            max-width: 859px;
            text-align: center;
            font-weight: normal;
            font-family: 'Montserrat', sans-serif;
            font-size: 14px;
            letter-spacing: -0.5px;
            color: #382A57;
            opacity: 1;
        }
        @media screen and(max-width: 768px) {
            margin: 0 auto;
            max-width: 100%;
            padding-left: 25px;
            padding-right: 25px;
            padding-top: 57px;
            h1 {
                font-size: 1.9em !important;
                line-height: 30px;
                font-weight: 800;
            }
            h3 {
                font-size: 0.9em !important;
            }
            .content {
                font-size: 1em !important;
                font-weight: 500 !important;
            }
        }

        @media screen and(max-width: 1400px) and(min-width: 768px) {
            // h3 {
            //     font-size: 0.8em;
            // }
            // h1 {
            //     font-size: 2em;
            // }

            .content {
                // font-size: 1em;
                padding-right: 100px;
                padding-left: 100px;
            }
            padding-top: 80px;
            padding-bottom: 80px;
        }

    }
</style>