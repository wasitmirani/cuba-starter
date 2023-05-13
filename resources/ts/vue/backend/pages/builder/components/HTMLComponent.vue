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
                            <input class="form-control" v-model="html_value.text" id="exampleFormControlTextarea4" rows="4" />
                          </div>
                          <div class="mb-1">
                            <label class="col-form-label pt-0" for="exampleInputPassword1">HTML</label>
                            <textarea required  :state="validation" :class="`form-control ${validation ? 'is-invalid' : ''}`" max="40" v-model="html_value.value" id="exampleFormControlTextarea4" rows="4"></textarea>
                            <span class="">{{html_value.value ? html_value.value.length : 0}}/300</span>
                            <div class="invalid-feedback" v-if="validation">quote  must be 1-300 characters long.</div>
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
props:['html_value'],
data(){
    return{
        html_value:{},
    }
},
computed: {
      validation() {
        if(this.html_value.value)
            return this.html_value.value.length > 300 ? true : '';
      }
    },
methods:{
    onSubmit(){
        if(!this.validation)
        this.$emit('submitHtml', this.html_value);
    }
},
mounted(){
    console.log(' i am mounted')
    // if(this.link_value){
    //     this.link = this.link_value;
    // }
    // this.link.url=this.link_value.url;
}
}
</script>

<style>

</style>
