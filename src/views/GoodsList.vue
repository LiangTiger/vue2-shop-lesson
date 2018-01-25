<template>
<div>
<nav-top></nav-top>
<nav-header></nav-header>

<nav-footer></nav-footer>
</div>
</template>

<script>
import './../assets/css/base.css'
import NavTop from './../components/NavTop.vue'
import NavHeader from './../components/NavHeader.vue'
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
  },
  methods: {
    
  }
}
</script>