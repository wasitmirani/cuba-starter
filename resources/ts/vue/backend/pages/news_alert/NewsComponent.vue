<template >
    <Breadcrumb active_name="News Alerts"></Breadcrumb>
    <div class="container-fluid">
        <div class="row widget-grid">
            <div class="col-sm-6 col-xl-3 col-lg-6 box-col-6" v-for="item in 4">
                <div class="card widget-1">
                  <div class="card-body">
                    <div class="widget-content">
                      <div class="widget-round secondary">
                        <div class="bg-round">
                          <svg class="svg-fill">
                            <use href="/assets/svg/icon-sprite.svg#cart"> </use>
                          </svg>
                          <svg class="half-circle svg-fill">
                            <use href="/assets/svg/icon-sprite.svg#halfcircle"></use>
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h4>10,000</h4><span class="f-light">Purchase</span>
                      </div>
                    </div>
                    <div class="font-secondary f-w-500"><i class="icon-arrow-up icon-rotate me-1"></i><span>+50%</span></div>
                  </div>
                </div>
              </div>
      </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <h3>News Alert List</h3>
                    <!-- using global search component using for searching -->
                    <div class="row align-items-baseline">
                            <div class="col-md-4 col-sm-12">
                                <SearchInput ></SearchInput>
                            </div>
                            <div class="col-md-8 col-sm-12">
                                <div style="float: right">
                                    <router-link class="btn btn-primary "   :to="{ name:'news-alert-create'}">Add News Alert</router-link>
                                    <button class="ml btn btn-light"  type="button" data-bs-toggle="tooltip" title="Filters" data-bs-original-title="Filters">
                                    <i class="icofont icofont-filter" style="font-size: 16px;"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                  </div>
                    <news-table :news="news"></news-table>
                </div>
              </div>
        </div>
      </div>
</template>
<script>
import NewsTable from "./NewsTable";
export default {
components:{NewsTable},
data () {
    return {
        news: {},
      loading: false,
    }
  },
  methods:{
        getNews(){
            this.loading=true;
            axios.get('/news').then((res)=>{
                this.news=res.data.news;
            }).catch((err)=>{
                
            });
            this.loading=false;
        }
  },
  mounted() {
    console.log('test2');
    this.getNews();
  },

}
</script>
<style scoped>
.ml{
margin-left:6px;
}
</style>
