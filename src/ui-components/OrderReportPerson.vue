<template>
  <div class="orders" id="orders" ref="orders">
    <div class="order d-flex" v-for="order in orders">
      <h2 class="orderName">{{ order.name }}</h2>
      <p class="orderMenu">{{ order.menu }}</p>
      <span class="orderPrice">${{ order.price }}</span>
      <h1 class="orderStatus">{{ order.status }}</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "OrderReportPerson",
  props: {
    orders: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.calculateTotalPrice();
  },
  methods: {
    calculateTotalPrice() {
      let totalPrice = this.orders.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price,
        0
      );
      this.$emit("total-price-calculated", totalPrice);
    },
  },
};
</script>
<style scoped lang="scss">
.orders {
  height: 21.008403361344538vh;
  overflow-y: scroll;
}
.order {
  align-items: baseline;
  h2 {
    color: #e0e6e9;
    font-size: 1.9607843137254901vh;
  }
  p {
    color: #e0e6e9;
    font-size: 1.9607843137254901vh;
    width: 8.919270833333334vw;
  }
  span {
    color: #e0e6e9;
    font-size: 1.9607843137254901vh;
  }
  h1 {
    color: #50d1aa;
    background-color: rgba(107, 226, 190, 0.24);
    padding: 0.5602240896358543vh 0.78125vw;
    border-radius: 30px;
    font-size: 1.9607843137254901vh;
  }
}
</style>
