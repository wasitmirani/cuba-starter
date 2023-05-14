<template>
   <div>
   <ul>
      <!-- <li class="item" v-if="loading">
         <div class="col-sm-12 col-md-12" >
            <div class="loader-box">
               <div class="loader-19"></div>
            </div>
         </div>
      </li> -->
      <div class="element-container" v-if="items">
         <draggable animation="400" v-model="items" @start="drag = true" @end="drag = false" item-key="id"  handle=".handle">
            <template #item="{ element }">
               <li class="item" @dragstart="dragStartHandler" @dragend="dragEndHandler" @drag="dragHandler">
               <div class="pricing-plan element-inner-container">
                  <div class="pricing-plan-header">
                     <i class="fa fa-align-justify handle"></i>
                  </div>
                  <div class="row">
                  </div>
                  <div class="pricing-container">
                     <div class="row">
                        <div class="col-2 mt-3">
                           <div class="mb-3 font-icon">
                              <div v-html="$filters.elementType(element.element_type)" />
                              </div>
                           </div>
                           <div class="col-7">
                              <h6>{{ element.element_type }}</h6>
                              <h5>{{ element.name  }}</h5>
                              <div v-if="element.element_type=='link'">
                                 <i class="fa fa-unlink"></i> <a target="_blank" :href="element.value">{{element.value}}</a>
                              </div>
                              <div v-if="element.element_type=='divider'">
                                 <i class="fa fa-divider"></i>
                                 <h5 >{{element.value}}</h5>
                              </div>
                              <div v-if="element.element_type=='mail'">
                                 <i class="fa fa-mail"></i>
                                 <h5 >{{element.value}}</h5>
                              </div>
                              <div v-if="element.element_type=='phone'">
                                 <i class="fa fa-phone"></i>
                                 <h5 >{{element.value}}</h5>
                              </div>
                              <div v-if="element.element_type=='html'">
                                 <i class="fa fa-code"></i>
                                 <h5 >{{element.name}}</h5>
                              </div>
                              <div v-if="element.element_type=='question'">
                                 <i class="icofont icofont-question-circle"></i>
                                 <h5 >{{element.value}}</h5>
                              </div>
                              <location-view class="component-margin" v-if="element.element_type=='location'" :location="element"></location-view>
                              <div v-else-if="element.element_type=='image'">
                                 <div class="row justify-content-center">
                                    <image-view :image="element.value"></image-view>
                                 </div>
                              </div>
                              <div v-else-if="element.element_type=='avatar'">
                                 <div class="row justify-content-center">
                                    <image-view :style="`width:${element.size}px; height:${element.size}px; border:${element.border}px;`" :round="true" :image="element.value"></image-view>
                                 </div>
                              </div>
                              <social-view :social="element.value" v-else-if="element.element_type=='social'"></social-view>
                              <div v-else>
                                 <h5 v-if="element.element_type=='heading'">{{ element.value }}</h5>
                                 <span v-else>{{ element.value }}</span>
                              </div>
                           </div>
                           <div class="col-2" >
                                 <!-- <a role="button" @click="editElement(element)">
                              <i  class="text-primary icofont icofont-ui-edit lead "></i>
                              </a> -->
                               <!-- | -->
                              <a role="button" @click="deleteElement(element)">
                              <i  class="text-danger icofont icofont-ui-delete lead "></i>
                              </a>
                           </div>
                        </div>
                        <img class="bg-img" src="assets/images/dashboard/folder.png"  alt=""/>
                     </div>
                  </div>
                  </li>
            </template>
         </draggable>
         </div>
         <div class="drag-preview" :style="dragStyle" ref="dragPreview"></div>
   </ul>
   </div>
</template>
<script>
   import DividerView from "../components/DividerViewComponent.vue";
   import SocialView from "../components/SocialViewComponent.vue";
   import ImageView from "../components/ImageViewComponent.vue";
   import QuoteView from "../components/ImageViewComponent.vue";
   import HtmlView from "../components/HTMLViewComponent.vue";
   import LocationView from "../components/LocationViewComponent.vue";
   import SpotifyView from "../components/SpotifyViewComponent.vue";
   import YoutubeView from "../components/YoutubeViewComponent.vue";
   import draggable from "vuedraggable";
   export default {
    props:['items'],
     components: { DividerView,draggable,SocialView,ImageView,QuoteView,HtmlView,LocationView,SpotifyView,YoutubeView},
    data(){
        return {
             drag: true,
             dragPreview: null,
             items:[],
             x: 0,
             y: 0,
        }
    },
    methods:{
         storeItems(){
            localStorage.setItem('block_items', JSON.stringify(this.items))
         },
         editElement(item){
            //  this.items.indexOf(item);
            //  console.log(this.items.indexOf(item))
            this.$emit('edit-element', item)
         },
        dragStartHandler(e) {
         this.dragPreview = e.target.cloneNode(true);
         this.$refs["dragPreview"].appendChild(this.dragPreview);
         e.dataTransfer.setDragImage(new Image(), 0, 0);

       },

       dragEndHandler() {
         this.dragPreview.remove();
         this.dragPreview = null;
        this.$emit("setItems",this.items);
        this.storeItems();
       },
       deleteElement(element){
        this.items.splice(this.items.indexOf(element),1);
        this.$emit("setItems",this.items);
        this.storeItems();
       },
       dragHandler(e) {
         this.x = e.pageX;
         this.y = e.pageY;
       },
    }
   }
</script>
<style scoped>
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

</style>
