import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/Home/Index.vue";
import Community from "../views/Community.vue";
import ComingSoon from "../views/ComingSoon.vue";
import Discovery from "../views/Discovery.vue";
import Dashboard from "../views/Index.vue";
import Movies from "../views/Home/Movies.vue"
import Animes from "../views/Home/Animes.vue"
import TVSeries from "../views/Home/TVSeries.vue"

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Dashboard",
      redirect: '/home/tv-series',
      component: Dashboard,
      children: [
        {
          path: "home",
          name: "home",
          redirect: '/home/tv-series',
          component: HomeView,
          children: [
            {
              path: "movies",
              name: "movies",
              component: Movies,
            },
            {
              path: "animes",
              name: "animes",
              component: Animes,
            },
            {
              path: "tv-series",
              name: "tv-series",
              component: TVSeries,
            },
          ],
        },
        {
          path: "coming-soon",
          name: "coming-soon",
          component: ComingSoon,
        },
        {
          path: "community",
          name: "community",
          component: Community,
        },
        {
          path: "discovery",
          name: "discovery",
          component: Discovery,
        },
      ],
    },
    // {
    //   path: "/dashboard/home",
    //   name: "Home",
    //   component: HomeView,
    //   children: [
    //     {
    //       path: "movies",
    //       name: "movies",
    //       component: () => import("../views/Dashboard/Home.vue"),
    //     },
    //     {
    //       path: "animes",
    //       name: "anime",
    //       component: ComingSoon,
    //     },
    //     {
    //       path: "tv-series",
    //       name: "tv-series",
    //       component: Community,
    //     },
    //   ],
    // },
  ],
});

export default router;
