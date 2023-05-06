<template >
    <Breadcrumb active_name="Users "></Breadcrumb>
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
                    <h3>Users List</h3><span>
                    <!-- Any Comment here -->
                    </span>
                    <button class="btn btn-primary" type="button">Add User</button>
                  </div>
                  <div class="table-responsive signal-table">
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th scope="col">Id</th>
                          <th scope="col">Status</th>
                          <th scope="col">Signal Name	</th>
                          <th scope="col">Security</th>
                          <th scope="col">Stage</th>
                          <th scope="col">Schedule</th>
                          <th scope="col">Team Lead</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td class="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-triangle bg-light-success font-success"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12" y2="17"></line></svg><span class="font-success">No Signal</span></td>
                          <td>Astrid: NE Shared managed</td>
                          <td>Medium</td>
                          <td>Triaged</td>
                          <td>0.33	</td>
                          <td>Chase Nguyen	</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td class="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-triangle bg-light-danger font-danger"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12" y2="17"></line></svg><span class="font-danger">Offline</span></td>
                          <td>Cosmo: prod shared ares	</td>
                          <td>Huge</td>
                          <td>Triaged</td>
                          <td>0.39</td>
                          <td>Brie Furman</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td class="d-flex align-items-center"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle bg-light-primary font-primary"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line></svg><span class="font-primary">Online</span></td>
                          <td>Phoenix: prod shared lyra-lists	</td>
                          <td>Minor</td>
                          <td>No Triaged</td>
                          <td>3.12	</td>
                          <td>Jeremy Lake</td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td class="d-flex align-items-center"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle bg-light-success font-success"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg><span class="font-success">No Signal</span></td>
                          <td>Astrid: NE Shared managed</td>
                          <td>Negligible</td>
                          <td>Triaged</td>
                          <td>13.18</td>
                          <td>Angelica Howards</td>
                        </tr>
                        <tr>
                          <th scope="row">5</th>
                          <td class="d-flex align-items-center"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle bg-light-danger font-danger"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg><span class="font-danger">Online</span></td>
                          <td>Astrid: NE Shared managed</td>
                          <td>Medium</td>
                          <td>No Triaged</td>
                          <td>5.33		</td>
                          <td>Diane Okuma</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
        </div>
      </div>
</template>
<script>
export default {

}
</script>
<style lang="">

</style>
