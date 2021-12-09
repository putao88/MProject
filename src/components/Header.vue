<template>
  <div class="header">

    <div class="header-left">
      <!-- 首页的头部——左边 -->
      <connect-wallet />
    </div>

    <div class="header-right god-font">
      <div style="text-align:'right'">
        <div class="bnb-info text-white"></div>
      </div>
      <div style="textAlign:'right'">

      </div>
    </div>
  </div>
</template>

<script>
import { loadBlockchainData } from '../metamask'
import ConnectWallet from '@/components/ConnectWallet'

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
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 250px;
  padding: 10px 30px 10px 10px;
}

</style>