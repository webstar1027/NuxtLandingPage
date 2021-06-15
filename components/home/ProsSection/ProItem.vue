<template lang="pug">
  .pro-item.relative.text-white.pointer(
    @mouseover="hoverChanged(true)"
    @mouseleave="hoverChanged(false)"
    :class="{hovered}"
    :style="styles"
    @click="$root.$emit('signupOpen')"
  )
    .overlay.absolute.w100
    .flex-col.fit.pro-item-body.absolute
      .flex-1
      .p10-ver.flex-row.align-center
        .p10-right
        PlusButton(:hovered="hovered")
        .p5-right
        .flex-col.line-medium
          .pro-name.text-black @{{ proItem.username }}
          .pro-position.fs16.text-medium {{ position }}
        .p10-right
        .is-hidden-mobile.p10-right
      .p5-bot
</template>

<script>
import PlusButton from '@/components/common/Button/PlusButton'

const STORAGE_URL = 'https://crew.crewnew.com/storage/uploads/profiles'

export default {
  props: {
    proItem: {
      type: Object,
      required: true
    },
  },
  data: () => ({
    hovered: false
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
      const maxChars = 23 
      const firstRole = this.proItem.skills
      const generateStringName = firstRole[0] ? firstRole[0]['name'] : ''
      const descriptionFullnes = generateStringName.length >=maxChars ? `${generateStringName.substring(0,maxChars)}...` : generateStringName
      return this.hovered ? generateStringName : descriptionFullnes
    }
  },
  methods: {
    hoverChanged(val) {
      this.hovered = val
    }
  },
  components: {
    PlusButton
  }
}
</script>

<style lang="scss">
.pro-item {
  height: 276px;
  min-width: 200px;
  background: #111;
  @media only screen and (min-width: 768px) {
    min-width: 245px;
    max-width: 245px;
  }
  .pro-name {
    text-transform: capitalize;
    font-size: 1.1em;
  }

  &.hovered {
    .overlay {
      height: 100%;
    }
    
  }

  .pro-position {
      transition: 0.2s ease-in-out;
      font-weight: 400;
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
@media screen and(max-width: 1400px) and(min-width: 768px) {
  .pro-item {
    height: 180px;
    min-width: 180px;
    max-width: 180px;
  }
}
</style>