<template>
  <div class="pl-10">
    <nav class="flex space-x-5 text-">
      <router-link :to="{ name: 'tv-series' }">
        <p class="text-gray-100 font-helvetica_m text-base cursor-pointer">
          TV series
        </p>
      </router-link>
      <router-link :to="{ name: 'movies' }">
        <p class="text-gray-100 font-helvetica_m text-base cursor-pointer">
          Movies
        </p>
      </router-link>
      <router-link :to="{ name: 'animes' }">
        <p class="text-gray-100 font-helvetica_m text-base cursor-pointer">
          Animes
        </p>
      </router-link>
    </nav>
    <router-view />
  </div>
  <!-- <router-link :to="{ name: 'tv-series'}">
        <p class="text-gray-100 font-helvetica_m text-base cursor-pointer">TV series</p>
      </router-link> -->
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style></style>
