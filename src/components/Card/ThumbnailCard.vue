<template>
  <section>
    <div class="is-relative">
      <b-tag class="tag-rating-thumbnail" type="is-dark">
        {{ rating }}
      </b-tag>
      <b-image
        src="https://picsum.photos/600/400"
        :alt="name"
        ratio="6by4"
        :rounded="rounded"
      ></b-image>
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
</style>