<template >
    <div class="sidebar-wrapper" sidebar-layout="stroke-svg">
        <div>
          <div class="logo-wrapper"><router-link :to="'/'"><img class="img-fluid for-light" src="assets/images/logo/logo.png" alt=""><img class="img-fluid for-dark" src="assets/images/logo/logo_dark.png" alt=""></router-link>
            <div class="back-btn"><i class="fa fa-angle-left"></i></div>
            <div class="toggle-sidebar"><i class="status_toggle middle sidebar-toggle" data-feather="grid"> </i></div>
          </div>
          <div class="logo-icon-wrapper"><a href="index.html"><img class="img-fluid" src="assets/images/logo/logo-icon.png" alt=""></a></div>
          <nav class="sidebar-main">
            <div class="left-arrow" id="left-arrow"><i data-feather="arrow-left"></i></div>
            <div id="sidebar-menu">
              <ul class="sidebar-links" id="simple-bar">
                <li class="back-btn"><a href="index.html"><img class="img-fluid" src="assets/images/logo/logo-icon.png" alt=""></a>
                  <div class="mobile-back text-end"><span>Back</span><i class="fa fa-angle-right ps-2" aria-hidden="true"></i></div>
                </li>



                <li  v-for="(item) in sidebar_menu" :key="item.id" :class="getClass(item)" >

                        <div v-if="item?.heading && isAllowed(item?.heading_can)">
                        <h6 >
                            {{item.heading }}
                        </h6>
                        </div>
                        <!-- <i class="fa fa-thumb-tack" v-if="item.type == 'single_link' && isAllowed(item.can)"></i> -->
                        <router-link class="sidebar-link sidebar-title link-nav" v-if="item.type == 'single_link' && isAllowed(item.can)"
                            :to="item.route">




                            <svg class="stroke-icon">
                                <use :href="`assets/svg/icon-sprite.svg#${item.icon}`"></use>
                              </svg>
                              <svg class="fill-icon">
                                <use :href="`assets/svg/icon-sprite.svg#${item.icon}`"> </use>
                              </svg><span>{{ item.title }}</span>
                        </router-link>

                        <i class="fa fa-thumb-tack" v-if="item?.sub_menu">    </i>
                            <a  v-if="item?.sub_menu" class="sidebar-link sidebar-title" href="#">
                                <svg class="stroke-icon">
                                    <use :href="`assets/svg/icon-sprite.svg#${item.icon}`"></use>
                                  </svg>
                                  <svg class="fill-icon">
                                    <use :href="`assets/svg/icon-sprite.svg#${item.icon}`"> </use>
                                  </svg><span>{{ item.title }}
                              </span><div class="according-menu"><i class="fa fa-angle-right"></i></div></a>
                            <ul class="sidebar-submenu"  style="display: none;">

                              <li v-for="submenu in item.sub_menu" :key="submenu.id">
                              <router-link  v-if="isAllowed(submenu?.can)" :to="submenu.route">
                                {{submenu.title}}</router-link>
                                </li>
                            </ul>


                          </li>


              </ul>
            </div>
            <div class="right-arrow" id="right-arrow"><i data-feather="arrow-right"></i></div>
          </nav>
        </div>
      </div>
</template>
<script>
import menu from "./menu";
export default {

    data() {
        return {
            sidebar_menu:menu,
            index: 0,
            loading: false,
        }
    },
    methods: {
        logout() {
            window.location.href = window.location.origin + "/logout";
        },
        isAllowed(value) {
            // if(permissions.includes(value))
            return true;
            // else
            // return true;
        },
        getClass(item) {
            if (item?.heading) {
                return 'sidebar-main-title'
            }
            if (item.type == 'single_link') {
                return 'sidebar-list'
            } else {
                return 'sidebar-list'
            }
        },
        getSideBarMenu() {
            this.loading = true;
            axios.get('/config/sidebar-menu').then((res) => {
                this.sidebar_menu = res.data?.sidebar_menu;
                this.loading = false;
            })
        },
    },
    mounted() {
            this.getSideBarMenu();
    },
}
</script>
<style lang="">

</style>
