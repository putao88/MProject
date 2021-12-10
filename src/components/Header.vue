<template>
  <div class="header">

    <div class="header-left">
      <!-- 首页的头部——左边 -->
      <connect-wallet />
    </div>

    <div class="header-right god-font">

      <div style="text-align:right">
        <div class="bnb-info text-white">0 BNB</div>
        <div style="width: fit-content; float: right;text-align: right;">
          <div class="text-uppercase btn btn-dark me-4 disabled" style="width:150px">CLAIM</div>
        </div>
      </div>

      <div style="text-align:right">
        <div class="bnbh-info text-white">0 BNBH</div>
        <div style="width: fit-content; float: right;text-align: right;">
          <div class="text-uppercase btn btn-yellow me-4" style="width:150px">BUY</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { loadBlockchainData } from '../metamask'
import ConnectWallet from '@/components/ConnectWallet';
// import bnbPng from '@/assets/header/bnbhInfo.png'

export default {
  name:'Header',
  components:{ ConnectWallet },
  data(){
    return {
      
    }
  },
  created() {
    loadBlockchainData()
  },
  
};
</script>

<style>
.header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  padding: 1rem;
  display: flex;
  justify-content:space-between;
}
.header-left {

}

.header-right {
  display: flex;
  justify-content: flex-end!important;
}
.bnb-info, .bnbh-info {
  height: 70px;
  display:flex;
  align-items: center;
  justify-content: flex-end;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 250px;
  padding: 10px 30px 10px 10px;
}
.bnb-info {
  background-image: url('~@/assets/header/bnbInfo.png');
}
.bnbh-info {
  background-image: url('~@/assets/header/bnbhInfo.png');
}

</style>