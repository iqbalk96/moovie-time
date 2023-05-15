<template>
  <VueSlickCarousel
    v-bind="settings"
    v-if="slides.length"
    ref="carousel"
    class="carousel"
    @beforeChange="updateIndexOnDrag"
  >
    <div
      class="work"
      v-for="(img, i) in slides"
      :key="img.image"
      @click="updateIndexOnClick(i)"
    >
      <SliderCardComponent :image="img.image" :rating="img.rating" :title="img.title"></SliderCardComponent>
    </div>
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import SliderCardComponent from "@/components/Card/SliderCard.vue";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

export default {
  name: "CarouselComponent",
  components: {
    VueSlickCarousel,
    SliderCardComponent,
  },
  data() {
    return {
      slides: [
        { image: "the-croods.png", rating: "8.2", title: 'The Croods' },
        { image: "the-new-mutants.png", rating: "7.2", title: 'The New Mutants' },
        { image: "project-owner.png", rating: "6.2", title: 'Project Owner' },
        { image: "soul.png", rating: "7.3", title: 'Soul' },
        { image: "space-sweeper.png", rating: "8.5", title: 'Space Sweepers' },
      ],
      currentSlide: 0,
      settings: {
        arrows: false,
        infinite: true,
        variableWidth: true,
        draggable: true,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
      },
    };
  },
  watch: {
    currentSlide(newValue, oldValue) {
      console.log("oldValue", oldValue);
      this.$refs.carousel.goTo(newValue);
    },
  },
  methods: {
    updateIndexOnClick(slideIndex) {
      this.currentSlide = slideIndex;
    },
    updateIndexOnDrag(oldSlideIndex, newSlideIndex) {
      console.log("oldSlideIndex", oldSlideIndex);
      this.currentSlide = newSlideIndex;
    },
  },
};
</script>

<style>
.carousel {
  width: 100%;
  padding: 10px;
  background: rgba(0, 0, 0, 0.29);
}
</style>
