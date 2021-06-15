<template lang="pug">
  .customers-section
    .columns.is-multiline.is-mobile.align-center
      .column.is-half-mobile(v-for="(customer, idx) in customers" :key="idx")
        CustomerItem(:customerItem="customer")
</template>

<script>
import CustomerItem from '@/components/home/CustomersSection/CustomerItem'

import bbcLogo from '@/assets/customers/bbc_logo.svg'
import estoniaLogo from '@/assets/customers/estonia_govt_logo.svg'
import americaBestInnLogo from '@/assets/customers/america_best_inn_logo.svg'
import jungentLogo from '@/assets/customers/jungent_logo.svg'
import bemoreLogo from '@/assets/customers/bemore_logo.svg'
import dateswiperLogo from '@/assets/customers/date-swiper-logo.svg'

const customers = [
  { image: bbcLogo },
  { image: estoniaLogo },
  { image: americaBestInnLogo },
  { image: jungentLogo },
  { image: bemoreLogo },
  { image: dateswiperLogo }
]

export default {
  created() {
    this.customers = customers
  },
  data: () => ({
    customers: []
  }),
  components: {
    CustomerItem
  }
}
</script>