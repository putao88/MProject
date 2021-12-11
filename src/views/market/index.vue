<template>
  <div class="market container-wrap">
    <img class="static-bg" src="@/assets/market/background.jpg" alt="myheroes-background" />
    <div class="bg-overlay"></div>
    <div class="page-title">MARKETPLACE</div>
    <div class="market-header">
      <div class="list">
        <img src="@/assets/market/list.png" alt />
        <span>My Heroes On Market</span>
      </div>
      <div>
        <MarketSelect />
      </div>
      <div>
        <MarketSelect />
      </div>
      <div>
        <MarketPagination />
      </div>
    </div>
    <div class="market-body">
      <Card v-for="item in cardlist" :key="item.key" />
    </div>
    <div class="market-foot">
      <MarketPagination />
    </div>
  </div>
</template>

<script>
import Card from "./components/Card";
import MarketSelect from "./components/Select";
import MarketPagination from "./components/Pagination";
export default {
  name: "Market",
  components: { Card, MarketSelect, MarketPagination },
  data() {
    return {
      cardlist: [
        {
          key: "1",
          status: "open",
          title: "",
          content1: "Upgrade",
          content2: "Town Inn",
          content3: "to Level 2"
        },
        {
          key: "2",
          status: "open",
          title: "",
          content1: "Upgrade",
          content2: "Town Inn",
          content3: "to Level 2"
        },
        {
          key: "3",
          status: "lock",
          title: "",
          content1: "Upgrade",
          content2: "Town Inn",
          content3: "to Level 2"
        },
        {
          key: "4",
          status: "lock",
          title: "",
          content1: "Upgrade",
          content2: "Town Inn",
          content3: "to Level 2"
        },
        {
          key: "5",
          status: "lock",
          title: "",
          content1: "Upgrade",
          content2: "Town Inn",
          content3: "to Level 2"
        }
      ],
      options: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    };
  }
};
</script>

<style lang="scss" scoped>
.market {
  padding: 0 1rem 1rem 1rem;
  .market-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    --bs-text-opacity: 1;
    color: rgba(255, 255, 255, 1);
    .list {
      img {
        width: 50px;
      }
      span {
        color: #ffffff;
      }
    }
  }
  .market-body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 1rem;
    justify-content: center;
    .card {
      margin: 10px;
    }
  }
  .market-foot {
    justify-content: flex-end;
    display: flex;
  }
}
</style>