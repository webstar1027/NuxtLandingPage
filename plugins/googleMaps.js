import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyBfNAqiKmryoUvnp4lnxKEtpjs7fUgji88',
      libraries: 'places', // This is required if you use the Autocomplete plugin
    },
  })