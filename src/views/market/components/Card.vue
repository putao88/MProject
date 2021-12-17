<template>
  <div class="card">
    <div class="card-top">
      <img src="https://play.bnbheroes.io/cards/11.png" alt="" />
      <div class="water-mark">SOLD</div>
    </div>
    <div class="card-id">NFT# 46285</div>
    <div class="card-info">
      <div class="seller">
        <div>Seller:</div>
        <div></div>
      </div>
      <div class="price">
        <div class="">Price:</div>
        <div class="">SOLD</div>
      </div>
      <div class="unlocked">
        <div class="">Unlocked LV:</div>
        <div class="">4</div>
      </div>
      <div class="lv">
        <div class="">LV. 4</div>
        <div class="">XP: 4199</div>
      </div>
      <div class="progress">
        <el-progress :text-inside="true" :stroke-width="16" :percentage="50" status="exception"></el-progress>
        <div class="hp-progress-detail">HP: 500/1000</div>
      </div>
      <div class="description">
        <div>
          <img
            src="@/assets/market/sword.png"
            height="30px"
            alt="attack"
          />  
          <span>530</span>
        </div>
        <div>
          <img
            src="@/assets/market/shield.png"
            height="30px"
            alt="armor"
          />
          <span>630</span>
        </div>
        <div>
          <img
            src="@/assets/market/shose.png"
            height="30px"
            alt="attack"
          />
          <span>430</span>
        </div>
      </div>
      <div class="approve">Approve BNBH</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style lang="scss" scoped>
.card {
  background-color: #282334;
  border: 3px solid #000;
  border-radius: 10px;
  padding: 5px 10px;
  width: 15%;
  min-width: 250px;
  // box-sizing: content-box;
  font-weight: bold;
  font-family: "God Of War", serif;
  .card-top {
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    .water-mark {
      width: 250px;
      text-align: center;
      top: 50%;
      font-size: 70px;
      letter-spacing: 10px;
      position: absolute;
      color: #760d0d;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-45deg);
    }
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