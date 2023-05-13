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
                            <label class="col-form-label pt-0" for="exampleInputPassword1">Quote</label>
                            <textarea required  :state="validation" :class="`form-control ${validation ? 'is-invalid' : ''}`" max="40" v-model="quote.text" id="exampleFormControlTextarea4" rows="4"></textarea>
                            <span class="">{{quote.text ? quote.text.length : 0}}/100</span>
                            <div class="text-danger" v-if="validation">quote  must be 1-100 characters long.</div>
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
props:['quote_value'],
data(){
    return{
        quote:{},
    }
},
 computed: {
      validation() {
        if(this.quote.text)
            return this.quote.text.length > 100 ? true : '';
      }
    },
methods:{
    onSubmit(){
        if(!this.validation)
          this.$emit('submitQuote', this.quote);
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
