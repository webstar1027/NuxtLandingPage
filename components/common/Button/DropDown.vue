<template lang="pug">
    .styled-select
      .select-label(@click='toggle')
        .select-arrow
            img(src='/icon/select-arrow.svg')
        p.font-family-alt.p20-side.p15-ver.w100.fs16(v-if='label' class='custom-select') {{active ? fitText(value) : fitText(label)}}
      .select-list.p20-ver.p35-side(v-if='open')
        .item.pointer(v-for='option in options' :key='option.value' @click='toggle(option)')
          span.fs16 {{option.name}}
</template>

<script>
export default {
  model: {
    event: "modified"
  },
  props: {
    color: {
      type: String,
      default: 'white'
    },
    value: String,
    label: String,
    options: Array,
    large: Boolean,
    block: Boolean,
    emit: String,
    rootEmit: Boolean
  },
  data: () => ({
    hovered: false,
    open: false,
    active: false
  }),
  computed: {
    classes() {
      const obj = {}
      obj[this.color] = true
      obj.hovered = this.hovered
      obj.large = this.large
      obj.block = this.block
      return obj
    }
  },
  methods: {
    fitText(text) {
      return text.length > 8 ? `${text.substring(0, 8)}..` : text
    },
    toggle(option) {
      if(option.value) {
        this.active = option.value
        this.$emit("modified", option.name);
      }
      this.open = !this.open
      
    },
    select(v) {

    },
    hoverChanged(val) {
      this.hovered = val
    },
    doEmit (prop, root) {
      if (root) {
        this.$root.$emit(prop)
      } else {
        this.$emit(prop)
      }
    }
  }
}
</script>

<style lang="scss">
.styled-select {
  position: relative;
  display: block;
  width: 100%;
  margin: 0 auto;
  background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #C9E3D4;
    border-radius: 5px;
    z-index: 3;
    
  z-index: 10;
  .select-list {
    position: absolute;
    top: 55px;
    right: 0px;
    min-width: 250px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #C9E3D4;
    border-radius: 5px;
    z-index: 3 !important;
    max-height: 200px;
    overflow-y: scroll;
     :-webkit-scrollbar {
        width: 0px !important;
      }
 
      ::-webkit-scrollbar-track {
          -webkit-box-shadow: transparent !important; 
          border-radius: 0px !important;
      }
 
      ::-webkit-scrollbar-thumb {
          -webkit-box-shadow: transparent !important; 
          border-radius: 0px !important;
      }
    .item {
      padding: 5px 0px;
    }
  }
  .select-arrow {
    position: absolute;
    height: 100%;
    display: flex;
    align-items: center;
    right: 0px;
    padding: 0px 10px;
    border-left: 1px solid #C9E3D4;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    z-index: 4;
  }
  select {
    border: none;
    outline: none;
    background: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0;
    margin: 0;
    width: 100%;
    padding: 15px 10px;
    font-size: 17px;
    color: #42375B;
    // font-size: 14px;
  }
  @media screen and(max-width: 1400px) and(min-width: 768px) {
    .custom-select {
      padding-top: 8px;
      padding-bottom: 10px;
    }
    p {
      font-size: 0.8em;
    }
    span {
      font-size: 0.8em;
    }
  }
}


</style>