<template>
  <div class="market">
    <img
      class="market-background"
      src="../../assets/market/background.jpg"
      alt=""
    />
    <div class="market-container">
      <div class="market-title">MARKETPLACE</div>
      <div class="market-header">
        <div class="list">
          <img src="@/assets/market/list.png" alt="" />
          <span>My Heroes On Market</span>
        </div>
        <div><MarketSelect /></div>
        <div><MarketSelect /></div>
      </div>
      <div class="market-body">
        <!-- <template v-for="item in options"> -->
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <!-- </template> -->
      </div>
    </div>
    <!-- <MarketSelect/> -->
    <div class="market-foot">
      <MarketPagination />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import MarketSelect from "@/components/Select";
import MarketPagination from "@/components/Pagination";
export default {
  name: "Market",
  components: { Card, MarketSelect, MarketPagination },
  data() {
    return {
      options: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    };
  },
};
</script>

<style lang="scss" scoped>
.market {
  height: 100%;
  width: 100%;
  .market-background {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
  .market-container {
    padding: 10px;
    margin-top: 160px;
    .market-title {
      background-image: url("~@/assets/market/header.png");
      background-size: 100% 100%;
      width: 50%;
      height: 80px;
      font-size: 35px;
      margin: auto;
      text-align: center;
      line-height: 70px;
      color: #ffffff;
    }
    .market-header {
      display: flex;
      justify-content: space-between;
      div {
        width: 290px;
      }
      .list {
        height: 50px;
        display: flex;
        align-items: center;
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
      padding: 0 40px;
      justify-content: center;
      // margin-bottom: 10px;
      .card {
        margin: 10px;
      }
    }
  }
  .market-foot {
    height: 50px;
    margin-left: 70%;
    // margin-bottom: 40px;
  }
}
</style>