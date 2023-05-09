<template >
    <div class="recent-table table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th class="f-light">User</th>
              <th class="f-light">Role</th>
              <th class="f-light">Plan</th>
              <th class="f-light">Status</th>
              <th class="f-light">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr  v-for="user in users?.data" :key="user.id">
              <td>
                <div class="product-content">
                  <div class="order-image"><img src="/img/users/default.png" width="40" alt="t-shirt"></div>
                  <div>
                    <h6 class="f-14 mb-0">
                    <a href="order-history.html">{{user.name}}</a></h6><span class="f-light f-12">Email : {{user.email}}</span>
                  </div>
                </div>
              </td>
              <td class="f-w-500">{{user?.roles[0] ?? "N/A"}}</td>
              <td class="f-w-500">{{user?.plan ?? "N/A"}}</td>
              <td class="f-w-500">
                <div class="recent-status font-success"  v-if="!user.deleted_at">
                    Active
                </div>
                <div class="recent-status font-danger" v-else>
                    InActive
                </div>
              </td>
              <td class="f-w-500">
              <a href="http://" class="text-primary">
                <i class="icofont icofont-ui-edit"></i>
              </a> |
              <a href="http://" class="text-danger">
              <i class="icofont icofont-trash"></i>
              </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
</template>
<script>
export default {
props:['users'],
methods:{

},
}
</script>
<style >

</style>
