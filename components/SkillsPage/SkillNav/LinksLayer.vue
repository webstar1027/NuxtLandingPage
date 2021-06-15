<template>
    <div class="single-link" @click="redirectTo($event)" v-click-outside="closeEvent">
        <span>{{item.name}}</span>
    </div>
</template>
<script>
export default {
    name: 'LinksLayer',
    props: ['item'],
    methods: {
        redirectTo (e) {
            // e.stopPropagation();
            this.$router.push(`/skills/${this.item.slug}`)
        },
        closeEvent (e) {
            this.$nuxt.$emit('close-third')
        }
    }
}
</script>
<style lang="scss" scoped>
 .single-link{
    span{
        display: inline-block;
        height: 43px;
        background: #F0ECF8 0% 0% no-repeat padding-box;
        opacity: 1;
        line-height: 43px;
        vertical-align: middle;
    }
    
 }
    
</style>