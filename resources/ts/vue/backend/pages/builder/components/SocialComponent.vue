<template>
  <div>

   <div class="col-sm-12">
                    <div class="card">
                      <!-- <div class="card-header pb-0">
                        <h5>Default Form Layout</h5><span>Using the <a href="#">card</a> component, you can extend the default collapse behavior to create an accordion.</span>
                      </div> -->
                      <div class="card-body element-table">
                        <!-- <div class="mb-1">
                            <label class="col-form-label pt-0" for="exampleInputPassword1">Choose Background</label>
                                  <select class="form-select digits" id="exampleFormControlSelect9" @change="changeBackgroundColor" v-model="selectedBackground">
                                    <option :key="color.id" v-for="color in backgroundColors" :value="color.primary" >{{ color.name }}</option>
                                 </select>
                        </div> -->
                        <form class="theme-form"  v-on:submit.prevent="onSubmit">

                          <div class="mb-3 input-group-square">
                            <label class="form-label">Email</label>
                                <div class="input-group">
                                    <span class="input-group-text">
                                    <i class="fa fa-envelope"></i>
                                    </span>
                                    <input type="email" class="form-control input-group-air" v-model="social.email" id="exampleFormControlTextarea4" placeholder="Email" />
                                </div>
                          </div>
                           <div class="mb-3 input-group-square">
                            <label class="form-label">Facebook</label>
                                <div class="input-group">
                                    <span class="input-group-text">
                                    <i class="fa fa-facebook"></i>
                                    </span>
                                    <input type="url" class="form-control input-group-air" v-model="social.facebook" id="exampleFormControlTextarea4" placeholder="Facebook" />
                                </div>
                          </div>
                           <div class="mb-3 input-group-square">
                            <label class="form-label">Telephone</label>
                                <div class="input-group">
                                    <span class="input-group-text">
                                    <i class="fa fa-mobile"></i>
                                    </span>
                                    <input type="tel" class="form-control input-group-air" v-model="social.telephone" id="exampleFormControlTextarea4" placeholder="Telephone" />
                                </div>
                          </div>
                            <div class="mb-3 input-group-square">
                            <label class="form-label">Telegram</label>
                                <div class="input-group">
                                    <span class="input-group-text">
                                    <i class="fa fa-telegram"></i>
                                    </span>
                                    <input type="tel" class="form-control input-group-air" v-model="social.telegram" id="exampleFormControlTextarea4" placeholder="Telegram" />
                                </div>
                          </div>
                           <div class="mb-3 input-group-square">
                            <label class="form-label">Whatsapp</label>
                                <div class="input-group">
                                    <span class="input-group-text">
                                    <i class="fa fa-whatsapp"></i>
                                    </span>
                                    <input type="tel" class="form-control input-group-air" v-model="social.whatsapp" id="exampleFormControlTextarea4" placeholder="Whatsapp" />
                                </div>
                          </div>
                           <!-- <div class="mb-3 input-group-square">
                            <label class="form-label">Facebook Page</label>
                                <div class="input-group">
                                    <span class="input-group-text">
                                    <i class="fa fa-facebook-square"></i>
                                    </span>
                                    <input type="url" class="form-control input-group-air" v-model="social.facebook_page" id="exampleFormControlTextarea4" placeholder="Facebook Page" />
                                </div>
                          </div> -->
                           <div class="mb-3 input-group-square">
                            <label class="form-label">Instagram</label>
                                <div class="input-group">
                                    <span class="input-group-text">
                                    <i class="fa fa-instagram"></i>
                                    </span>
                                    <input type="url" class="form-control input-group-air" v-model="social.instagram" id="exampleFormControlTextarea4" placeholder="Instagram" />
                                </div>
                          </div>
                           <div class="mb-3 input-group-square">
                            <label class="form-label">Twitter</label>
                                <div class="input-group">
                                    <span class="input-group-text">
                                    <i class="fa fa-twitter"></i>
                                    </span>
                                    <input type="url" class="form-control input-group-air" v-model="social.twitter" id="exampleFormControlTextarea4" placeholder="Twitter" />
                                </div>
                          </div>
                            <div class="mb-3 input-group-square">
                            <label class="form-label">TikTok</label>
                                <div class="input-group">
                                    <span class="input-group-text">
                                    <i class="fa fa-tiktok"></i>
                                    </span>
                                    <input type="url" class="form-control input-group-air" v-model="social.tiktok" id="exampleFormControlTextarea4" placeholder="Tiktok" />
                                </div>
                          </div>
                           <div class="mb-3 input-group-square">
                            <label class="form-label">YouTube</label>
                                <div class="input-group">
                                    <span class="input-group-text">
                                    <i class="fa fa-youtube"></i>
                                    </span>
                                    <input   type="url" class="form-control input-group-air" v-model="social.youtube" id="exampleFormControlTextarea4" placeholder="Youtube" />
                                </div>
                          </div>
                           <div class="mb-3 input-group-square">
                            <label class="form-label">SoundCloud</label>
                                <div class="input-group">
                                    <span class="input-group-text">
                                    <i class="fa fa-soundcloud"></i>
                                    </span>
                                    <input  type="url" class="form-control input-group-air" v-model="social.soundcloud" id="exampleFormControlTextarea4" placeholder="Soundcloud" />
                                </div>
                          </div>
                          <div class="mb-3 input-group-square">
                            <label class="form-label">LinkedIn</label>
                                <div class="input-group">
                                    <span class="input-group-text">
                                    <i class="fa fa-linkedin"></i>
                                    </span>
                                    <input type="url"  class="form-control input-group-air" v-model="social.linkedin" id="exampleFormControlTextarea4" placeholder="Linkedin" />
                                </div>
                          </div>
                          <div class="mb-3 input-group-square">
                            <label class="form-label">Spotify</label>
                                <div class="input-group">
                                    <span class="input-group-text">
                                    <i class="fa fa-spotify"></i>
                                    </span>
                                    <input  type="url" class="form-control input-group-air" v-model="social.spotify" id="exampleFormControlTextarea4" placeholder="Spotify" />
                                </div>
                          </div>
                          <!-- <div class="mb-3 input-group-square">
                            <label class="form-label">Pinterest</label>
                                <div class="input-group">
                                    <span class="input-group-text">
                                    <i class="fa fa-pinterest"></i>
                                    </span>
                                    <input  type="url" class="form-control input-group-air" v-model="social.pinterest" id="exampleFormControlTextarea4" placeholder="Pinterest" />
                                </div>
                          </div> -->
                           <div class="mb-3 input-group-square">
                            <label class="form-label">Snapchat</label>
                                <div class="input-group">
                                    <span class="input-group-text">
                                    <i class="fa fa-snapchat"></i>
                                    </span>
                                    <input type="url" class="form-control input-group-air" v-model="social.snapchat" id="exampleFormControlTextarea4" placeholder="Snapchat" />
                                </div>
                          </div>
                          <div class="mb-3 input-group-square">
                            <label class="form-label">Twitch</label>
                                <div class="input-group">
                                    <span class="input-group-text">
                                    <i class="fa fa-twitch"></i>
                                    </span>
                                    <input type="url" class="form-control input-group-air" v-model="social.twitch" id="exampleFormControlTextarea4" placeholder="Twitch" />
                                </div>
                          </div>
                           <div class="mb-3 input-group-square">
                            <label class="form-label">Discord</label>
                                <div class="input-group">
                                    <span class="input-group-text">
                                    <i class="fab fa-discord"></i>
                                    </span>
                                    <input type="url" class="form-control input-group-air" v-model="social.discord" id="exampleFormControlTextarea4" placeholder="Discord" />
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
import {fontColors}  from "../elements/fontcolors";
export default {
props:['social_value'],
data(){
    return{
        social:{},
        backgroundColors:fontColors
        
    }
},
methods:{
    onSubmit(){
        this.$emit('submitSocial', this.social);
    },
    changeBackgroundColor(e){
        let background = {
            backgroundColor:e.target.value
        }
        this.social = {...this.social, ...background};

    },
    
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
