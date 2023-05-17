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
          <div style="margin-top: -3rem;">
            <h1 class="has-text-danger has-text-weight-bold">
              OVERVIEW
            </h1>
            <p>
              Wonder Woman comes into conflict with the Soviet Union during the
              Cold War in the 1980s and finds a formidable foe by the name of
              the Cheetah.
            </p>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <ReviewComponent></ReviewComponent>
        </div>
      </div>
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
import ReviewComponent from "@/components/Modules/Detail/Review.vue";
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
        },
      ],
    };
  },
  components: {
    MoovieCard,
    HeroDetailComponent,
    ReviewComponent
  },
};
</script>
