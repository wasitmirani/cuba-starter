<template>
   <div>
      <div class="col-sm-12">
         <div class="card">
            <!-- <div class="card-header pb-0">
               <h5>Default Form Layout</h5><span>Using the <a href="#">card</a> component, you can extend the default collapse behavior to create an accordion.</span>
               </div> -->
            <div class="card-body">
               <form class="theme-form"  v-on:submit.prevent="onSubmit">
                  <div class="mb-1" v-show="!this.show_name">
                     <label class="col-form-label pt-0" for="exampleInputPassword1">Name</label>
                     <input class="form-control" v-model="image_value.text" id="exampleFormControlTextarea4" rows="4" required />
                  </div>
                  <div class="mb-1">
                     <label class="col-form-label pt-0" for="exampleInputPassword1">Image</label>
                     <div class="row">
                        <div class="col-sm-12">
                           <input id="file" @change="onFileChange" type="file" v-if="!image" required />
                           <div v-else>

                                <image-view :image="image"></image-view>

                              <!-- <img :src="image" /> -->
                                <div class="row justify-content-center mt-4">
                              <button class="btn btn-pill btn-danger btn-air-danger"  @click="removeImage" type="button">       Remove image</button>
                           </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="mt-4"  v-show="!this.show_name">
                     <button class="btn btn-pill btn-primary btn-air-primary" type="submit">Submit</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
import ImageView from "../components/ImageViewComponent.vue";
   export default {

     props: ["image_value","show_name"],
     components:{ImageView},
     data() {
       return {
         image_value: {},
         image: "",
       };
     },
     methods: {
       onSubmit() {
         this.image_value.src = this.image;
         this.$emit("submitImage", this.image_value);
       },
       onFileChange(e) {
         var files = e.target.files || e.dataTransfer.files;
         if (!files.length) return;
         this.createImage(files[0]);
       },
       createImage(file) {
         var image = new Image();
         var reader = new FileReader();
         var vm = this;

         reader.onload = (e) => {
           vm.image = e.target.result;
         };
         reader.readAsDataURL(file);
       },
       removeImage: function (e) {
         this.image = "";
       },
     },
     mounted() {
       // if(this.link_value){
       //     this.link = this.link_value;
       // }
       // this.link.url=this.link_value.url;
     },
   };
</script>
<style scoped>
   input#file {
   display: inline-block;
   width: 100%;
   padding: 120px 0 0 0;
   height: 100px;
   overflow: hidden;
   -webkit-box-sizing: border-box;
   -moz-box-sizing: border-box;
   box-sizing: border-box;
   background: url("https://cdn1.iconfinder.com/data/icons/hawcons/32/698394-icon-130-cloud-upload-512.png")
   center center no-repeat #e4e4e4;
   border-radius: 20px;
   background-size: 60px 60px;
   border: 2px dashed #4049ff;
   }
   .square img {
   width: 100%;
   padding: 16px;
   border-radius: 20px;
   }
</style>
