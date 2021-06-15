<template>
    <div class='blue'>
        <img :src='MobileAppsDevelopers' class='test' :width="width" :height="height" contain/>
        <div class='text'>Mobile App<br>Developers</div>
    </div>
</template>
<script>
import MobileAppsDevelopers from '@/assets/skills-svg/mobile-app-developers.svg'

export default {
    name: 'BlueGd',
    props: {
        width: {
            type: String,
            default: '300.531'
        },
        height: {
            type: String,
            default: '307.037'
        }
    },
    data() {
        return {
            MobileAppsDevelopers
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