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
                  <textarea class="form-control" rows="5" v-model="user.bio"></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-xl-8">
          <form class="card">
            <div class="card-header">
              <h4 class="card-title mb-0">Create New User</h4>
              <div class="card-options"><a class="card-options-collapse" href="#" data-bs-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a><a class="card-options-remove" href="#" data-bs-toggle="card-remove"><i class="fe fe-x"></i></a></div>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-sm-6 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">First Name</label>
                      <input class="form-control" type="text" v-model="user.name" placeholder="First Name">
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Last Name</label>
                      <input class="form-control" v-model="user.last_name"  type="text" placeholder="Last Name">
                    </div>
                  </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <label class="form-label">Company</label>
                    <input class="form-control" type="text" v-model="user.company" placeholder="Company">
                  </div>
                </div>

                <div class="col-sm-6 col-md-4">
                  <div class="mb-3">
                    <label class="form-label">Email address</label>
                    <input class="form-control" type="email"  v-model="user.email"  placeholder="Email">
                  </div>
                </div>
                <div class="col-sm-6 col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Role</label>
                      <input class="form-control" type="email"  v-model="user.role"  placeholder="Role">
                    </div>
                  </div>

                <div class="col-md-12">
                  <div class="mb-3">
                    <label class="form-label">Address</label>
                    <input class="form-control" type="text"  v-model="user.address"  placeholder="Home Address">
                  </div>
                </div>
                <div class="col-sm-6 col-md-4">
                  <div class="mb-3">
                    <label class="form-label">City</label>
                    <input class="form-control"  v-model="user.city"  type="text" placeholder="City">
                  </div>
                </div>
                <div class="col-sm-6 col-md-3">
                  <div class="mb-3">
                    <label class="form-label">Postal Code</label>
                    <input class="form-control" type="number" v-model="user.postal_code" placeholder="ZIP Code">
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
}),
}
</script>
<style lang="">

</style>
