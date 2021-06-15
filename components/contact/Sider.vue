<template>
    <div class="info-content">
        <article class="info">
            <img src="./../../assets/contact/contactus.svg" alt="" height="379px">
            <h3>{{content.desc}}</h3>
            <h2>{{content.title}}</h2>
            <p>{{content.text}}</p>
            <p class="phones is-hidden-mobile"><a href="tel:+442039849495">+44 (0) 203 984 9495</a> / <a href="tel:+447588699948">+44 (0) 758 869 9948</a></p>
            <p class="phones is-hidden-tablet"><a href="tel:+442039849495">+44 (0) 203 984 9495</a> <br/><a href="tel:+447588699948"> +44 (0) 758 869 9948</a></p>
        </article>
    </div>
</template>
<script>
export default {
    name: 'Sider',
    data () {
        return {
            content: {
                title: 'Get in Touch',
                desc: 'FREE 1HR CONSULTATION',
                text: 'If you’d like to learn more about CrewNew, would like a personal (zero obligation!) overview of how our platforms works and how we are able to offer the best design professionals in the market at our incredibly competitive rates, get in touch!'
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .info-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 44%;
        width: 100%;
        @media screen and (max-width: 1400px) {
            flex-wrap: wrap;
            max-width: 100%;
            flex-basis: 100%;
        }
        article.info{
            max-width: 469px;
            width: 100%;
            margin: 80px 123px 0 auto;
        }
        img{
            display: block;
            margin: 90px auto 70px auto;
        }
        h3 {
            text-align: center;
            font: Bold 14px/16px Gibbs;
            letter-spacing: 2px;
            color: #D84166;
            opacity: 1;
        }
        h2 {
            text-align: center;
            font: 38px/58px Gibbs;
            letter-spacing: 0;
            color: #42375B;
            font-weight: bold;
            opacity: 1;
            padding-top: 20px;
            padding-bottom: 25px;
        }
        p{
            text-align: center;
            font-weight: normal;
            font-size: 14px;
            font-family: Montserrat, sans-serif;
            letter-spacing: 0;
            color: #555555;
            opacity: 1;
            &.phones {
                padding: 86px 0 68px 0;
                text-align: center;
                font-weight: bold;
                font-family: Gibbs;
                font-size: 16px;
                letter-spacing: 2.29px;
                color: #42375B;
                opacity: 1;
            }
        }
        @media screen and (max-width: 1023px) {
            article.info{
                max-width: 100%;
                width: 100%;
                margin: 0;
                text-align: center;
            }
            img{
                display: inline-block;
                margin: 0;
            }
            p {
                padding: 0 30px;
            }
        }

        @media screen and(max-width: 768px) {
            padding-top: 50px;
            img {
                max-width: 176px;
                padding-bottom: 30px;
            }
            h2 {
                font-size: 1.9em !important;
                line-height: 30px;
                font-weight: 800;
            }
            h3 {
                font-size: 0.9em !important;
            }
            .p {
                font-size: 1em !important;
                font-weight: 500 !important;
            }
        }
    }
</style>