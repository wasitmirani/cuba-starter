<template>
  <div>

   <div class="col-sm-12">
                    <div class="card">
                      <!-- <div class="card-header pb-0">
                        <h5>Default Form Layout</h5><span>Using the <a href="#">card</a> component, you can extend the default collapse behavior to create an accordion.</span>
                      </div> -->
                      <div class="card-body">
                        <form class="theme-form"  v-on:submit.prevent="onSubmit">
                            <div class="mb-1">
                            <label class="col-form-label pt-0" for="exampleInputPassword1">Spotify Name</label>
                            <input  :class="`form-control ${validation ? 'is-invalid' : ''}`" :state="validation" required v-model="spotify.name" id="exampleFormControlTextarea4" placeholder="Spotify Name" />
                             <span class="">{{spotify.name ? spotify.name.length : 0}}/15</span>
                            <div class="invalid-feedback" v-if="validation">Spotify name  must be 1-15 characters long.</div>
                          </div>
                          <div class="mb-1">
                            <label class="col-form-label pt-0" for="exampleInputPassword1">Spotify URL</label>
                            <input class="form-control" required v-model="spotify.link" id="exampleFormControlTextarea4" placeholder="https://open.spotify.com/track/5ry2OE6R2zPQFDO85XkgRb" />
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
export default {
props:['spotify_value'],
 computed: {
      validation() {
        if(this.spotify.name)
            return this.spotify.name.length > 15 ? true : '';
      }
    },
data(){
    return{
        spotify:{},
    }
},
methods:{
    onSubmit(){
        this.$emit('submitSpotify', this.spotify);
    }
},
mounted(){
    // if(this.link_value){
    //     this.link = this.link_value;
    // }
    // this.link.url=this.link_value.url;
}
}
</script>

<style>

</style>
