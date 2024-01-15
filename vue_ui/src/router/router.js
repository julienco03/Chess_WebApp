import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ChessView from "@/views/ChessView.vue";
import RulesView from "@/views/RulesView.vue";
import OfflineView from "@/views/OfflineView.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/rules",
    component: RulesView,
  },
  {
    path: "/chess",
    component: ChessView,
  },
  {
    path: "/offline",
    component: () => OfflineView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
