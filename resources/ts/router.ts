// require('./helper');
import { createRouter, createWebHistory } from 'vue-router'


const getComponent=  (file_name:string)=> {
    return   import(`./vue/backend/pages/${file_name}Component.vue`)
  }
const prefix="/portal";
const setRoute=  (url:string,name:string,path:string,permission:string)=>{
    return {
      path: url,
      name: name,
      component: () =>  getComponent(path),
      meta: { permissions: "dashboard-view" }

    }
  }




const per_fix="/portal";
const routes = [
    {
        path: "/dashboard",
        redirect: { name: 'dashboard' }
    },
    {
        path: "/",
        redirect: { name: 'dashboard' }
    },
    setRoute('/:catchAll(.*)','404','error/404',''),
    setRoute("/dashboard","dashboard","dashboard/MasterDashboard",'dashboard-view'),
    setRoute("/users","users","user/Users",'user-read'),
    setRoute("/news-alerts","news-alerts","news_alert/News",'news-alert-read'),
    setRoute("/news-alert-create","news-alert-create","news_alert/CreateNews",'news-alert-create'),
    setRoute("/news-alert-edit/:uid","news-alert-edit","news_alert/EditNews",'news-alert-edit'),
    setRoute("/user-create","user-create","user/CreateUser",'user-create'),
    setRoute("/profile-settings","profile-settings","settings/Profile",'profile-read'),
    setRoute("/account-settings","account-settings","settings/Account",'account-view'),
    setRoute("/bio-links","bio-links","builder/link/Links",'bio-links-view'),
    setRoute("/profile-builder","profile-builder","builder/profile/profileBuilder",'profile-builder-view'),





];


const router= createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash,
                behavior: 'smooth',
            }
        }
    },
})

let permissions=JSON.parse(`${localStorage.getItem('permissions')}`);

router.beforeEach((to, from, next) => {

    // if (to.meta.permissions) {
    //     if (permissions.indexOf(to.meta.permissions) !== -1) {

    //             next()
    //     }
    //     else {
    //         next({ path: '/unauthorized/user' })
    //         console.log(" not auth");
    //     }
    // }
    next()

});

export default router;
