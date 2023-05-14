<template>
  <div>
               <div class="card-header pb-0">
                                 <h5>Profile Info</h5>
                              </div>
         <div class="card-body megaoptions-border-space-sm">
                                 <form class="mega-inline" enctype="multipart/form-data">

                                       <div class="col-sm-6">
                                        <div class="userpro-box">
                                                   <div class="img-wrraper">
                                                   <div class="avatar">
                                                         <img class="img-fluid" v-if="this.user.thumbnail === 'default.png'" alt="" :src="this.host_url + '/assets/images/user/user.png'">
                                                         <img class="img-fluid" v-else :src="this.host_url + '/img/user/' + this.user.thumbnail ">
                                                      </div>
                                                      <a class="icon-wrapper" >
                                                      <label for="myInputFile">
                                                         <i class="icofont icofont-pencil-alt-5"  for="myInputFile">
                                                               <input type="file" id="myInputFile" @change="uploadImage" name="myInputFile"/>


                                                         </i>
                                                          </label>

                                                      </a>
                                                   </div>

                                                </div>
                                       </div>
                                       <div class="col-sm-6">
                                           <div class="mb-3">
                                                            <label class="form-label">Name</label>
                                                            <input class="form-control" v-model="this.user.slug" type="text" placeholder="Name"/>
                                                         </div>
                                          <div class="mb-3">
                                             <h6 class="form-label">Bio</h6>
                                             <textarea v-model="this.user.bio" class="form-control" rows="5">{{this.user.bio}}</textarea>
                                             </div>

                                    </div>
                                 </form>
                              </div>
                              <div class="card-header pb-0">
                                 <h5>Choose Background</h5>
                              </div>
                              <div class="card-body megaoptions-border-space-sm">
                                 <form class="mega-inline">
                                    <div class="row">
                                       <div class="col-sm-6">
                                          <div :class="`card bg-primary  ${this.active_card=='monochrome' ? 'active-bg' : ''}`"  @click="changeColor({name: 'Monochrome', type: 'monochrome', primary: '#d2d2d2', secondary: '#ffffff'})">
                                             <div class="media p-20">

                                                <div class="media-body mt-8">
                                                   <div class="background-types">
                                                      <h5>Monochrome</h5>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="col-sm-6">
                                          <div :class="`card bg-primary ${this.active_card=='gradient' ? 'active-bg' : ''}`"  @click="changeColor({name: 'Sand To Blue', type: 'gradient', primary: '#DECBA4', secondary: '#3E5151'})" name="radio1" value="option1">
                                             <div class="media p-20">
                                                <div class="radio radio-primary me-3">

                                                </div>
                                                <div class="media-body mt-8">
                                                   <div class="background-types">
                                                      <h5>Gradient</h5>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </form>
                              </div>

                                 <div class="card-header pb-0">
                                    <h5>Choose Background Appearance</h5>
                                 </div>
                                 <div class="card-body megaoptions-border-space-sm">

                                    <div class="row">
                                       <div class="col">
                                          <div class="mb-3">
                                             <select  class="form-select digits" id="exampleFormControlSelect9" @change="changeColorType" v-model="selectedBackgroundType">
                                                <option :key="background_type.id" v-for="background_type in background_types" :value="background_type" >{{ background_type }}</option>
                                             </select>
                                          </div>
                                       </div>
                                    </div>



                                    <div v-if="selectedBackgroundType != 'Animated'" class="row">

                                       <div v-for="color in colors" :key="color.id"   class="col-xxl-2 col-xl-3 col-md-3 col-sm-4">
                                          <color-box :color="color" v-on:changeColor="changeColor($event)" :class="this.background_color == color ? 'active-bg' : ''"></color-box>
                                       </div>

                                    </div>
                                    <div v-else class="row">
                                          <div class="col-lg-6 col-md-6 col-sm-6" v-for="color in colors" :key="color.id" @click="changeAnimatedBackground(color)">
                                            <div  v-if="color.type == 'animated'"  class="card">
                                               <div class="card-body br-10 b-r-10 text-center" >
                                                  <h4>{{color.name}}</h4>
                                               </div>
                                             </div>
                                          </div>
                                    </div>
                                 </div>


                                 <div class="card-header pb-0">
                                    <h5>Choose Font Appearance</h5>
                                 </div>
                                    <div class="card-body">
                                          <div class="row g-2 mb-3">
                                             <div class="col-md-6">
                                                <label class="form-label" for="validationCustom01">Choose Color</label>
                                                <select class="form-select digits" id="exampleFormControlSelect9" @change="changeFontColor" v-model="selectedFontColor">
                                                         <option :key="font_color.id" v-for="font_color in font_colors" :value="font_color.primary" >{{ font_color.name }}</option>
                                                      </select>
                                                <div class="valid-feedback">Looks good!</div>
                                             </div>
                                             <div class="col-md-6">
                                                <label class="form-label" for="validationCustom02">Choose Font</label>
                                                   <select class="form-select digits" v-model="selectedFont" name="fontFamily" @change="changeFont"  id="fontFamily">
                                                      <option v-for="font in fonts" :key="font.id" :style="{fontFamily: font.value}" :value="font.value">{{font.name}}</option>
                                                   </select>
                                                <div class="valid-feedback">Looks good!</div>
                                             </div>

                                          </div>


                                             <label class="form-label" for="validationCustom02">Choose Font Style</label>
                                                <ul class="nav nav-pills col-md-12" id="pills-icontab" role="tablist">
                                                     <li class="nav-item col mt-2" @click="changeFontStyle('Normal')" ><a :class="`nav-link ${font_style.fontStyle=='normal' ? 'active ' : '' }`" id="pills-iconhome-tab" data-bs-toggle="pill" href="#pills-iconhome" role="tab" aria-controls="pills-iconhome" aria-selected="true">
                                                      <i class="icofont icofont-text-width"></i>Normal</a>
                                                      </li>
                                                   <li class="nav-item col" @click="changeFontStyle('Bold')"><a :class="`nav-link ${font_style=='bold' ? 'active ' : '' }`"  id="pills-iconhome-tab" data-bs-toggle="pill" href="#pills-iconhome" role="tab" aria-controls="pills-iconhome" aria-selected="true">
                                                      <i class="icofont icofont-bold"></i>Bold</a>
                                                      </li>
                                                   <li class="nav-item col" @click="changeFontStyle('Italic')"><a :class="`nav-link ${font_style=='italic' ? 'active ' : '' }`"   id="pills-iconprofile-tab" data-bs-toggle="pill" href="#pills-iconprofile" role="tab" aria-controls="pills-iconprofile" aria-selected="false">
                                                      <i class="icofont icofont-italic-alt"></i>Italic</a>
                                                      </li>
                                                   <li class="nav-item col" @click="changeFontStyle('Underline')" ><a :class="`nav-link ${font_style=='underline' ? 'active ' : '' }`"  id="pills-iconcontact-tab" data-bs-toggle="pill" href="#pills-iconcontact" role="tab" aria-controls="pills-iconcontact" aria-selected="false">
                                                      <i class="icofont icofont-underline"></i>Underline</a>
                                                      </li>
                                                </ul>


                                    </div>

                              <div class="card-header pb-0">
                                 <h5>Choose Buttons Appearance</h5>
                              </div>
                              <div class="card-body megaoptions-border-space-sm">
                                 <form class="mega-inline">
                                    <div class="row">
                                       <div class="col-sm-4">
                                          <div class="card">
                                             <div class="media p-20">
                                                <div class="radio radio-primary me-3">
                                                   <input  @Change="changeButtonStyle" id="radio16" checked type="radio" name="radio1" value="both">
                                                   <label for="radio16"></label>
                                                </div>
                                                <div class="media-body mt-8">
                                                   <div class="background-types">
                                                      <h5>Both </h5>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="col-sm-4">
                                          <div class="card">
                                             <div class="media p-20">
                                                <div  class="radio radio-primary me-3">
                                                   <input @Change="changeButtonStyle" id="radio15" type="radio" name="radio1" value="circle">
                                                   <label for="radio15"></label>
                                                </div>
                                                <div class="media-body mt-8">
                                                   <div class="background-types">
                                                      <h5>Circle </h5>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                        <div class="col-sm-4">
                                          <div class="card">
                                             <div class="media p-20">
                                                <div  class="radio radio-primary me-3">
                                                   <input @Change="changeButtonStyle" id="radio17" type="radio" name="radio1" value="square">
                                                   <label for="radio17"></label>
                                                </div>
                                                <div class="media-body mt-8">
                                                   <div class="background-types">
                                                      <h5>Square </h5>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </form>
                              </div>
  </div>
</template>

<script>
   import ColorBox from "../components/ColorBoxComponent.vue";
export default {
    props:['bg_colors', 'font_colors','fonts','appearance','user'],
    components: {ColorBox},
    data(){
    return {
         background_types:[ 'Select Color','Solid', 'Animated', 'Gradient', 'Image'],
         selectedBackgroundType:'Select Color',
         selectedFontColor:'#FFFFFF',
         selectedFont:"'Karla', sans-serif",
         colors:{},
         background_color:{
             primary:"#d4fc79",
             secondary:"#96e6a1",
         },
         active_card:'',
         host_url:window.location.origin,

    }
    },
    created(){
        this.loadAppearance();
    },
    methods:{
          uploadImage(e){
            const formData = new FormData();
            formData.append("thumbnail", e.target.files[0]);
            formData.append("id", this.user.id);

            this.onSubmit(formData)
      },
         async onSubmit(data){
            await   axios.post('/user-image-update',data).then(res=>{
               this.user.thumbnail = res.data.thumbnail
               this.$root.alertNotify(res.status,'Updated Successfuly','success',res.data);
               }).catch((err)=>{
                  this.errors=err.response.data;
                  this.$root.alertNotify(err.response.status,null,'error', err.response.data);
            })
         },
        loadAppearance(){
            if(this.appearance){
                this.background_color=this.appearance.background_color;
                this.selectedBackgroundType=this.appearance.background_color.type?  this.appearance.background_color.type.charAt(0).toUpperCase()+this.appearance.background_color.type.slice(1) : "";
                this.changeColorType();
                this.active_card=this.appearance.background_color.type;
                this.selectedFontColor=this.appearance.style.font_color;
                this.selectedFont=this.appearance.style.font;
                 this.font_style = this.appearance.style.font_style;
            }
        },
         changeColor(color){
             this.background_color = color;
             console.log(this.background_color);
             this.active_card=this.background_color.type;
             this.$emit('changeColor', color);
         },
         changeAnimatedBackground(color){
             this.background_color = color.primary;
             this.$emit('changeAnimatedBackground',   color);
         },
         changeButtonStyle(e){
            let element = e.target.value
            console.log('button style', element);
            if(element == 'both'){
               this.$emit('changeButtonStyle', '6');
            }else if(element == 'circle'){
               this.$emit('changeButtonStyle', '30');
            }else if(element == 'square'){
               this.$emit('changeButtonStyle', '0');
            }
         },
         changeFontColor(e){
             this.font_color = e.target.value;
             this.$emit('changeFontColor', e.target.value);
         },
         changeFont(e){
             this.font_color = e.target.value;
             this.$emit('changeFont', e.target.value);
         },
         changeFontStyle(value){
            console.log('Chagnes',value)
            switch (value) {
                case 'Bold':
                    this.font_style = 'bold';
                   return  this.$emit('changeFontStyle', this.font_style);
                    break;
                case 'Italic':
                    this.font_style = 'italic';
                   return  this.$emit('changeFontStyle', this.font_style);
                    break;
                case 'Underline':
                    this.font_style = 'underline';
                   return  this.$emit('changeFontStyle', this.font_style);
                    break;
                default:
                    this.font_style = { fontWeight: 'normal', fontStyle: 'normal', textDecoration: 'none' };
                   return  this.$emit('changeFontStyle', this.font_style);
                    break;
            }

         },
         changeColorType(){
        //   this.selectedBackgroundType = event.srcElement.value;

          switch ( this.selectedBackgroundType) {
              case 'Gradient':
                   this.colors= this.bg_colors.filter(color => color.type == 'gradient');
                  break;
              case 'Solid':

                   this.colors= this.bg_colors.filter(color => color.type == 'solid');
                  break;
              case 'Animated':

                   this.colors= this.bg_colors.filter(color => color.type == 'animated');
                  break;
              case 'Image':

                   this.colors= this.bg_colors.filter(color => color.type == 'image');
                  break;
              default:
                   this.colors=[];
                  break;
          }
    },
    },
}
</script>

<style  scoped>
.active{
    font-weight: bold;
   box-shadow: 0 0 10px 2px var(--theme-deafult);

   border-radius: 20px;
}
 .active-bg {
   font-weight: bold;
   background-color: transparent;
   box-shadow: 0 0 10px 2px var(--theme-deafult);
   color:var(--theme-secondary);
   border-radius: 20px;
   }
label input[ type="file" ] {
  display: none;
}
</style>
