<template>
    <div class='blue'>
        <img :src='VideoEditors' class='test' :width="width" :height="height" contain/>
        <div class='text'>Video<br>Editors</div>
    </div>
</template>
<script>
import VideoEditors from '@/assets/skills-svg/video-editors.svg'
export default {
    name: 'VideoEditors',
    props: {
        width: {
            type: String,
            default: '316.927'
        },
        height: {
            type: String,
            default: '319.755'
        }
    },
    data() {
        return {
            VideoEditors
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