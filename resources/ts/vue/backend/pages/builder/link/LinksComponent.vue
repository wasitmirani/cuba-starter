<template>
  <div>

         <Breadcrumb  active_name="Links" ></Breadcrumb>
         <div class="container-fluid">
            <div class="row widget-grid">
                <div class="col-sm-6 col-xl-3 col-lg-6 box-col-6" v-for="item in 4">
                    <div class="card widget-1">
                      <div class="card-body">
                        <div class="widget-content">
                          <div class="widget-round primary">
                            <div class="bg-round">
                              <svg class="svg-fill">
                                <use href="/assets/svg/icon-sprite.svg#stroke-button"> </use>
                              </svg>
                              <svg class="half-circle svg-fill">
                                <use href="/assets/svg/icon-sprite.svg#stroke-button"></use>
                              </svg>
                            </div>
                          </div>
                          <div>
                            <h4>0</h4><span class="f-light">Links View</span>
                          </div>
                        </div>
                        <div class="font-primary f-w-500"><i class="icon-arrow-down icon-rotate me-1"></i><span>-20%</span></div>
                      </div>
                    </div>
                  </div>
                  </div>
          <!-- Container-fluid starts-->
          <div class="row">
            <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <h3>Bio Links List</h3>
                    <!-- using global search component using for searching -->
                    <div class="row align-items-baseline">
                            <div class="col-md-4 col-sm-12">
                                <SearchInput ></SearchInput>
                            </div>
                            <div class="col-md-8 col-sm-12">
                                <div style="float: right">
                                    <!-- <button class="btn btn-primary "  >Create Link</button> -->

                                        <a class="btn btn-dark" data-bs-toggle="modal" href="#exampleModalToggle" role="button" data-bs-dismiss="modal" data-bs-original-title="" title="">Create Link</a>
                                    <button class="ml btn btn-light"  type="button" data-bs-toggle="tooltip" title="Filters" data-bs-original-title="Filters">
                                    <i class="icofont icofont-filter" style="font-size: 16px;"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                  </div>
                    <user-table :users="users"></user-table>
                </div>
              </div>
        </div>
             <!-- <div class="modal fade" id="modalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenter" aria-hidden="true">
                      <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title">Create biolink page</h5>
                            <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">

                             <div class="mb-3  ">
                            <label class="form-label"><i class="icofont icofont-link-alt "></i>  Biolink URL</label>
                            <div class="input-group pill-input-group"><span class="input-group-text ">
                               {{this.url}}
                             </span>
                              <input  :state="validation" :class="`form-control input-group-air ${validation ? 'is-invalid' : ''} ${this.errors.message.length>0 ? 'is-invalid' : ''} `"  v-model="link.short_link" type="text" placeholder="your-custom-alias">

                            </div>
                            <div class="text-danger" v-if="validation">Your custom alias  must be 4-100 characters long.</div>
                             <div class="text-danger" v-if="this.errors.message.length>0">{{this.errors.message}}</div>
                          </div>
                          </div>
                          <div class="modal-footer">

                            <button class="btn btn-pill btn-primary btn-air-primary" @click="onSubmit" type="button">Submit</button>
                          </div>
                        </div>
                      </div>
            </div> -->
  </div>


</div>
<div class="modal fade" id="exampleModalToggle" aria-labelledby="exampleModalToggle" tabindex="-1"  role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-body">
          <div class="modal-toggle-wrapper">
            <ul class="modal-img">

            </ul>
            <div class="mb-3  ">
                <label class="form-label"><i class="icofont icofont-link-alt "></i>  Biolink URL</label>
                <div class="input-group pill-input-group"><span class="input-group-text ">
                   {{this.url}}
                 </span>
                  <input  :state="validation" :class="`form-control input-group-air ${validation ? 'is-invalid' : ''} ${this.errors.message.length>0 ? 'is-invalid' : ''} `"  v-model="link.short_link" type="text" placeholder="your-custom-alias">

                </div>
                <div class="text-danger" v-if="validation">Your custom alias  must be 4-100 characters long.</div>
                 <div class="text-danger" v-if="this.errors.message.length>0">{{this.errors.message}}</div>
              </div>
              <div class="row">
                <button  @click="onSubmit" type="button" class="btn btn-dark rounded-pill w-100 mt-2" >Connect new link</button>
                <button class="btn rounded-pill w-100 pb-0 dark-toggle-btn" type="button" data-bs-dismiss="modal" data-bs-original-title="" title="">Cancel</button>
              </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { Bootstrap5Pagination } from 'laravel-vue-pagination';

import TableFooter from "./TableFooter.vue";
// import LoaderBox from "../../../components/loaderboxComponent.vue";
// LoaderBox
export default {
    components: {'Pagination': Bootstrap5Pagination,TableFooter},
    data(){
        return{
            links: [],
            url: '',
            link:{},
            query:'',
            errors:{
              message:'',
            },
        }
    },
    computed:{
        validation(){
            if(this.link.short_link){
                 return this.link.short_link.length < 4 ? true : false;
            }

        },
    },
    methods:{
        openModal(){
            $('#modalCenter').modal('show');

        },
         searchQuery: _.debounce(
            function () {
               this.links=[];
                this.getLinks();
            },
            1000 // 500 milliseconds
            ),
        onSubmit(){
           if(!this.validation){
             axios.post('/short-link',this.link).then((res)=>{
              let data=res.data.link;
               $('#modalCenter').modal('hide');
                 this.$notify({
                        title: "Success",
                        text: res.data.message,
                        type:"success"
                        });
              this.$router.push({name:'profile-builder',query:{slug:data.slug}});
            }).catch((err)=>{
                let error=err.response.data;
                console.log(error);

                if(error){
                    this.errors.message=error.message;
                    this.$notify({
                        title: "Error",
                        text: error.message,
                        type:"error"
                        });
                }

                console.log(this.errors);

            });
           }

        },
        editItem(link){
            this.$router.push({name:'profile-builder',query:{slug:link.slug}});
        },
        getLinks(page = 1){
        axios.get('/short-link?page=' + page+"&query="+this.query).then(response => {
            this.links = response.data.links;
        });
        },
    },
    created() {
        this.getLinks();
        this.url=window.location.origin + "/profile/";
    }
}
</script>

<style>
  .element-inner-container {
    cursor: pointer;
    border: 2px dashed var(--theme-deafult);
    box-shadow: 1px 1px 10px var(--theme-deafult);
    padding: 10px;
    margin-bottom: 4px;
    margin-top: 10px;
    border-radius: 12px;
    margin-left: 10px;
    margin-right: 15px;
    }
.is-invalid{
    border-color: #dc3545;
    padding-right: calc(1.5em + 0.75rem);
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.1875rem) center;
    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
</style>
