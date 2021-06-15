<template>
    <div class='blue'>
        <img :src='WebDevelopers' class='test' :width="width" :height="height" contain/>
        <div class='text'>Web<br>Developers</div>
    </div>
</template>
<script>
import WebDevelopers from '@/assets/skills-svg/web-developers.svg'

export default {
    name: 'GreenWd',
    props: {
        width: {
            type: String,
            default: '301.211'
        },
        height: {
            type: String,
            default: '311.001'
        }
    },
    data() {
        return {
            WebDevelopers
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