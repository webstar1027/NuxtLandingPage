<template>
    <article class="skill-bar">
        <p>{{skill.name}}</p>
        <div class="scale">
            <div class="green" :style="`width: calc( ${skill.scale} * 10% - 13px)`"></div>
            <span class="marker" :style="`left: calc( 10% * ${skill.scale} - 13px)`">{{skill.scale}}</span>
            <div class="rest"></div>
        </div>
    </article>
</template>
<script>
export default {
    name: 'SkillBar',
    props: ['skill'],
    computed: {
        rest () {
            return 10 - this.skill.scale
        }
    }
}
</script>
<style lang="scss" scoped>
    .skill-bar {
        width: 156px;
        height: 68px;
        display: inline-block;
        margin: 20px 20px 0 10px;
        @media screen and(max-width: 1500px) and (min-width: 768px) {
            height: 50px;
        }
        p{
            text-align: left;
            font-size: 14px;
            font-weight: normal;
            font-family: Montserrat, sans-serif;
            letter-spacing: 0;
            color: #42375B;
            opacity: 1;
            margin-bottom: 10px;
        }
        .scale{
            width: 100%;
            position: relative;
            .green{
                position: relative;
                border: 4px solid #00C951;
                opacity: 1;
                display: inline-block;
                z-index: 2;
            }
            .marker {
                display: inline-block;
                position: absolute;
                z-index: 3;
                border-radius: 50%;
                width: 26px;
                height: 26px;
                line-height: 26px;
                vertical-align: middle;
                background: #FFFFFF 0% 0% no-repeat padding-box;
                box-shadow: 0px 3px 6px #00000029;
                opacity: 1;
                text-align: center;
                font-weight: bold;
                font-size: 14px;
                font-family: Montserrat, sans-serif;
                letter-spacing: -0.35px;
                color: #382A57;
                opacity: 1;
            }
            .rest {
                display: inline-block;
                border: 2px solid #D6F7E3;
                opacity: 1;
                position: absolute;
                top: 11px;
                left: 0;
                width: 156px;
                z-index: 1;

            }
        }
        @media screen and(max-width: 1500px) and(min-width: 768px) {
            .scale {
                .rest {
                    width: 100%;
                }
            }
            p {
                font-size: 0.7em;
            }
        }
    }
</style>