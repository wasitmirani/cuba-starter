<template>
        <div class="row justify-content-center my-gallery gallery mb-2" id="aniimated-thumbnials" itemscope="">
         <figure class="col-md-6 col-12 img-hover hover-1" itemprop="associatedMedia" itemscope="">

               <a :href="image" itemprop="contentUrl" >
                <div>
                        <img class="img-500 img-fluid m-r-20 img-responsive mh-350 mw-350 mx-auto d-block" :style="this.style ? this.style : ''" :class="this.round ? 'round-circle': ''" :src="image"  itemprop="thumbnail" alt="Image description">
                </div>
                </a>
        <figcaption itemprop="caption description">Image caption  1</figcaption>
         </figure>
 </div>
</template>

<script>
export default {
 props:['image','round','style']
}
</script>

<style scoped>
.round-circle {
  border-radius: 50%;
}
</style>
