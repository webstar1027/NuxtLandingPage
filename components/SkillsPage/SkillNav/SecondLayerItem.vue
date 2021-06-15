<template>
    <div class="second-nav-item" @click="emitChange($event)" :class="index === third ? 'selected' : ''">
        <span class="text">{{item.name}}</span><img v-if="index!== third" :src="require('@/assets/Icon feather-arrow-down.svg')" alt="">
        <div class="third-nav" v-if="index === third">
            <links-layer v-for="(it, idx) in item.children.data" :item="it" :key="`th${idx}`"/>
        </div>
    </div>
</template>
<script>
import LinksLayer from './LinksLayer'
export default {
    name: 'SecondLayerItem',
    props: ['item', 'index', 'third'],
    methods: {
        emitChange (e) {
            e.stopPropagation()
            if (this.item.children.data.length) {
                this.$emit('thirdChange', this.index)
            } else {
                this.$router.push(`/skills/${this.item.slug}`)
            }
        }
    },
    components: {
        LinksLayer
    }
}
</script>
<style lang="scss" scoped>
    .second-nav-item{
        box-sizing: border-box;
        height: 71px;
        background: #F1FFDD 0% 0% no-repeat padding-box;
        border-bottom: 0.5px solid #00000029;
        opacity: 1;
        &.selected{
            background: #F0ECF8 0% 0% no-repeat padding-box;
            box-shadow: 0px 1px 0px #00000029;
            opacity: 1;
            span{
                padding-left: 0;
            }
            @media screen and(max-width: 768px) {
                background: #F1FFDD 0% 0% no-repeat padding-box;
                span {
                    padding-left: 20px;
                }
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
            clear:both;
            float: right;
            margin-right: 20px;
            margin-top: 30px;
        }
        .third-nav {
            z-index: 99999;
            width: 279px;
            position: absolute;
            right: 279px;
            margin-top: -71px;
            background: #F0ECF8 0% 0% no-repeat padding-box;
            border-radius: 25px 0px 0px 25px;
            opacity: 1;
            padding: 25px;
            @media screen and(max-width: 768px) {
                position: relative;
                margin-top: 0px;
                right: 0;
                border-radius: 0px 0px 0px 0px;
            }
        }
        
    }
</style>