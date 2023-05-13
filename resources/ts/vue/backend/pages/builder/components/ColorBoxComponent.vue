<template>
  <div>
    <div class="card" v-if="color.type == 'gradient'">
      <div
        class="card-body br-10 b-r-10 text-center"
        :class="this.background_color == color ? 'active-bg' : ''"
        @click="getBackgroundColor(color)"
        :style="`background-image: linear-gradient(${color.primary},${color.secondary})`"
      ></div>
    </div>
    <div class="card" v-if="color.type == 'solid'">
      <div
        class="card-body br-10 b-r-10 text-center"
        @click="getBackgroundColor(color)"
        :style="`background-color:${color.primary}`"
      >
      </div>
    </div>
     <div class="card" v-if="color.type == 'animated'">
 
      <div
        class="card-body br-10 b-r-10 text-center"
        @click="getBackgroundColor(color)"
        :style="{backgroundColor: color.primary,
                 animation: color.animation}" 
      >
      </div>
     <div class="card" v-if="color.type == 'image'">
       <h1>hello </h1>
    </div>
    </div>
  </div>
</template>

<script>
import ImageComponent from "../components/ImageViewComponent.vue";

export default {
  props: ["color"],
    components: { ImageComponent },
  methods: {
    getBackgroundColor(color) {
      this.$emit("changeColor", color);
    },
    getImage(image) {
      this.$emit("changeImage", image);
    },
  mounted() {
    console.log('COLOR HERE', this.color);
  },

  },
};
</script>

<style>
</style>
