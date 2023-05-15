<template>
  <div class="home has-background-dark">
    <div class="pb-5">
      <CarouselComponent></CarouselComponent>
    </div>
    <div class="container pb-5">
      <div class="columns is-multiline is-mobile">
        <div class="column is-one-fifth-desktop is-4-tablet is-6-mobile" v-for="moovie in moovies" :key="moovie.id">
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
import CarouselComponent from "@/components/Modules/Home/Carousel.vue";
import MoovieCard from "@/components/Card/ThumbnailCard.vue";
export default {
  name: "HomeView",
  data() {
    return {
      moovies: [
        { id: 1, name: "Wonder Women 1984", year: "2020", rating: "7.0", thumbnail: 'below-zero.png' },
        { id: 2, name: "Below Zero", year: "2021", rating: "8.0", thumbnail: 'black-water-abyss.png' },
        { id: 3, name: "The little things", year: "2022", rating: "9.0", thumbnail: 'breach.png' },
        { id: 4, name: "Outside the wine", year: "2020", rating: "8.0", thumbnail: 'hobs-and-shaw.png' },
        { id: 5, name: "Below Zero", year: "2021", rating: "8.0", thumbnail: 'outside-the-war.png' },
        { id: 6, name: "The little things", year: "2022", rating: "9.0", thumbnail: 'project-owner.png' },
        { id: 7, name: "Outside the wine", year: "2023", rating: "7.0", thumbnail: 'soul.png' },
        { id: 8, name: "Wonder Women 1984", year: "2020", rating: "9.0", thumbnail: 'space-sweeper.png' },
        { id: 9, name: "The little things", year: "2019", rating: "8.2", thumbnail: 'tenet.png' },
        { id: 10, name: "Outside the wine", year: "2018", rating: "7.5", thumbnail: 'the-croods.png' },
      ],
    };
  },
  components: {
    CarouselComponent,
    MoovieCard,
  },
};
</script>
