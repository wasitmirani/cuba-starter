<template >
  <div class="recent-table table-responsive">
    <table class="table table-responsive">
      <thead>
        <tr class="border-bottom-primary">
          <th class="f-light">ID</th>
          <th class="f-light">Name</th>
          <th class="f-light">Description</th>
          <th class="f-light">Color</th>
          <th class="f-light">Status</th>
          <th class="f-light">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="border-bottom-secondary"
          v-for="item in news?.data"
          :key="item.id"
        >
          <th scope="row">{{ item?.id }}</th>
          <td>{{ item?.name }}</td>
          <td class="w-50">
            <div
              class="alert alert-primary"
              :style="{ 'background': item.color + '!important' }"
            >
              <p>{{ item?.description }}</p>
            </div>
          </td>
          <td>{{ item?.color }}</td>
          <td>{{ item?.status == 1 ? "Read" : "Not Read" }}</td>

          <td>
            <router-link :to="`/news-alert-edit/${item.uid}`" class="text-primary">
              <i class="icofont icofont-ui-edit"></i>
            </router-link>
            |
            <router-link :to="`/`" class="text-danger">
              <i class="icofont icofont-trash"></i>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  props: ["news"],
  methods: {},
};
</script>
<style >
</style>
