<template>
  <div class="home">
    <div>
      <CarouselComponent></CarouselComponent>
    </div>
    <div>
      <div class="is-flex is-align-items-center is-justify-content-center discover-base">
        <div class="container" style="margin-top: -80px;">
          <div class="columns mb-6">
            <div class="column pt-5">
              <Title title="Discover Movies"></Title>
            </div>
            <div class="column has-text-right">
              <b-button
                rounded
                label="Popularity"
                type="is-danger"
                class="mr-5"
              />
              <b-dropdown aria-role="list">
                <template #trigger="">
                  <b-button rounded label="Release Date" />
                </template>
                <b-dropdown-item
                  aria-role="listitem"
                  v-for="sort in sortOption"
                  :key="sort"
                  class="has-text-left"
                >
                  {{ sort }}
                </b-dropdown-item>
              </b-dropdown>
            </div>
          </div>
        </div>
      </div>
      <div class="container" style="margin-top: -160px;">
        <div class="columns is-multiline is-mobile pb-6">
          <div
            class="column is-one-fifth-desktop is-4-tablet is-6-mobile"
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
      </div>
    </div>
  </div>
</template>

<script>
import CarouselComponent from "@/components/Modules/Home/Carousel.vue";
import MoovieCard from "@/components/Card/ThumbnailCard.vue";
import Title from "@/components/Text/Title.vue";
import { mapActions, mapGetters } from "vuex";
import { imagePath } from '@/utils/config';
export default {
  name: "HomeView",
  data() {
    return {
      imagePath,
      sortOption: [
        "Popularity Ascending",
        "Popularity Descending",
        "Release Date Ascending",
        "Release Date Descending",
        "Rating Ascending",
        "Rating Descending",
      ],
    };
  },
  mounted() {
    this.initData()
  },
  computed: {
    ...mapGetters({
      movies: 'movie/getAllMovies',
    }),
  },
  methods: {
    ...mapActions("movie", [
      "GET_ALL_MOVIES",
    ]),
    initData () {
      this.GET_ALL_MOVIES()
    }
  },
  components: {
    CarouselComponent,
    MoovieCard,
    Title,
  },
};
</script>

<style>
.discover-base {
  background: rgba(255, 255, 255, 0.05); height: 333px;
}
</style>