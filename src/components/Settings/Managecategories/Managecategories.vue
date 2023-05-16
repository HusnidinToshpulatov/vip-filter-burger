<template>
  <div class="manage-categories">
    <h2>Manage Categories</h2>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(category, index) in filterButtons" :key="index">
          <td>
            <input type="text" :value="category.title" readonly />
            <input
              v-model="category.title"
              type="text"
              v-if="category.editing"
              @keydown.enter="saveCategory(index)"
              @keydown.esc="cancelEdit(index)"
            />
          </td>
          <td>
            <button @click="toggleEdit(index)">
              {{ category.editing ? "Save" : "Edit" }}
            </button>
            <button @click="deleteCategory(index)">Delete</button>
          </td>
        </tr>
        <tr>
          <td>
            <input
              v-model="newCategory"
              type="text"
              placeholder="New category title"
            />
          </td>
          <td>
            <button @click="addCategory">Add Category</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="manage-categories-buttons">
      <button @click="$emit('close')">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Managecategories",
  props: {
    filterButtons: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      newCategory: "",
    };
  },
  methods: {
    toggleEdit(index) {
      this.filterButtons[index].editing = !this.filterButtons[index].editing;
    },
    saveCategory(index) {
      this.filterButtons[index].editing = false;
    },
    cancelEdit(index) {
      this.filterButtons[index].editing = false;
      this.filterButtons[index].title = this.filterButtons[index].titleCopy;
    },
    deleteCategory(index) {
      this.filterButtons.splice(index, 1);
    },
    addCategory() {
      this.filterButtons.push({
        title: this.newCategory,
        name: this.newCategory.toLowerCase().replace(" ", "-"),
      });
      this.newCategory = "";
    },
  },
};
</script>
<style lang="scss" scoped>
.manage-categories {
  padding: 4vh 10vw;
  position: absolute;
  background-color: rgba(46, 46, 195, 0.929);
  top: 1%;
  left: 30%;
  backdrop-filter: blur(100vh);
  border-radius: 0.5602240896358543vh 0.2604166666666667vw;
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }

  th,
  td {
    padding: 2px;
    border: 1px solid black;
  }

  th {
    text-align: left;
  }

  input[type="text"] {
    width: 100%;
    box-sizing: border-box;
    padding: 2px;
    margin-bottom: 2px;
  }

  button {
    margin-right: 5px;
  }
}
</style>
