import Dashboard from "./Dashboard/Dashboard.vue";
import Settings from "./Settings/Settings.vue";
import Account from "./Account/Account.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    key: 1,
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
    key: 4,
  },
  {
    path: "/account",
    name: "Account",
    component: Account,
    key: 1,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: { name: "Dashboard" },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
