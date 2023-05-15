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
      :key="img"
      @click="updateIndexOnClick(i)"
    >
      <SliderCardComponent></SliderCardComponent>
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
    SliderCardComponent
  },
  data() {
    return {
      slides: [
        "https://loremflickr.com/320/240?random=1",
        "https://loremflickr.com/320/240?random=2",
        "https://loremflickr.com/320/240?random=3",
        "https://loremflickr.com/320/240?random=4",
        "https://loremflickr.com/320/240?random=5",
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
