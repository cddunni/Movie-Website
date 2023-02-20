import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/Dashboard/Home/Index.vue";
import Community from "../views/Dashboard/Community.vue";
import ComingSoon from "../views/Dashboard/ComingSoon.vue";
import Discovery from "../views/Dashboard/Discovery.vue";
import Dashboard from "../views/Dashboard/Index.vue";
import Movies from "../views/Dashboard/Home/Movies.vue"
import Animes from "../views/Dashboard/Home/Animes.vue"
import TVSeries from "../views/Dashboard/Home/TVSeries.vue"

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
          name: "dashboard-home",
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
