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
                              <label class="col-form-label pt-0" for="exampleInputPassword1">Type</label>
                                          <select  class="form-select digits" id="exampleFormControlSelect9" v-model="paypal.type">
                                                <option value="buy_now"  >Buy Now</option>
                                                <option value="add_to_cart"  >Add To Cart</option>
                                                <option value="donation"  >Donation</option>
                                             </select>
                          </div>
                           <div class="mb-1">
                            <label class="col-form-label pt-0" for="exampleInputPassword1">Paypal Email</label>
                            <input class="form-control" v-model="paypal.paypal_email" id="exampleFormControlTextarea4" rows="4" required />
                          </div>
                            <div class="mb-1">
                            <label class="col-form-label pt-0" for="exampleInputPassword1">Product Title</label>
                            <input class="form-control" v-model="paypal.product_title" id="exampleFormControlTextarea4" rows="4" required />
                          </div>
                            <div class="mb-1">
                            <label class="col-form-label pt-0" for="exampleInputPassword1">Currency Code</label>
                            <input class="form-control" v-model="paypal.currency_code" id="exampleFormControlTextarea4" rows="4" required />
                          </div>
                           <div class="mb-1">
                            <label class="col-form-label pt-0" for="exampleInputPassword1">Price</label>
                            <input class="form-control" v-model="paypal.price" id="exampleFormControlTextarea4" rows="4" required />
                          </div>
                           <div class="mb-1">
                            <label class="col-form-label pt-0" for="exampleInputPassword1">Name</label>
                            <input class="form-control" v-model="paypal.name" id="exampleFormControlTextarea4" rows="4" required />
                          </div>
                           <div class="mb-1">
                                        <label class="col-form-label pt-0" for="exampleInputPassword1">Thank You URL Icon</label>
                                        <input class="form-control" v-model="paypal.thankyou_url" id="exampleFormControlTextarea4" rows="4" />
                                      </div>
                                       <div class="mb-1">
                                        <label class="col-form-label pt-0" for="exampleInputPassword1">Cancelled Payment URL</label>
                                        <input type="text" class="form-control" v-model="paypal.cancel_url" id="exampleFormControlTextarea4" rows="4" />
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
props:['paypal'],
data(){
    return{
        paypal:{},
    }
},
methods:{
    onSubmit(){
        this.$emit('submitPaypal', this.paypal);
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
