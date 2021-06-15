<template>
    <div class="skill" :style="`top: ${top}px; left: ${left}%; z-index: ${index}`">
        <slot :title="title"></slot>
    </div>
</template>
<script>
export default {
    name: 'SingleSkill',
    props: {
        top: Number,
        left: Number,
        img: String,
        title: String,
        name: String,
        index: Number,
        width: Number
    }
}
</script>
<style lang="scss" scoped>
    .skill {
        position: absolute;
        p{
            position: absolute;
            top: 72px;
            left: 75px;
            line-height: 100%;
            vertical-align: middle;
            text-align: center;
            margin: 0 auto;
            color: #fff;
            font-size: 16px;
            font-weight: bold;
            max-width: 100px;
        }
    }
</style>