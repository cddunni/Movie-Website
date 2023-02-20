<template>
<div>
  <div class="grid grid-cols-5 gap-8 mt-10">
    <div class="card border border-gray shadow-cardShadow cursor-pointer rounded-lg" v-for='item in movieList.results' :key='item.id' >
        <div class=''>
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
  :click-handler="paginate"
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
</template>

<script>
import dayjs from 'dayjs'
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
    name: 'Movies',
    data() {
      return {
        imageUrl: 'https://www.themoviedb.org/t/p/w440_and_h660_face',
        perPage: '10'
      }
    },
      computed: {
    ...mapGetters({
      movieList: "getMovieList",
    }),
      },
        created() {
      console.log(this.movieList)
      this.fetchMovieList();
    },
       methods: {
      getImage(img) {
        return `${this.imageUrl}/${img}`
      },
      formatDate(date) {
        return dayjs(date).format("MMM DD, YYYY")
      },
      paginate(page) {
        console.log(page);
        this.fetchMovieList({page});

      },
      ...mapActions(['fetchMovieList']),
      ...mapMutations({
      setMovieList: "setMovieList",
    }),
    }
}
</script>

<style>

</style>