<template>
    <div class='blue'>
        <img :src='MarketingExperts' class='test' :width="width" :height="height" contain/>
        <div class='text'>Marketing<br>Experts</div>
    </div>
</template>
<script>
import MarketingExperts from '@/assets/skills-svg/marketing-experts.svg'
export default {
    name: 'PinkMe',
    props: {
        width: {
            type: String,
            default: '305.947'
        },
        height: {
            type: String,
            default: '307.328'
        }
    },
    data() {
        return {
            MarketingExperts
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