import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import { baseUrl, apiKey } from '../helpers/variable'
import VuexPersistence from "vuex-persist";

Vue.use(Vuex)
const vuexPersistence = new VuexPersistence({
  storage: localStorage,
});
export default new Vuex.Store({
  state: {
    tvSeries: [],
    movieList: {},
    animes: [],
  },
  getters: {
    getTvSeries: (state) => state.tvSeries,
    getMovieList: (state) => state.movieList,
    getAnimes: (state) => state.animes,
  },
  mutations: {
    setTvSeries: (state, payload) => { state.tvSeries = payload; },
    setMovieList: (state, payload) => { state.movieList = payload; },
    setAnimes: (state, payload) => { state.animes = payload; }
  },
  actions: {
    fetchTvSeries: ({commit}) => {
      try {
        axios.get( `${baseUrl}/discover/tv?api_key=${apiKey}&language=en-US`)
        .then((res) => {
          commit('setTvSeries', res.data);
        })
      }catch (e) {
        console.log(e);
      }
    },
    fetchMovieList: ({commit}, {page = 1}) => {
      try {
        axios.get( `${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US&page=${page}`)
        .then((res) => {
          commit('setMovieList', res.data);
        })
      }catch (e) {
        console.log(e);
      }
    },
    fetchAnimationMovie: ({commit}) => {
      try {
        axios.get( `${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US&with_genres=16&without_genres=28,12,35,80,99,18,10751,14,36,27,10402,9648,10749,878,10770,53,10752,37`)
        .then((res) => {
          commit('setAnimes', res.data);
        })
      }catch (e) {
        console.log(e);
      }
    },
  },
  plugins: [vuexPersistence.plugin],
})