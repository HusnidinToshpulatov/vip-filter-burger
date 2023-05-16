<template>
  <div class="addDishModal">
    <h1>Edit Dish</h1>
    <form action="editDish" @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          name="title"
          v-model="dish.title"
          placeholder="Title"
        />
      </div>
      <div class="form-group">
        <label for="name">Price</label>
        <input
          type="number"
          class="form-control"
          name="price"
          v-model="dish.price"
          step="0.01"
        />
      </div>
      <div class="form-group">
        <label for="category">Category</label>
        <select
          class="form-control"
          id="category"
          name="category"
          v-model="dish.category"
        >
          <option
            v-for="btn in filterButtons"
            :key="btn.name"
            :value="btn.name"
          >
            {{ btn.title }}
          </option>
        </select>
      </div>
      <div class="action">
        <button type="submit" class="submitBtn" @click="handleSubmit">
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
  name: "Editpopup",
  props: {
    filterButtons: {
      type: Array,
      required: true,
    },
    dish: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      editedDish: null,
      editedTitle: "",
      editedPrice: "",
      editedCategory: "",
    };
  },

  methods: {
    handleSubmit() {
      this.$emit("update", this.dish, this.dishIndex);
    },
  },
  mounted() {
    this.editedDish = { ...this.dish };
    this.editedTitle = this.dish.title;
    this.editedPrice = this.dish.price;
    this.editedCategory = this.dish.category;
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
