<script>

import TheCarousel from './components/TheCarousel.vue'
import TheIndex from './components/TheIndex.vue'

import { store } from './data/store'

export default {
  name: "App",
  components:{

    TheCarousel,
    TheIndex,
  },

  data(){
    return{
      store
    }
  },

  methods:{

  },

  mounted(){

  },

}

</script>

<template>

  <TheCarousel />

  <TheIndex v-if="store.loading === false" />
  <h3 class="text-center" v-else >Sto caricando i dati</h3>

</template>

<style lang="scss" scoped>


</style>