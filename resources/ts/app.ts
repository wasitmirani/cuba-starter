


require('./bootstrap');
import { createApp } from "vue";


import App from "./vue/App.vue";
import router from "./router";

// import FloatingVue from 'floating-vue'
// import * as moment from 'moment'
// import 'floating-vue/dist/style.css';
import Breadcrumb from "./vue/backend/pages/components/BreadcrumbComponent.vue";
import SearchInput from "./vue/backend/pages/components/SerachInputComponent.vue";
import ValidateInput  from "./vue/backend/pages/components/ValidateInputComponent.vue";



import Notifications from '@kyvg/vue3-notification';

const app =createApp(App,{
      data(){
        return {
            host_url:'test/',

        }
    },
    mounted(){
        console.log("app mounted");
    }
});
app.config.globalProperties.$auth_user ={};
app.use(Notifications)
// app.use(FloatingVue)
app.config.globalProperties.$filters = {
    DateTimeFormat(date:String) {
    // moment.utc(String(date)).local().format('DD-MMM-YYYY , h:mm a')
      return "N/A";
    },
    elementType(value:String) {
        const path="/images/icons/";
        switch (value) {
            case 'link':
                  return  `<img class="img-fluid me-3 b-r-5 element-img" src="${path+"link.png"}"/>`
             break;
            case 'text':
              return  `<img class="img-fluid me-3 b-r-5 element-img" src="${path+"text-box.png"}"/>`
            break;
            case 'heading':
              return    `<img class="img-fluid me-3 b-r-5 element-img" src="${path+"heading.png"}"/>`
              break;
            case 'image':
                return   `<img class="img-fluid me-3 b-r-5 element-img" src="${path+"picture.png"}"/>`
                break;
          case 'video':
                  return   `<img class="img-fluid me-3 b-r-5 element-img" src="${path+"videolink.png"}"/>`
                  break;
          case 'music':
                      return   `<img class="img-fluid me-3 b-r-5 element-img" src="${path+"music.png"}"/>`
          break;
          case 'social':
              return   `<img class="img-fluid me-3 b-r-5 element-img" src="${path+"social-media.png"}"/>`
           break;
          case 'html':
              return   `<img class="img-fluid me-3 b-r-5 element-img" src="${path+"html.png"}"/>`
          break;
          case 'location':
              return   `<img class="img-fluid me-3 b-r-5 element-img" src="${path+"location.png"}"/>`
          break;
          case 'spotify':
              return   `<img class="img-fluid me-3 b-r-5 element-img" src="${path+"spotify.png"}"/>`
          break;
          case 'question':
              return   `<img class="img-fluid me-3 b-r-5 element-img" src="${path+"question.png"}"/>`
          break;
          case 'mail':
              return   `<img class="img-fluid me-3 b-r-5 element-img" src="${path+"mail.png"}"/>`
          break;
          case 'phone':
              return   `<img class="img-fluid me-3 b-r-5 element-img" src="${path+"phone.png"}"/>`
          break;
          case 'youtube':
              return   `<img class="img-fluid me-3 b-r-5 element-img" src="${path+"youtube.png"}"/>`
          break;
          case 'vimeo':
              return   `<img class="img-fluid me-3 b-r-5 element-img" src="${path+"vimeo-social-logo.png"}"/>`
          break;
          case 'soundcloud':
              return   `<img class="img-fluid me-3 b-r-5 element-img" src="${path+"soundcloud.png"}"/>`
          break;
          case 'paypal':
              return   `<img class="img-fluid me-3 b-r-5 element-img" src="${path+"paypal.png"}"/>`
          break;
          case 'quote':
              return   `<img class="img-fluid me-3 b-r-5 element-img" src="${path+"paragraph.png"}"/>`
          break;
          case 'divider':
              return   `<img class="img-fluid me-3 b-r-5 element-img" src="${path+"distance.png"}"/>`
          break;
          case 'avatar':
              return   `<img class="img-fluid me-3 b-r-5 element-img" src="${path+"avatar.gif"}"/>`
          break;
            default:
                break;
        }
      }
  }



app.component('Breadcrumb', Breadcrumb);
app.component('SearchInput',SearchInput)
app.component("ValidateInput",ValidateInput);
app.use(router).mount("#app");
