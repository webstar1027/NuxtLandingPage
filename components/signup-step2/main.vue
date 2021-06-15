<template>
    <div class="main-wrapper">
        <info-page/>
        <form-page/>
    </div>
</template>

<script>
    import InfoPage from '@/components/signup-step2/sections/infoPage'
    import FormPage from '@/components/signup-step2/sections/formPage'
    export default {
        name: "main-signup-step2",
        components: {
            InfoPage,
            FormPage
        }
    }
</script>

<style lang="scss" scoped>
    .main-wrapper {
        display: flex;
        flex-direction: row;
        height: 100vh;
        @media screen and (max-width: 1070px) {
            flex-direction: column;
        }
    }
</style>