<template>
  <div class="movies">
    <div
      class="is-flex is-align-items-center is-justify-content-center discover-base"
    >
      <div class="container" style="margin-top: -80px">
        <div class="columns mb-6">
          <div class="column pt-5">
            <Title title="Movies"></Title>
          </div>
        </div>
      </div>
    </div>
    <div class="container" style="margin-top: -160px">
      <div class="columns is-mobile pb-6">
        <div class="column is-one-fifth-desktop is-12-tablet is-6-mobile">
          <SortingComponent></SortingComponent>
        </div>
        <div class="column">
          <div v-if="!loading" class="columns is-multiline is-mobile is-3-desktop is-6-tablet">
            <div
              class="column is-3-desktop"
              v-for="moovie in movies"
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
          <div v-else class="columns is-multiline is-mobile is-3-desktop is-6-tablet">
            <div
              class="column is-3-desktop"
              v-for="i in 10" :key="i"
            >
              <MoovieCard
                :id="i"
                name=""
                rating="-"
                year=""
                thumbnail=""
                overview=""
              ></MoovieCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MoovieCard from "@/components/Card/ThumbnailCard.vue";
import SortingComponent from "@/components/Filter/Sorting.vue";
import Title from "@/components/Text/Title.vue";
export default {
  name: "MovieView",
  data() {
    return {

    };
  },
  components: {
    MoovieCard,
    Title,
    SortingComponent
  },
  mounted() {
    this.initData()
  },
  computed: {
    ...mapGetters({
      movies: 'movie/getAllMovies',
      loading: "movie/getLoadingMovie"
    }),
  },
  methods: {
    ...mapActions("movie", [
      "GET_ALL_MOVIES",
    ]),
    initData () {
      if (this.movies.length === 0) {
        this.GET_ALL_MOVIES()
      }
    }
  },
};
</script>

<style>
.discover-base {
  background: rgba(255, 255, 255, 0.05);
  height: 333px;
}
</style>
