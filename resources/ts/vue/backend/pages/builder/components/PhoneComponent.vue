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
                            <label class="col-form-label pt-0" for="exampleInputPassword1">Name</label>
                            <input class="form-control" v-model="phone.value" id="exampleFormControlTextarea4" rows="4" required />
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
props:['phone'],
data(){
    return{
        phone:{},
    }
},
methods:{
    onSubmit(){
        this.$emit('submitPhone', this.phone);
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
