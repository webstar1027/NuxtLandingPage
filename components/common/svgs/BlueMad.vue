<template>
    <div class='blue'>
        <img :src='GraphicDesigners' class='test' :width="width" :height="height" contain/>
        <div class='text'>Graphic<br>Designers</div>
    </div>
</template>
<script>
import GraphicDesigners from '@/assets/skills-svg/graphic-designers.svg'

export default {
    name: 'BlueMad',
    props: {
        width: {
            type: String,
            default: '280.814'
        },
        height: {
            type: String,
            default: '276.577'
        }
    },
    data() {
        return {
            GraphicDesigners
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
        top: 20%;
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