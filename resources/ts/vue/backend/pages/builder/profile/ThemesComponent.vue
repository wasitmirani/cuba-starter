<template>
  <div>

                              <div class="card-header pb-0">
                                 <h5>Choose Branding</h5>

                              </div>
                              <div  :state="saveBranding">


                              <div class="card-body " >
                                 <div class="row">
                                    <div class="media">
                                       <label class="col-form-label">Show Branding</label>
                                       <div class="media-body text-end icon-state ">
                                          <label class="switch">
                                          <input type="checkbox" v-model="this.branding.active" checked=""><span class="switch-state"></span>
                                          </label>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="row">
                                    <div class="col">
                                       <div class="mb-3">
                                          <label class="form-label" for="exampleFormControlInput1">Branding Name</label>
                                          <input class="form-control" v-model="this.branding.name" id="exampleFormControlInput1" type="text" placeholder="Zeta">
                                       </div>
                                    </div>
                                 </div>
                                 <div class="row">
                                    <div class="col">
                                       <div class="mb-3">
                                          <label class="form-label" for="exampleFormControlInput1">Branding URL</label>
                                          <input class="form-control" v-model="this.branding.url" id="exampleFormControlInput1" type="url" placeholder="www.zeta.com">
                                       </div>
                                    </div>
                                 </div>
                                 <div class="row">
                                    <div class="col">
                                       <div class="mb-3">
                                          <label class="form-label" for="exampleFormControlInput1">Text Color</label>
                                          <input class="form-control" v-model="this.branding.color" id="exampleFormControlInput1" type="color" placeholder="Color Picker">
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="card-header pb-0">
                                 <h5>Choose Font</h5>
                              </div>
                              <div class="card-body ">
                                 <div class="row">
                                    <div class="row">
                                       <div class="col">
                                          <div class="mb-3">
                                            <select class="form-select digits" v-model="selectedFont" name="fontFamily" @change="changeFont"  id="fontFamily">
                                                      <option v-for="font in fonts" :key="font.id" :style="{fontFamily: font.value}" :value="font.value">{{font.name}}</option>
                                                   </select>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="row">
                                       <div class="col">
                                          <div class="mb-3">
                                             <label class="form-label" for="exampleFormControlInput1">Font Size</label>
                                             <input class="form-control" :state="validateFontSize" :class="`form-control ${validateFontSize ? 'is-invalid' : ''}`"    v-model="this.branding.fontSize" id="exampleFormControlInput1" type="number" placeholder="Font Size">
                                         <div class="invalid-feedback" v-if="validateFontSize">Font size  must be 9-30 weight long.</div>
                                          </div>

                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="card-header pb-0">
                                 <h5>Choose Protection</h5>
                              </div>
                              <div class="card-body ">
                                 <div class="row">
                                    <div class="col">
                                       <div class="mb-3">
                                          <label class="form-label" for="exampleFormControlInput1">Password</label>
                                          <input class="form-control" v-model="branding.password" id="exampleFormControlInput1" type="password" placeholder="Password">
                                       </div>
                                    </div>
                                 </div>
                                 <div class="row">
                                    <div class="media">
                                       <label class="col-form-label">Sensitive Content Warning</label>
                                       <div class="media-body text-end icon-state">
                                          <label class="switch">
                                          <input type="checkbox" v-model="branding.sensitive_content" :checked="branding.sensitive_content" @click="setSensitive" ><span class="switch-state"></span>
                                          </label>
                                       </div>
                                    </div>
                                    
                                 </div>
                              </div>
                               </div>
  </div>
</template>

<script>
import {fonts}  from "../elements/fonts";
export default {
   props: ['branding'],
   computed: {
      validateFontSize() {
        // if(this.branding.fontSize){
        //         if( this.branding.fontSize> 8 && this.branding.fontSize < 31) {
        //   return false;
        // } else {
        // //   this.branding.fontSize="";
        //   return true;
        // }
        // }

      },
     
      saveBranding() {
        if(!this.validateFontSize)
          localStorage.setItem('branding', JSON.stringify(this.branding));
      }
   },
   data(){
      return {
         fonts: fonts,
         selectedFont: '',
      }
   },
   created() {
       this.loadBranding();

   },
   methods: {
       setSensitive(e){
         console.log('ee', e.target.checked)
         this.branding.sensitive_content = e.target.checked

      },
      loadBranding(){
         if( this.branding.fontFamily){
            this.selectedFont = this.branding.fontFamily;
          }
      },
      changeFont(e){
         this.branding.fontFamily = e.target.value;
      }
   },

}
</script>

<style>

</style>
