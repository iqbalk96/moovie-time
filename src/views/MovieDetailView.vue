<template>
  <div class="movie-detail has-background-white">
    <HeroDetailComponent
      :thumbnail="$route.params.thumbnail"
    ></HeroDetailComponent>
    <div class="container" style="margin-top: 5rem">
      <div class="columns">
        <div
          class="column is-one-fifth-desktop is-4-tablet is-full-mobile"
        ></div>
        <div class="column is-half-desktop is-full-mobile">
          <div style="margin-top: -3rem">
            <h1 class="has-text-danger has-text-weight-bold">OVERVIEW</h1>
            <p>
              {{ $route.params.overview }}
            </p>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column pb-6">
          <div class="pb-6">
            <ReviewComponent></ReviewComponent>
          </div>
        </div>
      </div>
    </div>
    <div class="has-background-dark">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h1 class="has-text-white has-text-weight-bold pt-6 pb-3">
              RECOMENDATION MOVIES
            </h1>
          </div>
        </div>
        <div class="columns is-multiline is-mobile pb-6">
          <div
            class="column is-one-fifth-desktop is-4-tablet is-6-mobile"
            v-for="moovie in filteredMovies"
            :key="moovie.id"
          >
            <MoovieCard
              :id="moovie.id"
              :name="moovie.title"
              :rating="moovie.vote_average"
              :year="moovie.release_date"
              :thumbnail="moovie.backdrop_path"
              :overview="moovie.overview"
            ></MoovieCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MoovieCard from "@/components/Card/ThumbnailCard.vue";
import HeroDetailComponent from "@/components/Modules/Detail/Hero.vue";
import ReviewComponent from "@/components/Modules/Detail/Review.vue";
import { mapGetters } from "vuex";
export default {
  name: "MovieDetailView",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      movies: "movie/getAllMovies",
    }),
    filteredMovies: function () {
      return this.movies.slice(0, 5);
    },
  },
  components: {
    MoovieCard,
    HeroDetailComponent,
    ReviewComponent,
  },
};
</script>
