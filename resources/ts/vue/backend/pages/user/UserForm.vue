<template >
    <div class="row">
        <div class="col-xl-4">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title mb-0">{{!edit ? 'Create Profile' : 'Update Profile'  }} </h4>
              <div class="card-options"><a class="card-options-collapse" href="#" data-bs-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a><a class="card-options-remove" href="#" data-bs-toggle="card-remove"><i class="fe fe-x"></i></a></div>
            </div>
            <div class="card-body">
              <form>
                <div class="row mb-2">
                  <div class="profile-title">
                    <label class="form-label">Upload Thumbnail</label>
                    <div class="media">
                    <!-- <img class="img-70 rounded-circle" alt="" src="/assets/images/user/7.jpg"> -->

                    <upload-media
                    v-if="updateImage"
                    class="round"
                    server="/app-thumbnail-upload"
                    @media="Media"
                    ref="upload-media"
                  >
                  </upload-media>
                      <div class="media-body">
                        <h5 class="mb-1">{{user.name}}</h5>
                        <p>{{user.role}}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <h6 class="form-label">Bio</h6>
                  <textarea   :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'name')}`" rows="5" v-model="user.bio"></textarea>


              <validate-input :errors="errors?.errors" value="bio"></validate-input>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-xl-8">
          <form class="card "  v-on:submit.prevent="onSubmit">
            <div class="card-header">
              <h4 class="card-title mb-0">Create New User</h4>
              <div class="card-options"><a class="card-options-collapse" href="#" data-bs-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a><a class="card-options-remove" href="#" data-bs-toggle="card-remove"><i class="fe fe-x"></i></a></div>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-sm-6 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">First Name</label>
                      <input :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'name')}`"  type="text" v-model="user.name" placeholder="First Name">
                      <validate-input :errors="errors?.errors" value="name"></validate-input>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Last Name</label>
                      <input :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'last_name')}`" v-model="user.last_name"  type="text" placeholder="Last Name">
                      <validate-input :errors="errors?.errors" value="last_name"></validate-input>
                    </div>
                  </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <label class="form-label">Company</label>
                    <input :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'company')}`"  type="text" v-model="user.company" placeholder="Company">
                    <validate-input :errors="errors?.errors" value="company"></validate-input>
                  </div>
                </div>

                <div class="col-sm-6 col-md-4">
                  <div class="mb-3">
                    <label class="form-label">Email address</label>
                    <!-- <input class="form-control" type="email"  v-model="user.email"  placeholder="Email"> -->
                    <input :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'email')}`"  type="email" v-model="user.email" placeholder="Email">
                    <validate-input :errors="errors?.errors" value="email"></validate-input>
                  </div>
                </div>
                <div class="col-sm-6 col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Role</label>
                      <input class="form-control" type="email"  v-model="user.role"  placeholder="Role">

                      <validate-input :errors="errors?.errors" value="roles"></validate-input>
                    </div>
                  </div>

                <div class="col-md-12">
                  <div class="mb-3">
                    <label class="form-label">Address</label>
                    <!-- <input class="form-control" type="text"  v-model="user.address"  placeholder="Home Address"> -->
                    <input :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'address')}`"  type="email" v-model="user.address" placeholder="Home Address">
                    <validate-input :errors="errors?.errors" value="address"></validate-input>
                  </div>
                </div>
                <div class="col-sm-6 col-md-4">
                  <div class="mb-3">
                    <label class="form-label">City</label>
                    <input :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'city')}`"  type="text" v-model="user.city" placeholder="City">
                    <validate-input :errors="errors?.errors" value="city"></validate-input>
                  </div>
                </div>
                <div class="col-sm-6 col-md-3">
                  <div class="mb-3">
                    <label class="form-label">Postal Code</label>
                    <!-- <input class="form-control" type="number" v-model="user.postal_code" placeholder="ZIP Code"> -->
                    <input :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'postal_code')}`"  type="text" v-model="user.postal_code" placeholder="ZIP Code">
                    <validate-input :errors="errors?.errors" value="postal_code"></validate-input>
                  </div>
                </div>
                <div class="col-md-5">
                  <div class="mb-3">
                    <label class="form-label">Country</label>
                    <select class="form-control btn-square"  v-model="user.country">
                      <option value="0">--Select--</option>
                      <option value="1">Germany</option>
                      <option value="2">Canada</option>
                      <option value="3">Usa</option>
                      <option value="4">Aus</option>
                    </select>
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
    user:{},
    errors:[],
}),

methods:{

    restForm(){
            this.user={};

    },
   async  onSubmit(){
            if(!this.edit_mode){
               await axios.post('/user', this.user).then((res)=>{
                this.$router.push("/pusers" );
                this.$root.alertNotify(res.status,'Created successfully','success',res.data);
                this.restForm();
                }).catch((err)=>{
                  this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);

                })
            } else{
              await axios.put('/user/' + this.form.id, this.user).then((res)=>{
                this.$router.push("/users" );
                  this.$root.alertNotify(res.status,'Updated successfully','success',res.data);
                //   this.restForm();
              }).catch((err)=>{
                this.$router.push("/users" );
                  this.$root.alertNotify(err.response.status,null,'error', err.response.data);
              })
          }
      },
}
}
</script>
<style lang="">

</style>
