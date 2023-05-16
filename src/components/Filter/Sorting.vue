<template>
  <section>
    <b-collapse
      class="card has-background-dark sorting-movie"
      animation="slide"
      aria-id="contentIdForA11y3"
    >
      <template #trigger="props">
        <div
          class="card-header"
          role="button"
          aria-controls="contentIdForA11y3"
          :aria-expanded="props.open"
        >
          <p class="card-header-title title">Sort Result By</p>
          <a class="card-header-icon">
            <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
          </a>
        </div>
      </template>

      <div class="card-content pt-0">
        <div class="content">
          <b-select placeholder="Popularity" style="select">
            <option v-for="sort in sortOption" :value="sort" :key="sort">
              {{ sort }}
            </option>
          </b-select>
        </div>
      </div>
      <div class="divider"></div>
      <p class="card-header-title pt-5 pb-0 title">Genres</p>
      <div class="divider"></div>
      <ul class="card-content">
        <li v-for="genre in genreOption" :key="genre">
          <b-checkbox true-value="Yes" false-value="No" type="is-danger">
            <span class="item-checkbox">{{ genre }}</span>
          </b-checkbox>
        </li>
      </ul>
    </b-collapse>
  </section>
</template>

<script>
export default {
  name: "SortingComponent",
  data() {
    return {
      sortOption: [
        "Popularity Ascending",
        "Popularity Descending",
        "Release Date Ascending",
        "Release Date Descending",
        "Rating Ascending",
        "Rating Descending",
      ],
      genreOption: [
        "Action",
        "Adventure",
        "Animation",
        "Comedy",
        "Crime",
        "Documentary",
        "Drama",
        "Family",
        "Fantasy",
        "History",
        "Horror",
      ],
      selectedSort: null,
      selectedGenre: null,
    };
  },
};
</script>

<style>
.sorting-movie {
  background: linear-gradient(180deg, #0e1723 0%, rgba(30, 35, 42, 0) 100%);
}

.sorting-movie .title {
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #e5e5e5;
}

.sorting-movie .item-checkbox {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
}

.sorting-movie .divider {
  border: 1px solid rgba(255, 255, 255, 0.07);
  height: 0px;
}

.sorting-movie .select select {
  background: rgba(0, 0, 0, 0.13);
  border-color: rgba(0, 0, 0, 0.13);
  color: #e5e5e5;
}
</style>
