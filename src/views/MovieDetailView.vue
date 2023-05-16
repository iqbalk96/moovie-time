<template>
  <div class="movie-detail">
    <HeroDetailComponent :thumbnail="$route.params.thumbnail"></HeroDetailComponent>
    <div class="container">
      <div class="columns is-multiline is-mobile pb-6">
        <div
          class="column is-one-fifth-desktop is-4-tablet is-6-mobile"
          v-for="moovie in moovies"
          :key="moovie.id"
        >
          <MoovieCard
            :id="moovie.id"
            :name="moovie.name"
            :rating="moovie.rating"
            :year="moovie.year"
            :thumbnail="moovie.thumbnail"
          ></MoovieCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MoovieCard from "@/components/Card/ThumbnailCard.vue";
import HeroDetailComponent from "@/components/Modules/Detail/Hero.vue";
export default {
  name: "MovieDetailView",
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
        }
      ],
    };
  },
  components: {
    MoovieCard,
    HeroDetailComponent
  }
};
</script>
