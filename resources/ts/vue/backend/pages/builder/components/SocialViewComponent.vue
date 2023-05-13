<template>
  <div>
  <div class="row social-set" id="social-test" :style="{background: 'transparent'}">
    
 
                <ul class="social">
                    <a  target="_blank"  :href="`mailto:${social.email}`"><li v-show="social.email"><i class="icon-size icofont icofont-envelope font-size-18 margin-2 cursor-pointer" :style="{color: this.color}" aria-hidden="true"></i></li>    </a>
                    <a  target="_blank" :href="social.facebook"><li v-show="social.facebook"><i class=" icon-size icofont icofont-social-facebook font-size-18 margin-2 cursor-pointer" aria-hidden="true" :style="{color: this.color}"></i></li>    </a>
                    <a  target="_blank" :href="social.telephone"><li v-show="social.telephone"><i class="icon-size icofont icofont-ui-touch-phone font-size-18 margin-2 cursor-pointer" aria-hidden="true" :style="{color: this.color}"></i></li>    </a>
                    <a  target="_blank" :href="social.telegram"><li v-show="social.telegram"><i class="icon-size icofont icofont-social-telegram font-size-18 margin-2 cursor-pointer" aria-hidden="true" :style="{color: this.color}"></i></li>    </a>
                    <a  target="_blank" :href="social.whatsapp"><li v-show="social.whatsapp"><i class="icon-size icofont icofont-brand-whatsapp font-size-18 margin-2 cursor-pointer" aria-hidden="true" :style="{color: this.color}"></i></li>    </a>
                    <a  target="_blank" :href="social.facebook_page"><li v-show="social.facebook_page"><i class="icon-size icofont icofont-brand-facebook font-size-18 margin-2 cursor-pointer" aria-hidden="true" :style="{color: this.color}"></i></li>    </a>
                    <a  target="_blank" :href="social.instagram"><li v-show="social.instagram"><i class="icon-size icofont icofont-social-instagram font-size-18 margin-2 cursor-pointer" aria-hidden="true" :style="{color: this.color}"></i></li>    </a>
                    <a  target="_blank" :href="social.twitter"><li v-show="social.twitter"><i class="icon-size icofont icofont-social-twitter font-size-18 margin-2 cursor-pointer" aria-hidden="true" :style="{color: this.color}"></i></li>    </a>
                    <a  target="_blank" :href="social.tumbler"><li v-show="social.tumbler"><i class="icon-size icofont icofont-social-tumblr font-size-18 margin-2 cursor-pointer" aria-hidden="true" :style="{color: this.color}"></i></li>    </a>
                    <a  target="_blank" :href="social.youtube"><li v-show="social.youtube"><i class="icon-size icofont icofont-social-youtube-play font-size-18 margin-2 cursor-pointer" aria-hidden="true" :style="{color: this.color}"></i></li>    </a>
                    <a  target="_blank" :href="social.soundcloud"><li v-show="social.soundcloud"><i class="icon-size icofont icofont-social-soundcloud font-size-18 margin-2 cursor-pointer" aria-hidden="true" :style="{color: this.color}"></i></li>    </a>
                    <a  target="_blank" :href="social.twitch"><li v-show="social.twitch"><i class="icon-size icofont icofont-social-twitch font-size-18 margin-2 cursor-pointer" aria-hidden="true" :style="{color: this.color}"></i></li>    </a>
                </ul>
  
              <!-- <div class="col-2 mt-2" v-show="social.email">
                  <a :href="`mailto:${social.email}`" target="_blank">
                    <i class=" icon-size icofont icofont-envelope font-size-30 margin-2 cursor-pointer" :style="{color: this.color}"></i>
                    </a>
              </div>
              <div class="col-2 mt-2" v-show="social.facebook">
                  <a :href="social.facebook" target="_blank">
                    <i class=" icon-size icofont icofont-social-facebook font-size-22 margin-2 cursor-pointer" :style="{color: this.color}"></i>
                    </a>
               </div>
                <div class="col-2 mt-2" v-show="social.telephone">
                    <a :href="`tel:${social.telephone}`" target="_blank">
                    <i class="icon-size icofont icofont-ui-touch-phone font-size-22 margin-2 cursor-pointer" :style="{color: this.color}"></i>
                    </a>
               </div>
               <div class="col-2 mt-2" v-show="social.telegram">
                   <a :href="`https://telegram.me/${social.telegram}`" target="_blank">
                    <i class="icon-size icofont icofont-social-telegram font-size-22 margin-2 cursor-pointer" :style="{color: this.color}"></i>
                   </a>
               </div>
                <div class="col-2 mt-2" v-show="social.whatsapp">
                   <a :href="`https://telegram.me/${social.whatsapp}`" target="_blank">
                    <i class="icon-size icofont icofont-brand-whatsapp font-size-22 margin-2 cursor-pointer" :style="{color: this.color}"></i>
                   </a>
               </div>
                <div class="col-2 mt-2" v-show="social.facebook_page">
                   <a :href="`${social.facebook_page}`" target="_blank">
                    <i class="icon-size icofont icofont-brand-facebook font-size-22 margin-2 cursor-pointer" :style="{color: this.color}"></i>
                   </a>
               </div>
                <div class="col-2 mt-2" v-show="social.instagram">
                   <a :href="`${social.instagram}`" target="_blank">
                    <i class="icon-size icofont icofont-social-instagram font-size-22 margin-2 cursor-pointer" :style="{color: this.color}"></i>
                   </a>
               </div>
                 <div class="col-2 mt-2" v-show="social.twitter">
                   <a :href="`${social.twitter}`" target="_blank">
                    <i class="icon-size icofont icofont-social-twitter font-size-22 margin-2 cursor-pointer" :style="{color: this.color}"></i>
                   </a>
               </div>
                <div class="col-2 mt-2" v-show="social.tiktok">
                   <a :href="`${social.tiktok}`" target="_blank">
                    <i class="icon-size icofont icofont-social-tumblr font-size-22 margin-2 cursor-pointer" :style="{color: this.color}"></i>
                   </a>
               </div>
                <div class="col-2 mt-2" v-show="social.youtube">
                   <a :href="`${social.youtube}`" target="_blank">
                    <i class="icon-size icofont icofont-social-youtube-play font-size-22 margin-2 cursor-pointer" :style="{color: this.color}"></i>
                   </a>
               </div>
                <div class="col-2 mt-2"  v-show="social.soundcloud">
                   <a :href="`${social.soundcloud}`" target="_blank">
                    <i class="icon-size icofont icofont-social-soundcloud font-size-22 margin-2 cursor-pointer" :style="{color: this.color}"></i>
                   </a>
               </div>
                <div class="col-2 mt-2" v-show="social.twitch">
                   <a :href="`${social.twitch}`" target="_blank">
                    <i class="icon-size icofont icofont-social-twitch font-size-22 margin-2 cursor-pointer" :style="{color: this.color}"></i>
                   </a>
               </div> -->




  </div>
  </div>
</template>

<script>
export default {
props:['social','color'],

}
</script>

<style>
.icon-size{
        font-size: 18px;
        margin-top: 20px;
        margin-bottom: 20px;
        /* color: var(--bs-light); */
}
.social-set{
    padding: 10px;
    border-radius: 12px;
}

#social-test {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  font-size: 30px;
    }
 #social-test h2 {
    color: #fff;
    font-family: Futura, "Trebuchet MS", Arial, sans-serif;
    font-weight: 100;
  }
 #social-test .social {
    padding-left: 0px;
  }
 #social-test li {
    color: rgba(167, 146, 129, 0.6);
    list-style-type: none;
    display: inline-block;
    width: 30px;
    height: 30px;
    line-height: 15px;
    padding: 1%;
    border: 1px solid rgba(167, 146, 129, 0.4);
    cursor: pointer;
    margin-left: 10px;
    margin-bottom: 20px;
    transition: ease .3s;
   
}

#social-test .social:hover > li {
  opacity: 0.5;
}

#social-test .social:hover > li:hover {
  opacity: 1;
}

</style>
