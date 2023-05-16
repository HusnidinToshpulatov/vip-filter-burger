<template>
  <div class="account">
    <h2>Account Information</h2>
    <div>
      <p>Email: {{ email }}</p>
      <p>Password: {{ password }}</p>
    </div>
    <div>
      <label for="new-password">New Password:</label>
      <input type="password" id="new-password" v-model="newPassword" />
      <button @click="changePassword">Change Password</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Account",
  data() {
    return {
      email: localStorage.getItem("email"),
      password: localStorage.getItem("password"),
      newPassword: "",
    };
  },
  methods: {
    changePassword() {
      localStorage.setItem("password", this.newPassword);
      alert("Password changed successfully!");
      this.newPassword = "";
    },
  },
};
</script>

<style lang="scss">
.account {
  margin-top: 5vh;
  padding: 5vh 2vw;
  border: 1px solid #ccc;
  border-radius: 1vh 0.5vw;
  color: white;
  h2 {
    font-size: 3vh;
    margin-bottom: 2vh;
  }

  div {
    margin-bottom: 2vh;

    p {
      font-size: 2vh;
      margin: 0;
    }
  }

  label {
    display: block;
    font-size: 2vh;
    margin-bottom: 1vh;
  }

  input {
    font-size: 2vh;
    padding: 1vh;
    border-radius: 0.5vh;
    border: 1px solid #ccc;
    margin-right: 0.6510416666666666vw;
  }

  button {
    font-size: 2vh;
    padding: 1vh 2vh;
    border-radius: 0.5vh;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
  }
}
</style>
