<template>
  <div class="border-r border-gray py-12 pl-12 w-[350px]">
    <div class="flex items-center relative">
      <img class="w-[20%]" src="../assets/image/logo.png" />
      <p
        class="text-lg font-helvetica_sb font-bold text-center absolute left-11 text-primary-black"
      >
        Exxmon<span class="text-red text-lg">.</span>
      </p>
    </div>

    <div class="pl-2.5 mt-12 ">
      <p class="text-sm mb-6 font-helvetica_m text-gray">MENU</p>
      <div class="py-2.5 my-2 text-gray-100 ">
        <router-link :to="{ name: 'tv-series' }" class="flex space-x-2 items-center">
          <p>
            <IconHome/>
            </p>
            <span class="font-helvetica_m text-base">Home</span>
        </router-link>
      </div>

      <div class="py-2.5 my-2 text-gray-100">
        <router-link :to="{ name: 'coming-soon' }" class="flex space-x-2 items-center">
          <IconCommunity/>
          <span class="font-helvetica_m text-base"
            >Community</span
          >
        </router-link>
      </div>

      <div class="py-2.5 my-2 text-gray-100">
        <router-link :to="{ name: 'community' }" class="flex space-x-2 items-center">
          <IconCompass/>
          <span class=" font-helvetica_m text-base"
            >Discovery</span
          >
        </router-link>
      </div>

      <div class="py-2.5 my-2 text-gray-100">
        <router-link :to="{ name: 'discovery' }" class="flex space-x-2 items-center">
            <IconTimer/>
            <span class="font-helvetica_m text-base"
            >Coming soon</span
          >
        </router-link>
      </div>
    </div>
    <div class="pl-2.5 mt-10 text-gray-100">
      <p class="text-sm mb-6 font-helvetica_m text-gray">SOCIAL</p>
      <div class="py-2.5 my-2">
        <p class="flex space-x-2 items-center cursor-pointer">
          <IconFriends/>
          <span class="font-helvetica_m text-base">Friends</span>
        </p>
      </div>

      <div class="py-2.5 my-2 text-gray-100">
        <p class="flex space-x-2 items-center cursor-pointer">
          <IconParties/>
          <span class="font-helvetica_m text-base">Parties</span>
        </p>
      </div>

      <div class="py-2.5 my-2 text-gray-100">
        <p class="flex space-x-2 items-center cursor-pointer">
          <IconMedia/>
          <span class="font-helvetica_m text-base">Media</span>
        </p>
      </div>
    </div>
    <div class="pl-2.5 mt-10 text-gray-100">
      <p class="text-sm mb-6 font-helvetica_m text-gray">General</p>
      <div class="py-2.5 my-2">
        <p class="flex space-x-2 items-center cursor-pointer">
            <IconSettings/>
          <span class="font-helvetica_m text-base">Setting</span>
        </p>
      </div>

      <div class="py-2.5 my-2 flex space-x-2 items-center cursor-pointer">
        <IconLogout/>
          <span class="text-gray-100 font-helvetica_m text-base">Logout</span>
      </div>
    </div>
  </div>
</template>

<script>
import IconCommunity from '../components/icons/IconCommunity.vue'
import IconHome from '../components/icons/IconHome.vue'
import IconCompass from '../components/icons/IconCompass.vue'
import IconTimer from '../components/icons/IconTimer.vue'
import IconMedia from '../components/icons/IconMedia.vue'
import IconParties from '../components/icons/IconParties.vue'
import IconFriends from '../components/icons/IconFriends.vue'
import IconSettings from '../components/icons/IconSettings.vue'
import IconLogout from '../components/icons/IconLogout.vue'

export default {
  name: "SideBar",
    components: {
        IconCommunity,
        IconHome,
        IconCompass,
        IconTimer,
        IconFriends,
        IconMedia,
        IconParties,
        IconSettings,
        IconLogout
    }
};
</script>

<style scoped>
.router-link-exact-active {
  color: #2F2E3E;
  border: 'solid';
  border-right-width: 4px;
  border-style: solid;
  border-color: #D22F27;
}
.router-link-exact-active p {
  color: D22F27;
}
</style>
