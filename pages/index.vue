<template lang="pug">
  .home-page.flex-col
    section-container(smaller dark top noBorderBottom homepage)
      top-section
    section-container(smaller basis="dark" sidePadding="100" noPaddingMobile noBorderBottom :heading="{title: 'We provide freelance solutions', desc: 'From Design to App Development'}")
      pills(slot="absolute" :pills="pillsData")
      what-we-do
      .p10-ver
      .is-hidden-mobile.p40-ver
    section-container(smaller basis="light" sidePadding="50" dark logo :heading="{title: 'Neat and tidy!', desc: 'Everything in one place'}")
      features-section
    section-container(smaller basis="light" light noBorderBottom :heading="{title: 'We provide top quality talent, which is why', desc: 'These top pros just got hired!'}")
      pros-section(:pros="topPros")
      .p50-ver
      social-campaign-desktop.is-hidden-mobile
      social-campaign-mobile.is-hidden-desktop
      .p30-ver
    section-container(smaller basis="light" logo noBorderBottom :heading="{title: 'We bring you the', desc: 'Latest from our Blog'}")
      blog-section
    section-container(smaller overlapInside top bottomShadow sidePadding="50" :heading="{title: 'We`ve built trust with these', desc: 'Major Customers'}")
      customers-section
    section-container(overlap noPaddingMobile top bottom sidePadding="0")
      maps
    section-container(noPadding offsetAbsolute)
      subscribe-card(slot="absolute")
</template>

<script>
import SectionContainer from '@/components/containers/Section/Section'
import TopSection from '@/components/home/TopSection/TopSection'
import WhatWeDo from '@/components/home/WhatWeDo/WhatWeDo'
import FeaturesSection from '@/components/home/FeaturesSection/FeaturesSection'
import ProsSection from '@/components/home/ProsSection/ProsSection'
import BlogSection from '@/components/home/BlogSection/BlogSection'
import SocialCampaignDesktop from '@/components/home/SocialCampaign/SocialCampaignDesktop'
import SocialCampaignMobile from '@/components/home/SocialCampaign/SocialCampaignMobile'
import CustomersSection from '@/components/home/CustomersSection/CustomersSection'

import Maps from '@/components/home/Maps/Maps'
import SubscribeCard from '@/components/home/SubscribeCard/SubscribeCard'

import Pills from '@/components/common/Pills/Pills'
import testQuery from '@/apollo/test.gql'
import { getTopPros } from '@/services/api'

export default {
  scrollToTop: true,
  created() {
    getTopPros()
      .then((topPros) => {
        this.topPros = topPros.data
      })
  },
  apollo: {
    contents: {
      query: testQuery,
    }
  },
  data: () => ({
    pillsData: [
      { title: 'We take care' , title2: 'of you', ref: 'wtc', img: '/img/Component 11 – 1.svg' },
      { title: 'Listening &', title2: 'planning', ref: 'l&p', img: '/img/Component 10 – 1.svg' },
      { title: 'Top', title2: 'talent', ref: 'tt', img: '/img/top-talent.svg' },
      { title: 'Full', title2: 'control', ref: 'fc', img: '/img/full-controll.svg' },
      { title: 'CI / CD ', title2: 'automation', ref: 'cicda', img: '/img/ci-cd.svg' },
      { title: 'Free', title2: 'tools', ref: 'ft', img: '/img/free-tools.svg' },
      { title: 'Top quality', title2: 'guarantee', ref: 'tqg', img: '/img/top-qual.svg' },
    ],
    topPros: []
  }),
  components: {
    SectionContainer,
    TopSection,
    WhatWeDo,
    FeaturesSection,
    ProsSection,
    BlogSection,
    SocialCampaignDesktop,
    SocialCampaignMobile,
    CustomersSection,
    Maps,
    Pills,
    SubscribeCard
  }
}
</script>
