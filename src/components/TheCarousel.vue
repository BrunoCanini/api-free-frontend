<script>

import { store } from '../data/store'


export default {
  name: "TheCarousel",
  components:{

  },

  data(){
    return{
      store,
    }
  },

  methods:{

  },

  mounted(){

  },

}

</script>

<template>

<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">

  <div class="carousel-inner">

    <div class="carousel-item active">
        <img src="public\pexels-aleksandar-pasaric-2484848.jpg" class="img-fluid d-block w-100 castomImg" alt="img1">
    </div>

    <div class="carousel-item" v-for="post in this.store.posts">
        <img :src="post.image" class="img-fluid d-block w-100 castomImg" alt="img1">
    </div>

  </div>

    <!-- <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="public\pexels-aleksandar-pasaric-2484848.jpg" class="img-fluid d-block w-100 castomImg" alt="img1">
      </div>
      <div class="carousel-item">
        <img src="public\pexels-luciann-photography-3566226.jpg" class="img-fluid d-block w-100 castomImg" alt="img1">
      </div>
      <div class="carousel-item">
        <img src="public\pexels-yoss-traore-2611465.jpg" class="img-fluid d-block w-100 castomImg" alt="img1">
      </div>
    </div> -->
    
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
</div>

</template>

<style lang="scss" scoped>

.castomImg{
  height: 600px;
}

</style>
