<template >
    <div class="recent-table table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th class="f-light">Visitors</th>
              <th class="f-light">Clicks</th>
              <th class="f-light">Short Link</th>
              <th class="f-light">Status</th>
              <th class="f-light">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr  v-for="link in links?.data" :key="link.id">
              <td>
                {{ link.total_visitors ?? 0 }}
              </td>
              <td class="f-w-500">{{link.total_clicks ?? 0 }}</td>
              <td class="f-w-500">{{link?.slug ?? "N/A"}}</td>
              <td class="f-w-500">
                <div class="recent-status font-success"  v-if="link.status==1">
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
props:['links'],

}
</script>
<style lang="">

</style>
