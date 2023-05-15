<template>
  <div class="is-flex is-align-items-center is-justify-content-center p-5">
    <b-image
      :src="require(`@/assets/movie/${image}`)"
      class="slider-image"
    ></b-image>
    <div class="slider-right-section p-5 has-background-black">
      <p class="rating is-flex is-align-items-center">
        <img :src="require('@/assets/star.png')" width="20" alt="star rating" />
        <span>{{ rating }}</span>
      </p>
      <h3 class="title">{{ title }}</h3>
      <p class="subtitle">2021 * Sci-Fi</p>
      <p class="description">
        When the crew of a space junk collector ship called The Victory
        discovers a humanoid robot named Dorothy that's known to be a weapon of
        mass destruction, they get involved in a risky business deal which puts
        their lives at stake.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SliderCardComponent",
  props: {
    image: {
      default: "",
    },
    rating : {
      default: ""
    },
    title : {
      default: ""
    }
  },
};
</script>

<style>
.slider-image {
  width: 245px;
}
.slider-right-section {
  color: #fff;
  width: 400px;
}

.rating span {
  font-weight: 700;
  font-size: 18px;
  margin-left: 10px;
}

.slider-right-section .title {
  padding-top: 15px;
  font-weight: 500;
  font-size: 28px;
  color: #fff;
}

.slider-right-section .subtitle {
  font-weight: 400;
  font-size: 16px;
  color: #fff;
  line-height: 21px;
}

.slider-right-section .description {
  font-weight: 300;
  font-size: 12px;
  color: #fff;
  line-height: 18px;
}
</style>
