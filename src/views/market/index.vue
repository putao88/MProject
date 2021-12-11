<template>
  <div class="market">
    <img
      class="market-background"
      src="../../assets/market/background.jpg"
      alt=""
    />
    <div class="market-container">
      <img class="static-bg" src="@/assets/home/myheroes-bg.jpg" alt="myheroes-background">
      <div class="page-title">MARKETPLACE</div>
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
        <Card v-for="item in cardlist" :key="item.key" />
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
      cardlist:[
        {key:'1',status:'open',title:'',content1:'Upgrade',content2:'Town Inn',content3:'to Level 2'},
        {key:'2',status:'open',title:'',content1:'Upgrade',content2:'Town Inn',content3:'to Level 2'},
        {key:'3',status:'lock',title:'',content1:'Upgrade',content2:'Town Inn',content3:'to Level 2'},
        {key:'4',status:'lock',title:'',content1:'Upgrade',content2:'Town Inn',content3:'to Level 2'},
        {key:'5',status:'lock',title:'',content1:'Upgrade',content2:'Town Inn',content3:'to Level 2'},
      ],
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
    margin-top: 100px;
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
      padding: 0 1rem;
      justify-content: center;
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