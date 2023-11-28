<script>

import TheNav from './components/TheNav.vue'

import axios from 'axios'
import { store } from './data/store'

export default {
  name: "App",
  components:{
    TheNav,
  },

  data(){
    return{
      store
    }
  },

  methods:{

    callAPI(indirizzo){

      this.store.loading = true,

      axios.get(indirizzo).then(result =>{
        console.log(result.data);
        this.store.posts = result.data;
        this.store.loading = false;
      }).catch(err => {
        console.log(err + "qualcosa è andato storto")
      })
    }

  },

  mounted(){

    this.callAPI(this.store.API)

  },

}

</script>

<template>

  <TheNav />

  <RouterView />

</template>

<style lang="scss" scoped>


</style>
