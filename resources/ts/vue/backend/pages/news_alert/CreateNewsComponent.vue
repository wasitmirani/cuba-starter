<template >
    <Breadcrumb active_name="Create News"></Breadcrumb>
    <div class="container-fluid">
        <div class="edit-profile">
            <news-form :news="news"></news-form>
        </div>
      </div>
</template>
<script>
import Uploader from 'vue-media-upload';
import NewsForm from "./NewsForm";
export default {
    components:{Uploader,NewsForm},

    data:()=>({
        news:{},
        }),
}
</script>
<style lang="">

</style>
