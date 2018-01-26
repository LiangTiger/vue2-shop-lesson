<template>
<div>
<nav-top></nav-top>
<nav-header></nav-header>
<home-container></home-container>
<nav-footer></nav-footer>
</div>
</template>

<script>
import './../assets/css/base.css'
import NavTop from './../components/NavTop.vue'
import NavHeader from './../components/NavHeader.vue'
import HomeContainer from './../components/HomeContainer'
import NavFooter from './../components/NavFooter.vue'
import axios from 'axios'

export default {
  data () {
    return {
    }
  },
  components: {
    NavTop,
    NavHeader,
    NavFooter,
    HomeContainer
  },
  methods: {
    
  }
}
</script>