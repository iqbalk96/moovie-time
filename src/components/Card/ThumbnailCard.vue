<template>
  <div>
    <div class="cards">
      <b-tag class="tag-rating-thumbnail" type="is-dark">
        <span class="point">{{ rating }}</span>
      </b-tag>
      <img
        :src="`${imagePath}${thumbnail}`"
        :alt="name"
        class="card-moovie"
      />

      <div class="card__overlay">
        <div class="overlay__text">
          <div class="pt-4">
            <img
              :src="require('@/assets/star.png')"
              width="20"
              alt="star rating"
            />
            <span>{{ rating }}</span>
          </div>
          <h3>Action</h3>
          <b-button type="is-danger" size="is-small" rounded @click="$router.push({ name: 'movie-detail', params: { name, year, rating, thumbnail, overview }})">View</b-button>
        </div>
      </div>
    </div>
    <h5 class="thumbnail-title">{{ name }}</h5>
    <p class="thumbnail-year">{{ year }}</p>
  </div>
</template>

<script>
import { imagePath } from '@/utils/config';
export default {
  name: "ThumbnailCardComponent",
  data() {
    return {
      imagePath,
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
    overview: {
      default: ""
    }
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

.card-moovie {
  height: 330px;
  border-radius: 0px;
  width: 100%;
  object-fit: cover;
}

.cards {
  position: relative;
  transition: all 0.5s ease-in;
}

.card__image {
  display: block;
  width: 100%;
  height: auto;
}

.card__overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  visibility: none;
  transition: 0.5s ease;
  background-color: #393839;
}

.cards:hover .card__overlay {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.5);
}

.overlay__text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

.button {
  background-color: #f05328;
  padding: 1.5rem;
  margin-top: 2rem;
  display: inline-block;
  color: white;
  text-decoration: none;
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
