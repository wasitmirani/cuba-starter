<template >
    <div class="container-fluid">
        <div class="page-title">
            <div class="row">
                <div class="col-6">
                    <h3>{{ active_name }}</h3>
                </div>
                <div class="col-6">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">

                            <router-link to="/"><svg class="stroke-icon">
                                <use href="assets/svg/icon-sprite.svg#stroke-home"></use>
                            </svg></router-link>
                        </li>
                        <li class="breadcrumb-item">
                            <router-link to="/">
                        Dashboard </router-link></li>


                    <li class="breadcrumb-item tx-15" v-for="item in previous" :key="item.id">
                        <router-link :to="item.link">{{ item.name }}</router-link>
                      </li>
                      <li class="breadcrumb-item active">{{ active_name }}</li>
                </ol>
            </div>
        </div>
    </div>
</div></template>
<script>
export default {
  props: {
    active_name: {
      type: String,
      required: true,
    },
    previous: {
      type: Array,
      required: false,
    },
  },
};
</script>

