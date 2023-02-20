<template>
  <div class="grid grid-cols-5 gap-8 mt-10">
    <div class="card border border-gray shadow-cardShadow cursor-pointer rounded-lg" v-for='item in animes.results' :key='item.id' >
        <div class=''>
          <img :src='getImage(item.poster_path)' alt="movie_img" class='h-auto w-80 object-cover' loading='lazy'/>
        </div>
        <div class='p-5 text-sm'>
          <p class=' font-helvetica_m'>{{item.title}}</p>
          <p>{{formatDate(item.release_date)}}</p>
        </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
    name: 'Animes',
    data() {
      return {
        imageUrl: 'https://www.themoviedb.org/t/p/w440_and_h660_face',
        perPage: '10'
      }
    },
      computed: {
    ...mapGetters({
      animes: "getAnimes",
    }),
      },
        created() {
      this.fetchAnimationMovie();
    },
       methods: {
      getImage(img) {
      return `${this.imageUrl}/${img}`
      },
      formatDate(date) {
      return dayjs(date).format("MMM DD, YYYY")
      },
      ...mapActions(['fetchAnimationMovie']),
      ...mapMutations({
      setAnimes: "setAnimes",
    }),
    }
}
</script>

<style>

</style>