import axios from "axios"
const state = () => ({
  movies: [],
})

const mutations = {
  getAllMovies(state, payload) {
    state.movies = payload
  }
}

const getters = {
  getAllMovies: state => state.movies
}

const actions = {
  GET_ALL_MOVIES({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.VUE_APP_MY_ENV_VARIABLE}&page=1&limit=2`)
        .then(function (response) {
          commit('getAllMovies', response.data.results)
          resolve(response)
        })
        .catch(function (error) {
          reject(error.response.data)
          console.log('error', error.response.data);
        })
        .finally(function () {
          // set loading false disini
        });
    })
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
