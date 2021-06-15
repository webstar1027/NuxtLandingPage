<template lang="pug">
  .features-section.flex-col.center.text-white.w100
    .columns.is-marginless
      .column.is-one-quarter-desktop.is-full-mobile.is-paddingless
        .flex-col.center
          FeatureItem(v-for="(feature, idx) in featuresLeft" :key="idx" :feature="feature" :ref="feature.ref ? feature.ref : null")
      .column.is-half-desktop.is-hidden-mobile.is-flex.center.animate-on-scroll.fade-in-up.delay-animation
        img.p20(src="@/assets/cn-diagram.svg" alt="")
      .column.is-one-quarter-desktop.is-full-mobile.is-paddingless
        .flex-col.center
          FeatureItem(v-for="(feature, idx) in featuresRight" :key="idx" :feature="feature" :ref="feature.ref ? feature.ref : null")
    .columns.is-marginless
      .column.is-full-mobile.is-paddingless(v-for="(feature, idx) in featuresBottom" :key="idx" :class="idx === 1 ? 'is-one-half-desktop' : 'is-one-quarter-desktop'")
        .flex-col.center
          .is-one-quarter-desktop(v-if="idx === 1" :style="idx === 1 ? 'max-width: 406px' : ''" )
            FeatureItem(:feature="feature" :ref="feature.ref ? feature.ref : null")
          FeatureItem(:feature="feature" :ref="feature.ref ? feature.ref : null" v-if="idx !== 1")
</template>

<script>
import FeatureItem from '@/components/home/FeaturesSection/FeatureItem'
import { mapGetters } from 'vuex'

export default {
  created () {
    this.$root.$on('scrollToAbout', this.scrollTo)
  },
  methods: {
    scrollTo (payload) {
      let el
      if (payload && this.$refs[payload][0]) {
        el = this.$refs[payload][0].$el
        let timeoutId = setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth' });
            clearTimeout(timeoutId)
        }, 300)
      }
    }
  },
  computed: {
    ...mapGetters({
       userCity: 'location/getUserCity',
       userContry: 'location/getUserContry',
       userCurrency: 'location/getUserCurency'
    }),
    featuresLeft() {
      return this.features.slice(0, 2)
    },
    featuresRight() {
      return this.features.slice(2, 4)
    },
    featuresBottom() {
      return this.features.slice(4)
    },
    features() {
      return [
        { title: 'YOUR PERSONAL CTO', hash: '', ref: 'l&p', subtitle: 'Listen Research & UX Planning', description: `Your local ${this.userCity} personal project manager works close to you intending to generate the best ROI (return of investment) to your organisation.`, image: '/img/Group 709.svg' },
        { title: 'VIGOROUS TESTING', hash: 'top', ref: 'tt', subtitle: 'Tasks are given to Top Talent', description: 'Thousands of applicants are tested and rated per each skill. Our experts verify, hand-pick, check the code for developers and also interview to understand about soft skills.', image: '/img/Group 708.svg' },
        { title: 'UK COMPANY', hash: '', ref: 'wtc', subtitle: 'We take care of you', description: `Like at any local ${this.userContry} company there is a dedicated ${this.userCity} based project manager who acts as your personal CTO consulting and managing everything for you.`, image: '/img/Group 704.svg' },
        { title: 'BEST TIME TRACKER', hash: 'buyer', ref: 'fc', subtitle: 'Full Control for you and your CTO', description: 'Everybody at CrewNew uses the most accurate time tracker out there that\'s taking screenshots, measuring keyboard/mouse activity, sites/apps used, etc.', image: '/img/Group 703.svg' },
        { title: 'AUTOMATIC TESTING', hash: 'rated', ref: 'cicda', subtitle: 'CI / CD Automation', description: 'Save time & money and eliminate frustration with strict automated continuous integration (CI) & continuous deployment (CD). Eliminate automatically human mistakes.', image: '/img/Group 707.svg' },
        { title: 'ALL-IN-ONE', hash: 'agency', ref: 'ft', subtitle: 'The Best Tools for Free', description: `All-in-one and built-in team messaging (Flock, Slack, etc), Project Management (Trello, Asana, etc), time tracker, ATS, Cloud, Git, Automations and much more (normally from ${this.userCurrency}100/m/user).`, image: '/img/Group 706.svg' },
        { title: 'BEST OF THE BEST', hash: '', ref: 'tqg', subtitle: 'Top Quality Guaranteed', description: 'At most cases today, we do Progressive Web Apps (PWA) that are better and more affordable but we have also tons of senior hybrid and native app developers.', image: '/img/Group 705.svg' }
      ]
    }
  },
  components: {
    FeatureItem
  }
}
</script>

<style lang="scss" scoped>
.delay-animation {
  // -webkit-animation-delay: 1s;
  // -moz-animation-delay: 1s;
  // animation-delay: 1s;
}
</style>