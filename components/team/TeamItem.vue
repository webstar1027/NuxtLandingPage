<template lang="pug">
.team-card
  .team-item.relative.text-white.pointer(
    @mouseover="hoverChanged(true)"
    @mouseleave="hoverChanged(false)"
    :class="{hovered}"
    :style="styles"
    @click="openMember()"
  )
    .overlay.absolute.w100
    .flex-col.fit.pro-item-body.absolute
      .flex-1
      .p10-ver.flex-row.align-center
        .p10-right
        PlusButton(:hovered="hovered")
        .p5-right
        .flex-col.line-medium
          .pro-name.text-black {{ proItem.name }}
          .pro-position.fs14.text-medium(v-if="position") {{ position }}
        .filler
        .linkeding.pointer
          img(:src='teamLnkd')
        .p10-right
        .is-hidden-mobile.p10-right
  .team-proffesion.p10-top
    p {{proItem.proffesion}}
</template>

<script>
import PlusButton from '@/components/common/Button/PlusButton'
import bus from '@/services/bus.js'
import teamLnkd from '@/assets/team/team-lnkd.svg'
const STORAGE_URL = 'https://crew.crewnew.com/storage/uploads/profiles'

export default {
  props: {
    proItem: {
      type: Object,
      required: true
    },
  },
  data: () => ({
    hovered: false,
    teamLnkd
  }),
  computed: {
    styles() {
      const obj = {}
      obj.background = `linear-gradient(rgba(50, 50, 50, 0.2), rgba(50, 50, 50, 0.4)), url('${this.profileImageUrl}')`
      obj['background-size'] = 'cover'
      return obj
    },
    profileImageUrl() {
      const profileImageUrl = `${STORAGE_URL}/${this.proItem.profile_image}`
      return profileImageUrl
    },
    position() {
      const firstRole = this.proItem
      return firstRole ? firstRole.display_name : ''
    }
  },
  methods: {
    hoverChanged(val) {
      this.hovered = val
    },
    openMember() {
      bus.$emit('hide')
      // this.$router.push({ path: `/team?member=${this.proItem.id}` })
      this.$router.push({ path: 'team', query: { member: this.proItem.id } })
    },
  },
  components: {
    PlusButton
  }
}
</script>

<style lang="scss">
.team-card {
  padding-bottom: 50px;
}
.team-item {
  height: 276px;
  background: #111;
  @media only screen and (min-width: 768px) {
    // min-width: 245px;
    max-width: 425px;
  }

  &.hovered {
    .overlay {
      height: 100%;
    }
  }

  .pro-item-body {
    z-index: 999;
  }

  .overlay {
    background-color: #42375b;
    opacity: 0.85;
    height: 0%;
    bottom: 0;
    left: 0;
    transition: 0.2s ease-in-out;
  }
}

@media only screen and (max-width: 768px) {
  .pro-item {
    height: 165px;
    min-width: 100px;
  }
}
</style>