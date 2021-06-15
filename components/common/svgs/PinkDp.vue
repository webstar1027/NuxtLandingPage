<template>
    <div class='blue'>
        <img :src='ThreeDProfessionals' class='test' :width="width" :height="height" contain/>
        <div class='text'>3D<br>Professionals</div>
    </div>
</template>
<script>
import ThreeDProfessionals from '@/assets/skills-svg/3d-professionals.svg'

export default {
    name: 'PinkDp',
    props: {
        width: {
            type: String,
            default: '404.914'
        },
        height: {
            type: String,
            default: '403.288'
        }
    },
    data() {
        return {
            ThreeDProfessionals
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