<template>
  <div class="sign">
    <div class="sign__tabs">
      <div
        class="sign__tab"
        :class="{ 'sign__tab--active': isSignup }"
        @click="isSignup = true"
      >
        Sign Up
      </div>
      <div
        class="sign__tab"
        :class="{ 'sign__tab--active': !isSignup }"
        @click="isSignup = false"
      >
        Sign In
      </div>
    </div>
    <form class="sign__form" v-if="isSignup" @submit.prevent="signup">
      <label class="sign__label">
        <span class="sign__label-text">Email</span>
        <input class="sign__input" type="email" v-model="email" required />
      </label>
      <label class="sign__label">
        <span class="sign__label-text">Password</span>
        <input
          class="sign__input"
          type="password"
          v-model="password"
          required
        />
      </label>
      <button class="sign__submit-btn">Sign Up</button>
    </form>
    <form class="sign__form" v-else @submit.prevent="signin">
      <label class="sign__label">
        <span class="sign__label-text">Email</span>
        <input class="sign__input" type="email" v-model="email" required />
      </label>
      <label class="sign__label">
        <span class="sign__label-text">Password</span>
        <input
          class="sign__input"
          type="password"
          v-model="password"
          required
        />
      </label>
      <button class="sign__submit-btn">Sign In</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "Sign",
  data() {
    return {
      isSignup: true,
      email: "",
      password: "",
    };
  },
  methods: {
    signup() {
      // Store email and password in local storage
      localStorage.setItem("email", this.email);
      localStorage.setItem("password", this.password);
      // Show Everything component
      this.$emit("signup-successful");
    },
    signin() {
      // Retrieve email and password from local storage
      const storedEmail = localStorage.getItem("email");
      const storedPassword = localStorage.getItem("password");
      // Check if email and password match stored values
      if (this.email === storedEmail && this.password === storedPassword) {
        // Show Everything component
        this.$emit("signin-successful");
      } else {
        alert("Invalid email or password");
      }
    },
  },
};
</script>
<style lang="scss">
.sign {
  width: 32.552083333333336vw;
  margin: 0 auto;
  padding: 2.8011204481792715vh 1.3020833333333333vw;
  background-color: #fff;
  border-radius: 0.7002801120448179vh 0.3255208333333333vw;
}
label {
  font-size: 4.201680672268908vh;
}
input {
  font-size: 4.201680672268908vh;
}
button {
  font-size: 2.5210084033613445vh;
}
.sign__tabs {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.8011204481792715vh;
}

.sign__tab {
  padding: 1.4005602240896358vh 1.3020833333333333vw;
  cursor: pointer;
  font-size: 2.5210084033613445vh;
}

.sign__tab--active {
  background-color: #000;
  color: #fff;
}

.sign__form {
  margin-bottom: 2.8011204481792715vh;
}

.sign__label {
  display: flex;
  align-items: center;
}

.sign__label-text {
  margin-right: 0.6510416666666666vw;
}

.sign__input {
  width: 100%;
  padding: 1.4005602240896358vh 0.6510416666666666vw;
  border-radius: 0.7002801120448179vh 0.3255208333333333vw;
  border: 1px solid #ccc;
}

.sign__submit-btn {
  background-color: #000;
  color: #fff;
  padding: 1.4005602240896358vh 1.3020833333333333vw;
  border-radius: 0.7002801120448179vh 0.3255208333333333vw;
  cursor: pointer;
}
</style>
