<template>
   <div :style="returnStyle" >
    <account-component :account="user" class="component-margin"></account-component>
      <div v-for="item in items" :key="item.id" :state="appearanceStyle" >
        
         <h1  v-if="item.element_type=='heading'" >
            {{item.value}}
         </h1>
         <p v-else-if="item.element_type=='text'" style="text-align: center;">{{item.value}}</p>
         <div v-else-if="item.element_type=='mail'" class="text-center component-margin">
            <button :style="{borderRadius: this.appearance.style.button_style + 'px'}" class="btn btn-primary-gradien mb-2">{{item.value}}</button>
         </div>
         <div  v-else-if="item.element_type=='phone'" class="text-center component-margin">
            <button :style="{borderRadius: this.appearance.style.button_style + 'px'}" class="btn btn-secondary-gradien mb-2">{{item.value}}</button>
         </div>
         <p class="component-margin"  v-else-if="item.element_type=='question'">{{item.value}}</p>
         <p  class="component-margin" v-else-if="item.element_type=='link'">
            <a class="link-element" target="_blank" :style="{color: this.appearance.style.font_color}" :href="item.value">{{item.name}}</a>
         </p>
         <divider-view class="component-margin"   v-else-if="item.element_type=='divider'" :divider="item.value"></divider-view>
         <quote-view class="component-margin" v-else-if="item.element_type=='quote'" :quote="item.value"></quote-view>
         <social-view class="component-margin" :color="this.appearance.style.font_color" :social="item.value" v-else-if="item.element_type=='social'" ></social-view>
         <image-view class="component-margin"  v-else-if="item.element_type=='image'" :image="item.value"></image-view>
         <image-view  class="component-margin" v-else-if="item.element_type=='avatar'" :style="`width:${item.size}px; height:${item.size}px; border:${item.border}px;`" :round="true" :image="item.value"></image-view>
         <html-view class="component-margin" v-else-if="item.element_type=='html'" :html="item.value"></html-view>
         <location-view class="component-margin" :color="this.appearance.style.font_color"  v-else-if="item.element_type=='location'" :location="item"></location-view>
         <spotify-view class="component-margin" v-else-if="item.element_type=='spotify'" :spotify="item"></spotify-view>
         <youtube-view class="component-margin" v-else-if="item.element_type=='youtube'" :youtube="item"></youtube-view>
         <paypal-view class="component-margin" v-else-if="item.element_type=='paypal'" :paypal="item"></paypal-view>
         <soundcloud-view class="component-margin" v-else-if="item.element_type=='soundcloud'" :soundcloud="item"></soundcloud-view>
      </div>
        <branding-component :branding="this.branding"  class="component-margin"></branding-component>
   </div>
</template>
<script>
   import DividerView from "../components/DividerViewComponent.vue";
   import SocialView from "../components/SocialViewComponent.vue";
   import ImageView from "../components/ImageViewComponent.vue";
   import QuoteView from "../components/QuoteViewComponent.vue";
   import HtmlView from "../components/HTMLViewComponent.vue";
   import LocationView from "../components/LocationViewComponent.vue";
   import SpotifyView from "../components/SpotifyViewComponent.vue";
   import YoutubeView from "../components/YoutubeViewComponent.vue";
   import BrandingComponent from "../components/BrandingComponent.vue";
   import AccountComponent from "../components/AccountViewComponent.vue";
   import PaypalView from "../components/PaypalViewComponent.vue";
   import SoundcloudView from "../components/SoundcloudViewComponent.vue";

export default {
      components: { DividerView,SocialView,ImageView,QuoteView,HtmlView,LocationView,SpotifyView,YoutubeView, BrandingComponent, PaypalView, SoundcloudView, AccountComponent},

     props:['items','appearance','branding'],
     setup(props, context) {
    console.log(props.appearance)
     },
     data(){
         return {
             styles:{},
             user:this.$auth_user,
         }
     },
     computed:{
        returnStyle(){
           if(this.appearance.style){
               let style =this.appearance.style;
               let font_style=this.setFontStyle(style.font_style);
               const style_={ color: style.font_color, fontFamily: style.font};
               return {...style_,...font_style};
           }
        },
        appearanceStyle(){
         console.log(this.appearance.style);
         this.loadAppearance();
        }
     },
    watch:{
        // appearance(){
        //   if(this.appearance.style){
        //     let style = this.appearance.style;
        //     return this.styles=  { color: style.font_color, fontFamily: style.font, fontWeight: style.font_style, textDecoration: style.font_style, fontStyle: style.font_style};
        //   }
        // }
    },
    methods:{
        setFontStyle(font){
            switch (font) {
                case 'italic':
                    return {fontStyle:font,fontWeight:'normal',textDecoration:'none'};
                    break;
                 case 'bold':
                    return {fontWeight:font,fontStyle:'normal',textDecoration:'none'};
                    break;
                case 'underline':
                    return {textDecoration:font,fontStyle:'normal',fontWeight:'normal'};
                    break;
                case 'normal':
                    return  {fontStyle:font,textDecoration:'none',fontWeight:font};
                    break;
                default:
                  return  {fontStyle:'normal',textDecoration:'none',fontWeight:'normal'};
                    break;
            }
        },
        loadAppearance(){
            if(this.appearance.style){
            this.styles={};
            let style =this.appearance.style;
            this.styles= { color: style.font_color, fontFamily: style.font, fontWeight: style.font_style,
                           textDecoration: style.font_style, fontStyle: style.font_style
                        };
          }
        }
    },
     mounted(){
        this.loadAppearance();
     }
   }
</script>

