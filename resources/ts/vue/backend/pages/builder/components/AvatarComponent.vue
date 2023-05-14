<template>
   <div>
      <div class="col-sm-12">
         <div class="card">

            <div class="card-body">
               <form class="theme-form"  v-on:submit.prevent="onSubmit">
                  <div class="mb-1">
                     <label class="col-form-label pt-0" for="exampleInputPassword1">Size</label>
                         <select class="form-select digits" v-model="avatar.size" id="exampleFormControlSelect3" >
                            <option value="75">75x75px</option>
                            <option value="100">100x100px</option>
                            <option value="125" selected="selected">125x125px</option>
                            <option value="150">150x150px</option>
                            </select>
                  </div>
               <div class="mb-1">
                    <label for="customRange1" class="form-label">Border Width</label>
                    <input type="range" min="0" v-model="avatar.border" max="5" class="form-range" id="customRange1">
                 </div>
                  <div class="mb-1">
                     <label class="col-form-label pt-0" for="exampleInputPassword1">Image</label>
                     <div class="row">
                        <div class="col-sm-12">
                           <input id="file" @change="onFileChange" type="file" v-if="!image" required />
                           <div v-else>
                                <image-view :round="true" :image="image"></image-view>
                                <div class="row justify-content-center mt-4">
                              <button class="btn btn-pill btn-danger btn-air-danger"  @click="removeImage" type="button">       Remove image</button>
                           </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="mt-4">
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

     props: ["avatar_value"],
     components:{ImageView},
     data() {
       return {
         avatar: {
             size:"100",
             border:0,
         },
         image: "",
       };
     },
     methods: {
       onSubmit() {
         this.avatar.image = this.image;
         this.$emit("submitAvatar", this.avatar);
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
