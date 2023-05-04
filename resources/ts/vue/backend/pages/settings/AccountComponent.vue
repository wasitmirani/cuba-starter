<template>
    <div>
      <breadcrumb active_name="Account"></breadcrumb>
      <div class="container-fluid">
        <div class="card">
          <div class="card-body">
            <ul
              class="nav nav-tabs border-tab mb-0"
              id="bottom-tab"
              role="tablist"
            >
              <li class="nav-item">
                <a
                  class="nav-link nav-border txt-primary tab-primary pt-0 active"
                  id="bottom-home-tab"
                  data-bs-toggle="tab"
                  href="#bottom-home"
                  role="tab"
                  aria-controls="bottom-home"
                  aria-selected="true"
                  ><i class="icofont icofont-ui-user"> </i>User Settings</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link nav-border txt-primary tab-primary"
                  id="bottom-inbox-tab"
                  data-bs-toggle="tab"
                  href="#bottom-inbox"
                  role="tab"
                  aria-controls="bottom-inbox"
                  aria-selected="false"
                  ><i class="icofont icofont-ui-message"></i>Email Settings</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link nav-border txt-primary tab-primary"
                  id="bottom-contact-tab"
                  data-bs-toggle="tab"
                  href="#bottom-contact"
                  role="tab"
                  aria-controls="bottom-contact"
                  aria-selected="false"
                  ><i class="icofont icofont-ui-password"></i>Password Settings</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="tab-content" id="bottom-tabContent">
            <div
              class="tab-pane fade active show"
              id="bottom-home"
              role="tabpanel"
              aria-labelledby="bottom-home-tab"
            >
              <div class="card">
                <div class="card-header">
                  <h4>User Settings</h4>
                  <p>For basic settings of user</p>
                </div>
                <!-- <loader-box v-if="loading"></loader-box> -->
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="row">
                        <div class="col-sm-3 mb-2">
                          <label class="col-form-label" for="first-name"
                            >Profile Image</label
                          >
                        </div>
                        <div class="col-sm-9 mb-2">
                          <upload-media
                            v-if="updateImage"
                            class="round"
                            server="/app-thumbnail-upload"
                            @media="Media"
                            ref="upload-media"
                          >
                          </upload-media>
                          <div v-else class="profile-img app-setting-image">
                            <img
                              class="round"
                              :src="`${url}/img/app/${this.user?.thumbnail}`"
                              height="150"
                              width="150"
                              alt="img-placeholder"
                            />
                            <i
                              @click="updateImage = true"
                              class="fa fa-close ml-4 cursor-pointer"
                            ></i>
                          </div>
                        </div>
                      </div>
                      <form
                        class="form form-horizontal"
                        v-on:submit.prevent="onSubmit"
                      >
                        <div class="row">
                          <div class="col-12">
                            <div class="mb-2 row">
                              <div class="col-sm-3">
                                <label class="col-form-label" for="name"
                                  >Name</label
                                >
                              </div>
                              <div class="col-sm-9">
                                <input
                                  type="text"
                                  id="name"
                                  class="form-control"
                                  name="name"
                                  v-model="user.name"
                                  placeholder="Name"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="mb-2 row">
                              <div class="col-sm-3">
                                <label class="col-form-label" for="phone"
                                  >Phone</label
                                >
                              </div>
                              <div class="col-sm-9">
                                <input
                                  type="text"
                                  id="phone"
                                  class="form-control"
                                  name="phone"
                                  v-model="user.phone"
                                  placeholder="phone"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="bottom-inbox"
              role="tabpanel"
              aria-labelledby="bottom-inbox-tab"
            >
              <form class="form form-horizontal" v-on:submit.prevent="onSubmit">
                <div class="card">
                  <div class="card-header d-flex justify-content-between">
                    <div>
                      <h4>Email Settings</h4>
                      <p>For user email settings</p>
                    </div>
  
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-6">
                        <div class="mb-2 row">
                          <div class="col-sm-4">
                            <label class="col-form-label" for="email"
                              >Email</label
                            >
                          </div>
                          <div class="col-sm-8">
                            <input
                              type="email"
                              id="google-client-id"
                              class="form-control"
                              name="email"
                              v-model="user.email"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="mb-2 row">
                          <div class="col-sm-4">
                            <label class="col-form-label" for="new-email"
                              >New Email</label
                            >
                          </div>
                          <div class="col-sm-8">
                            <input
                              type="email"
                              id="new-email"
                              class="form-control"
                              name="new-email"
                              v-model="user.new_email"
                              placeholder="New Email"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-9 offset-sm-3">
                        <button
                          type="submit"
                          class="btn btn-primary me-1 waves-effect waves-float waves-light float-right"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div
              class="tab-pane fade"
              id="bottom-contact"
              role="tabpanel"
              aria-labelledby="bottom-contact-tab"
            >
              <form class="form form-horizontal" v-on:submit.prevent="onSubmit">
                <div class="card">
                  <div class="card-header d-flex justify-content-between">
                    <div>
                      <h4>Password Settings</h4>
                      <p>For user password settings</p>
                    </div>
  
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-6">
                        <div class="mb-2 row">
                          <div class="col-sm-4">
                            <label class="col-form-label" for="current-password"
                              >Current Password</label
                            >
                          </div>
                          <div class="col-sm-8">
                            <input
                              type="password"
                              id="current-password"
                              class="form-control"
                              name="current_password"
                              v-model="user.current_password"
                              placeholder="Current Password"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="mb-2 row">
                          <div class="col-sm-4">
                            <label class="col-form-label" for="new-password"
                              >New Password</label
                            >
                          </div>
                          <div class="col-sm-8">
                            <input
                              type="password"
                              id="new-password"
                              class="form-control"
                              name="new_password"
                              v-model="user.new_password"
                              placeholder="New Password"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="mb-2 row">
                          <div class="col-sm-4">
                            <label class="col-form-label" for="confirm-new-password"
                              >Confirm New Password</label
                            >
                          </div>
                          <div class="col-sm-8">
                            <input
                              type="password"
                              id="confirm-password"
                              class="form-control"
                              name="confirm_new_password"
                              v-model="user.confirm_new_password"
                              placeholder="Confirm New Password"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-9 offset-sm-3">
                        <button
                          type="submit"
                          class="btn btn-primary me-1 waves-effect waves-float waves-light float-right"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="row"></div>
        <div class="row"></div>
      </div>
    </div>
  </template>
    
    <script>
  // import breadcrumb from "../../components/breadcrumbComponent.vue";
  import UploadMedia from "vue-media-upload";
  import Breadcrumb from "../components/BreadcrumbComponent.vue";
  
  export default {
    components: { UploadMedia, Breadcrumb },
    data() {
      return {
        user: {},
        media: [],
        url: window.location.origin,
        api_url: "/app-thumbnail-upload",
        updateImage: false,
        loading: false,
        countries: [],
      };
    },
  
    methods: {
      Media(value) {
        if (this.media.length > 1) {
          this.media.splice(0, 1);
          if (this.$refs["upload-media"] != undefined)
            this.$refs["upload-media"].reset();
        }
        this.media = [];
        this.media = value;
        if (this.media) {
          console.log(this?.$refs["upload-media"].media);
          // console.log(this.$refs?.upload-media?.media);
          this.user.thumbnail = this.media[0]?.name;
        }
      },
      async onSubmit() {
        this.loading = true;
        await axios
          .post("user-settings", this.user)
          .then((res) => {
            this.getAppSettings();
            this.loading = false;
            this.updateImage = false;
          })
          .catch((err) => {
            this.$root.alertNotify(
              err.response.status,
              null,
              "error",
              err.response.data
            );
          });
      },
  
      getAppSettings() {
        this.loading = true;
        axios.get("user-settings").then((res) => {
          this.user = res.data.user;
          this.loading = false;
        });
      },
    },
    mounted() {
      this.getAppSettings();
    },
  };
  </script>
    
    <style>
  .image-container .images-preview {
    height: 100px !important;
    width: 130px !important;
    border: 1px solid #e1e1e1;
    padding: 10px;
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 15%) 1.95px 1.95px 2.6px;
  }
  </style>