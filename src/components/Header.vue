<template>
  <div class="header">

    <div class="header-left">
      <!-- 首页的头部——左边(首页) -->
      <div class="wallet-status-desktop" v-if="page === '/'">
        <img src="@/assets/header/logo.png" class="wallet-logo" />
        <div class="wallet-connected">
          <h4 class="text-white p-0 m-0 text-shadow wallet-title">No Wallet</h4>
          <div class="text-uppercase btn btn-red mt-1">Connect</div>
        </div>
      </div>

      <!-- 首页的头部——左边(其他页面) -->
      <div class="back-btn" @click="goBack" v-if="page != '/'">
        <img style="width: 50px" alt="back-arrow" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF7WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjAtMDUtMjhUMTA6NTU6NDkrMDk6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTA3LTA1VDA5OjMwOjEzKzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTA3LTA1VDA5OjMwOjEzKzA5OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVmZGFkYzdmLTk0NjMtYmE0OC1iMDkwLTFjNzgyYjRhYWU2ZCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1YTU2OGFjYy0yZjJjLTQyN2QtOTA0Yi0xZjM3M2IzOTdhMGIiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1YTU2OGFjYy0yZjJjLTQyN2QtOTA0Yi0xZjM3M2IzOTdhMGIiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjVhNTY4YWNjLTJmMmMtNDI3ZC05MDRiLTFmMzczYjM5N2EwYiIgc3RFdnQ6d2hlbj0iMjAyMC0wNS0yOFQxMDo1NTo0OSswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjVmZGFkYzdmLTk0NjMtYmE0OC1iMDkwLTFjNzgyYjRhYWU2ZCIgc3RFdnQ6d2hlbj0iMjAyMC0wNy0wNVQwOTozMDoxMyswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrUr7AoAAATqSURBVHic7Z3Lkx5TGIefID5xCcpg1GCTRLms4lJlVAnKZScLdi4rFSsSCxb+AqpYSJFNXFZkhXKpotwKUSU2kp2FsFFRpkjcQybBWLzpkjKZ+br7O93vOf3+nqpZzfQ5v5rz9Nvdp7tPr1hYWEDE5QTvAMIXCRAcCRAcCRAcCRAcCRAcCRAcCRAcCRAcCRAcCRAcCRAcCRAcCRAcCRAcCRAcCRAcCRAcCRAcCRAcCRAcCRAcCRAcCRAcCRAcCRAcCRAcCRAcCRAcCRAcCRAcCZCGq4GdwBHgEPAOcKlropqs0AIRE7MV2LzE764DdvWYpTGqAO2ZBb5j6cEH2AZc30+cdkiAdmwHPgWmx/zdemBj93Hac5J3gMLYALwCTDXY5pyOsiRBFaA+zwMf02zwAb7vIEsyVAHGswF4lXZ78jzwTdo4aVEFWJ7t2F7ftoz/CvyULk56VAGOzyzwGnDehO3MYVcK2aIKsJhnsDP8SQcfYD/wQ4J2OkMV4D/WA28CMwnb/Bk7DGSLKoDxGLCbtIMPdgg4kLjNpESvAGuBt4B1HbV/APijo7aTELkCPAzspbvBB/itw7aTELECTGHH+mt76Gt/D31MRLQKcA92Vt7H4EPmcwAQpwKsxObwb++5Xx0CMuBG4A3gDIe+f3fosxFDPwRsBT7EZ/Ah8zkAGG4FWAe8DaxxzpH1JSAMswI8CHyJ/+DPAwedM4xlSBVgFfA6cKt3kKPMYw+IZs1QBLgZO9E71TvIMRzCJMiaIRwCngLeJ6/BBxPgsHeIcZRcAWaAd4HLvYMsQfZ7P5RbAe4C9pHv4EMBez+UWQFewgTInb+8A9ShJAHWAB8BFzrnqIsESMgM8DlwpneQBhzxDlCHEs4BpoEnKGvwAf7xDlCHEgS4E7jDO8RQKUGAq4CRd4gW/O0doA4lCCA6pAQBdlPINfX/ONE7QB1KEOBl7Gke0QElCDAHPAL84h2kISX8b8sICXyLnQzu8w7SgJXeAepQigAAXwMXATu8g9SkiEm2kgSouPvoT+5IgA7Zgd0T+MI7yDKc7B2gDqUKAHZecAX25G+OFDF5VbIAFQ8Bt5DfE7gjCqgCQxAA4APsnb/3vIMcwyoKqAJDEQDgT+A2ll+4sU9GwCneIcYxJAEqngYuwS4bPRkBpzlnGMsQBQB7738tJoMnuT2pvIihClCxGbgJv7d0Vzv1W5uhCwD2HGG1KETfnO7QZyMiCAB2O3kjcG/P/Xq9lVybKAJUvAicC3zWU39n99RPa6IJALZuzyx2i7lrmi4s3TsRBah4EltHYG+HfegQkDlfYXMGj3fU/hSZXwpGF6DiUeBK7AZTSs5HH4wohj3YLeZtCds8i8znAiTAYh7AvvaV4ksfU9hVR7ZIgOOzCyvfz03YzjRwweRxukMCLM8mbJ3BH1tuv5rM5wIkwHiqT8a80GLbEXBx2jhpkQD1uQ+4geYLQKf48khnSIBm7MRO6p5tsE3WH4yQAO24H7tSmBvzd3uw5euyRR+Pnhx9PDo4W4BrgE+wdYEOY8vXXUbmgw+qAOFRBQiOBAiOBAiOBAiOBAiOBAiOBAiOBAiOBAiOBAiOBAiOBAiOBAiOBAiOBAiOBAiOBAiOBAiOBAiOBAiOBAiOBAiOBAiOBAiOBAiOBAiOBAiOBAiOBAiOBAiOBAjOv2OWkhMnwj/zAAAAAElFTkSuQmCC" />
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
      page:this.$route.path
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
  }
  .wallet-connected {
    padding: 1rem;
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