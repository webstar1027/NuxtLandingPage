<template lang="pug">
  .what-we-do.flex-row.center
    .flex-row.flex-wrap.space-around.columns.is-marginless
      .column.is-full-mobile.is-paddingless(v-for="(section, idx) in sectionedCards" :key="idx")
        .flex-col
          we-do(v-for="(card, idxCard) in section" :key="idxCard" :card="card")
</template>

<script>
import WeDo from '@/components/home/WhatWeDo/WeDo'

export default {
  data: () => ({
    cards: [
      { id: 1, title: 'Web Apps', img: '/img/undraw_web_devices_ad58 (1).svg', description: 'Using most modern tech we create Single Page Applications (SPA) and websites. From small template-driven web to enterprise solutions.', url: '/skills/web-development' },
      { id: 2, title: 'Mobile Apps', img: '/img/undraw_post_online_dkuk.svg', description: 'At most cases today, we do Progressive Web Apps (PWA) that are better and more affordable but we have also tons of senior hybrid and native app developers.', url: '/skills/mobile-development ' },
      { id: 3, title: 'Software', img: '/img/undraw_dev_focus_b9xo.svg', description: 'Modern API based software development in most of the programming languages & frameworks. Also, implementation and adoption of ready-made soft', url: '/skills/development-software' },
      { id: 4, title: 'UI / UX', img: '/img/undraw_design_data_khdb (1).svg', description: 'Website design, art direction, user experience (UX) planning, app user interface (UI) design, product design, animations, photo, video, etc.', url: '/skills/ux-ui-design-photo-video' },
      { id: 5, title: 'Marketing', img: '/img/Group 250.svg', description: 'Marketing strategy, campaigns creation & management. From internet marketing to get you into the first position in Google to cold calling, door2door and more…', url: '/skills/marketing-advertising-sales' },
      { id: 6, title: 'Everything Else', img: '/img/undraw_grades_j6jn.svg', description: 'Whatever you need to be done - you’ll find the professional great at exactly in that skill. From robotic to copywriting. From academics to accountants…', url: '/skills/skills-services' }
    ]
  }),
  computed: {
    sectionedCards() {
      const count = this.cards.length
      const sectionsCount = Math.ceil(count / 2)

      const sections = []
      for (let i=0; i<sectionsCount; i++) {
        const topEl = this.cards[i]
        const bottomEl = this.cards[i + 3]

        const section = []
        if (topEl) section.push(topEl)
        if (bottomEl) section.push(bottomEl)

        sections.push(section)
      }
      return sections
    }
  },
  components: {
    WeDo
  }
}
</script>

<style lang="scss" scoped>
.what-we-do {
  @media screen and(max-width: 1400px) and(min-width: 768px) {
    margin-left: -50px;
    margin-right: -50px;
  }
}
</style>