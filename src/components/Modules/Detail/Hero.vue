<template>
  <section class="hero is-medium is-relative">
    <img
      :src="`${imagePath}${thumbnail}`"
      :alt="`bg hero ${thumbnail}`"
      class="bg-hero"
    />
    <Overview :thumbnail="thumbnail"></Overview>
  </section>
</template>

<script>
import Overview from './Overview.vue';
import { imagePath } from '@/utils/config';
export default {
  name: "HeroDetailComponent",
  data(){
    return {
      imagePath
    }
  },
  components: {
    Overview
  },
  props: {
    thumbnail: {
      default: "",
    },
  },
};
</script>

<style>
.hero .bg-hero {
  height: 400px;
  object-fit: cover;
  object-position: 70% 30%;
}
</style>
