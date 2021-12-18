<template>
  <div class="hero-item" style="min-width:300px;background-color: rgba(40, 35, 52, 0.83);height: 620px;">
    <div class="hero-card-title">
      <div class="hero-level-info">LV.{{ heroInfo.level }}</div>
      <div class="hero-card-title-right">
        <div class="hero-xp-info">
            XP: {{ heroInfo.xp }}/{{ heroInfo.level*1000+999 }}
        </div>
        <div class="btn btn-dark unlock-btn disabled">
          Unlock LV.{{ heroInfo.level*1+1 }}
        </div>
      </div>
    </div>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroCard",
  props: {
    heroInfo:{
      default: {}
    }
  },
};
</script>

<style lang="scss" scoped>
.hero-item {
  background-color: #282334;
  border: 3px solid #000;
  border-radius: 10px;
  padding: 10px;
  margin: 0.5rem;
  width: 15%;
  min-width: 250px;
  .hero-card-title {
    justify-content: space-between;
    display: flex;
    .hero-level-info {
      font-size: 30px;
      color: #fff;
      height: 40px;
    }
    .hero-card-title-right {
      align-items: center;
      flex-direction: column;
      display: flex;
      .hero-xp-info {
        line-height: 1.5;
        font-size: 14px;
        color: #b7b1b5;
      }
    }
  }
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
}

</style>