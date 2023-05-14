<template >

<div class="page-wrapper compact-wrapper" id="pageWrapper">
    <!-- Page Header Start-->
        <header-component></header-component>
    <!-- Page Header Ends                              -->
    <!-- Page Body Start-->
    <div class="page-body-wrapper">
      <!-- Page Sidebar Start-->
        <sidebar-component></sidebar-component>
      <!-- Page Sidebar Ends-->
      <div class="page-body">
    <!-- position="top right" -->
        <notifications   class="mt-1 mr-1 " />
            <router-view></router-view>


        <!-- Container-fluid Ends-->
      </div>
      <!-- footer start-->
        <footer-component></footer-component>
    </div>
  </div>
</template>
<script>
import HeaderComponent   from "./components/HeaderComponent.vue";
import SidebarComponent from "./components/SidebarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue"
  export default {
    components:{HeaderComponent,SidebarComponent,FooterComponent},
    mounted() {

    },
  }

</script>
<!-- <style >
.custom-notify{
width: 100% !important;
height: 100% !important;
}
</style> -->
