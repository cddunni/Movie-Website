<template>
  <div class="pl-10">
    <nav class="flex space-x-5 text-gray-100">
      <router-link :to="{ name: 'tv-series' }" >
        <a class="font-helvetica_m text-base cursor-pointer">
          TV series
        </a>
      </router-link>
      <router-link :to="{ name: 'movies' }">
        <p class="font-helvetica_m text-base cursor-pointer">
          Movies
        </p>
      </router-link>
      <router-link :to="{ name: 'animes' }">
        <p class="font-helvetica_m text-base cursor-pointer">
          Animes
        </p>
      </router-link>
    </nav>
    <router-view />
    <!-- <FilterSection/> -->
  </div>
</template>

<script>
import FilterSection from '../../../components/FilterSection.vue'
export default {
  name: "HomeView",
  components: {
    FilterSection,
  },
};
</script>

<style scoped>
.router-link-exact-active {
  color: #2F2E3E;
}
</style>
