<template>
    <div class='blue'>
        <img :src='UIDesigners' class='test' :width="width" :height="height" contain/>
        <div class='text'>UI/UX<br>Designers</div>
    </div>
</template>
<script>
import UIDesigners from '@/assets/skills-svg/uiux-designers.svg'
export default {
    name: 'PinkMe',
    props: {
        width: {
            type: String,
            default: '296.81'
        },
        height: {
            type: String,
            default: '291.381'
        }
    },
    data() {
        return {
            UIDesigners
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
        top: 24%;
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