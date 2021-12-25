<template>
  <div class="header">

    <div class="header-left">
      <!-- 首页的头部——左边(首页) -->
      <div class="wallet-status-desktop" v-if="page === '/'">
        <img src="@/assets/header/logo.png" class="wallet-logo" />
        <div class="wallet-connected">
          <div v-if="!account">
            <h4 class="text-white p-0 m-0 text-shadow wallet-title">No Wallet</h4>
            <div class="text-uppercase btn btn-red mt-1" @click="openMetamask">Connect</div>
          </div>
          <div v-if="account">
            <h4 class="text-white p-0 m-0 text-shadow wallet-title" >Wallet Connected</h4>
            <div class="wallet-address-wrap">
              <div class="wallet-address">{{ account }}</div>
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
        <div class="bnb-info text-white">{{ finalBalance }} BNB</div>
        <div style="width: fit-content; float: right;text-align: right;" v-if="page === '/'">
          <div :class="claimBtnClass" style="width:150px">CLAIM</div>
          <div v-if="timeRemain" style="color:#fff;text-align:center">{{ timeRemain }}</div>
        </div>
      </div>

      <div style="text-align:right">
        <div class="bnbh-info text-white">{{ bnbhBalance }} BNBH</div>
        <div style="width: fit-content; float: right;text-align: right;" v-if="page === '/'">
          <div class="text-uppercase btn btn-yellow me-4" style="width:150px">BUY</div>
        </div>
      </div>

    </div>

    <el-dialog title="" :visible.sync="showMetamask"
      :modal="false" 
      :show-close="false" 
      custom-class="metamaskModal" 
      >
      <el-card>
        <div @click="connectMetamask" style="width:100%,height:100%">
          <div class="web3modal-provider-container">
            <div class="web3modal-provider-icon">
              <img src="@/assets/header/metamask.svg" />
            </div>
            <div class="web3modal-provider-name">MetaMask</div>
            <div class="web3modal-provider-description">Connect to your MetaMask Wallet</div>
          </div>
        </div>
      </el-card>
    </el-dialog>
  </div>
</template>

<script>
import { loadBlockchainData, unLockTime, getBalance, getBnbhBalance } from '../metamask'
import { mapState } from 'vuex'
import { changeSecondsToHours, taxFee } from '@/utils'
import moment from 'moment';

export default {
  name:'Header',
  data(){
    return {
      page:this.$route.path,
      isConnected: true,
      showMetamask: false,
      finalBalance:0 ,//最终奖励金额
      timeRemain:0, //剩余解锁时间
      bnbhBalance: 0,//bnbh余额
    }
  },
  watch:{
    $route(to,from){
      this.page = to.path
    },
    "$store.state.account"(newValue,oldValue) {
      this.initData()
    },
  },
  computed: {
    ...mapState([
      'account',
    ]),
    claimBtnClass: function () {
      return {
        'text-uppercase': true, 
        'btn': true,
        'me-4': true,
        'disabled': !(this.account && !this.timeRemain),
        'btn-dark': true,
        'btn-yellow': this.account && !this.timeRemain,
      }
    },
  },
  created() {
    this.openMetamask()
  },
  methods: {
    async initData() {
      // 判断当前账号是否连接，如果已经连接，则需要连接合约，查询数据
      if(this.account) {
        // 获取首次解锁时间
        const openTime = await unLockTime()
        // 获取余额
        const balance = await getBalance()
        const now = moment().format('X')
        // 计算锁定时间和当前时间差值
        const diffTime = openTime > now ? changeSecondsToHours(openTime - now):0
        this.timeRemain = diffTime
        // 当前时间大于解锁时间时，按钮亮起，bnb余额需要通过税率计算得出，否值直接显示接口获取余额
        if (this.account && !diffTime) {
          const time =  moment().format('X') - openTime
          this.finalBalance = balance*(100 - taxFee(time))/ 100
        } else {
          this.finalBalance = balance
        }
        this.bnbhBalance = await getBnbhBalance()
      }
    },
    goBack() {
			this.$router.push({ path: '/'})
    },
    openMetamask() {
      this.showMetamask = true
    },
    connectMetamask() {
      loadBlockchainData()
      this.showMetamask = false
    }
  }
  
};
</script>
<style>
.metamaskModal {
  width: 500px;
  cursor: pointer;
}
.metamaskModal .el-dialog__header {
  display:none;
}
.metamaskModal .el-dialog__body {
  padding: 0px;
}
</style>

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
.web3modal-provider-container {
    transition: background-color 0.2s ease-in-out 0s;
    width: 100%;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    background-color: rgb(255, 255, 255);
    border-radius: 12px;
    padding: 24px 16px;
    .web3modal-provider-icon {
      width: 45px;
      height: 45px;
      display: flex;
      border-radius: 50%;
      overflow: visible;
      box-shadow: none;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .web3modal-provider-name {
      text-align: center;
      width: 100%;
      font-size: 24px;
      font-weight: 700;
      margin-top: 0.5em;
      color: rgb(12, 12, 13);
      font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
      -webkit-font-smoothing: antialiased;
    }
    .web3modal-provider-description {
      text-align: center;
      width: 100%;
      font-size: 18px;
      margin: 0.333em 0px;
      color: rgb(169, 169, 188);
      font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
      -webkit-font-smoothing: antialiased;
    }
}
</style>