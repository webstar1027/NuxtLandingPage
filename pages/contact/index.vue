<template>
    <div>
        <section-container :overlapInside="true" :bottomShadow="true" :noPadding="true" noPaddingMobile :row="true" >
            <div class="form-wrapper">
                <sider/>
                <contact-form/>
            </div>
        </section-container>
        <section-container noPaddingMobile :noPadding="true" :top="true" :bottom="true" :marginTop="true" class="is-hidden-mobile">
            <maps/>
        </section-container>
        <section-container :noPadding="true" :offsetAbsolute="true">
            <subscribe-card slot="absolute"/>
        </section-container>
    </div>
</template>
<script>
import SectionContainer from '@/components/containers/Section/Section'
import Maps from '@/components/home/Maps/Maps'
import Sider from '@/components/contact/Sider'
import ContactForm from '@/components/contact/ContactForm'
import SubscribeCard from '@/components/home/SubscribeCard/SubscribeCard'

export default {
    name: 'contact-page',
    components: {
        SectionContainer, 
        Maps,
        Sider,
        ContactForm,
        SubscribeCard
    }
}
</script>

<style lang="scss" scoped>
    .form-wrapper {
        display: flex;
        flex-direction: row;
        @media screen and (max-width: 1023px) {
            flex-direction: column;
        }
    }
</style>