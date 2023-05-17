import Vue from 'vue'
import Vuex from 'vuex'

// import module section
import movie from "./stores/movie";

Vue.use(Vuex)

// define root store vuex
const store = new Vuex.Store({
  modules: {
    movie,
  }
})

export default store
