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
                            <label class="col-form-label pt-0" for="exampleInputPassword1">Youtube URL</label>
                            <input class="form-control" placeholder="Youtube URL" v-model="youtube.link" id="exampleFormControlTextarea4" 
                            rows="4" />
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
props:['youtube'],
data(){
    return{
        youtube:{},
    }
},
computed:{
    youtube_embedded_value(){
        const params = new URL(this.youtube.link).searchParams;
              params.get('v');
        return params.get('v');
    }
},
methods:{
    onSubmit(){

        this.youtube.link = 'https://www.youtube.com/embed/' + this.youtube_embedded_value;
        this.$emit('submitYoutube', this.youtube);
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
