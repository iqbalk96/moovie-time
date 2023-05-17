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
        <div class="column ">
          <div class="columns is-multiline is-mobile is-3-desktop is-6-tablet">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MoovieCard from "@/components/Card/ThumbnailCard.vue";
import SortingComponent from "@/components/Filter/Sorting.vue";
import Title from "@/components/Text/Title.vue";
export default {
  name: "MovieView",
  data() {
    return {
      moovies: [
        {
          id: 1,
          name: "Wonder Women 1984",
          year: "2020",
          rating: "7.0",
          thumbnail: "below-zero.png",
        },
        {
          id: 2,
          name: "Below Zero",
          year: "2021",
          rating: "8.0",
          thumbnail: "black-water-abyss.png",
        },
        {
          id: 3,
          name: "The little things",
          year: "2022",
          rating: "9.0",
          thumbnail: "breach.png",
        },
        {
          id: 4,
          name: "Outside the wine",
          year: "2020",
          rating: "8.0",
          thumbnail: "hobs-and-shaw.png",
        },
        {
          id: 5,
          name: "Below Zero",
          year: "2021",
          rating: "8.0",
          thumbnail: "outside-the-war.png",
        },
        {
          id: 6,
          name: "The little things",
          year: "2022",
          rating: "9.0",
          thumbnail: "project-owner.png",
        },
        {
          id: 7,
          name: "Outside the wine",
          year: "2023",
          rating: "7.0",
          thumbnail: "soul.png",
        },
        {
          id: 8,
          name: "Wonder Women 1984",
          year: "2020",
          rating: "9.0",
          thumbnail: "space-sweeper.png",
        },
        {
          id: 9,
          name: "The little things",
          year: "2019",
          rating: "8.2",
          thumbnail: "tenet.png",
        },
        {
          id: 10,
          name: "Outside the wine",
          year: "2018",
          rating: "7.5",
          thumbnail: "the-croods.png",
        },
        {
          id: 11,
          name: "The Little Things",
          year: "2018",
          rating: "7.5",
          thumbnail: "the-litle-things.png",
        },
        {
          id: 12,
          name: "Breach",
          year: "2018",
          rating: "7.5",
          thumbnail: "breach.png",
        },
      ],
    };
  },
  components: {
    MoovieCard,
    Title,
    SortingComponent
  },
  computed: {
    ...mapGetters({
      movies: 'movie/getAllMovies',
    }),
  },
};
</script>

<style>
.discover-base {
  background: rgba(255, 255, 255, 0.05);
  height: 333px;
}
</style>
