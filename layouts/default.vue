<template lang="pug">
  .layout.w100
    menu-panel(:opened="menuOpened" @menuClose="menuOpened=false" @signupOpen="signupOpened=true")
    signup-panel(:opened="signupOpened" @panelClose="signupOpened=false")
    modal
    .flex-col.w100(:class="{blurred: menuOpened || signupOpened}")
      header-container(@menuOpen="menuOpened=true" @signupOpen="openSignUp" :hide="hideNav")
      scrollbar.sb#custom-document(:class="hideNav ? 'scroll' : ''" height="auto" maxHeight="intentionallyInvalid" @scroll="handleScroll($event)")
        .below-scroll(ref='refScroll')
        nuxt
        footer-container(v-show="$router.currentRoute.path !== '/signup-step2'")
        //- cookie-policy
</template>

<script>
import axios from 'axios'
import config from '@/config'
import HeaderContainer from '@/components/containers/Header/Header'
import FooterContainer from '@/components/containers/Footer/Footer'
// import CookiePolicy from '@/components/common/CookiePolicy/CookiePolicy'
import MenuPanel from '@/components/menu/MenuPanel'
import SignupPanel from '@/components/signup/SignupPanel'
import Modal from '@/components/modals/modal'
import bus from '@/services/bus.js'
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    menuOpened: false,
    signupOpened: false,
    position: {scrollTop: 0, scrollLeft: 0},
    hideNav: false,
    fadeInElements: []
  }),
  computed: {
    ...mapGetters({
        stretch: 'isSideMenuStretched'
    }),

  },
  created() {
    this.$root.$on('signupOpen', this.openSignUp)
    this.$root.$on('signupOff', this.closeSign)
    this.$root.$on('menuOpen', this.openMenu)
  },
  mounted() {
    bus.$on('hide', () => {
      this.hideNav = false
    });
    this.fadeInElements = Array.from(document.getElementsByClassName('animate-on-scroll'))
    this.handleScrollAnimation()
  },
  watch: {
    '$route.path': function(r) {
      const element = this.$refs.refScroll
      setTimeout(() => {
          element.scrollIntoView();
      }, 100)
    },
    '$route.hash': function(r) {
      if(r === '#signup') {
        this.signupOpened = true
        this.$router.push('/')
      }
    }
  },
  methods: {
    handleScrollAnimation() {
      for (var i = 0; i < this.fadeInElements.length; i++) {
        var elem = this.fadeInElements[i]
        if (this.isElemVisible(elem)) {
          elem.style.opacity = '1'
          elem.classList.add("active")
          // this.fadeInElements.splice(i, 1) // only allow it to run once
        } else {
          // elem.style.opacity = '0'
          // elem.classList.remove("active");
        }
      }
    },
    isElemVisible(el) {
      var rect = el.getBoundingClientRect()
      var elemTop = rect.top - 100 // 200 = buffer
      var elemBottom = rect.bottom
      return elemTop < window.innerHeight && elemBottom >= 0
    },
    openSignUp () {
      let userId
      if (process.client) {
        userId = localStorage.getItem('cn-registred')
      }
      if (!userId) {
        this.signupOpened = true
      } else {
        this.$router.push('/signup-step2')
      }
    },
    closeSign () {
      this.signupOpened = false
    },
    openMenu () {
      this.menuOpened = true
    },
    aboutPageException(top) {
      const header = document.getElementsByClassName("sticky-about");
      const sticky = document.getElementById("about-header");
      const referElement = header[0].getBoundingClientRect().top;
      if(top > 100) {
        this.hideNav = true
      } else {
        this.hideNav = false
      }
      if (referElement < -140) {
        if(sticky.classList.value !== 'sticky')
          sticky.classList.add("sticky");
      } else {
          sticky.classList.remove("sticky");
      }
    },
    handleScroll(e) {
      this.handleScrollAnimation()
      if(this.$route.name === 'about' && window.innerWidth > 768) {
        this.aboutPageException(e.target.scrollTop)
      }
      let prevScrollpos = this.position.scrollTop;
      let currentScrollPos = e.target.scrollTop;
      if (prevScrollpos < currentScrollPos && currentScrollPos > 100) {
        this.hideNav = true
        this.position.scrollTop = currentScrollPos
        if(!this.stretch) {
          this.$store.dispatch('STRETCH_SIDE_MENU')
        }
      } else if (prevScrollpos > currentScrollPos){
        this.hideNav = false
        this.position.scrollTop = currentScrollPos
        if(this.stretch) {
          this.$store.dispatch('STRETCH_SIDE_MENU')
        }
        
      }
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScrollAnimation);
  },
  components: {
    HeaderContainer,
    FooterContainer,
    // CookiePolicy,
    MenuPanel,
    SignupPanel,
    Modal
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap');

@font-face {
  font-family: "Gibbs";
  src: url("~assets/fonts/Gibbs-Light.ttf");
  font-weight: 300;
}
@font-face {
  font-family: "Gibbs";
  src: url("~assets/fonts/Gibbs-Book.ttf");
  font-weight: normal;
}
@font-face {
  font-family: "Gibbs";
  src: url("~assets/fonts/Gibbs-Medium.ttf");
  font-weight: 600;
}
@font-face {
  font-family: "Gibbs";
  src: url("~assets/fonts/Gibbs-Bold.ttf");
  font-weight: 700;
}
@font-face {
  font-family: "Gibbs";
  src: url("~assets/fonts/Gibbs-Black.ttf");
  font-weight: 900;
}

html,
.sb {
  font-family: Gibbs, sans-serif;
  color: #42375b;
  word-spacing: 1px;
  overflow: hidden !important;
  background-color: #fcfefd;
  height: 100%;
}

.sb {
  margin-top: 100px;
  transition: margin ease 0.6s;
  &.scroll{
    margin-top: 0;
  }
}

.below-scroll {
  margin-top: -100px;
  padding-top: 100px;
}
@media only screen and (max-width: 768px) {
  .sb {
    margin-top: 70px;
    &.scroll{
      margin-top: 0;
    }
  }
  #tawkchat-container {
    transform: scale(0) !important;
  }
}

body {
  margin: 0px;
}

.layout {
  width: 100%;
}

.font-family-alt {
  font-family: Montserrat, sans-serif;
}

.blurred {
  filter: blur(7px) brightness(0.5);
}

    #__layout > div > div.flex-col.w100 > div > div.scrollbar-content > div > div.top-container > div > ul > li,
    #__layout > div > div.flex-col.w100 > div > div.scrollbar-content > div > div.top-container > div > ol > li {
        list-style-type: none;
        list-style: none ;
    }
</style>
