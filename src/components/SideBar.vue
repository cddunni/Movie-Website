<template>
  <div class="border-r border-gray p-12 w-1/5">
    <div class="flex items-center relative">
      <img class="w-[20%]" src="../assets/image/logo.png" />
      <p
        class="text-lg font-helvetica_sb font-bold text-center absolute left-11 text-primary-black"
      >
        Exxmon<span class="text-red">.</span>
      </p>
    </div>

    <div class="pl-2.5 mt-12">
      <p class="text-sm mb-6 font-helvetica_m text-gray">MENU</p>
      <div class="py-2.5 my-2">
        <router-link :to="{ name: 'dashboard-home' }" class="flex space-x-2 items-center">
          <IconHome/>
          <span class="text-gray-100 font-helvetica_m text-base">Home</span>
        </router-link>
      </div>

      <div class="py-2.5 my-2">
        <router-link :to="{ name: 'coming-soon' }" class="flex space-x-2 items-center">
          <IconCommunity/>
          <span class="text-gray-100 font-helvetica_m text-base"
            >Community</span
          >
        </router-link>
      </div>

      <div class="py-2.5 my-2">
        <router-link :to="{ name: 'community' }" class="flex space-x-2 items-center">
          <IconCompass/>
          <span class="text-gray-100 font-helvetica_m text-base"
            >Discovery</span
          >
        </router-link>
      </div>

      <div class="py-2.5 my-2">
        <router-link :to="{ name: 'discovery' }" class="flex space-x-2 items-center">
            <IconTimer/>
            <span class="text-gray-100 font-helvetica_m text-base"
            >Coming soon</span
          >
        </router-link>
      </div>
    </div>
    <div class="pl-2.5 mt-10">
      <p class="text-sm mb-6 font-helvetica_m text-gray">SOCIAL</p>
      <div class="py-2.5 my-2">
        <router-link class="flex space-x-2 items-center" :to="{ name: 'friends' }">
          <IconFriends/>
          <span class="text-gray-100 font-helvetica_m text-base">Friends</span>
        </router-link>
      </div>

      <div class="py-2.5 my-2">
        <router-link class="flex space-x-2 items-center" :to="{ name: 'coming-soon' }">
          <IconParties/>
          <span class="text-gray-100 font-helvetica_m text-base">Parties</span>
        </router-link>
      </div>

      <div class="py-2.5 my-2">
        <router-link class="flex space-x-2 items-center" :to="{ name: 'community' }">
          <IconMedia/>
          <span class="text-gray-100 font-helvetica_m text-base">Media</span>
        </router-link>
      </div>
    </div>
    <div class="pl-2.5 mt-10">
      <p class="text-sm mb-6 font-helvetica_m text-gray">General</p>
      <div class="py-2.5 my-2">
        <router-link class="flex space-x-2 items-center" :to="{ name: 'general' }">
            <IconSettings/>
          <span class="text-gray-100 font-helvetica_m text-base">Setting</span>
        </router-link>
      </div>

      <div class="py-2.5 my-2 flex space-x-2 items-center">
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

<style></style>
