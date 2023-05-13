<template>
  <div>

   <div class="col-sm-12">
                    <div class="card">
                      <!-- <div class="card-header pb-0">
                        <h5>Default Form Layout</h5><span>Using the <a href="#">card</a> component, you can extend the default collapse behavior to create an accordion.</span>
                      </div> -->
                      <div class="card-body">
                        <form class="theme-form"  v-on:submit.prevent="onSubmit">

                       
                            <ul class="nav nav-tabs" id="icon-tab" role="tablist">
                              <li class="nav-item"><a class="nav-link active" id="icon-home-tab" data-bs-toggle="tab" href="#icon-home" role="tab" aria-controls="icon-home" aria-selected="true"><i class="icofont icofont-ui-home"></i>Form Settings</a></li>
                              <li class="nav-item"><a class="nav-link" id="profile-icon-tab" data-bs-toggle="tab" href="#profile-icon" role="tab" aria-controls="profile-icon" aria-selected="false"><i class="icofont icofont-man-in-glasses"></i>Data Settings</a></li>
                              <li class="nav-item"><a class="nav-link" id="contact-icon-tab" data-bs-toggle="tab" href="#contact-icon" role="tab" aria-controls="contact-icon" aria-selected="false"><i class="icofont icofont-contacts"></i>Button Settings</a></li>
                            </ul>
                            <div class="tab-content" id="icon-tabContent">
                              <div class="tab-pane fade show active mt-2" id="icon-home" role="tabpanel" aria-labelledby="icon-home-tab">
                                    <div class="mb-1">
                                      <label class="col-form-label pt-0" for="exampleInputPassword1">Email Placeholder</label>
                                      <input class="form-control" v-model="mail.email_placeholder" id="exampleFormControlTextarea4" rows="4" />
                                    </div>
                                     <div class="mb-1">
                                      <label class="col-form-label pt-0" for="exampleInputPassword1">Name Placeholder</label>
                                      <input class="form-control" v-model="mail.name_placeholder" id="exampleFormControlTextarea4" rows="4" />
                                    </div>
                                     <div class="mb-1">
                                      <label class="col-form-label pt-0" for="exampleInputPassword1">Button Text</label>
                                      <input class="form-control" v-model="mail.button_text" id="exampleFormControlTextarea4" rows="4" />
                                    </div>
                                     <div class="mb-1">
                                      <label class="col-form-label pt-0" for="exampleInputPassword1">Thank You Message</label>
                                      <input class="form-control" v-model="mail.thankyou_message" id="exampleFormControlTextarea4" rows="4" />
                                    </div>
                                      <div class="mb-1">
                                      <label class="col-form-label pt-0" for="exampleInputPassword1">Thank You URL</label>
                                      <input class="form-control" v-model="mail.thankyou_url" id="exampleFormControlTextarea4" rows="4" />
                                    </div>
                                     <div class="mb-1">
                                     <label class="col-form-label">Show Agreement</label>
                                     <br>
                                     <small class="col-form-label">Require the user to confirm his agreement by ticking a checkbox.</small>
                                       <div class="media-body text-end icon-state ">
                                          <label class="switch">
                                          <input type="checkbox" v-model="mail.show_agreement" :checked="mail.show_agreement">
                                            <span class="switch-state"></span>
                                          </label>
                                       </div>
                                      </div>
                                       <div class="mb-1">
                                        <label class="col-form-label pt-0" for="exampleInputPassword1">Agreement Text</label>
                                        <input class="form-control" v-model="mail.agreement_text" id="exampleFormControlTextarea4" rows="4" />
                                    </div>
                                       <div class="mb-1">
                                        <label class="col-form-label pt-0" for="exampleInputPassword1">Agreement URL</label>
                                        <input class="form-control" v-model="mail.agreement_url" id="exampleFormControlTextarea4" rows="4" />
                                    </div>
                              </div>
                              <div class="tab-pane fade mt-2" id="profile-icon" role="tabpanel" aria-labelledby="profile-icon-tab">
                                 <div class="mb-1">
                                      <label class="col-form-label pt-0" for="exampleInputPassword1">MailChimp API Key</label>
                                      <input class="form-control" v-model="mail.mailchimp_api" id="exampleFormControlTextarea4" rows="4" />
                                    </div>
                                      <div class="mb-1">
                                      <label class="col-form-label pt-0" for="exampleInputPassword1">MailChimp List</label>
                                      <input class="form-control" v-model="mail.mailchimp_list" id="exampleFormControlTextarea4" rows="4" />
                                    </div>
                                      <div class="mb-1">
                                      <label class="col-form-label pt-0" for="exampleInputPassword1">Email</label>
                                      <input class="form-control" v-model="mail.email" id="exampleFormControlTextarea4" rows="4" />
                                    </div>
                                     <div class="mb-1">
                                      <label class="col-form-label pt-0" for="exampleInputPassword1">Webhook URL</label>
                                      <input class="form-control" v-model="mail.webhook_url" id="exampleFormControlTextarea4" rows="4" />
                                    </div>
                              </div>
                              <div class="tab-pane fade mt-2" id="contact-icon" role="tabpanel" aria-labelledby="contact-icon-tab">
                                <div class="mb-1">
                                        <label class="col-form-label pt-0" for="exampleInputPassword1">Button Name</label>
                                        <input class="form-control" v-model="mail.value" id="exampleFormControlTextarea4" rows="4" />
                                      </div>
                                       <div class="mb-1">
                                        <label class="col-form-label pt-0" for="exampleInputPassword1">Button Icon</label>
                                        <input class="form-control" v-model="mail.button_icon" id="exampleFormControlTextarea4" rows="4" />
                                      </div>
                                       <div class="mb-1">
                                        <label class="col-form-label pt-0" for="exampleInputPassword1">Button Color</label>
                                        <input type="color" class="form-control" v-model="mail.button_color" id="exampleFormControlTextarea4" rows="4" />
                                      </div>
                                       <div class="mb-1">
                                        <label class="col-form-label pt-0" for="exampleInputPassword1">Button Background</label>
                                        <input type="color" class="form-control" v-model="mail.button_backgruound" id="exampleFormControlTextarea4" rows="4" />
                                      </div>
                                       <div class="mb-1">
                                        <label class="col-form-label pt-0" for="exampleInputPassword1">Button Border</label>
                                        <input type="color" class="form-control" v-model="mail.button_backgruound" id="exampleFormControlTextarea4" rows="4" />
                                      </div>
                                   
                                        <div class="mb-1">
                                        <label class="col-form-label pt-0" for="exampleInputPassword1">Button Border</label>
                                          <select  class="form-select digits" id="exampleFormControlSelect9" v-model="mail.button_border">
                                                <option value="straight"  >Bounce</option>
                                                <option value="round"  >Round</option>
                                                <option value="rounded"  >Rounded</option>
                                             </select>
                                      </div>
                                         <div class="mb-1">
                                        <label class="col-form-label pt-0" for="exampleInputPassword1">Button Animation</label>
                                          <select  class="form-select digits" id="exampleFormControlSelect9" v-model="mail.button_animation">
                                                <option value="bounce"  >Bounce</option>
                                                <option value="tada"  >Tada</option>
                                                <option value="swing"  >Swing</option>
                                             </select>
                                      </div>
                                      
                              </div>
                            </div>
                  
                          <div class="mt-4">
                             <button class="btn btn-pill btn-primary btn-air-primary" type="submit">Submit</button>
                          </div>


                        </form>
                      </div>

                    </div>
             </div>
  </div>

</template>

<script>
export default {
props:['mail'],
data(){
    return{
        mail:{},
    }
},
methods:{
    onSubmit(){
        this.$emit('submitMail', this.mail);
    }
},
mounted(){
    // if(this.link_value){
    //     this.link = this.link_value;
    // }
    // this.link.url=this.link_value.url;
}
}
</script>

<style>

</style>
