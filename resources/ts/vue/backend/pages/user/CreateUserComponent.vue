<template >
    <Breadcrumb active_name="Create User "></Breadcrumb>
    <div class="container-fluid">
        <div class="edit-profile">
            <user-form :user="user"></user-form>
        </div>
      </div>
</template>
<script>
import Uploader from 'vue-media-upload';
import UserForm from "./UserForm";
export default {
    components:{Uploader,UserForm},

    data:()=>({
            user:{},
        }),
}
</script>
<style lang="">

</style>
