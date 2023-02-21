
<template>
  <div class="overflow-scroll border-l border-gray px-12 py-12 w-[350px]">
    <div>
      <p class="text-gray-200 text-lg font-helvetica_sb font-bold">Popular Movies</p>
      <div class="h-[350px] scroll-styled overflow-scroll scroll-smooth scroll-visible mt-5">
        <div class="grid grid-cols-1 gap-5">
          <div class="flex space-x-3 items-start" v-for='item in popularMovies.results' :key='item.id' >
            <div class='w-[100px] '>
              <img :src='getImage(item.poster_path)' alt="movie_img" class='object-fill rounded-lg' loading='lazy'/>
            </div>
            <div class='text-xs'>
              <p class=' font-helvetica_m'>{{item.title}}</p>
            </div>
          </div>
        </div>
      </div>
      <c-button size="lg" class="mt-4 w-full bg-red text-white" @click="paginatePopular(page++)">
        See more
      </c-button>
    </div>
    <div class="mt-7">
      <p class="text-gray-200 text-lg font-helvetica_sb font-bold">Favorites</p>
      <div class="h-[350px] scroll-styled overflow-scroll scroll-smooth scroll-visible mt-5">
        <div class="grid grid-cols-1 gap-5">
          <div class="flex space-x-3 items-start" v-for='item in favouriteMovies.results' :key='item.id' >
            <div class='w-[100px] '>
              <img :src='getImage(item.poster_path)' alt="movie_img" class='object-fill rounded-lg' loading='lazy'/>
            </div>
          <div class='text-xs'>
            <p class=' font-helvetica_m'>{{item.title}}</p>
          </div>
        </div>
      </div>
    </div>
    <c-button size="lg" class="mt-4 w-full bg-red text-white" @click="paginateFavorites(page++)">
      See more
    </c-button>
    </div>
  </div>
</template>
<script>
import dayjs from 'dayjs'
import { mapGetters, mapMutations, mapActions } from "vuex";
import CButton from '../components/Button.vue'
export default {
  name: 'FilterSection',
  data() {
      return {
        imageUrl: 'https://www.themoviedb.org/t/p/w440_and_h660_face',
        page: 1
      }
    },
    components: {
      CButton,
    },
  computed: {
    ...mapGetters({
      favouriteMovies: "getFavouriteMovies",
      popularMovies: "getPopularMovies",
    }),
  },
  created() {
      this.fetchFavoriteMovies({page: 1});
      this.fetchPopularMovies({page: 1});
    },
  methods: {
      getImage(img) {
        return `${this.imageUrl}/${img}`
      },
      paginateFavorites(page) {
        console.log(page)
        this.fetchFavoriteMovies({page});
      },
      paginatePopular(page) {
        console.log(page)
        this.fetchPopularMovies({page});
      },
      formatDate(date) {
        return dayjs(date).format("MMM DD, YYYY")
      },
      ...mapActions(['fetchFavoriteMovies', 'fetchPopularMovies' ]),
      ...mapMutations({
        setFavouriteMovies: "setFavouriteMovies",
    }),
  }
}
</script>
<style>
</style>
