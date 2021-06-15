<template lang="pug">
  .pros-section.flex-col.center
    .columns.is-multiline.space-around
      .column.is-one-fifth-desktop.is-full-mobile(v-for="(post, idx) in posts" :key="idx")
        BlogItem(:blogItem="post")
</template>

<script>
import BlogItem from '@/components/home/BlogSection/BlogItem'

const posts = [
  { title: 'Progressive Web Apps - the future of the apps', day: '22', month: 'Feb', description: 'PWA as an Android/iOS Mobile App in the Google Play Store & Apple App Store. The future is that you ...', category: 'PWA', url: 'https://medium.com/crewnew-com/pwa-progressive-web-app-as-an-android-ios-mobile-app-in-the-google-play-store-apple-app-store-8770f990e08d', image: 'https://miro.medium.com/max/1125/1*GZ2MKlWnN3MZzIyZFqJq_w.jpeg' },
  { title: 'Single page application (SPA)', day: '22', month: 'Sep', description: 'When people come to me with the need for a website, e-shop, etc. I ask if they want SPA and then usu...', category: 'SPA', url: 'https://medium.com/crewnew-com/single-page-application-spa-website-development-vs-multi-page-websites-86194e7d8418', image: 'https://miro.medium.com/max/1200/1*kS1Qi8Ak-ijYFtc3aShQwQ.jpeg' },
  { title: 'How hiring a top (freelance) developers works?', day: '23', month: 'Sep', description: 'Hiring a great developer and working with them is a challenging task. I started as a ...', category: 'Screening', url: 'https://medium.com/crewnew-com/how-hiring-a-top-freelance-developers-works-78aedd71d866', image: 'https://i.imgur.com/xoMMbaH.png' },
  { title: 'What is Marketing Automation', day: '24', month: 'Oct', description: 'Automation software that automates marketing actions such as social media, emails, website actions e...', category: 'Automation', url: 'https://medium.com/crewnew-com/what-is-marketing-automation-e6db17890879', image: 'https://miro.medium.com/max/672/1*j65TR_TmwRVBs9vsfz87rA.png' },
]

export default {
  created() {
    this.posts = posts
  },
  data: () => ({
    posts: []
  }),
  components: {
    BlogItem
  }
}
</script>

<style lang="scss" scoped>
@media screen and(max-width: 1400px) and(min-width: 768px) {
  .pros-section {
  margin-left: -30px;
  margin-right: -30px;
}
}

</style>