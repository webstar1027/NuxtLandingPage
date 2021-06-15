<template>
    <div class='blue'>
        <img :src='DesktopDevelopers' class='test' :width="width" :height="height" contain/>
        <div class='text'>Desktop<br>Developers</div>
    </div>
</template>
<script>
import DesktopDevelopers from '@/assets/skills-svg/desctop-developers.svg'

export default {
    name: 'PinkDd',
    props: {
        width: {
            type: String,
            default: '267.067'
        },
        height: {
            type: String,
            default: '263.275'
        }
    },
    data() {
        return {
            DesktopDevelopers
        }
    }
}
</script>
<style lang="scss" scoped>
    .blue {
    position: relative;
    text-align: center;
    .text {
        position: absolute;
        top: 22%;
        left: 45%;
        transform: translateX(-50%);
        color: #ffffff;
        font-weight: bold;
    }
    &:hover {
        .test{
              margin-top: -30px;
                transform-origin: top center;
                transform: rotate(-10deg) scale(1.3) translateY(-5px) translateX(-5px);
        }
              
        }
    .test{
        transition: all 0.3s ease-in-out;
        .b, .c{
            transition: all 0.3s ease-in-out;
        }
        
    }
   }
</style>