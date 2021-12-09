<template>
  <div class="header">

    <div class="header-left">
      <!-- 首页的头部——左边 -->
      <!-- <div class="wallet-status-desktop">
        <img src="@/assets/header/logo.png" class="wallet-logo" />
        <div class="wallet-connected">
          <h4 class="text-white p-0 m-0 text-shadow wallet-title god-font">No Wallet</h4>
          <div class="text-uppercase btn btn-red mt-1">Connect</div>
        </div>
      </div> -->
      <connect-wallet />

    </div>

    <div class="header-right">right</div>
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
}
</style>