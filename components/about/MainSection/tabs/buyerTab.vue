<template>
    <div>
        <section-container :heading="{title: 'buyer', desc: 'Protection'}" noPaddingMobile>
            <div class="section-wrapper">
                <section>
                    <div class="text-center">
                        <img src="@/assets/about/Group 954.svg"/>
                    </div>
                    <div class="wrapper-articles is-hidden-desktop">
                        <p class="higlight-text bcg-img bcg-content-1">Delivering precisely the product or service you require, and guaranteeing your satisfaction is our crews’ top priority.</p>
                        <p class="red-text">Funds are held in an escrow system until a project is completed and the quality verified.</p>
                        <p class="regular-text">In addition, we provide a warranty against all CrewNew work, which we will always honour even if the freelancer has since moved on. CrewNew can always provide quality candidates to complete your assignments, and we pride ourselves on offering clients an unrivalled level of security and protection.</p>
                        <p class="regular-text">CrewNew guarantees that you will receive exactly the product you have specified. We only appoint freelancers who have passed our rigorous verification process, so have an extremely low level of disputes (in fact, they’re unheard of!). However, to ensure this standard remains at a uniquely high level, we provide a no quibble guarantee so you can rest assured we are always here to work with you on fulfilling your requirements.</p>
                    </div>
                    <div class="wrapper-articles">
                        <p class="higlight-text bcg-img bcg-content-2">How can you find the very best freelance web developers? CrewNew only selects freelancers and professionals of the highest calibre.</p>
                        <p class="red-text">The issues we have identified with freelance platforms include these scenarios (some are probably familiar!):</p>
                        <p class="regular-text">Customers provide a vague job description, or low ball the budget; this never attracts any skilful freelancers or serious offers.</p>
                        <p class="regular-text">Dozens of contractors provide an equally vague proposal, as they have no way of knowing exactly what work is required. Due to extensive competition, great freelancers end up proposing low budgets, with the low standards associated with them. The freelance community is often inundated with incredibly low offers from contractors which eliminates those with the correct skills and experience from applying. Often these very low bids are from freelancers with no intention of fulfilling the project, or who will produce low quality work which is not fit for purpose.</p>
                        <p class="regular-text">The customer is left with the task of trying to filter through their raft of proposals to try and find the ones which are genuine. For a client who is not an IT or HR expert this is a daunting task, taking a great deal of time. They may end up appointing somebody who cannot complete their project, but if they don’t have the experience to filter through the proposals accurately, they might not find this out until too late.</p>
                        <p class="regular-text">Money is paid into escrow and the job begins; frequent problems include late delivery and no or very little communication during the project timeframe. We expect there to be daily communication throughout production, which is essential to forecasting any bugs or mistakes, right from the early stages – nobody’s time is wasted, and the customer knows exactly how their work is progressing.</p>
                    </div>
                    <div class="wrapper-articles is-hidden-desktop">
                        <p class="higlight-text bcg-img bcg-content-3">This system eliminates the risk of a freelancer disappearing in the middle of a project and removes the time and stress of trying to find a new developer to work with. With CrewNew, we work hard to make sure you will never lose time or money.</p>
                        <p class="red-text">This continuous cycle of poor quality and lack of customer service is exactly what drove us to create CrewNew.</p>
                        <p class="regular-text">We know there are incredible freelancers out there and want to bring back the credibility and power of outsourcing to provide outstanding service alongside highly competitive rates.</p>
                        <p class="regular-text">CrewNew works with the ethos of being something in between a freelance contractor platform and a full-stack online agency; offering the very best of both worlds!</p>
                    </div>
                </section>
                <section class="right-section is-hidden-mobile">
                    <div class="wrapper-articles">
                        <p class="higlight-text bcg-img bcg-content-1">Delivering precisely the product or service you require, and guaranteeing your satisfaction is our crews’ top priority.</p>
                        <p class="red-text">Funds are held in an escrow system until a project is completed and the quality verified.</p>
                        <p class="regular-text">In addition, we provide a warranty against all CrewNew work, which we will always honour even if the freelancer has since moved on. CrewNew can always provide quality candidates to complete your assignments, and we pride ourselves on offering clients an unrivalled level of security and protection.</p>
                        <p class="regular-text">CrewNew guarantees that you will receive exactly the product you have specified. We only appoint freelancers who have passed our rigorous verification process, so have an extremely low level of disputes (in fact, they’re unheard of!). However, to ensure this standard remains at a uniquely high level, we provide a no quibble guarantee so you can rest assured we are always here to work with you on fulfilling your requirements.</p>
                    </div>
                    <div class="wrapper-articles">
                        <p class="higlight-text bcg-img bcg-content-3">This system eliminates the risk of a freelancer disappearing in the middle of a project and removes the time and stress of trying to find a new developer to work with. With CrewNew, we work hard to make sure you will never lose time or money.</p>
                        <p class="red-text">This continuous cycle of poor quality and lack of customer service is exactly what drove us to create CrewNew.</p>
                        <p class="regular-text">We know there are incredible freelancers out there and want to bring back the credibility and power of outsourcing to provide outstanding service alongside highly competitive rates.</p>
                        <p class="regular-text">CrewNew works with the ethos of being something in between a freelance contractor platform and a full-stack online agency; offering the very best of both worlds!</p>
                    </div>
                </section>
            </div>
        </section-container>
    </div>
</template>

<script>
    import SectionContainer from '@/components/containers/Section/Section'
    export default {
        name: "buyerTab",
        components: {
            SectionContainer
        }
    }
</script>

<style lang="scss" scoped>
    .section-wrapper {
        display: flex;
        flex-direction: row;
        section {
            flex-grow: 1;
            text-align: left;
            width: 50%;
            padding: 0 20px;
        }
        @media screen and (max-width: 1023px) {
            flex-direction: column-reverse;
            section {
                width: 100%;
            }
            .right-section {
                display: none;
            }
        }
        @media screen and (max-width: 768px) {
            section {
                padding: 0;
            }
        }
    }
    p {
        margin: 20px 0;
    }
    .higlight-text {
        font: Bold 24px/40px Gibbs;
        letter-spacing: 0;
        color: #382A57;
        opacity: 1;
        @media screen and(max-width: 768px) {
            font-size: 1.3em;
            line-height: 25px;
        }
    }
    .red-text {
        font: Bold 13px/30px Montserrat, sans-serif;
        letter-spacing: 0;
        color: #D84166;
        text-transform: uppercase;
        position: relative;
        z-index: 0;
    }
    .regular-text {
        font: Normal 14px/30px Montserrat, sans-serif;
        letter-spacing: 0;
        color: #42375B;
        opacity: 1;
         
    }
    .bcg-img {
        position: relative;
        z-index: 0;
    }

    .bcg-img:before {
        position: absolute;
        top: 0;
        left: -40px;
        z-index: -1;
        font: Bold 200px/114px Gibbs;
        letter-spacing: 0;
        color: #F1F8E7;
        opacity: 1;
    }
    .bcg-content-1:before {
        content: "1.";
    }
    .bcg-content-2:before {
        content: "2.";
    }
    .bcg-content-3:before {
        content: "3.";
    }
    .wrapper-articles {
        margin-bottom: 50px;
    }
</style>