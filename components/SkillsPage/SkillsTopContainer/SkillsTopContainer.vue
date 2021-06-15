<template>
    <div class="skills-top-container" :class="stretch ? 'stretch' : ''">
        <h3>WE HAVE A VARIETY OF</h3>
        <h1>Skills & Services</h1>
        <p>CrewNew offers a wide array of freelance skills and services. Currently across our talent pool we have 3526 skills available throughout Europe.</p>
        <article class="image-container">
            <img src="@/assets/skills/Group 3647.svg" alt="" width="33%">
            <img src="@/assets/skills/Group 3648.svg" alt="" width="33%">
            <img src="@/assets/skills/Group 3649.svg" alt="" width="33%">
        </article>
    </div>
</template>
<script>
export default {
    name: 'SkillsTopContainer',
    props: ['showMenu'],
    computed: {
        stretch () {
            return !this.showMenu
        }
    }
}
</script>
<style lang="scss" scoped>
    .skills-top-container{
        margin-top: 100px;
        margin-bottom: 150px;
        margin-right: 298px;
        transition: all 0.35s ease-out;
        &.stretch {
            margin-right: 0;
        }
        h3 {
            margin-top: 107px;
            text-align: center;
            color: #D84166;
            opacity: 1;
            margin-bottom: 12px;
            letter-spacing: 2.57px;
            font: Bold 14px/22px Gibbs;
            @media screen and(max-width: 1400px) and(min-width: 768px) {
                font-size: 0.7em;
            }
        }
        h1{
            text-align: center;
            color: #382A57;
            opacity: 1;
            font:Bold 38px/58px Gibbs;
            // font-weight: bold;
            margin-bottom: 35px;
            @media screen and(max-width: 1400px) and(min-width: 768px) {
                font-size: 2em;
            }
        }
        p{
            max-width: 859px;
            margin: 0 auto 89px auto;
            text-align: center;
            font-weight: normal;
            font-size: 14px;
            font-family: 'Montserrat';
            letter-spacing: -0.5px;
            color: #382A57;
            opacity: 1;
        }
        .image-container {
            max-width: 1400px;
            width: 100%;
            text-align: center;
            margin: 0 auto;
        }
        @media screen and(max-width: 768px) {
            margin-right: auto;
            padding-left: 25px;
            padding-right: 40px;
            h1 {
                font-size: 1.9em;
                line-height: 30px;
                font-weight: 800;
            }
            h3 {
                font-size: 0.9em;
            }
            p {
                font-size: 1em;
                font-weight: 400;
            }
        }
    }
</style>