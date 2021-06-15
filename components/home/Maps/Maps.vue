<template lang="pug">
  section.google-maps
    client-only
      .relative.w100
        GmapMap.map-size(:center="center" :options="infoOptions" :zoom="zoom" map-type-id="roadmap" ref="mapRef")
          GmapInfoWindow(:options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false")
            GmapMarker(:key="i" v-for="(m,i) in markers" :position="m.position" :clickable="true" @click="toggleInfoWindow(m,i)" :icon="{ url: require('@/assets/icons/Group 663.svg')}")
</template>

<script>
import responsivness from '@/mixins/responsivness'

export default {
  mixins: [responsivness],
  computed: {
    center() {
      return this.isMobile ? this.centerMobile : this.centerDesktop 
    },
    zoom() {
      return this.isMobile ? this.zoomMobile : this.zoomDesktop
    }
  },
  data: () => ({
    centerDesktop: {
      lat: 52.276332,
      lng: 8.547511
    },
    centerMobile: {
      lat: 52.376332,
      lng: 10.547511
    },
    zoomDesktop: 4,
    zoomMobile: 3,
    infoWindowPos: null,
    infoWinOpen: false,
    currentMidx: null,
    infoOptions: {
      disableDefaultUI: true,
      content: '',
      maxWidth: 300,
      scrollwheel: false,
      //optional: offset infowindow so it visually sits nicely on top of our marker
      pixelOffset: {
        width: 0,
        height: -35
      },
      styles: [
          {
              "elementType": "geometry.stroke",
              "stylers": [
              {
                  "color": "#000000"
              }
              ]
          },
          {
              "elementType": "geometry.fill",
              "stylers": [
              {
                  "color": "#ffffff"
              }
              ]
          },
          {
              "elementType": "labels.icon",
              "stylers": [
              {
                  "visibility": "off"
              }
              ]
          },
          {
              "elementType": "labels.text.fill",
              "stylers": [
              {
                  "color": "#000000"
              }
              ]
          },
          {
              "elementType": "labels.text.stroke",
              "stylers": [
              {
                  "color": "#fff"
              }
              ]
          },
          {
              "featureType": "administrative.land_parcel",
              "elementType": "labels.text.fill",
              "stylers": [
              {
                  "color": "#000000"
              }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
              {
                  "color": "#ffffff"
              }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
              {
                  "color": "#000000"
              }
              ]
          },
          {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
              {
                  "color": "#000000"
              }
              ]
          },
          {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
              {
                  "color": "#000000"
              }
              ]
          },
          {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
              {
                  "color": "#ffffff"
              }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "labels.text.fill",
              "stylers": [
              {
                  "color": "#ffffff"
              }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
              {
                  "color": "#ffffff"
              }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [
              {
                  "color": "#ffffff"
              }
              ]
          },
          {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [
              {
                  "color": "#ffffff"
              }
              ]
          },
          {
              "featureType": "transit.line",
              "elementType": "geometry",
              "stylers": [
              {
                  "color": "#ffffff"
              }
              ]
          },
          {
              "featureType": "transit.station",
              "elementType": "geometry",
              "stylers": [
              {
                  "color": "#ffffff"
              }
              ]
          },
          {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
              {
                  "color": "#e3e3e3"
              }
              ]
          },
          {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
              {
                  "color": "#000000"
              }
              ]
          }
      ]
    },
    markers: [{
      position: {
        lat: 51.50151,
        lng: -0.09466
      },
      imgUrl: 'https://projects.crewnew.com/crewnew/img/map/london-freelance-developers.png',
      infoText: '<div class="info-window-maps font-museoSansCyrl"><img src="https://projects.crewnew.com/crewnew/img/map/london-freelance-developers.png" /><div class="text"><h2>London</h2><p>Most of our project managers (PMs) and developers/designers are from various London locations.</p><a href="#signup">Meet local PM >></a></div></div>'
    }, {
      position: {
        lat: 53.45393,
        lng: -2.32377
      },
      imgUrl: 'https://projects.crewnew.com/crewnew/img/map/manchester-liverpool-web-mobile-programming.jpg',
      infoText: '<div class="info-window-maps font-museoSansCyrl"><img src="https://projects.crewnew.com/crewnew/img/map/manchester-liverpool-web-mobile-programming.jpg" /><div class="text"><h2>Manchester & Liverpool</h2><p>Second biggest community of small freelancers\' agencies in UK is based in Manchester & Liverpool</p><a href="#signup">Meet local PM >></a></div></div>'
    }, {
      position: {
        lat: 46.77308,
        lng: 23.58944
      },
      imgUrl: 'https://i.imgur.com/aaeiW7t.png',
      infoText: '<div class="info-window-maps font-museoSansCyrl"><img src="https://i.imgur.com/aaeiW7t.png" /><div class="text"><h2>Cluj-Napoca</h2><p> Mostly mobile apps development, mostly Flutter native apps develolment.</p><a href="#signup">Meet mobile devs >></a></div></div>'
    }, {
      position: {
        lat: 51.45462,
        lng: -2.603234
      },
      imgUrl: 'https://projects.crewnew.com/crewnew/img/map/bristol-freelance-programmers.jpg',
      infoText: '<div class="info-window-maps font-museoSansCyrl"><img src="https://projects.crewnew.com/crewnew/img/map/bristol-freelance-programmers.jpg" /><div class="text"><h2>Bristol</h2><p> Two small web & mobile app development teams of top freelancers are based in Bristol.</p><a href="#signup">Meet local PM >></a></div></div>'
    }, {
      position: {
        lat: 53.34254,
        lng: -6.2579
      },
      imgUrl: 'https://projects.crewnew.com/crewnew/img/map/dublin-web-development.png',
      infoText: '<div class="info-window-maps font-museoSansCyrl"><img src="https://projects.crewnew.com/crewnew/img/map/dublin-web-development.png" /><div class="text"><h2>Dublin & Belfast</h2><p> In Dublin are based the second biggest amount of our project managers (PMs) and customers.</p><a href="#signup">Meet local PM >></a></div></div>'
    }, {
      position: {
        lat: 55.95331,
        lng: -3.19165
      },
      imgUrl: 'https://projects.crewnew.com/crewnew/img/map/edinburgh-freelance-coders.jpg',
      infoText: '<div class="info-window-maps font-museoSansCyrl"><img src="https://projects.crewnew.com/crewnew/img/map/edinburgh-freelance-coders.jpg" /><div class="text"><h2>Edinburgh</h2><p> CrewNew\'s latest base in UK with a local project manager (PM) and a small development team.</p><a href="#signup">Meet local PM >></a></div></div>'
    }, {
      position: {
        lat: 27.76982,
        lng: -15.58855
      },
      imgUrl: 'https://projects.crewnew.com/crewnew/img/map/gran-canaria-nomads.jpg',
      infoText: '<div class="info-window-maps font-museoSansCyrl"><img src="https://projects.crewnew.com/crewnew/img/map/gran-canaria-nomads.jpg" /><div class="text"><h2>Gran Canaria</h2><p> Since 2012 every year CrewNew\'s best freelancers and core team work from GC office.</p><a href="#signup">Meet local PM >></a></div></div>'
    }, {
      position: {
        lat: 41.37895,
        lng: 2.15949
      },
      imgUrl: 'https://projects.crewnew.com/crewnew/img/map/barcelona-programming-freelancer.jpg',
      infoText: '<div class="info-window-maps font-museoSansCyrl"><img src="https://projects.crewnew.com/crewnew/img/map/barcelona-programming-freelancer.jpg" /><div class="text"><h2>Barcelona</h2><p> Biggest digital nomads hub in Spain has now also CrewNew web development team.</p><a href="#signup">Meet local PM >></a></div></div>'
    }, {
      position: {
        lat: 58.37616,
        lng: 26.72143
      },
      imgUrl: 'https://projects.crewnew.com/crewnew/img/map/tartu-veebiagentuur.jpg',
      infoText: '<div class="info-window-maps font-museoSansCyrl"><img src="https://projects.crewnew.com/crewnew/img/map/tartu-veebiagentuur.jpg" /><div class="text"><h2>Tallinn & Tartu</h2><p> One of the top tech companies come from E-Stonia and so does CrewNew and it\'s developers.</p><a href="#signup">Meet local PM >></a></div></div>'
    },  {
      position: {
        lat: 41.98993,
        lng: 21.42593
      },
      imgUrl: 'https://projects.crewnew.com/crewnew/img/map/skopje-programmers.jpg',
      infoText: '<div class="info-window-maps font-museoSansCyrl"><img src="https://projects.crewnew.com/crewnew/img/map/skopje-programmers.jpg" /><div class="text"><h2>Skopje</h2><p> Hundreds of CrewNew\'s top freelancers come from Macedonia as one of the Balkan\'s top hub.</p><a href="#signup">Meet local PM >></a></div></div>'
    },  {
      position: {
        lat: 44.010667,
        lng: 20.921749
      },
      imgUrl: 'https://projects.crewnew.com/crewnew/img/map/serbia-eastern-europe-developers.jpg',
      infoText: '<div class="info-window-maps font-museoSansCyrl"><img src="https://projects.crewnew.com/crewnew/img/map/serbia-eastern-europe-developers.jpg" /><div class="text"><h2>Belgrade & Kraugjevac</h2><p> Most of the CrewNew\'s top freelance programmers come from Serbia\'s two biggest cities.</p><a href="#signup">Meet local PM >></a></div></div>'
    },  {
      position: {
        lat: 40.187473,
        lng: 44.515134
      },
      imgUrl: 'https://projects.crewnew.com/crewnew/img/map/yerevan-nomads.jpg',
      infoText: '<div class="info-window-maps font-museoSansCyrl"><img src="https://projects.crewnew.com/crewnew/img/map/yerevan-nomads.jpg" /><div class="text"><h2>Yerevan</h2><p> CrewNew partner, one of the biggest Armenian software development company Iguan Systems.</p><a href="#signup">Meet local PM >></a></div></div>'
    },  {
      position: {
        lat: 60.180747,
        lng: 24.832457
      },
      imgUrl: '',
      infoText: '<div class="info-window-maps font-museoSansCyrl"><img src="https://projects.crewnew.com/crewnew/img/map/helsinki-mobile-development.jpg" /><div class="text"><h2>Helsinki (Espoo)</h2><p> CrewNew\'s biggest freelance talent pool in North-Europe from where many exciting startups come from.</p><a href="#signup">Meet local PM >></a></div></div>'
    }, {
      position: {
        lat: 56.951121,
        lng: 24.123277
      },
      imgUrl: '',
      infoText: '<div class="info-window-maps font-museoSansCyrl"><img src="https://projects.crewnew.com/crewnew/img/map/riga-freelancer-center.jpg" /><div class="text"><h2>Riga</h2><p> Newest CrewNew freelancer hub in the center of Baltic states and close to the biggest airport in area.</p><a href="#signup">Meet local PM >></a></div></div>'
    }, {
      position: {
        lat: 59.303306,
        lng: 18.082722
      },
      imgUrl: 'https://projects.crewnew.com/crewnew/img/map/stockholm-coworking.jpg',
      infoText: '<div class="info-window-maps font-museoSansCyrl"><img src="https://projects.crewnew.com/crewnew/img/map/stockholm-coworking.jpg" /><div class="text"><h2>Stockholm</h2><p> Goto10 co-working space is used in Stockholm by CrewNew local project managers (PMs).</p><a href="#signup">Meet local PM >></a></div></div>'
    }, {
      position: {
        lat: 59.921926,
        lng: 10.725122
      },
      imgUrl: 'https://projects.crewnew.com/crewnew/img/map/oslo-web-mobile-freelancers-hub.jpg',
      infoText: '<div class="info-window-maps font-museoSansCyrl"><img src="https://projects.crewnew.com/crewnew/img/map/oslo-web-mobile-freelancers-hub.jpg" /><div class="text"><h2>Oslo</h2><p> Most of the CrewNew project managers (PMs) in Scandinavia are based in the Oslo hub</p><a href="#signup">Meet local PM >></a></div></div>'
    }, {
      position: {
        lat: 52.37585,
        lng: 4.888143
      },
      imgUrl: '',
      infoText: '<div class="info-window-maps font-museoSansCyrl"><img src="https://projects.crewnew.com/crewnew/img/map/amsterdam-startup-freelance-hub.jpg" /><div class="text"><h2>Amsterdam</h2><p>CrewNew freelancers are developing constantly many startups based in Amsterdam.</p><a href="#signup">Meet local PM >></a></div></div>'
    }]
  }),
  methods: {
    toggleInfoWindow: function(marker, idx) {
      this.infoWindowPos = marker.position;
      this.infoOptions.content = marker.infoText;
      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    }
  }
}
</script>

<style lang="scss">
.google-maps {
  padding: 0;
  @media only screen and (min-width: 768px) {
    height: 890px;
  }

  .info-window-maps {
    width: 100%;
    
    img {
      width: 40%;
      float: left;
    }
    .text {
      h2 {
        font-size: 14px;
        color: #414141;
        font-weight: 300;
        padding-bottom: 10px;
      }
      p {
        font-size: 11px;
        color: #a6a4a4;
      }
      padding-left: 10px;
      width: 60%;
      float: right;
    }
  }

  .map-size {
    width: 100%;
    height: 80vh;
    @media only screen and (min-width: 768px) {
      height: 890px;
    }

  }
}
</style>