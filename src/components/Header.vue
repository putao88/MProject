<template>
  <div class="header">

    <div class="header-left">
      <!-- 首页的头部——左边(首页) -->
      <div class="wallet-status-desktop" v-if="page === '/'">
        <img src="@/assets/header/logo.png" class="wallet-logo" />
        <div class="wallet-connected">
          <div v-if="!address">
            <h4 class="text-white p-0 m-0 text-shadow wallet-title">No Wallet</h4>
            <div class="text-uppercase btn btn-red mt-1">Connect</div>
          </div>
          <div v-if="address">
            <h4 class="text-white p-0 m-0 text-shadow wallet-title" >Wallet Connected</h4>
            <div class="wallet-address-wrap">
              <div class="wallet-address">{{ address }}</div>
            </div>
          </div>

        </div>
      </div>

      <!-- 首页的头部——左边(其他页面) -->
      <div class="back-btn" @click="goBack" v-if="page != '/'">
        <img style="width: 50px" alt="back-arrow" src="@/assets/header/arrow.png" />
        Back To Home
      </div>

    </div>

    <div class="header-right">

      <div style="text-align:right">
        <div class="bnb-info text-white">0 BNB</div>
        <div style="width: fit-content; float: right;text-align: right;" v-if="page === '/'">
          <div class="text-uppercase btn btn-dark me-4 disabled" style="width:150px">CLAIM</div>
        </div>
      </div>

      <div style="text-align:right">
        <div class="bnbh-info text-white">0 BNBH</div>
        <div style="width: fit-content; float: right;text-align: right;" v-if="page === '/'">
          <div class="text-uppercase btn btn-yellow me-4" style="width:150px">BUY</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { loadBlockchainData } from '../metamask'
// import bnbPng from '@/assets/header/bnbhInfo.png'

export default {
  name:'Header',
  watch:{
    $route(to,from){
      this.page = to.path
    }
  },
  data(){
    return {
      page:this.$route.path,
      isConnected: true,
      address:'0xF8b800376b959B3BBD546B75E56EA672d10744B9',
      // address:"",
    }
  },
  created() {
    loadBlockchainData()
  },
  methods: {
    goBack() {
			this.$router.push({ path: '/'})
    }
  }
  
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  padding: 1rem;
  display: flex;
  justify-content:space-between;
}
.header-left {
  .wallet-status-desktop {
    display: flex;
    padding:0.5rem;
  }
  .wallet-logo {
    width: 117px;
    height: 117px;
    z-index: 999;
  }
  .wallet-connected {
    padding: 1rem;
    .wallet-address-wrap {
      --bs-text-opacity: 1;
      color: rgba(255,255,255,1);
      background-image: url('~@/assets/header/address-bg.png');
      background-size: contain;
      background-repeat: no-repeat;
      width: 500px;
      min-height: 70px;
      margin-left: -45px;
      z-index: -1;
      display: flex;
      align-items: center;
      padding-left: 30px;
      .wallet-address {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        width: 370px;
      }
    }
  }
  .back-btn {
    display: flex;
    height: 100%;
    align-content: center;
    align-items: center;
    cursor: pointer;
    --bs-text-opacity: 1;
    color: rgba(255,255,255,1);
  }
}

.header-right {
  display: flex;
  justify-content: flex-end;
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