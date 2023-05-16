<template>
  <section class="hero is-medium is-relative">
    <img
      :src="require(`@/assets/movie/${thumbnail}`)"
      :alt="`bg hero ${thumbnail}`"
    />
    <Overview></Overview>
  </section>
</template>

<script>
import Overview from './Overview.vue';
export default {
  name: "HeroDetailComponent",
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
.hero img {
  height: 400px;
  object-fit: cover;
  object-position: 70% 30%;
}
</style>
