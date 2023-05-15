<template>
  <section>
    <div class="is-relative">
      <div>
        <b-tag class="tag-rating-thumbnail" type="is-dark">
          {{ rating }}
        </b-tag>
        <b-image
          src="https://picsum.photos/600/400"
          :alt="name"
          ratio="6by4"
          :rounded="rounded"
          class="card-moovie"
        ></b-image>
      </div>
    </div>
    <h5>{{ name }}</h5>
    <p>{{ year }}</p>
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
}
</style>
