<template>
  <div>
    <Sign
      v-if="!loggedIn"
      @signup-successful="onSignupSuccessful"
      @signin-successful="onSigninSuccessful"
    />
    <Everything v-if="loggedIn" />
  </div>
</template>
<script>
import Everything from "./Everything.vue";
import Sign from "./Sign.vue";

export default {
  name: "App",
  components: { Everything, Sign },
  data() {
    return {
      loggedIn: false,
      userEmail: "",
      userPassword: "",
    };
  },
  methods: {
    onSignupSuccessful() {
      // User successfully signed up
      this.loggedIn = true;
    },
    onSigninSuccessful() {
      // User successfully signed in
      this.loggedIn = true;
    },
  },
};
</script>
<style lang="scss">
body {
  background: #252836;
}
</style>
