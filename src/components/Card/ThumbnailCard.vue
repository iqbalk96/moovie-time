<template>
  <section>
    <div class="is-relative">
      <div>
        <b-tag class="tag-rating-thumbnail" type="is-dark">
          {{ rating }}
        </b-tag>
        <img
          :src="require(`@/assets/movie/${thumbnail}`)"
          :alt="name"
          class="card-moovie"
        />
      </div>
    </div>
    <h5 class="thumbnail-title">{{ name }}</h5>
    <p class="thumbnail-year">{{ year }}</p>
  </section>
</template>

<script>
export default {
  name: "ThumbnailCardComponent",
  data() {
    return {
      rounded: false,
    };
  },
  props: {
    name: {
      default: "",
    },
    year: {
      default: "",
    },
    rating: {
      default: "",
    },
    thumbnail: {
      default: "",
    },
  },
};
</script>

<style>
.tag-rating-thumbnail {
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 1;
}

.wrapper-thumbnail-card {
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-moovie {
  height: 330px;
  border-radius: 0px;
  width: 100%;
  object-fit: cover;
}

.thumbnail-title {
  font-weight: 600;
  font-size: 16px;
  color: #e5e5e5;
}

.thumbnail-year {
    color: #929292;
}
</style>
