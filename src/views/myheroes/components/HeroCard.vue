<template>
  <div class="hero-card-container">
    <img class="card-img" src="https://play.bnbheroes.io/cards/11.png" alt="" />
    <div class="card-id">NFT# {{ heroInfo.tokenId }}</div>
    <div class="card-info">
      <div class="progress">
        <el-progress :text-inside="true" :stroke-width="16" :percentage="parseInt(heroInfo.hp)/10" status="exception"></el-progress>
        <div class="hp-progress-detail">HP: {{heroInfo.hp}}/1000</div>
      </div>
      <div class="description">
        <div>
          <img
            src="@/assets/market/sword.png"
            height="30px"
            alt="attack"
          />  
          <span>{{ heroInfo.attack }}</span>
        </div>
        <div>
          <img
            src="@/assets/market/shield.png"
            height="30px"
            alt="armor"
          />
          <span>{{ heroInfo.armor }}</span>
        </div>
        <div>
          <img
            src="@/assets/market/shose.png"
            height="30px"
            alt="attack"
          />
          <span>{{ heroInfo.speed }}</span>
        </div>
      </div>
      <div>
        <div class="btn btn-green me-1 w-100">FIGHT</div>
        <div class="btn btn-red w-100">SELL</div>
      </div>
      <div class="approve">Approve BNBH</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroCard",
  props: {
    heroInfo: {
      type: Object,
      default: {}
    }
  },
};
</script>

<style lang="scss" scoped>
.hero-card-container {
  .card-img {
    width: 100%;
    margin: auto;
    padding: 10px 0;
  }
  .card-id {
    background-size: 100% 100%;
    height: 40px;
    padding-top: 8px;
    text-align: center;
    color: #ffffff;
    background-image: url('~@/assets/market/ribbon.png');
  }
  .card-info {
    font-size: 1rem;
    margin-top: 0.25rem;
    color: #ffffff;
    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0.5rem 0;
    }
    .progress {
      flex-wrap: wrap;
      margin: 10px 0;
      height: 16px;
      color: #000000;
      position: relative;
      .el-progress {
        width: 100%;
        >>> .el-progress-bar__outer{
              border-radius: 0.25rem;
        }
        >>> .el-progress-bar__innerText {
          display: none;
        }
        >>> .el-progress-bar__inner {
          border-radius: initial;
          background-image: url('~@/assets/market/progress.png');
          background-size:100% 100%;
          background-repeat:no-repeat;
        }
      }
      div {
        position: absolute;
        width: 100%;
        text-align: center;
        top: 0;
      }
    }
      .description {
        text-align: center;
        padding: 0.5rem 0;
        > div {
          width: 54px;
        }
      }
      .approve {
        background-size: 100% 100%;
        background-repeat: no-repeat;
        padding: 5px 20px 8px;
        justify-content: space-around;
        background-image: url('~@/assets/market/approve.png');
        text-transform: uppercase;
        color: #680b0c;
        margin-top: 0.5rem;
      }
  }
}
</style>