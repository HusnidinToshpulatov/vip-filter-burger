import Dashboard from "./Dashboard/Dashboard.vue";
import Settings from "./Settings/Settings.vue";
import Home from "./Home/Home.vue";
import Messages from "./Messages/Messages.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/messages",
    name: "Messages",
    component: Messages,
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
