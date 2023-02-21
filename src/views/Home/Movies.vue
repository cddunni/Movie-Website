<template>
  <div class="mt-10">
    <div class="flex justify-between items-center">
    <p class="text-gray-200 text-lg font-helvetica_m">Best Artist</p>
    <div class="flex space-x-4">
      <div class="rounded-full border border-gray p-4 cursor-pointer" @click="paginateArtistList(page--)">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E3E2E7" class="bi bi-caret-left" viewBox="0 0 16 16">
  <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
</svg>
      </div>
      <div class="rounded-full border border-gray p-4 cursor-pointer" @click="paginateArtistList(page++)">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E3E2E7" class="bi bi-caret-right" viewBox="0 0 16 16">
  <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
</svg>
        
      </div>
    </div>
    </div>
  <div class="flex max-w-2/5 pt-6 pb-12 overflow-scroll space-x-5">
    <div class="card min-w-[200px] border border-gray shadow-cardShadow cursor-pointer rounded-2xl" v-for='item in bestArtist.results' :key='item.id' >
        <div class='relative'>
          <img :src='getImage(item.profile_path)' alt="movie_img" class='relative h-60 w-60 object-cover rounded-2xl saturate-50 hue-rotate-15' loading='lazy'/>
        </div>
        <div class="bg-gray-400 p-4 rounded-xl w-12 absolute top-4 right-4 opacity-75 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffff" class="bi bi-plus-lg font-bold" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
          </svg>
        </div>
        <div class='text-sm absolute left-12 bottom-10'>
          <p class=' font-helvetica_m text-white text-base'>{{item.name}}</p>
          <p class="text-gray-300 font-helvetica_m text-center">+{{item.known_for.length - 1}} Movies</p>
        </div>
    </div>
  </div>
  <div class="mt-2">
    <div class="flex justify-between items-center">
    <p class="text-gray-200 text-lg font-helvetica_m">Continue Watching</p>
    <div class="flex space-x-4">
      <div class="rounded-full border border-gray p-4 cursor-pointer" @click="paginateWatchList(page--)">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E3E2E7" class="bi bi-caret-left" viewBox="0 0 16 16">
  <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
</svg>
      </div>
      <div class="rounded-full border border-gray p-4 cursor-pointer" @click="paginateWatchList(page++)">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E3E2E7" class="bi bi-caret-right" viewBox="0 0 16 16">
  <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
</svg>
        
      </div>
    </div>
    </div>
  <div class="flex max-w-2/5 pt-6 pb-12 overflow-scroll space-x-5">
    <div class="card min-w-[200px] border border-gray shadow-cardShadow cursor-pointer rounded-lg" v-for='item in watchList.results' :key='item.id' >
        <div class='relative'>
          <img :src='getImage(item.poster_path)' alt="movie_img" class='relative h-60 w-60 object-cover rounded-2xl saturate-50 hue-rotate-15' loading='lazy'/>
        </div>
        <div class='p-5 text-sm'>
          <p class=' font-helvetica_m text-base'>{{item.original_title}}</p>
          <p>{{formatDate(item.first_air_date)}}</p>
        </div>
    </div>
  </div>
  </div>
  <div class="mt-2">
    <p class="text-gray-200 text-lg font-helvetica_m">Movie List</p>
  <div class="grid grid-cols-5 gap-8 mt-6">
    <div class="card border border-gray shadow-cardShadow cursor-pointer rounded-lg" v-for='item in movieList.results' :key='item.id' >
        <div class='' @click="getMovieDetails(item.id)">
          <img :src='getImage(item.poster_path)' alt="movie_img" class='h-auto w-80 object-cover' loading='lazy'/>
        </div>
        <div class='p-5 text-sm'>
          <p class=' font-helvetica_m'>{{item.original_title}}</p>
          <p>{{formatDate(item.release_date)}}</p>
        </div>
    </div>
  </div>
  <div class='flex justify-end items-center mt-8'>
    <paginate
    :page-count="movieList?.total_pages ?? 1"
    :click-handler="paginateMovieList"
    :prev-text="'Prev'"
    :next-text="'Next'"
    container-class="flex gap-4"
    active-class='text-red border border-red'
    prev-class='py-2 px-4 hover:text-red'
    next-class='py-2 px-4 hover:text-red'
    page-class='py-2 px-4'
  
    >
    </paginate>
  </div>  
  </div>
  <Modal title="Properpty">
    <p>gdfxgdf</p>
  </Modal>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { mapGetters, mapMutations, mapActions } from "vuex";
import Modal from '../../../components/Modal.vue'
export default {
    name: 'Movies',
    components: {
      Modal
    },
    data() {
      return {
        imageUrl: 'https://www.themoviedb.org/t/p/w440_and_h660_face',
        page: '1',
        isOpen: true
      }
    },
      computed: {
    ...mapGetters({
      movieList: "getMovieList",
      bestArtist: "getPopularArtist",
      watchList: "getWatchList",
      movieDetails: "getMovieDetails",
    }),
      },
      created() {
        console.log(this.isOpen)
      this.fetchMovieList({page: 1});
      this.fetchPopularArtist({page: 1});
      this.fetchWatchList({page: 1});
    },
       methods: {
      getImage(img) {
        return `${this.imageUrl}/${img}`
      },
      formatDate(date) {
        return dayjs(date).format("MMM DD, YYYY")
      },
      paginateMovieList(page) {
        console.log(page);
        this.fetchMovieList({page});
      },
      paginateArtistList(page) {
        console.log(page);
        this.fetchPopularArtist({page});
      },
      getMovieDetails(id) {
        console.log(id)
        this.fetchSingleMovie({movie_id:id});
        this.isOpen = !this.isOpen;
      },
      ...mapActions(['fetchMovieList', 'fetchPopularArtist', 'fetchWatchList', 'fetchSingleMovie']),
      ...mapMutations({
      setMovieList: "setMovieList",
      setPopularArtist: "setPopularArtist",
      setWatchList: "setWatchList",
    }),
    }
}
</script>

<style>

</style>