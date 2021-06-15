<template>
    <div class='blue'>
        <img :src='Animators' class='test' :width="width" :height="height" contain/>
        <div class='text'>Animators</div>
    </div>
</template>
<script>
import Animators from '@/assets/skills-svg/animators.svg'
export default {
    name: 'GreenA',
    props: {
        width: {
            type: String,
            default: '336.895'
        },
        height: {
            type: String,
            default: '329.153'
        }
    },
    data() {
        return {
            Animators
        }
    }
}
</script>
<style lang="scss" scoped>
    .blue {
    position: relative;
    text-align: center;
    z-index: 10;
    .text {
        position: absolute;
        top: 30%;
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