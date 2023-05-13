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
                            <label class="col-form-label pt-0" for="exampleInputPassword1">Address</label>
                            <input class="form-control" placeholder="Address line 1" v-model="location.address" id="exampleFormControlTextarea4" rows="4" />
                          </div>
                          <div class="row">
                            <div class="col-md-5">
                            <label class="col-form-label pt-0" for="exampleInputPassword1">Latitude</label>
                            <input class="form-control" placeholder="0.0000" v-model="location.lat" id="exampleFormControlTextarea4"/>
                            </div>
                             <div class="col-md-5">
                                <label class="col-form-label pt-0" for="exampleInputPassword1">Longitude</label>
                                <input class="form-control"  placeholder="0.0000" v-model="location.lng" id="exampleFormControlTextarea4"/>
                            </div>
                            <div class="col-2">
                            <div class="pt-4" style="font-size: 26px;">
                                <a class="badge rounded-pill badge-primary" role="button" @click="getLocation">
                                <i class="icofont icofont-location-pin"></i>
                            </a>
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
export default {
props:['location'],
data(){
    return{
        location:{},
        errors:{},
    }
},
methods:{
    getLocation(){
             if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.showPosition);
            } else {
            this.errors.message = "Geolocation is not supported by this browser.";
            }
    },
    showPosition(position) {
       this.location.lat= position.coords.latitude;
       this.location.lng= position.coords.longitude;

    },
    onSubmit(){
        this.$emit('submitLocation', this.location);
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
