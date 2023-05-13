<template>
<div>
      <div class="col-sm-12" >
                    <div class="card">
                      <!-- <div class="card-header pb-0">
                        <h5>Default Form Layout</h5><span>Using the <a href="#">card</a> component, you can extend the default collapse behavior to create an accordion.</span>
                      </div> -->
                      <div class="card-body">
                        <form class="theme-form"  v-on:submit.prevent="onSubmit">

                          <div class="mb-1">
                            <label class="col-form-label pt-0" for="exampleInputPassword1">Name</label>
                            <input class="form-control" id="exampleInputPassword1" v-model="link.name" type="text" placeholder="Enter Name" required>
                          </div>
                          <div class="mb-1">
                            <label class="col-form-label pt-0" for="exampleInputEmail1"> <i class="fa fa-unlink"></i> Destination URL</label>
                            <input class="form-control" id="exampleInputEmail1" required v-model="link.url" type="text" aria-describedby="emailHelp" placeholder="https://domain.com/demo/url-demo">
                            <!-- <small class="form-text text-muted" id="emailHelp">We'll never share your email with anyone else.</small> -->
                          </div>
                          <div class="mt-4">
                             <button class="btn btn-pill btn-primary btn-air-primary" type="submit" v-if="!edit_mode">Submit</button>
                              <button class="btn btn-pill btn-success btn-air-success" type="submit" v-else>Update</button>
                          </div>


                        </form>
                      </div>

                    </div>
             </div>
</div>
</template>

<script>
export default {
props:['link_value'],
data(){
    return{
        link:{},
        edit_mode:false,
    }
},
methods:{
    onSubmit(){
        this.$emit('submitLink',this.link);
    },
    resetForm(){
        this.link = {};
        this.edit_mode=false;
    },
},
  watch: {
    link_value(collection) {
      if (collection == null) {
        return this.resetForm();
      }
      if (collection) {
       this.link = collection;
        this.link.url=collection.value;
        this.edit_mode =true;
        console.log('test',collection);
      } else {
        this.resetForm();
      }
    },
  },
mounted(){

    if(this.link_value.index){
       this.link = this.link_value;
        this.link.url=this.link_value.value;
        this.edit_mode =true;
    }
    else {
        this.resetForm();
    }

    // this.link.url=this.link_value.url;
}
}
</script>

<style>

</style>
