<template>
  <div class="addDishModal">
    <h1>Add New Dish</h1>
    <form action="addDish" @submit.prevent="submitForm">
      <div class="form-group">
        <label for="imgUrl">Image URL</label>
        <input
          type="text"
          class="form-control"
          id="imgUrl"
          name="imgUrl"
          v-model="imgUrl"
          required
        />
      </div>
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="title"
          name="title"
          v-model="title"
          required
        />
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input
          type="number"
          class="form-control"
          id="price"
          name="price"
          v-model="price"
          step="0.01"
          required
        />
      </div>
      <div class="form-group">
        <label for="category">Category</label>
        <select
          class="form-control"
          id="category"
          name="category"
          v-model="selectedCategory"
        >
          <option v-for="button in filterButtons" :value="button.name">
            {{ button.title }}
          </option>
        </select>
      </div>
      <div class="action">
        <button type="submit" class="submitBtn" @click="$emit('onSubmit')">
          Submit
        </button>
        <button
          type="button"
          class="cancelBtn"
          data-dismiss="modal"
          @click="$emit('close')"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "Popup",
  props: {
    defaultCategory: String,
    filterButtons: Array,
    dishes: Array,
  },
  data() {
    return {
      title: "",
      price: "",
      selectedCategory: "",
      img: "",
    };
  },
  methods: {
    submitForm() {
      const newDish = {
        name: this.name,
        img: this.img, // set default image if no image is uploaded
        title: this.title,
        price: parseFloat(this.price),
        category: this.selectedCategory,
      };
      this.$emit("submit", newDish);
    },
  },
  mounted() {
    // set default category if category prop is provided
    if (this.defaultCategory) {
      this.selectedCategory = this.defaultCategory;
    }
  },
};
</script>

<style lang="scss" scoped>
.addDishModal {
  padding: 8vh 10vw;
  position: absolute;
  background-color: rgba(46, 46, 195, 0.929);
  top: 3%;
  left: 30%;
  backdrop-filter: blur(100vh);
  border-radius: 0.5602240896358543vh 0.2604166666666667vw;
  h1 {
    color: white;
    font-size: 6.302521008403361vh;
    margin-bottom: 4.201680672268908vh;
  }
  form {
    .form-group {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-bottom: 2.8011204481792715vh;
      label {
        color: white;
        font-size: 3.5014005602240896vh;
        margin-bottom: 1.4005602240896358vh;
      }
      input {
        width: 19.53125vw;
        padding: 1.4005602240896358vh 1.3020833333333333vw;
        outline: none;
        border-radius: 0.7002801120448179vh 0.3255208333333333vw;
      }
      select {
        width: 13.020833333333334vw;
        padding: 1.4005602240896358vh 1.3020833333333334vw;
        font-size: 20px;
        cursor: pointer;
      }
    }
    .action {
      display: flex;
      align-items: center;
      justify-content: space-between;
      button {
        padding: 2.5210084033613445vh 1.953125vw;
        font-size: 3.5014005602240896vh;
        border: none;
        border-radius: 0.7002801120448179vh 0.3255208333333333vw;
        color: white;
        cursor: pointer;
      }
      .submitBtn {
        background-color: #198754;
      }
      .cancelBtn {
        background-color: #dc3545;
      }
    }
  }
}
</style>
