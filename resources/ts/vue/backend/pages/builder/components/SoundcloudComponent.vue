<template>
  <div>

   <div class="col-sm-12">
                    <div class="card">
                      <div class="card-body">
                        <form class="theme-form"  v-on:submit.prevent="onSubmit">
                           <div class="mb-1">
                                <label class="col-form-label pt-0" for="exampleInputPassword1">Soundcloud</label>
                                <input class="form-control" @change="setValue"  placeholder="https://soundcloud.com/octobersveryown/duppy-freestyle" id="exampleFormControlTextarea4"/>
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
props:['soundcloud'],
data(){
    return{
        soundcloud:{},
    }
},
methods:{
    onSubmit(){
        this.$emit('submitSoundcloud', this.soundcloud);
        console.log('ss', this.soundcloud)
    },
    setValue(e) {
 
      let currentValue = e.target.value;
      let finalValue = currentValue.replace('https://soundcloud.com/','');
      this.soundcloud.value = finalValue;
      
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
