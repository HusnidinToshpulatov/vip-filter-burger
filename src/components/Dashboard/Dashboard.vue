<template>
  <!--  -->
  <!--  -->
  <!-- Dashboardning Sana qismi shu yerda boshlangan -->
  <div class="dashboardDate">
    <h1>Dashboard</h1>
    <p class="todaysDate">{{ formattedDate }}</p>
  </div>
  <!-- Dashboardning Sana qismi tugadi shu yerda -->
  <!--  -->
  <!--  -->
  <hr />
  <!--  -->
  <!--  -->
  <!-- Cardlar qismi shu yerda boshlangan -->
  <div class="infoCards d-flex">
    <div class="card">
      <div class="percentage">
        <i class="bx bx-dollar-circle imgIcon"></i>
        <p>+32.40%</p>
        <i class="bx bx-up-arrow-alt arrows"></i>
      </div>
      <h1>$10,243.00</h1>
      <span>Total Revenue</span>
    </div>
    <div class="card">
      <div class="percentage">
        <i class="bx bx-bookmark-minus imgIcon"></i>
        <p>-12.40%</p>
        <i class="bx bx-down-arrow-alt arrows"></i>
      </div>
      <h1>23,456</h1>
      <span>Total Orders</span>
    </div>
    <div class="card">
      <div class="percentage">
        <i class="bx bx-user imgIcon"></i>
        <p>+2.40%</p>
        <i class="bx bx-up-arrow-alt arrows"></i>
      </div>
      <h1>1,234</h1>
      <span>Total Customer</span>
    </div>
  </div>
  <!-- Cardlar qismi shu yerda tugagan -->
  <!--  -->
  <!--  -->
  <!--  -->
  <!-- Order Report shu yerda boshlangan -->
  <div class="orderReport">
    <div class="d-flex">
      <h1 class="report">Order Report</h1>
      <button>
        <i class="bx bx-filter"></i>
        Filter Order
      </button>
    </div>
    <div class="filter d-flex">
      <span>Customer</span>
      <span>Menu</span>
      <span>Total Payment</span>
      <span>Status</span>
    </div>
    <OrderReportPerson />
  </div>
</template>
<script>
import moment from "moment";
import "../index.css";
import OrderReportPerson from "../../ui-components/OrderReportPerson.vue";

export default {
  name: "Dashboard",
  data() {
    return {
      date: new Date(),
      number1: 32,
      number2: -12,
      number3: 2,
    };
  },
  computed: {
    formattedDate() {
      return moment(this.date).format("dddd D MMM, YYYY");
    },
  },
  methods: {
    getClass(number) {
      return {
        positive: number >= 0,
        negative: number < 0,
      };
    },
  },
  components: { OrderReportPerson },
};
</script>
<style lang="scss">
* {
  overflow: hidden;
}
.dashboard {
  padding: 5.602240896358543vh 2.6041666666666665vw;
  // Dashboardning Sana qismi shu yerda boshlangan $$$$$$$$$$$$
  .dashboardDate h1 {
    color: white;
    font-size: 5.602240896358543vh;
    margin-bottom: 0.5602240896358543vh;
  }
  .todaysDate {
    color: #abbbc2;
    font-size: 2.8011204481792715vh;
    margin-bottom: 3.361344537815126vh;
  }
  hr {
    width: 78.125vw;
    border: 1px solid #393c49;
  }
  // Dashboardning Sana qismi tugadi shu yerda $$$$$$$$$$$$$

  // Cardlar qismi shu yerda boshlangan $$$$$$$$$$$$$$$
  .infoCards {
    margin-top: 4.201680672268908vh;
    .card {
      background-color: #1f1d2b;
      color: white;
      padding: 3.081232492997199vh 1.4322916666666667vw;
      border-radius: 8px;
      width: 16.276041666666668vw;
      height: 25.210084033613445vh;
      .percentage {
        display: flex;
        align-items: center;
        i {
          margin-bottom: 2.100840336134454vh;
        }
        .arrows {
          border-radius: 50%;
          padding: 1.4005602240896358vh 0.6510416666666666vw;
          font-size: 2.2408963585434174vh;
          margin-left: 0.390625vw;
        }
        .bx-up-arrow-alt {
          background-color: rgba(136, 224, 145, 0.24);
          color: rgba(80, 209, 170, 1);
        }
        .bx-down-arrow-alt {
          color: rgba(255, 124, 163, 1);
          background-color: rgba(255, 100, 113, 0.24);
        }
        p {
          font-size: 2.2408963585434174vh;
          font-weight: 600;
        }
      }
      i {
        margin-right: 1.0416666666666667vw;
      }
      h1 {
        font-size: 5.322128851540616vh;
        margin-bottom: 2.100840336134454vh;
      }
      span {
        color: rgba(171, 187, 194, 1);
        font-size: 2.8011204481792715vh;
      }
      .imgIcon {
        padding: 1.4005602240896358vh 0.6510416666666666vw;
        border-radius: 8px;
        font-size: 6.162464985994398vh;
        background-color: #252836;
      }
      .bx-dollar-circle {
        color: #9288e0;
      }
      .bx-bookmark-minus {
        color: #ffb572;
      }
      .bx-user {
        color: #65b0f6;
      }
    }
  }
  .orderReport {
    margin-top: 3.361344537815126vh;
    background-color: #1f1d2b;
    border-radius: 8px;
    .d-flex {
      padding: 3.361344537815126vh 1.3020833333333333vw;
      .report {
        color: white;
        font-size: 3.5014005602240896vh;
        font-weight: 600;
      }
      button {
        color: white;
        padding: 1.9607843137254901vh 0.9114583333333334vw;
        background-color: transparent;
        border: 1px solid #393c49;
        border-radius: 8px;
        font-size: 1.9607843137254901vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
        transition: all 0.2s linear;
        cursor: pointer;
        i {
          font-size: 3.5210084033613445vh;
        }
      }
      button:hover {
        background-color: #393c49;
      }
    }
    .filter {
      span {
        color: white;
        font-size: 2.5210084033613445vh;
        font-weight: 600;
      }
      padding-bottom: 2.2408963585434174vh;
      border-bottom: 1px solid #393c49;
    }
  }
  // Cardlar qismi shu yerda tugagan $$$$$$$$$$$
  // Media boshi
  @media (min-width: 414px) and (max-width: 768px) {
    padding: 16px;
    .dashboardDate h1 {
      font-size: 16px;
      margin-bottom: 1px;
    }
    .todaysDate {
      font-size: 8.2px;
      margin-bottom: 6px;
    }
    hr {
      width: 26.041666666666668vw;
    }
    .infoCards {
      margin-top: 10px;
      .card {
        padding: 9px;
        border-radius: 4px;
        width: 102px;
        height: 74px;
        .percentage {
          i {
            margin-bottom: 6px;
          }
          .arrows {
            padding: 4px;
            font-size: 6.56px;
            margin-left: 2.46px;
          }
          p {
            font-size: 6.56px;
            font-weight: 300;
          }
        }
        i {
          margin-right: 6.56px;
        }
        h1 {
          font-size: 15.58px;
          margin-bottom: 6.15px;
        }
        span {
          font-size: 8.2px;
        }
        .imgIcon {
          padding: 4.1px;
          border-radius: 4px;
          font-size: 18.04px;
        }
      }
    }
  }
}
</style>
