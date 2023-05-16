<template>
  <div class="settings">
    <h1>Settings</h1>
    <div class="management">
      <div class="productsManagement">
        <div class="d-flex rowFirst">
          <h3>Products Management</h3>
          <button
            class="d-flex manageCategories"
            @click="showManagePopup = true"
          >
            <i class="bx bx-filter"></i>
            Manage Categories
          </button>
        </div>
        <div class="filterButtons">
          <button
            class="all"
            :class="{ activeFilterButton: filter === 'all' }"
            @click="updateFilter('all')"
          >
            All
          </button>
          <button
            v-for="btn in filterButtons"
            :key="btn.name"
            :class="{ activeFilterButton: filter === btn.name }"
            @click="updateFilter(btn.name)"
          >
            {{ btn.title }}
          </button>
        </div>
      </div>
      <hr />

      <div class="dishes d-flex">
        <div class="placing">
          <div class="addDish card" @click="showPopup = true">
            <span>+</span>
            <h1>Add new dish</h1>
          </div>
          <div
            class="dishCard card"
            v-for="(card, index) in filteredDishes"
            :key="index"
          >
            <button class="deleteBtn" @click="deleteDish(index)">
              <i class="bx bxs-trash"></i>
            </button>
            <img :src="card.img" alt="" />
            <h2 class="title">{{ card.title }}</h2>
            <span class="price">$ {{ card.price }}</span>
            <button
              class="button"
              @click="
                showEditPopup = true;
                editingDish = card;
                editingDishIndex = index;
              "
            >
              <i class="bx bx-edit-alt"></i>
              Edit dish
            </button>
          </div>
        </div>
      </div>
    </div>
    <Popup
      v-if="showPopup"
      :category="getCategoryTitle(filter)"
      :filter-buttons="filterButtons"
      :dishes="dishes"
      @close="showPopup = false"
      @submit="addDish"
    />
    <Editpopup
      v-if="showEditPopup"
      :filter-buttons="filterButtons"
      :dish="editingDish"
      :dish-index="editingDishIndex"
      @close="showEditPopup = false"
      @update="updateDish"
    />
    <Managecategories
      v-if="showManagePopup"
      :filter-buttons="filterButtons"
      @submit-changes="submitCategoryChanges"
      @cancel-changes="cancelCategoryChanges"
      @close="showManagePopup = false"
    />
  </div>
</template>
<script>
import burgerImg from "../images/burger.png";
import teaImg from "../images/tea.png";
import Popup from "./AddNewDish/Popup.vue";
import Editpopup from "./EditDish/Editpopup.vue";
import Managecategories from "./Managecategories/Managecategories.vue";
export default {
  name: "Settings",
  data() {
    return {
      editingDish: null,
      editingDishIndex: null,
      showPopup: false,
      showEditPopup: false,
      showManagePopup: false,
      filter: "all",
      filterButtons: [
        {
          title: "Burgers",
          name: "burgers",
        },
        {
          title: "Tosters",
          name: "tosters",
        },
        {
          title: "Cheese-Steak",
          name: "cheese-steak",
        },
        {
          title: "Fries",
          name: "fries",
        },
        {
          title: "Teas",
          name: "teas",
        },
        {
          title: "Hot-Dogs",
          name: "hot-dogs",
        },
        {
          title: "Combo",
          name: "combo",
        },
        {
          title: "Milkshake",
          name: "milkshake",
        },
        {
          title: "Coffee",
          name: "coffee",
        },
        {
          title: "Lemonade",
          name: "lemonade",
        },
      ],
      dishes: [
        {
          name: "tosters",
          img: "../images/burger.png",
          title: "Toster Toster Toster",
          price: 42.29,
          category: "tosters",
        },
        {
          name: "teas",
          img: teaImg,
          title: "Vip Tea",
          price: 2.91,
          category: "teas",
        },
        {
          name: "burgers",
          img: burgerImg,
          title: "Vip Burger",
          price: 2.29,
          category: "burgers",
        },
        {
          name: "burgers",
          img: burgerImg,
          title: "Vippp Burger",
          price: 1.86,
          category: "burgers",
        },
        {
          name: "burgers",
          img: burgerImg,
          title: "Vip Burger 200 gramm",
          price: 4.29,
          category: "burgers",
        },
        {
          name: "teas",
          img: teaImg,
          title: "Limon Choy",
          price: 1.15,
          category: "teas",
        },
      ],
    };
  },
  methods: {
    updateFilter(category) {
      this.filter = category;
    },
    deleteDish(index) {
      const dish = this.filteredDishes[index];
      const dishIndex = this.dishes.findIndex((d) => d === dish);
      this.dishes.splice(dishIndex, 1);
    },
    addDish(newDish) {
      if (newDish) {
        this.dishes.unshift(newDish);
      }
      this.dishes = this.dishes.filter((dish) => dish.title && dish.price);
      this.showPopup = false;
    },
    updateDish(updatedDish, index) {
      this.dishes.splice(index, 1, updatedDish);
      this.showEditPopup = false;
    },
    getCategoryTitle(category) {
      const button = this.filterButtons.find((btn) => btn.name === category);
      return button ? button.title : "";
    },
  },
  computed: {
    filteredDishes() {
      if (this.filter === "all") {
        return this.dishes;
      } else {
        return this.dishes.filter((dish) => dish.category === this.filter);
      }
    },
  },

  components: { Popup, Editpopup, Managecategories },
};
</script>
<style lang="scss" scoped>
.settings {
  h1 {
    color: white;
    font-size: 5.602240896358543vh;
    margin-bottom: 3.361344537815126vh;
  }
  .management {
    width: 72.083333333333336vw;
    background-color: #1f1d2b;
    border-radius: 8px;
    .productsManagement {
      padding: 3.361344537815126vh 1.5625vw;
      .rowFirst {
        margin-bottom: 1.1204481792717087vh;
        h3 {
          font-size: 3.361344537815126vh;
          color: white;
        }
        .manageCategories {
          background-color: transparent;
          border: 1px solid #413d54;
          border-radius: 8px;
          color: #ffffff;
          font-size: 2.2408963585434174vh;
          padding: 2.5210084033613445vh 1.171875vw;
          transition: all 0.2s linear;
          cursor: pointer;
          i {
            margin-right: 0.6510416666666666vw;
            font-size: 3.8011204481792715vh;
          }
        }
        .manageCategories:hover {
          background-color: #393c49;
        }
      }
      .filterButtons {
        button {
          font-size: 2.2408963585434174vh;
          color: white;
          background-color: transparent;
          border: none;
          cursor: pointer;
          margin-right: 1vw;
          padding-bottom: 1.8207282913165266vh;
          transition: all 0.3s linear;
        }
        .activeFilterButton {
          color: #ea7c69;
        }
      }
    }
    hr {
      width: 100%;
    }
  }
  .dishes {
    height: 50vh;
    overflow-y: scroll;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 3.361344537815126vh 1.5625vw;
    .placing {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }
    .card {
      width: 14.388020833333334vw;
      height: 42.016806722689076vh;
      border: 1px solid #393c49;
      padding: 3.081232492997199vh 2.4739583333333335vw 0px 2.4739583333333335vw;
      border-radius: 5px;
      margin: 0.6510416666666666vw;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .addDish {
      border: 1px dashed #ea7c69;
      cursor: pointer;
      border-width: 2px;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      cursor: pointer;
      span {
        color: #ea7c69;
        font-size: 4.201680672268908vh;
      }
      h1 {
        color: #ea7c69;
        font-size: 2.5210084033613445vh;
      }
    }
    .dishCard {
      position: relative;
      .deleteBtn {
        position: absolute;
        top: 0%;
        background-color: transparent;
        border: none;
        font-size: 40px;
        cursor: pointer;
        color: #db3315;
        right: 0%;
      }
      img {
        width: 9.375vw;
        height: 18.207282913165265vh;
        margin-bottom: 1.9607843137254901vh;
      }
      h2 {
        font-size: 2.2408963585434174vh;
        color: white;
        width: 9.375vw;
        height: 7.002801120448179vh;
        margin-bottom: 1.1204481792717087vh;
        text-align: center;
      }
      span {
        color: #abbbc2;
        font-size: 2.2408963585434174vh;
        margin-bottom: 2.2408963585434174vh;
      }
      .button {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        cursor: pointer;
        border: none;
        border-radius: 0px 0px 5px 5px;
        bottom: 0;
        padding: 2.2408963585434174vh;
        width: 100%;
        color: #ea7c69;
        background-color: #ea7c6942;
        i {
          font-size: 2.8011204481792715vh;
          margin-right: 0.6510416666666666vw;
        }
      }
    }
  }
}
</style>
