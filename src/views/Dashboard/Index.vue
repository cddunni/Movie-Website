<template>
    <div class="flex h-screen overflow-hidden">
        <SideBar />
        <div class="overflow-scroll px-10 py-[54px] w-full">    
            <router-view />
        </div>
    </div>
</template>

<script>
import SideBar from '../../components/SideBar.vue'

export default {
    name: 'DashBoard',
    components: {
        SideBar,
    }
}
</script>
