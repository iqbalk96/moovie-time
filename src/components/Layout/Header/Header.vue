<template>
  <div class="has-background-dark pb-4 pt-3">
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
        <b-navbar-dropdown label="CATEGORIES" class="has-text-weight-bold">
          <b-navbar-item href="#" v-for="(category, i) in categories" :key="i" class="has-text-weight-bold">
            {{ category }}
          </b-navbar-item>
        </b-navbar-dropdown>
        <b-navbar-item class="has-text-weight-bold"> MOVIES </b-navbar-item>
        <b-navbar-item class="has-text-weight-bold"> TV SHOWS </b-navbar-item>
        <b-navbar-item class="has-text-weight-bold"> LOGIN </b-navbar-item>
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
  data() {
    return {
      categories: [
        "ACTION",
        "ADVENTURE",
        "ANIMATION",
        "COMEDY",
        "CRIME",
        "DOCUMENTARY",
        "DRAMA",
        "FAMILY",
        "FANTASY",
        "HISTORY",
        "HORROR",
      ],
    };
  },
};
</script>
