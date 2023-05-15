<template >
    <Breadcrumb active_name="Update News"></Breadcrumb>
    <div class="container-fluid">
        <div class="edit-profile">
            <news-form :form="form" :edit="edit"></news-form>
        </div>
      </div>
</template>
<script>
import NewsForm from "./NewsForm";
export default {
    components:{NewsForm},

    data:()=>({
            form:{},
            edit:true,
        }),

    methods:{
        getNews(id) {
            axios.get('/news/' + id).then((res) => {
                // console.log('res', res.data);
                this.form = res.data.news;
                // this.edit = true;
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
                this.$router.push('/news-alerts');
            });
        }
    },
    mounted() {
        this.getNews(this.$route.params.uid);

    }
}
</script>
<style lang="">

</style>
