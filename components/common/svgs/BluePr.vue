<template>
    <div class='blue'>
        <img :src='ProofReaders' class='test' :width="width" :height="height" contain/>
        <div class='text'>Proof<br>Readers</div>
    </div>
</template>
<script>
import ProofReaders from '@/assets/skills-svg/proof-readers.svg'
export default {
    name: 'BluePr',
    props: {
        width: {
            type: String,
            default: '271.719'
        },
        height: {
            type: String,
            default: '278.792'
        }
    },
    data() {
        return {
            ProofReaders
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