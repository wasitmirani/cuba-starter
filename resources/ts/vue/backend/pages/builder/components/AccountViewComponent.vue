<template>


    <div class="userpro-box">
        <div class="img-wrraper">                              
                        <div class="avatar">
                            <img class="img-fluid glow-on-hover-avatar" v-if="this.account?.thumbnail == 'default.png'" alt="" :src="this.host_url + '/assets/images/user/user.png'">
                            <img class="img-fluid glow-on-hover-avatar" v-else :src="this.host_url + '/img/user/' + this.account.thumbnail ">
                                                 
                            </div>
                            <div class="user-designation">
                                
                                    <h6 class="color-white">{{this.account.slug}}</h6>
                                    <small>{{this.account.bio}}</small>
                                   
                                
                            </div>
                            <!-- <a class="icon-wrapper" href="edit-profile.html">
                                <i class="icofont icofont-pencil-alt-5"></i>
                                </a> -->
                      </div>

  </div>
  
</template>

<script>
export default {
    name: ['AccountViewComponent'],
    props: ['account'],
    data(){
        return{
                host_url:window.location.origin,   
             
        }
    },
    methods() {

    },

};
</script>

<style>
.userpro-box {
    background-color: transparent;
    padding: 30px;
    max-width: 380px;
    margin-top: auto;
    margin-bottom: auto;
    text-align: center
}

.userpro-box .img-wrraper {
    position: relative;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    margin: auto
}

.userpro-box .avatar {
    width: 100px;
    height: 100px;
    max-width: 155px;
    max-height: 155px;
    border-radius: 50%;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
    border: 7px solid rgba(99, 98, 231, 0.08);
    margin-bottom: 15px
}

.userpro-box .avatar img {
    width: 100%;
    height: 100%
}

 .userpro-box .icon-wrapper {
    position: absolute;
    right: 0;
    bottom: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: transparent;
    cursor: pointer;
    overflow: hidden;
    margin: 0 auto;
    font-size: 17px;
    -webkit-box-shadow: 0 0 6px 3px rgba(68, 102, 242, 0.1);
    box-shadow: 0 0 6px 3px rgba(68, 102, 242, 0.1)
}

.userpro-box .icon-wrapper i {
    color: #6362e7
}

.userpro-box h4 {
    color: #242934;
    font-weight: 600;
    font-size: 20px
}

.userpro-box h6 {
    font-size: 14px;
    text-transform: uppercase;
    color: #999;
    margin-bottom: 15px
}

</style>