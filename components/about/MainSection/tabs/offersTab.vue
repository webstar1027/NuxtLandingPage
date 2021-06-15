<template>
    <div>
        <section-container :heading="{title: 'offers &', desc: 'Pricing'}" noPaddingMobile>
            <div class="table-wrapper">
                <table id="myTable" cellspacing="0">
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <tbody>
                        <tr>
                            <th class="table-info">Choose a plan</th>
                            <td class="table-header-cell">
                                <div class="top-hover"></div>
                                <p class="red-text">free</p>
                                <p class="cost-info"><span>{{userCurrency}}0</span>/Month</p>
                                <button @click="$root.$emit('signupOpen')" class="cost-btn">get started</button>
                            </td>
                            <td class="table-header-cell">
                                <div class="top-hover"></div>
                                <p class="red-text">premium</p>
                                <p class="cost-info"><span>{{userCurrency}}19</span>/Month</p>
                                <button @click="$root.$emit('signupOpen')" class="cost-btn">get started</button>
                            </td>
                            <td class="table-header-cell">
                                <div class="top-hover"></div>
                                <p class="red-text">business</p>
                                <p class="cost-info"><span>{{userCurrency}}150</span>/Month</p>
                                <button @click="$root.$emit('signupOpen')" class="cost-btn">get started</button>
                            </td>
                            <td class="table-header-cell">
                                <div class="top-hover"></div>
                                <p class="red-text">enterprise</p>
                                <p class="cost-info"><span>{{userCurrency}}275</span>/Month</p>
                                <button @click="$root.$emit('signupOpen')" class="cost-btn">get started</button>
                            </td>
                        </tr>
                        <tr>
                            <th>Free 1 hour consultation, and support with job description, selecting the right technology/freelancer, wireframing etc</th>
                            <td>
                                <img src="@/assets/about/green-check.svg"/>
                            </td>
                            <td>
                                <img src="@/assets/about/green-check.svg"/>
                            </td>
                            <td>
                                <img src="@/assets/about/green-check.svg"/>
                            </td>
                            <td>
                                <img src="@/assets/about/green-check.svg"/>
                            </td>
                        </tr>
                        <tr>
                            <th>Proposals from hand selected freelancers</th>
                            <td>
                                <img src="@/assets/about/green-check.svg"/>
                            </td>
                            <td>
                                <img src="@/assets/about/green-check.svg"/>
                            </td>
                            <td>
                                <img src="@/assets/about/green-check.svg"/>
                            </td>
                            <td>
                                <img src="@/assets/about/green-check.svg"/>
                            </td>
                        </tr>
                        <tr>
                            <th>Built-in ATS / PM, apps and tools</th>
                            <td>
                                <img src="@/assets/about/green-check.svg"/>
                            </td>
                            <td>
                                <img src="@/assets/about/green-check.svg"/>
                            </td>
                            <td>
                                <img src="@/assets/about/green-check.svg"/>
                            </td>
                            <td>
                                <img src="@/assets/about/green-check.svg"/>
                            </td>
                        </tr>
                        <tr>
                            <th>Buyer protection, warranty service and escrow system</th>
                            <td>
                                <img src="@/assets/about/green-check.svg"/>
                            </td>
                            <td>
                                <img src="@/assets/about/green-check.svg"/>
                            </td>
                            <td>
                                <img src="@/assets/about/green-check.svg"/>
                            </td>
                            <td>
                                <img src="@/assets/about/green-check.svg"/>
                            </td>
                        </tr>
                        <tr>
                            <th>{{userCity}} Project Manager & Hiring Expert</th>
                            <td></td>
                            <td>
                                <img src="@/assets/about/green-check.svg"/>
                            </td>
                            <td>
                                <img src="@/assets/about/green-check.svg"/>
                            </td>
                            <td>
                                <img src="@/assets/about/green-check.svg"/>
                            </td>
                        </tr>
                        <tr>
                            <th>Advanced collaboration, project management service, automatic & ATS</th>
                            <td></td>
                            <td></td>
                            <td>
                                <img src="@/assets/about/green-check.svg"/>
                            </td>
                            <td>
                                <img src="@/assets/about/green-check.svg"/>
                            </td>
                        </tr>
                        <tr>
                            <th>Ability to hire full-time remote or onsite developers</th>
                            <td></td>
                            <td></td>
                            <td>
                                <img src="@/assets/about/green-check.svg"/>
                            </td>
                            <td>
                                <img src="@/assets/about/green-check.svg"/>
                            </td>
                        </tr>
                        <tr>
                            <th>Access to thousands of candidates in our top ATS from 50+ channels</th>
                            <td></td>
                            <td></td>
                            <td>
                                <img src="@/assets/about/green-check.svg"/>
                            </td>
                            <td>
                                <img src="@/assets/about/green-check.svg"/>
                            </td>
                        </tr>
                        <tr>
                            <th>White label tools and software</th>
                            <td></td>
                            <td></td>
                            <td>
                                <img src="@/assets/about/green-check.svg"/>
                            </td>
                            <td>
                                <img src="@/assets/about/green-check.svg"/>
                            </td>
                        </tr>
                        <tr>
                            <th>All software & tools hosted in your servers and customised to meet your needs</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <img src="@/assets/about/green-check.svg"/>
                            </td>
                        </tr>
                        <tr>
                            <th>All software & tools hosted in your servers and customised to meet your needs</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <img src="@/assets/about/green-check.svg"/>
                            </td>
                        </tr>
                        <tr>
                            <th></th>
                            <td class="table-bottom-cell">
                                <div class="bottom-hover"></div>
                            </td>
                            <td class="table-bottom-cell">
                                <div class="bottom-hover"></div>
                            </td>
                            <td class="table-bottom-cell">
                                <div class="bottom-hover"></div>
                            </td>
                            <td class="table-bottom-cell">
                                <div class="bottom-hover"></div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="mobile-wrapper is-hidden-desktop">
                <ul class="offers-mobile-tabs">
                    <li v-for="item in mobileTabs" @click="activeOfferTab = item.name" :class="{ active: item.name === activeOfferTab }">
                        <span></span>
                    </li>
                </ul>
                <div v-show="activeOfferTab === 'free'">
                    <p class="red-text">free</p>
                    <p class="price-text"><span>{{userCurrency}}0</span>/Month</p>
                    <button class="offer-mobile-btn">Get started</button>
                    <ul class="offer-packet">
                        <li>
                            <p class="regular-text">Free 1 hour consultation, and support with job description, selecting the right technology/freelancer, wireframing etc</p>
                        </li>
                        <li>
                            <p class="regular-text">Proposals from hand selected freelancers</p>
                        </li>
                        <li>
                            <p class="regular-text">Built-in ATS / PM, apps and tools</p>
                        </li>
                        <li>
                            <p class="regular-text">Buyer protection, warranty service and escrow system</p>
                        </li>
                    </ul>
                </div>
                <div v-show="activeOfferTab === 'premium'">
                    <p class="red-text">premium</p>
                    <p class="price-text"><span>{{userCurrency}}19</span>/Month</p>
                    <button class="offer-mobile-btn">Get started</button>
                    <ul class="offer-packet">
                        <li>
                            <p class="regular-text">Free 1 hour consultation, and support with job description, selecting the right technology/freelancer, wireframing etc</p>
                        </li>
                        <li>
                            <p class="regular-text">Proposals from hand selected freelancers</p>
                        </li>
                        <li>
                            <p class="regular-text">Built-in ATS / PM, apps and tools</p>
                        </li>
                        <li>
                            <p class="regular-text">Buyer protection, warranty service and escrow system</p>
                        </li>
                        <li>
                            <p class="regular-text">{{userCity}} Project Manager & Hiring Expert</p>
                        </li>
                    </ul>
                </div>
                <div v-show="activeOfferTab === 'business'">
                    <p class="red-text">business</p>
                    <p class="price-text"><span>{{userCurrency}}150</span>/Month</p>
                    <button class="offer-mobile-btn">Get started</button>
                    <ul class="offer-packet">
                        <li>
                            <p class="regular-text">Free 1 hour consultation, and support with job description, selecting the right technology/freelancer, wireframing etc</p>
                        </li>
                        <li>
                            <p class="regular-text">Proposals from hand selected freelancers</p>
                        </li>
                        <li>
                            <p class="regular-text">Built-in ATS / PM, apps and tools</p>
                        </li>
                        <li>
                            <p class="regular-text">Buyer protection, warranty service and escrow system</p>
                        </li>
                        <li>
                            <p class="regular-text">{{userCity}} Project Manager & Hiring Expert</p>
                        </li>
                        <li>
                            <p class="regular-text">Advanced collaboration, project management service, automatic & ATS</p>
                        </li>
                        <li>
                            <p class="regular-text">Ability to hire full-time remote or onsite developers</p>
                        </li>
                        <li>
                            <p class="regular-text">Access to thousands of candidates in our top ATS from 50+ channels</p>
                        </li>
                        <li>
                            <p class="regular-text">White label tools and software</p>
                        </li>
                    </ul>
                </div>
                <div v-show="activeOfferTab === 'enterprise'">
                    <p class="red-text">enterprise</p>
                    <p class="price-text"><span>{{userCurrency}}275</span>/Month</p>
                    <button class="offer-mobile-btn">Get started</button>
                    <ul class="offer-packet">
                        <li>
                            <p class="regular-text">Free 1 hour consultation, and support with job description, selecting the right technology/freelancer, wireframing etc</p>
                        </li>
                        <li>
                            <p class="regular-text">Proposals from hand selected freelancers</p>
                        </li>
                        <li>
                            <p class="regular-text">Built-in ATS / PM, apps and tools</p>
                        </li>
                        <li>
                            <p class="regular-text">Buyer protection, warranty service and escrow system</p>
                        </li>
                        <li>
                            <p class="regular-text">{{userCity}} Project Manager & Hiring Expert</p>
                        </li>
                        <li>
                            <p class="regular-text">Advanced collaboration, project management service, automatic & ATS</p>
                        </li>
                        <li>
                            <p class="regular-text">Ability to hire full-time remote or onsite developers</p>
                        </li>
                        <li>
                            <p class="regular-text">Access to thousands of candidates in our top ATS from 50+ channels</p>
                        </li>
                        <li>
                            <p class="regular-text">White label tools and software</p>
                        </li>
                        <li>
                            <p class="regular-text">All software & tools hosted in your servers and customised to meet your needs</p>
                        </li>
                        <li>
                            <p class="regular-text">Onsite {{userCity}} experienced project managers and lead programmers, working from your premises</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="offer-bottom">
                <div class="faild-wrapper">
                    <p class="higlight-text">Competitive pricing & offers</p>
                    <p class="red-text">Our goal is not only to offer the best curated talent pool, functionality and apps, but also to provide a transparent and extremely competitive pricing model.</p>
                    <p class="regular-text">Sign up before {{endingCampaignDate.day}} {{endingCampaignDate.month}} {{endingCampaignDate.year}} and take advantage of our Premium Package FREE for 3 years! If you refer us to your friends or colleagues, as our way of showing our appreciation you will receive benefits up to a lifetime free Premium Package and reduced 1% payment processing fees. If you are familiar with other freelancer sites, you will know how this stacks up against the standard 3-10% fee basis, and subscription costs starting at {{userCurrency}}40/month!</p>
                </div>
                <div class="card-box">
                    <p class="higlight-text">Subscriptions starting at</p>
                    <p class="price-text"><span>{{userCurrency}}40</span> / Month</p>
                    <button @click="$root.$emit('signupOpen')">sign up</button>
                </div>
            </div>
        </section-container>
    </div>
</template>

<script>
    import SectionContainer from '@/components/containers/Section/Section'
    import { mapGetters } from 'vuex'
    import endingCampaign from '@/mixins/endingCampaign'

    export default {
        name: "offersTab",
        mixins: [endingCampaign],
        components: {
            SectionContainer
        },
        data () {
            return {
                mobileTabs: [
                    { name: 'free' },
                    { name: 'premium' },
                    { name: 'business' },
                    { name: 'enterprise' }
                ],
                activeOfferTab: 'free'
            }
        },
        mounted () {
            const myTable = document.getElementById("myTable");
            const cols = myTable.querySelectorAll("col");
            const tdTop = myTable.getElementsByClassName("top-hover");
            const tdBottom = myTable.getElementsByClassName("bottom-hover");
            const price = myTable.getElementsByClassName("cost-info");
            const tableTd = myTable.querySelectorAll("td");
            const events = {
                mouseover: e => {
                    const t = e.target.closest("td");
                    if (t && t.cellIndex > 0) {
                        const cellIndex = t.cellIndex;
                        for (let i = 0, n = cols.length; i < n; i++) {
                            cols[i].classList[i === cellIndex ? "add" : "remove"]("hovered");
                            if (i < n-1) {
                                tdTop[i].classList[i === cellIndex - 1 ? "add" : "remove"]("hover-up-down");
                                tdBottom[i].classList[i === cellIndex - 1 ? "add" : "remove"]("hover-up-down");
                                price[i].classList[i === cellIndex - 1 ? "add" : "remove"]("white-text");
                                for (let j = i; j < 52; j+=4) {
                                    tableTd[j].classList[i === cellIndex - 1 ? "add" : "remove"]("border-dark-color");
                                }
                            }
                        }
                    }
                },
                mouseout: e => {
                    const t = e.target;
                    if (t.nodeName === "TD" && !t.contains(e.relatedTarget) && t.cellIndex > 0) {
                        cols[t.cellIndex].classList.remove("hovered");
                        tdTop[t.cellIndex-1].classList.remove("hover-up-down");
                        tdBottom[t.cellIndex-1].classList.remove("hover-up-down");
                        price[t.cellIndex-1].classList.remove("white-text");
                        for (let j = t.cellIndex-1; j < 52; j+=4) {
                            tableTd[j].classList.remove("border-dark-color");
                        }
                    }
                }
            };
            for (let event in events) {
                myTable.addEventListener(event, events[event]);
            }
        },
        computed: {
            ...mapGetters({
                userCity: 'location/getUserCity',
                userCurrency: 'location/getUserCurency'
            }),
        }
    }
</script>

<style lang="scss" scoped>
    .hovered {
        background-color: #382A57;
    }
    .table-wrapper {
        border: 1px solid #EAEEE4;
        border-radius: 25px;
        margin-bottom: 100px;
        @media screen and (max-width: 1023px) {
            display: none;
        }
    }
    table {
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 20px 50px 50px #42375B12;
        /*border: 1px solid #EAEEE4;*/
        border-radius: 25px;
        opacity: 1;
        tr:nth-child(even) th {
            background-color: #F1F8E7;
        }
        th {
            padding: 20px 40px;
            text-align: left;
            font: Normal 14px/19px Montserrat, sans-serif;
            letter-spacing: 0;
            color: #42375B;
            opacity: 1;
            border: 1px solid #EAEEE4;
        }
        td {
            text-align: center;
            vertical-align: middle;
            border: 1px solid #EAEEE4;
            &.border-dark-color {
                border-color: #382A57;
            }
        }
        .table-info {
            padding: 20px 40px;
            text-align: left;
            vertical-align: middle;
            font: Lighter 41px/45px Gibbs;
            letter-spacing: 0;
            color: #42375B;
            text-transform: capitalize;
            opacity: 1;
        }
        .table-header-cell {
            position: relative;
            padding: 20px 20px;
            min-width: 170px;
            height: 150px;
            vertical-align: super;
            .red-text {
                margin-bottom: 15px;
                text-align: left;
                font: Bold 12px/16px Gibbs;
                letter-spacing: 2px;
                color: #D84166;
                text-transform: uppercase;
                opacity: 1;
            }
            .cost-info {
                text-align: left;
                font: Normal 15px/20px Gibbs;
                letter-spacing: 0;
                color: #42375B;
                text-transform: capitalize;
                &.white-text {
                    color: #ffffff;
                }

                span {
                    font: Bold 29px/25px Gibbs;
                }
            }
            .cost-btn {
                position: absolute;
                bottom: 20px;
                left: 20px;
                padding: 10px 20px;
                background: #00D857 0% 0% no-repeat padding-box;
                text-align: center;
                font: Bold 12px/15px Montserrat, sans-serif;
                color: #FFFFFF;
                text-transform: uppercase;
                border: none;
                cursor: pointer;
                transition: 500ms;
                &:hover {
                    padding: 10px 30px;
                    left: 10px;
                }
            }
            .top-hover {
                position: absolute;
                top: -20px;
                left: 0;
                height: 20px;
                width: 169px;
                display: none;
                background-color: #382A57;
                border-top-left-radius: 25px;
                border-top-right-radius: 25px;
            }
        }
        .table-bottom-cell .bottom-hover.hover-up-down,
        .table-header-cell .top-hover.hover-up-down {
            display: block;
        }
        .table-bottom-cell {
            position: relative;
            .bottom-hover {
                position: absolute;
                bottom: -20px;
                left: 0;
                height: 20px;
                width: 169px;
                display: none;
                background-color: #382A57;
                border-bottom-left-radius: 25px;
                border-bottom-right-radius: 25px;
            }
        }
    }
    table tr th {
        border-left: none;
    }
    table tr td:last-child {
        border-right: none;
    }
    table tr:last-child td {
        border-bottom: none;
    }
    table tr:first-child td {
        border-top: none;
    }

    table tr:first-child th:first-child,
    table tr:first-child td:last-child,
    table tr:last-child th:first-child,
    table tr:last-child td:last-child {
        border: none;
    }

    .offer-bottom {
        display: flex;
        flex-direction: row;
    }
    .card-box {
        margin: 40px;
        padding: 30px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 20px 50px 50px #42375B12;
        border: 1px solid #F5F4F4;
        border-radius: 25px;
        opacity: 1;
        text-align: center;
        min-width: 350px;
        transition: 500ms;
        button {
            padding: 10px 20px;
            background: #00D857 0% 0% no-repeat padding-box;
            font: Bold 14px/17px Montserrat, sans-serif;
            letter-spacing: 0.4px;
            color: #FFFFFF;
            text-transform: uppercase;
            border: none;
            cursor: pointer;
        }
        &:hover {
            margin: 10px;
            padding: 60px;
            min-width: 410px;
        }
    }
    .price-text {
        letter-spacing: 0;
        color: #42375B;
        text-transform: capitalize;
        font: Normal 35px/25px Gibbs;
        margin: 40px 0;
        span {
            font: Bold 75px/25px Gibbs;
        }
    }

    @media screen and (max-width: 1023px) {
        .offer-bottom {
            flex-direction: column;
        }
        .card-box {
            text-align: left;
            margin: 0;
            padding: 20px;
            border-color: #D5D5D5;
            min-width: auto;
            &:hover {
                margin: 0;
                padding: 20px;
                min-width: auto;
            }
        }
        .price-text {
            font-size: 27px;
            margin: 30px 0;
            span {
                font-size: 50px;
            }
        }
    }
    .higlight-text {
        margin-bottom: 30px;
        font: Bold 24px/40px Gibbs;
        letter-spacing: 0;
        color: #382A57;
        opacity: 1;
        text-align: left;
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
        text-align: left;
    }
    .regular-text {
        font: Normal 14px/30px Montserrat, sans-serif;
        letter-spacing: 0;
        color: #42375B;
        opacity: 1;
        margin: 20px 0;
        text-align: left;
        
    }
    .mobile-wrapper {
        border: 1px solid #D5D5D5;
        padding: 20px 15px;
        margin-bottom: 40px;
        text-align: left;
        .offers-mobile-tabs {
            text-align: center;
            margin: 30px 0;
            li {
                padding: 10px;
                display: inline-block;
                line-height: 0;
                cursor: pointer;
                span {
                    display: inline-block;
                    height: 12px;
                    width: 12px;
                    border: 1px solid #42375B;
                    border-radius: 100%;
                    background-color: #42375B;
                    transition: 500ms;
                }
                &.active span {
                    background-color: #F1F8E7;
                    border-color: #D5D5D5;
                }
            }
        }
        .offer-mobile-btn {
            width: 100%;
            text-transform: uppercase;
            background-color: #00d857;
            border: none;
            cursor: pointer;
            color: #ffffff;
            padding: 15px 0;
            font: Bold 14px/17px Montserrat, sans-serif;
        }
        .offer-packet {
            margin-top: 30px;
            li {
                position: relative;
                padding: 10px 10px 10px 60px;
                .regular-text {
                    font-weight: 600;
                    line-height: 20px;
                }
                &:nth-child(odd) {
                    background-color: #F1F8E7;
                }
                &::before {
                    position: absolute;
                    content: url("../../../../assets/about/green-check.svg");
                    top: 38%;
                    left: 20px;
                }
            }
        }
        
    }
</style>