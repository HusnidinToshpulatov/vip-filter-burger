<template>
  <div class="output">
    <div class="sidePanel">
      <img src="./images/Logo.png" alt="" class="logo" />
      <div class="routerOrder">
        <router-link
          :to="{ path: '/dashboard' }"
          class="button"
          :class="{ activeSideButton: $route.path === '/' }"
        >
          <i class="bx bxs-pie-chart-alt-2"></i>
        </router-link>
        <router-link
          :to="{ path: '/settings' }"
          class="button"
          :class="{ activeSideButton: $route.path === '/settings' }"
        >
          <i class="bx bx-cog"></i>
        </router-link>
        <router-link
          :to="{ path: '/account' }"
          class="button"
          :class="{ activeSideButton: $route.path === '/account' }"
        >
          <i class="bx bx-user"></i>
        </router-link>
      </div>
    </div>
    <div>
      <div class="dashboard">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Dashboard from "./Dashboard/Dashboard.vue";
import Settings from "./Settings/Settings.vue";
import "./index.css";
import router from "./router";
export default {
  name: "Everything",
  components: { Dashboard, Settings },
  data() {
    return {};
  },
  methods: {
    activeSideButton() {
      const routerOrder = this.$el.querySelector(".routerOrder");
      const activeButton = routerOrder.querySelector(".activeSideButton");
      if (activeButton) {
        activeButton.classList.remove("activeSideButton");
      }
      const currentPath = this.$route.path;
      const routerLinks = routerOrder.querySelectorAll(".button");
      for (const routerLink of routerLinks) {
        if (routerLink.dataset.route === currentPath) {
          routerLink.classList.add("activeSideButton");
        }
      }
    },
  },
  watch: {
    $route(to) {
      this.activeSideButton();
    },
  },
  mounted() {
    this.activeSideButton();
  },
};
window.addEventListener("DOMContentLoaded", () => {
  router.push({ path: "/" });
});
</script>

<style lang="scss">
body {
  background: #252836;
  .sidePanel {
    padding: 3.361344537815126vh 1.5625vw;
    background-color: #1f1d2b;
    width: 10.067708333333332vw;
    height: 100vh;
    border-radius: 0px 16px 16px 0px;
    display: flex;
    justify-content: flex-start;
    align-items: start;
    flex-direction: column;
    box-sizing: border-box;
    .logo {
      width: 7.682291666666667vw;
      height: 16.526610644257705vh;
    }
    .button {
      background-color: transparent;
      border: none;
      border-radius: 8px 8px;
      padding: 1.8207282913165266vh 0.8463541666666666vw;
      transition: all 0.2s linear;
      cursor: pointer;
      i {
        font-size: 6.302521008403361vh; // 45 px
        padding: 2.5210084033613445vh 1.171875vw;
        border-radius: 8px;
        color: #ea7c69;
        transition: all 0.2s linear;
      }
    }
    .activeSideButton {
      background-color: rgba(37, 40, 54, 1);
      i {
        background-color: #ea7c69;
        color: white;
        box-shadow: 0px 8px 24px rgba(234, 124, 105, 0.32);
      }
    }
  }
  .output {
    display: flex;
  }
  @media (min-width: 414px) and (max-width: 768px) {
    min-width: 26.953125vw;
    max-width: 50vw;
    overflow: hidden;
    .sidePanel {
      width: 100%;
      height: 60px;
      border-radius: 0px 0px 5px 5px;
      padding: 5px;
      flex-direction: row;
      .logo {
        width: 40px;
        height: 40px;
      }
      button {
        border-radius: 3px;
        padding: 6.5px;
        i {
          font-size: 16.5px;
          padding: 5.4px;
        }
      }
    }
    .output {
      flex-direction: column;
    }
  }
}
</style>
