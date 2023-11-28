<script>

import axios from 'axios'
import { store } from './data/store'

export default {
  name: "CreateApp",
  components:{
  },

  data(){
    return{
      store,
      form:{
        title:"",
        slug:"",
        image:"",
        content:"",
        category:"",
        published:"",
        tags:"",
      }
    }
  },

  methods:{

    submitForm(){
      axios.post(this.store.API, this.form).then((response)=>{
        console.log(response)
      })
      .catch((err) =>{
        console.log(err + "faciolo")
      })
    }


  },

  mounted(){

  },

}

</script>

<template>

  <div class="container my-5">
    <div class="row">
      <h2 class="py-5 text-center">NEW POST</h2>
      <div class="col-6">
        <!-- <h2 class="py-5 text-center">NEW POST</h2> -->

        <form v-on:submit.prevent="submitForm">
          <div class="mb-3">
            <label for="title" class="form-label">Title</label>
            <input type="text" class="form-control" id="title" v-model="form.title">
          </div>

          <div class="mb-3">
            <label for="slug" class="form-label">Slug</label>
            <input type="text" class="form-control" id="slug" v-model="form.slug">
          </div>

          <div class="mb-3">
            <label for="image" class="form-label">Image</label>
            <input type="text" class="form-control"  id="image"  v-model="form.image">
          </div>

          <div class="mb-3">
            <label for="content" class="form-label">Content</label>
            <textarea class="form-control" placeholder="Insert Content" id="content" v-model="form.content"></textarea>
          </div>

          <div class="mb-3">
            <label for="published" class="form-label">Published</label>
            <input type="text" class="form-control" id="published">
          </div>

          <div class="mb-3">
            <label for="category" class="form-label">Category</label>
            <input type="text" class="form-control" id="category" v-model="form.category">
          </div>

          <div class="mb-3">
            <label for="tags" class="form-label">Tags</label>
            <input type="text" class="form-control" id="tags" v-model="form.tags">
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
      </form>

      </div>
      <div class="col-6 mt-4">
        <img class="img-fluid" src="public\pexels-cottonbro-studio-5185173.jpg" alt="">
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>


</style>