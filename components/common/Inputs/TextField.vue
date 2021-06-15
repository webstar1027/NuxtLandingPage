<template lang="pug">
  .txt-field.w100.text-dark.font-family-alt
    .text-medium.fs15(v-if="label")
      span {{ label }}
        span.text-alt {{ required ? ' *' : '' }}
    .p10-bot
    .flex-row.align-center.columns.is-marginless
      .column.is-full-mobile.is-paddingless(:class="inputClasses")
        input.flat-input.font-family-alt.p20-side.p15-ver.w100.fs17(:value="value" :required="required" :type="type || 'text'" :placeholder="placeholder || ''" @input="emitChange" :class="error ? 'error' : ''")
      .column.is-two-fifths-desktop.is-full-mobile.is-paddingless.flex-row.justify-end.align-center(v-if="hasSlot")
        slot
</template>

<script>
export default {
  props: {
    label: String,
    value: String,
    required: Boolean,
    type: String,
    placeholder: String,
    error: Boolean
  },
  computed: {
    hasSlot() {
      return !!this.$slots.default
    },
    inputClasses() {
      const obj = {}
      obj['is-three-fifths-desktop'] = this.hasSlot
      return obj
    }
  },
  methods: {
    emitChange(e) {
      this.$emit('input', e.target.value || '')
    }
  }
}
</script>
<style lang="scss">
  input.error {
    &::placeholder {
        text-align: left;
        font-size: 16px;
        font-weight: normal;
        font-family: 'Montserrat', sans-serif;
        letter-spacing: 0;
        color: #0000004D;
        opacity: 1;
    }
    &:focus {
        outline: none;
        border: 1px solid #00D857;
        &::placeholder {
            color: #fff;;
        }
    }
    &.error {
        border: 1px solid #FF0000;
        &::placeholder {
            color: #FF0000;
        }
        &:focus::placeholder{
            color: #fff;
        }
    }
   
  }
   @media screen and(max-width: 1400px) and(min-width: 768px) {
      .flat-input {
        font-size: 0.8em;
        padding-top: 10px;
        padding-bottom: 10px;

      }
      .text-medium {
        font-size: 0.8em;
      }
    }
</style>