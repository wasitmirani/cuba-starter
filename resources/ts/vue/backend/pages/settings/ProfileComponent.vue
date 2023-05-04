<template>
  <div>
    <breadcrumb active_name="App Settings"></breadcrumb>
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
                ><i class="icofont icofont-ui-home"> </i>Basic Settings</a
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
                ><i class="icofont icofont-ui-message"></i>Google Settings</a
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
                ><i class="icofont icofont-email"></i>SMTP Settings</a
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
                <h4>Settings</h4>
                <p>This tab contains the basic settings of the App</p>
              </div>
              <!-- <loader-box v-if="loading"></loader-box> -->
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-12">
                    <div class="row">
                      <div class="col-sm-3 mb-2">
                        <label class="col-form-label" for="first-name"
                          >Company Image</label
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
                            :src="`${url}/img/app/${this.app_settings?.thumbnail}`"
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
                              <label class="col-form-label" for="app-title"
                                >App Title</label
                              >
                            </div>
                            <div class="col-sm-9">
                              <input
                                type="text"
                                id="app-title"
                                class="form-control"
                                name="app_title"
                                v-model="app_settings.app_title"
                                placeholder="App Name"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="mb-2 row">
                            <div class="col-sm-3">
                              <label class="col-form-label" for="copyright"
                                >Copyright</label
                              >
                            </div>
                            <div class="col-sm-9">
                              <input
                                type="text"
                                id="copyright"
                                class="form-control"
                                name="copyright"
                                v-model="app_settings.copyright"
                                placeholder="Copyright"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="mb-2 row">
                            <div class="col-sm-3">
                              <label
                                class="col-form-label"
                                for="app-description"
                                >App Description</label
                              >
                            </div>
                            <div class="col-sm-9">
                              <textarea
                                type="text"
                                id="app-description"
                                class="form-control"
                                name="app_description"
                                v-model="app_settings.app_description"
                                placeholder="App Description"
                              ></textarea>
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
                    <h4>Goole Login Setup</h4>
                    <p>For user login or registraion</p>
                  </div>

                  <div class="media mb-2">
                    <label class="col-form-label m-r-10"
                      >Allow Goole Login</label
                    >
                    <div class="media-body text-end">
                      <label class="switch">
                        <input
                          type="checkbox"
                          v-model="app_settings.allow_google_login"
                          checked=""
                        /><span class="switch-state"></span>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-6">
                      <div class="mb-2 row">
                        <div class="col-sm-4">
                          <label class="col-form-label" for="google-client-id"
                            >Google Client ID</label
                          >
                        </div>
                        <div class="col-sm-8">
                          <input
                            type="password"
                            id="google-client-id"
                            class="form-control"
                            name="google_client_id"
                            v-model="app_settings.google_client_id"
                            placeholder="Google Client ID"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="mb-2 row">
                        <div class="col-sm-4">
                          <label
                            class="col-form-label"
                            for="google-client-secret"
                            >Google Client Secret</label
                          >
                        </div>
                        <div class="col-sm-8">
                          <input
                            type="password"
                            id="google-client-secret"
                            class="form-control"
                            name="google_client_secret"
                            v-model="app_settings.google_client_secret"
                            placeholder="Google Client Secret"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="mb-2 row">
                        <div class="col-sm-4">
                          <label
                            class="col-form-label"
                            for="google-redirect-url"
                            >Google Redirect URL</label
                          >
                        </div>
                        <div class="col-sm-8">
                          <input
                            type="text"
                            id="google-redirect-url"
                            class="form-control"
                            name="google_redirect_url"
                            v-model="app_settings.google_redirect_url"
                            placeholder="Google Redirect URL"
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
                    <h4>SMTP Setup</h4>
                    <p>For email send to user</p>
                  </div>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-6">
                      <div class="mb-2 row">
                        <div class="col-sm-4">
                          <label class="col-form-label" for="smtp-host"
                            >SMTP Host</label
                          >
                        </div>
                        <div class="col-sm-8">
                          <input
                            type="text"
                            id="smtp-host"
                            class="form-control"
                            name="smtp_host"
                            v-model="app_settings.smtp_host"
                            placeholder="SMTP Host"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="mb-2 row">
                        <div class="col-sm-4">
                          <label class="col-form-label" for="smtp-port"
                            >SMTP Port</label
                          >
                        </div>
                        <div class="col-sm-8">
                          <input
                            type="text"
                            id="smtp-host"
                            class="form-control"
                            name="smtp_port"
                            v-model="app_settings.smtp_port"
                            placeholder="SMTP Port"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="mb-2 row">
                        <div class="col-sm-4">
                          <label class="col-form-label" for="smtp-username"
                            >SMTP Username</label
                          >
                        </div>
                        <div class="col-sm-8">
                          <input
                            type="text"
                            id="smtp-username"
                            class="form-control"
                            name="smtp_username"
                            v-model="app_settings.smtp_username"
                            placeholder="SMTP Port"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="mb-2 row">
                        <div class="col-sm-4">
                          <label class="col-form-label" for="smtp-password"
                            >SMTP Password</label
                          >
                        </div>
                        <div class="col-sm-8">
                          <input
                            type="password"
                            id="smtp-password"
                            class="form-control"
                            name="password"
                            v-model="app_settings.smtp_password"
                            placeholder="SMTP Password"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="mb-2 row">
                        <div class="col-sm-4">
                          <label class="col-form-label" for="smtp-email"
                            >SMTP Email</label
                          >
                        </div>
                        <div class="col-sm-8">
                          <input
                            type="email"
                            id="smtp-email"
                            class="form-control"
                            name="email"
                            v-model="app_settings.email"
                            placeholder="SMTP Email"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="mb-2 row">
                        <div class="col-sm-4">
                          <label class="col-form-label" for="smtp-sender"
                            >SMTP Sender</label
                          >
                        </div>
                        <div class="col-sm-8">
                          <input
                            type="text"
                            id="smtp-sender"
                            class="form-control"
                            name="sender"
                            v-model="app_settings.sender"
                            placeholder="SMTP Sender"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="mb-2 row">
                        <div class="col-sm-4">
                          <label class="col-form-label" for="smtp-encryption"
                            >SMTP Encryption</label
                          >
                        </div>
                        <div class="col-sm-8">
                          <input
                            type="text"
                            id="smtp-encryption"
                            class="form-control"
                            name="encryption"
                            v-model="app_settings.encryption"
                            placeholder="SMTP Encryption"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="mb-2 row">
                        <div class="col-sm-4">
                          <label class="col-form-label" for="smtp-port"
                            >SMTP Port</label
                          >
                        </div>
                        <div class="col-sm-8">
                          <input
                            type="text"
                            id="smtp-host"
                            class="form-control"
                            name="smtp_port"
                            v-model="app_settings.smtp_port"
                            placeholder="SMTP Port"
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
      app_settings: {},
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
        this.app_settings.thumbnail = this.media[0]?.name;
      }
    },
    async onSubmit() {
      this.loading = true;
      await axios
        .post("app-settings", this.app_settings)
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
      axios.get("app-settings").then((res) => {
        this.app_settings = res.data.app_settings;
        this.countries = res.data.countries;
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