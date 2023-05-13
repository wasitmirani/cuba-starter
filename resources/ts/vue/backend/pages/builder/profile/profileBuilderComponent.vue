<template>
   <div>
      <Breadcrumb active_name="Profile Builder" :items="[{name:'Links',link:'/bio-links'}]"></Breadcrumb>
      <div class="container-fluid">
         <div class="row test-color">
            <div class="col-md-12 project-list">
               <div class="card">
                  <div class="row">
                     <div class="col-md-6 p-0">
                        <ul class="nav nav-tabs border-tab" id="top-tab" role="tablist">
                           <li class="nav-item">
                              <a class="nav-link active" id="top-home-tab"  data-bs-toggle="tab" href="#top-home" role="tab" aria-controls="top-home" aria-selected="true">
                              Blocks
                              </a>
                           </li>
                           <li class="nav-item">
                              <a class="nav-link" id="profile-top-tab" data-bs-toggle="tab" href="#top-profile" role="tab" aria-controls="top-profile" aria-selected="false">
                              Appearance
                              </a>
                           </li>
                           <li class="nav-item">
                              <a class="nav-link" id="contact-top-tab" data-bs-toggle="tab" href="#top-contact" role="tab" aria-controls="top-contact" aria-selected="false">
                              Settings
                              </a>
                           </li>
                           <li class="nav-item">
                              <a class="nav-link" id="settings-top-tab" data-bs-toggle="tab" href="#top-settings" role="tab" aria-controls="top-settings" aria-selected="false">
                              Themes
                              </a>
                           </li>
                        </ul>
                     </div>
                     <div class="col-md-6 p-0">
                        <button class="btn btn-pill btn-primary btn-air-primary" >
                        Live Preview
                        </button>
                        <button class="mr-4 btn btn-pill btn-success btn-air-success" style="margin-right:10px;" @click="onSubmit">
                        Save
                        </button>
                     </div>

                  </div>
               </div>
            </div>
            <div class="col-xl-7 col-md-12 box-col-12">
               <div class="md-sidebar-aside job-left-aside custom-scrollbar">
                  <div class="file-sidebar">
                     <div class="card">
                        <div class="tab-content" id="top-tabContent">
                           <div class="tab-pane fade active show" id="top-home" role="tabpanel" aria-labelledby="top-home-tab">
                              <div class="card-body">
                                 <button class="btn btn-pill btn-primary btn-air-primary" @click="openModal">
                                 Create New Block
                                 </button>
                                 <hr />
                                 <!-- Builder -->
                                 <builder-content class="element-container" :items="current_blocks" v-on:edit-element="editElement($event)" v-on:setItems="setBlockItems($event)"></builder-content>
                              </div>
                           </div>
                           <div class="tab-pane fade" id="top-profile" role="tabpanel" aria-labelledby="top-home-tab">
                               <!-- Appearance -->
                               <appearance :user="this.user"  v-on:changeFontColor="changeFontColor($event)" v-on:changeAnimatedBackground="changeColor($event)" v-on:changeButtonStyle="changeButtonStyle" v-on:changeFontStyle="changeFontStyle($event)" v-on:changeFont="changeFont($event)"  :appearance="appearance"  :fonts="fonts" :bg_colors="bg_colors" :font_colors="font_colors"  v-on:changeColor="changeColor($event)"></appearance>
                           </div>
                           <div class="tab-pane fade" id="top-contact" role="tabpanel" aria-labelledby="top-home-tab">
                               <!-- Themees -->
                               <themes :branding="this.branding"  ></themes>
                           </div>
                            <div class="tab-pane fade" id="top-settings" role="tabpanel" aria-labelledby="top-home-tab">
                               <!-- Settings -->
                               <settings   ></settings>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-xl-5 col-md-12 box-col-12">

               <div class="card">
                  <div class="iphone-x " :class="this.background_color.type == 'animated' ? this.background_color.primary : 'iphone-background'"  >
                     <div class="mt-4 phone-element">
                        <phone-elements-component :branding="this.branding" :button_style="this.button_style" :appearance="appearance" :font_color="font_color" :font="font" :font_style="font_style" :items="current_blocks"></phone-elements-component>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <!-- ADD NEW BLOCK START-->
   <div class="modal fade" tabindex="-1" role="dialog" aria-hidden="true" id="modal-example">
   <div class="modal-dialog modal-lg">
      <div class="modal-content">
         <div class="modal-header">
            <h4 class="modal-title">
               <button v-show="elementClicked" class="btn btn-pill btn-primary btn-air-primary" type="button" @click="() => {this.elementClicked = false;}">
               <i class="fa fa-chevron-circle-left mr-4"></i> </button> Add a {{elementClickedType ? elementClickedType+' block' : 'new block' }}
            </h4>
            <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" ></button>
         </div>
         <div class="modal-body"  style="background-color: #f4f6fd;">
            <div class="col-12 ">
               <div class="card-body pt-0">
                  <div v-if="!elementClicked">
                     <input class="form-control" id="url"  type="search" v-model="query"  v-on:keyup="searchQuery" placeholder="Search Block"/>
                     <hr>
                     <div class="element-table">
                        <div class="table-responsive custom-scrollbar">
                           <table class="table table-bordernone">
                              <tbody>

                                 <tr v-if="loading">
                                    <div class="col">
                                       <div class="loader-box">
                                          <div class="loader-18"></div>
                                       </div>
                                    </div>
                                 </tr>
                                 <tr v-else v-for="item in elements" :key="item.id">
                                    <div class="element-inner-container">

                                       <td @click="selectedElement(item.element_type)">
                                          <div class="media">
                                             <div v-html="$filters.elementType(item.element_type)" />
                                                <div class="media-body">
                                                   <h5 class="m-0">{{ item.name  }}</h5>
                                                   <p>{{ item.description }}...</p>
                                                </div>
                                             </div>
                                       </td>
                                       </div>
                                 </tr>
                                 <tr v-if="elements.length<1">
                                 <div class="col">
                                 <div class="alert alert-light inverse alert-dismissible fade show" role="alert"><i class="icon-alert txt-dark"></i>
                                       <p>Not found any block "{{this.query}}" in the list</p>
                                 </div>
                                 </div>
                                 </tr>
                              </tbody>
                           </table>
                           </div>
                        </div>
                     </div>
                     <div v-else>

                        <link-component v-show="elementClickedType=='link'" v-on:submitLink="getLink($event)" :link_value="current_element" />
                        <text-component v-show="elementClickedType=='text'" v-on:submitText="getText($event)" :text_value="items.text" />
                        <heading-component v-show="elementClickedType=='heading'" v-on:submitText="getHeading($event)" :heading_value="items.text" />
                        <image-component v-show="elementClickedType=='image'" v-on:submitImage="getImage($event)" :image_value="items.image" />
                        <social-component v-show="elementClickedType=='social'" v-on:submitSocial="getSocial($event)" :social_value="items.image" />
                        <video-component v-show="elementClickedType=='video'" v-on:submitVideo="getVideoLink($event)" :video_value="items.video_link"></video-component>
                        <quote v-show="elementClickedType=='quote'" v-on:submitQuote="getQuote($event)" :quote_value="items.quote"></quote>
                        <avatar-component v-show="elementClickedType=='avatar'" v-on:submitAvatar="getAvatar($event)" :avatar_value="items.image" />
                        <divider-component v-show="elementClickedType=='divider'" v-on:submitDivider="getDivider($event)" :divider_value="items" />
                        <html-component v-show="elementClickedType=='html'" v-on:submitHtml="getHTML($event)" :html_value="items.value" />
                        <location-component v-show="elementClickedType=='location'" v-on:submitLocation="getLocation($event)" :location_value="items" />
                        <spotify-component v-show="elementClickedType=='spotify'" v-on:submitSpotify="getSpotify($event)" :spotify_value="items.value" />
                        <question-component v-show="elementClickedType=='question'" v-on:submitQuestion="getQuestion($event)" :question_value="items.value" />
                        <youtube-component v-show="elementClickedType=='youtube'" v-on:submitYoutube="getYoutube($event)" :youtube="items.value" />
                        <mail-component v-show="elementClickedType=='mail'" v-on:submitMail="getMail($event)" :mail="items.value" />
                        <phone-component v-show="elementClickedType=='phone'" v-on:submitPhone="getPhone($event)" :phone="items.value" />
                        <paypal-component v-show="elementClickedType=='paypal'" v-on:submitPaypal="getPaypal($event)" :paypal="items.value" />
                        <soundcloud-component v-show="elementClickedType=='soundcloud'" v-on:submitSoundcloud="getSoundcloud($event)" :soundcloud="items.value" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <!-- ADD NEW BLOCK END-->
</template>
<script>

   import LinkComponent from "../components/LinkCompoent.vue";
   import TextComponent from "../components/TextComponent.vue";
   import HeadingComponent from "../components/HeadingComponent.vue";
   import ImageComponent from "../components/ImageComponent.vue";
   import AvatarComponent from "../components/AvatarComponent.vue";
   import SocialComponent from "../components/SocialComponent.vue";
   import VideoComponent from "../components/VideoComponent.vue";
   import DividerComponent from "../components/DividerComponent.vue";
   import { elementsItems } from "../elements/elements.js";
   import {bgColors}  from "../elements/bgcolors";
   import {fontColors}  from "../elements/fontcolors";
   import {fonts}  from "../elements/fonts";
   import Quote from '../components/QuoteComponent.vue';
   import HtmlComponent from "../components/HTMLComponent.vue";
   import LocationComponent from "../components/LocationComponent.vue";

   import SpotifyComponent from "../components/SpotifyComponent.vue";
   import QuestionComponent from "../components/QuestionComponent.vue";
   import YoutubeComponent from "../components/YoutubeComponent.vue";
   import MailComponent from "../components/MailComponent.vue";
   import PhoneComponent from "../components/PhoneComponent.vue";
   import PaypalComponent from "../components/PaypalComponent.vue";
   import SoundcloudComponent from "../components/SoundcloudComponent.vue";


   import PhoneElementsComponent from './PhoneElementsComponent.vue';
   import BuilderContent from "./BuilderContentComponent.vue";
   import Themes from "./ThemesComponent.vue";
   import Settings from "./SettingsComponent.vue";
   import Appearance from "./AppearanceComponent.vue";
   export default {
     components: { Quote,Themes,Appearance,VideoComponent,LinkComponent,TextComponent, HeadingComponent, ImageComponent,
                   SocialComponent, AvatarComponent, DividerComponent,PhoneComponent,BuilderContent,PhoneElementsComponent,
                   HtmlComponent, LocationComponent, SpotifyComponent, QuestionComponent, YoutubeComponent, MailComponent, PaypalComponent,
                    Settings, SoundcloudComponent
                },
     data() {
       return {
         current_blocks: [],
         element: [],
         elementsItems:elementsItems,
         elements: elementsItems,
         elementClicked: false,
         colors:{},
         bg_colors:bgColors,
         font_colors:fontColors,
         fonts:fonts,
         loading:false,
         edit_mode:false,
         branding: {
            name: 'PixelLink',
            url: 'https://pixeliconic.com',
            color: '#e1e1e1',
            active: true,
            fontFamily: '"Roboto", sans-serif',
            fontSize: '14',
            sensitive_content: 0,
         },
         elementClickedType: '',
         colorFromScript:"red",
         background_color:{},
         current_element:{},
         slug:"",
         appearance:{
             style:{
                  font:'"Roboto", sans-serif',
                  font_color:"#FFFFFF",
                  font_style: 'normal',
                  button_style: '6',
             },
             background_color:{
                    primary:"#8e2de2",
                    secondary:"#4a00e0",
             },
         },
         query:"",
         items:{},
         user:this.$auth_user,
       };
     },

     computed: {


       dragStyle() {
         return {
           top: `${this.y}px`,
           left: `${this.x}px`,
         };
       },
     },

     methods: {
         searchQuery: _.debounce(
      function () {
          this.elements=this.elementsItems;
          this.loading=true;
        setTimeout(() => {
            this.search();
        }, 700);
      },
      500 // 500 milliseconds
    ),
    onSubmit(){
     let data = new FormData();
     data.append('branding',JSON.stringify(this.branding));
     data.append('appearance', JSON.stringify(this.appearance));
     data.append('items',JSON.stringify(this.current_blocks));
     data.append('slug',this.slug);
      axios.post('/short-link/update', data).then((res)=>{
          this.current_blocks =[];
          this.branding=[];
          this.appearance=[];
          localStorage.removeItem("block_items");
          localStorage.removeItem("branding");
          localStorage.removeItem("appearance");
            this.$notify({
                    title: 'Your short link has been saved',
                    text: res.data.message,
                    type: 'success'
                });
          this.$router.push({name:'Links'});

      });
    },

    search(){
        if(this.query.length<1)
        this.elements=this.elementsItems;
        let data = this.elements.filter(element => element.element_type.includes(this.query));
        if(data.length>0){
            this.elements=data;
            this.loading=false;
        }
        else{
             this.loading=false;
             this.elements=[];
        }
    },
    editElement(item){
       const index= this.current_blocks.indexOf(item);
       this.current_element={index:index,...item};
       this.elementClickedType=item.element_type;
       this.elementClicked=true;
       $("#modal-example").modal("show");
        // console.log('index',this.current_blocks.indexOf(item));
    },
    resetModal(){
        this.current_element={};
        this.elementClickedType="";
        this.elementClicked=false;
    },
    setBlockItems(items){
        this.current_blocks=items;
    },
    storeAppearance(){
            localStorage.setItem('appearance', JSON.stringify(   this.appearance));
    },
    storeItems(){
            localStorage.setItem('block_items', JSON.stringify(this.current_blocks))
            this.storeAppearance();
    },
      changeAnimated(color){
         this.background_color = color
      },
       getHTML(data){
             this.loading=true;
         let html = { name: 'Html', value: data.value, element_type: "html"};
         this.setItems(html);
       },
        getLocation(data){
         this.loading=true;
         let location = { name: 'Location', value: data.address, lat: data.lat, lng: data.lng, element_type: "location"};
         this.setItems(location);
       },
       getPhone(data){
             this.loading=true;
         let phone = { name: 'Phone', value: data.value, element_type: "phone"};
         this.setItems(phone);
       },

        getSpotify(data) {
              this.loading=true;
         let spotify = { name: data.name, value:data.link, element_type:"spotify"};
         this.setItems(spotify);
        },
        getMail(data){
         console.log('mail', data)
              this.loading=true;
         let mail = { name: 'Mail', value: data.button_text, element_data: data, element_type: "mail"};
         this.setItems(mail)
        },
        getQuestion(data){
              this.loading=true;
         let question = { name: 'Question', value: data.value, element_type: "question"};
         this.setItems(question);
        },
        getYoutube(data){
              this.loading=true;
         let youtube = { name: 'Youtube', value: data.link, element_type: "youtube"};
         this.setItems(youtube);
        },

       getSocial(element){
             this.loading=true;
         let social = { name: 'Social', value: element, element_type: "social"};
        //  console.log('social', social);
         this.setItems(social);
       },
        getPaypal(data){
             this.loading=true;
             console.log('data', data)
         let paypal = { name: 'Paypal', value: data.name , element_type: "paypal", element_data: data};
         this.setItems(paypal);
       },
        getDivider(element){
              this.loading=true;
         let data = { name: 'Divider', value: element.value, element_type: "divider"};
         this.setItems(data);
       },
         getSoundcloud(element){
              this.loading=true;
         let data = { name: 'Soundcloud', value: element.value, element_type: "soundcloud"};
         this.setItems(data);
       },

       deleteElement(element){
        // this.loading=true;

         this.current_blocks.splice(this.current_blocks.indexOf(element), 1);
       localStorage.setItem('block_items', JSON.stringify(this.current_blocks))
       this.loading=false;
       },
       getQuote(quote_item){
            this.loading=true;
        let  quote = {name:'',value:quote_item.text,element_type:"quote"};
           this.setItems(quote);
       },
       getLink(link_items) {
       this.loading=true;
       let  link = {name:link_items.name,value:link_items.url,element_type:"link"};
       if(link_items.index){
          this.updateItem(link,link_items.index);
       }
       else{
           this.setItems(link);
       }
    //    this.setItems(link);
       },
       updateItem(item,index) {

        this.current_blocks[index]=item;
          this.closeModal();
        console.log('index', this.current_blocks[index]);
         this.storeItems();
         this.elementClicked = false;
         this.loading=false;
       },
       setItems(data){
       this.closeModal();
       setTimeout(() => {
            this.items={...this.items,data};
            this.current_blocks.push(data);
            this.storeItems();

            this.elementClicked = false;
            this.loading=false;
       }, 400);

       },

        getText(text_items) {
        let  text = {name:text_items.name, value:text_items.text, element_type:"text"};
         this.setItems(text);
        },
         getQuestion(text_items) {
        let  text = {name:text_items.name, value:text_items.text, element_type:"question"};
         this.setItems(text);
        },

        getVideoLink(video_items) {
        let  video_link = {name:video_items.name, value:video_items.video_link, element_type:"video_link"};
         this.setItems(video_link);

        },

        getHeading(text_items) {
        let  heading = {name:text_items.name, value:text_items.text, element_type:"heading"};
          this.setItems(heading);
        },

        getImage(image_items) {
        let  image = { name:image_items.text, value:image_items.src, element_type:"image"};
        this.setItems(image);
        },

        getAvatar(avatar_items) {
        let  avatar = { name:avatar_items.text, value:avatar_items.image,
                        element_type:"avatar",size:avatar_items.size,border:avatar_items.border};
         this.setItems(avatar);
        },

       selectedElement(element) {
          this.resetModal();
         this.elementClickedType = element;
         this.elementClicked = true;
       },
       openModal() {
           this.resetModal();
         $("#modal-example").modal("show");
       },
       closeModal(){
           $("#modal-example").modal("hide");

       },

       getRandomColors(){
         let color = bgColors[Math.floor(Math.random() * bgColors.length)];
         console.log("color", color);
         this.background_color=color;
       },
       changeColor(color){
        this.background_color = color;
        this.appearance.background_color = color;
        this.storeAppearance();
       },
       changeFontColor(color){
         this.appearance.style.font_color=color;
         this.storeAppearance();
       },
         changeFont(font){
         this.appearance.style.font=font;
         this.storeAppearance();
       },
       changeFontStyle(font_style){
         this.appearance.style.font_style = font_style
         this.storeAppearance();
       },
       changeButtonStyle(button_style){

        this.storeAppearance();
        return this.appearance.style.button_style = button_style;
       },
       getBlockItems(slug){
         this.slug=slug;
        axios.get('/short-link-profile?slug='+slug).then((res)=>{
            if(res.data.items){
                   this.current_blocks = res.data.items;
            }
            if(res.data.appearance){
                  this.appearance=res.data.appearance;
            }
            if(res.data.branding){
                 this.branding=res.data.branding;
            }


        });
       },

       loadProfileData(){
         let appearance_ = localStorage.getItem('appearance');
         let branding_= localStorage.getItem('branding');
         console.log('appearance', appearance_);
         console.log('branding', branding_);
         let block_items=localStorage.getItem('block_items');
            if(branding_)
                 this.branding = JSON.parse(branding_);
            if(appearance_){
                this.appearance = JSON.parse(appearance_);
                if(this.appearance.background_color)
                 this.background_color = this.appearance.background_color;
            }
            if(block_items)
                this.current_blocks = JSON.parse(block_items);
            else
                 this.getBlockItems();

       },
       getQuery(){
           const params = new URLSearchParams(window.location.search)
           if(params.get('slug')){

               this.getBlockItems(params.get('slug'));
           }
           else{
                this.loadProfileData();
           }
           console.log(params.get('slug'));
       }

     },
    //  created(){
    //     this.getRandomColors();
    //      this.getQuery();
    //  },

     mounted() {
        this.getQuery();
        this.getRandomColors();
        // this.loadProfileData();
        // if( localStorage.getItem('block_items')){
        //     this.current_blocks=[];
        //     this.current_blocks = JSON.parse(localStorage.getItem('block_items'));
        //     console.log(JSON.parse(localStorage.getItem('block_items')))
        // }
        // else {
        //      this.getBlockItems();
        // }
        //   localStorage.getItem('block_items') ?
        //   this.current_blocks = JSON.parse(localStorage.getItem('block_items')) : this.current_blocks = [];
     },
   };
</script>
<style scoped>
   /* v-bind('colorFromScript') */
   *{
   --phone-primary: v-bind('background_color["primary"]');
   --phone-secondary:  v-bind('background_color["secondary"]');
   --font-family: v-bind('font');
   --font-color: v-bind('font_color');
   --animation-color: v-bind('background_color["animation"]'),
   }
   .component-margin{
   margin-bottom: 10px;
   margin-top: 10px;
   }
   .iphone-background{
   color:var(--font-color) !important;
   font-family: var( --font-family) !important;
   /* background-color: var(--phone-primary) !important; */
    background:  var(--phone-primary) ; /* Fallback */
   animation: var(--animation-color) !important ;

   background-image: linear-gradient(200deg, var(--phone-primary) 1%, var(--phone-secondary) 100%) !important;
   border-radius: 40px;
   box-shadow: 0px 0px 0px 11px #1f1f1f, 0px 0px 0px 13px #191919, 0px 0px 0px 20px #111;
   }
   .iphone-x {
   overflow-y: scroll;
   height: 567px;
   position: relative;
   color:white;
   margin: 40px auto;
   width: 300px;
   height: 600px;

   }
   .iphone-x i {
   top: 0px;
   left: 50%;
   transform: translate(-50%, 6px);
   height: 8px;
   box-shadow: 0 0 10px var(--theme-deafult);
   width: 15%;
  color:var(--font-color) !important;
   /* background-color: #101010; */
   border-radius: 8px;
   /* box-shadow: inset 0px -3px 3px 0px rgb(255 255 255 / 20%); */
   }
   .element-img{
   width: 60px;
   /* margin-top: 10px; */
   }
   .phone-element{
   margin-top: 45px !important;
   margin-left: 20px;
   margin-right: 20px;
   pointer-events: none !important;
   }
   .element-container{
   overflow-y: scroll;
   height: 567px;
   }
   .font-icon{
   font-size: 32px;
   }
   .form-control{
   color: #000000;
   }
   .sortable-ghost {
   border: 3px dashed var(--theme-deafult);
   font-size: 0;
   overflow: hidden;
   }
   .drag-preview {
   position: absolute;
   transform: translateX(-10%) translateY(-10%) rotate(6deg) translateY(10%);
   }
   .handle {
   float: left;
   padding-top: 8px;
   padding-bottom: 8px;
   cursor: move;
   }
   .pricing-container {
   border-radius: 5px;
   margin-top: 10px;
   padding: 15px;
   position: relative;
   overflow: hidden;
   }
   .element-inner-container {
   cursor: pointer;
   border: 2px dashed var(--theme-deafult);
   box-shadow: 1px 1px 10px var(--theme-deafult);
   padding: 10px;
   margin-bottom: 4px;
   margin-top: 10px;
   border-radius: 12px;
   margin-left: 10px;
   margin-right: 15px;
   }


</style>
