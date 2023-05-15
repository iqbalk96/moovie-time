<template>
  <div class="has-background-dark">
    <b-navbar centered type="is-dark">
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img src="@/assets/MoovieTime-Logo.png" alt="MoovieTime | Perqara" />
        </b-navbar-item>
      </template>
      <template #start>
        <SearchComponent></SearchComponent>
      </template>

      <template #end>
        <b-navbar-item href="#"> CATEGORIES </b-navbar-item>
        <b-navbar-item href="#"> MOVIES </b-navbar-item>
        <b-navbar-item href="#"> TV SHOWS </b-navbar-item>
        <b-navbar-item href="#"> LOGIN </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>
<script>
import SearchComponent from "./Search.vue";
export default {
  name: "HeaderComponent",
  components: {
    SearchComponent,
  },
};
</script>
