import CobaGetApi from "@/components/CobaGetApi.vue";
import CobaPinia from "@/components/CobaPinia.vue";
import FormHandling from "@/components/FormHandling.vue";
import ListRendering from "@/components/ListRendering.vue";
import NotFound from "@/components/NotFound.vue";
import Playpool from "@/components/Playpool.vue";
import RuteParam from "@/components/RuteParam.vue";
import RuteState from "@/components/RuteState.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Playpool,
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
    {
      path: "/rute-param/:id/:nama/:unik",
      component: RuteParam,
    },
    {
      path: "/rute-state",
      component: RuteState,
    },
    {
      path: "/get-api",
      component: CobaGetApi,
    },
    {
      path: "/coba-pinia",
      component: CobaPinia,
    },
    {
      path: "/list",
      component: ListRendering,
    },
    {
      path: "/playpool",
      component: Playpool,
    },
    {
      path: "/form",
      //   component: FormHandling
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/FormHandling.vue"),
    },
  ],
});

export default router;
