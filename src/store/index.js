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
    tvSeries: {},
    movieList: {},
    animes: {},
    popularMovies: {},
    favouriteMovies: {},
    popularArtist: {},
    watchList: {},
    movieDetails: {}
  },
  getters: {
    getTvSeries: (state) => state.tvSeries,
    getMovieList: (state) => state.movieList,
    getAnimes: (state) => state.animes,
    getPopularMovies: (state) => state.popularMovies,
    getFavouriteMovies: (state) => state.favouriteMovies,
    getPopularArtist: (state) => state.popularArtist,
    getWatchList: (state) => state.watchList,
    getMovieDetails: (state) => state.movieDetails,
  },
  mutations: {
    setTvSeries: (state, payload) => { state.tvSeries = payload; },
    setMovieList: (state, payload) => { state.movieList = payload; },
    setAnimes: (state, payload) => { state.animes = payload; },
    setPopularMovies: (state, payload) => { state.popularMovies = payload; },
    setFavouriteMovies: (state, payload) => { state.favouriteMovies = payload; },
    setPopularArtist: (state, payload) => { state.popularArtist = payload; },
    setWatchList: (state, payload) => { state.watchList = payload; },
    setMovieDetails: (state, payload) => { state.movieDetails = payload; }
  },
  actions: {
    fetchTvSeries: ({commit}, {page = 1}) => {
      try {
        axios.get( `${baseUrl}/discover/tv?api_key=${apiKey}&language=en-US&page=${page}`)
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
    fetchSingleMovie: ({commit}, {movie_id}) => {
      try {
        axios.get( `${baseUrl}/movie/${movie_id}?api_key=${apiKey}&language=en-US`)
        .then((res) => {
          commit('setMovieDetails', res.data);
        })
      }catch (e) {
        console.log(e);
      }
    },
    fetchAnimationMovie: ({commit}, {page = 1}) => {
      try {
        axios.get( `${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US&with_genres=16&without_genres=28,12,35,80,99,18,10751,14,36,27,10402,9648,10749,878,10770,53,10752,37&page=${page}`)
        .then((res) => {
          commit('setAnimes', res.data);
        })
      }catch (e) {
        console.log(e);
      }
    },
    fetchPopularMovies: ({commit}, {page = 1}) => {
      try {
        axios.get( `${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=${page}`)
        .then((res) => {
          commit('setPopularMovies', res.data);
        })
      }catch (e) {
        console.log(e);
      }
    },
    fetchFavoriteMovies: ({commit}, {page = 1}) => {
      try {
        axios.get( `${baseUrl}/account/{account_id}/favorite/movies?api_key=${apiKey}&session_id=5ec67da13219d8a8b18c9edaab2c0788c663a565&language=en-US&page=${page}`)
        .then((res) => {
          commit('setFavouriteMovies', res.data);
        })
      }catch (e) {
        console.log(e);
      }
    },
    fetchPopularArtist: ({commit}, {page = 1}) => {
      try {
        axios.get( `${baseUrl}/person/popular?api_key=${apiKey}&language=en-US&page=${page}`)
        .then((res) => {
          commit('setPopularArtist', res.data);
        })
      }catch (e) {
        console.log(e);
      }
    },
    fetchWatchList: ({commit}, {page = 1}) => {
      try {
        axios.get( `${baseUrl}/account/{account_id}/watchlist/movies?api_key=${apiKey}&session_id=5ec67da13219d8a8b18c9edaab2c0788c663a565&language=en-US&page=${page}`)
        .then((res) => {
          commit('setWatchList', res.data);
        })
      }catch (e) {
        console.log(e);
      }
    },
  },
  plugins: [vuexPersistence.plugin],
})