<template>
    <article class="skill-nav">
        <article class="first-level" @click="$emit('selectItem', index)" :class="selected === index ? 'extended' : ''">
            <span class="text">{{item.name}}</span><img :src="selected === index ? require('@/assets/Group 3977.svg') : require('@/assets/Icon feather-arrow-down.svg')" alt="">
            <div class="second-layer" v-if="selected === index ">
                <second-layer-item v-for="(it, index) in item.children.data" :key="`sec${index}`" :item="it" :index="index" :third="third" @thirdChange="emitChange"/>
            </div>
        </article>
    </article>
</template>
<script>
import SecondLayerItem from './SecondLayerItem'
export default {
    name: 'SingleSkillNav',
    props: ['item', 'index', 'selected', 'third'],
    methods: {
        emitChange (payload) {
            this.$emit('thirdChange', payload)
        }
    },
    components: {
        SecondLayerItem
    }
}
</script>
<style lang="scss" scoped>
    .skill-nav{
        position: relative;
        max-width: 279px;
        width: 100%;
        float: right;
        clear: both;
    }
    .first-level{
        height: 71px;
        background: #fff 0% 0% no-repeat padding-box;
        border-bottom: 1px solid #00000029;
        opacity: 1;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &.extended{
            height: auto;
            background: #42375B 0% 0% no-repeat padding-box;
            opacity: 1;
            span{
                color: #fff;;
            }
            &:hover {
                background: #42375B 0% 0% no-repeat padding-box;

            }
        }
        span{
            color: #382A57;
            font-weight: bold;
            display: inline-block;
            font-size: 14px;
            margin: 0;
            line-height: 71px;
            vertical-align: middle;
            padding-left: 20px;
        }
        img{
            float: right;
            margin-right: 20px;
            margin-top: 30px;
        }
        &:hover{
            background: #42375B20;
        }
    }
</style>