<template>
  <div class="upgrade-container">
    <div class="upgrade">
      <div class="title">TOWN UPGRADE</div>
      <div class="close" @click="closeModel()"></div>
      <div class="body">
        <div class="body-img">
          <div class="arrow left-arrow"></div>
          <img class="upgrade-img" src="@/assets/home/house.png" alt />
          <div class="arrow right-arrow"> </div>
        </div>

        <div class="upgrade-des">
          <div class="upgrade-level">LEVEL 2</div>
          <div class="upgrade-xp">+3% BNB rewards</div>
          <div class="upgrade-name" style="height:60px">Bank</div>
          <div>Use 1503.98 BNBH to upgrade town</div>
          <div>The town will be upgraded to next level in 24 hours</div>
          <div class="btn-wrap">
            <div class="btn btn-green upgrade-btn">UPGRADE TOWN</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Upgrade",
  data() {
    return {};
  },
  methods: {
    closeModel() {
      this.$emit("closeModel");
    }
  }
};
</script>

<style lang="scss" scoped>
.upgrade-container {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  .upgrade {
    width: 600px;
    position: relative;
    background-size: 100% 100%;
    width: 600px;
    position: relative;
    background-image: url("~@/assets/home/upgrade-back.png");
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      color: #9296ce;
      font-size: 15px;
    }
    .close {
      cursor: pointer;
      background-image: url("~@/assets/home/close.png");
      background-size: 100% 100%;
      width: 50px;
      height: 53px;
      position: absolute;
      right: 40px;
      top: 30px;
      display: inline-block;
      align-self: center;
      font-weight: 400;
      line-height: 1.5;
      color: #212529;
      text-align: center;
      text-decoration: none;
      vertical-align: middle;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      background-color: transparent;
      border: 1px solid transparent;
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      border-radius: 0.25rem;
    }
    .body {
      justify-content: center;
      flex-wrap: wrap;
      display: flex;
      .body-img {
        display: flex;
        align-items: center;
        justify-content: center;
        .arrow {
          width: 30px;
          height: 45px;
          cursor: pointer;
          min-width: 30px;
        }
        .left-arrow {
          background: url(data:image/png;base64,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);
          background-size: 100% 100%;
        }
        .right-arrow {
          background: url(data:image/png;base64,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);
          background-size: 100% 100%;
        }
        .upgrade-img {
          margin: 0 1rem;
          vertical-align: middle;
          width: 250px;
          aspect-ratio: auto 250 / 250;
          height: 250px;
        }
      }
      .upgrade-des {
        text-align: center;
        color: rgba(255,255,255,1);
        --bs-text-opacity: 1;
        line-height:1.5;
        width:100%;
        padding: 1rem;
        .upgrade-level {
          font-size: calc(1.3rem + .6vw)
        }
        .upgrade-xp {
          font-size: calc(1.3rem + .6vw);
          padding-bottom: 0.5rem;
        }
        .upgrade-name {
          width: 100%;
          padding-top: 10px;
          font-size: 20px;
          text-transform: uppercase;
          background-image: url("~@/assets/market/ribbon.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }
        .btn-wrap {
          justify-content: center;
          display: flex;
        }
        .upgrade-btn {
          text-transform: uppercase;
          margin-top: 1rem;
          padding-top: 1rem;
          padding-bottom: 1rem;
        }
      }
    }
  }
}
</style>