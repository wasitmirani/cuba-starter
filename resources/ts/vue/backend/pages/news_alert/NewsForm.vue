<template >
    <div class="row">
        
        <div class="col-xl-12">
          <form class="card "  v-on:submit.prevent="onSubmit">
            <div class="card-header">
                <h4 class="card-title mb-0">{{!edit ? 'Create News' : 'Update News'  }} </h4>
              <div class="card-options"><a class="card-options-collapse" href="#" data-bs-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a><a class="card-options-remove" href="#" data-bs-toggle="card-remove"><i class="fe fe-x"></i></a></div>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-sm-6 col-md-6">
                    <div class="mb-3">
                        <label class="form-label">Select Color</label>
                      <input :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'color')}`"  type="color" v-model="news.color" placeholder="Select Color">
                      <validate-input :errors="errors?.errors" value="color"></validate-input>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Name</label>
                      <input :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'name')}`" v-model="news.name"  type="text" placeholder="Name">
                      <validate-input :errors="errors?.errors" value="name"></validate-input>
                    </div>
                  </div>
                <div class="col-md-12">
                  <div class="mb-3">
                    <label class="form-label">Description</label>
                    <input :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'description')}`"  type="text" v-model="news.description" placeholder="Description">
                    <validate-input :errors="errors?.errors" value="description"></validate-input>
                  </div>
                </div>


              </div>
            </div>
            <div class="card-footer text-end">
              <button class="btn btn-primary" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
</template>
<script>
export default {
props:['form','edit'],
data:()=>({
    news:{},
    errors:[],
}),

methods:{

    restForm(){
            this.news={};

    },
   async  onSubmit(){
            if(!this.edit){
               await axios.post('/news', this.news).then((res)=>{
                this.$router.push("/news-alerts" );
                this.$root.alertNotify(res.status,'Created successfully','success',res.data);
                this.restForm();
                }).catch((err)=>{
                  this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);

                })
            } else{
              await axios.put('/news/' + this.form.id, this.news).then((res)=>{
                this.$router.push("/news-alerts" );
                  this.$root.alertNotify(res.status,'Updated successfully','success',res.data);
                //   this.restForm();
              }).catch((err)=>{
                this.$router.push("/news-alerts" );
                  this.$root.alertNotify(err.response.status,null,'error', err.response.data);
              })
          }
      },
    },
    mounted(){
      if (this.edit) {
          this.news = this.form
        }
    },
}

</script>
<style lang="">

</style>
