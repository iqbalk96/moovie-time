<template>
  <div class="home has-background-white">
    <CarouselComponent></CarouselComponent>
    <div class="container">
      <div class="columns is-multiline is-mobile">
        <div class="column is-3" v-for="moovie in moovies" :key="moovie.id">
          <MoovieCard :id="moovie.id" :name="moovie.name" :rating="moovie.rating" :year="moovie.year"></MoovieCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import CarouselComponent from "@/components/Modules/Home/Carousel.vue";
import MoovieCard from "@/components/Card/ThumbnailCard.vue";
export default {
  name: "HomeView",
  data() {
    return {
      moovies: [
        { id: 1, name: "Wonder Women 1984", year: "2020", rating: "7.0" },
        { id: 2, name: "Below Zero", year: "2021", rating: "8.0" },
        { id: 3, name: "The little things", year: "2022", rating: "9.0" },
        { id: 4, name: "Outside the wine", year: "2020", rating: "8.0" },
        { id: 5, name: "Below Zero", year: "2021", rating: "8.0" },
        { id: 3, name: "The little things", year: "2022", rating: "9.0" },
        { id: 4, name: "Outside the wine", year: "2023", rating: "7.0" },
        { id: 8, name: "Wonder Women 1984", year: "2020", rating: "9.0" }
      ],
    };
  },
  components: {
    CarouselComponent,
    MoovieCard,
  },
};
</script>
