<script>

import { store } from '../data/store'


export default {
  name: "TheIndex",
  components:{

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

    <!-- <div class="container-fluid p-5 bg-body-tertiary">
        <div class="row">
            <div class="col"> -->

                <!-- <h2 class=" mb-5">See All</h2> -->

                <div class="container py-5">
                    <div class="row p-3" v-for="post in this.store.posts">
                        <div class="col-6">
                            <img :src="post.image" class="img-fluid" alt="">
                        </div>
                        <div class="col-6">
                            <h2 class="p-2">{{post.title}}</h2>
                            <hr>
                            <p class="p-2">{{ post.content }}</p>
                        </div>
                    </div>
                </div>

            <!-- </div>
        </div>
    </div> -->

</template>

<style lang="scss" scoped>

</style>