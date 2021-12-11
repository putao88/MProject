<template>
  <div class="upgrade-wrap">
    <div class="title">TOWN UPGRADE</div>
    <div class="close" @click="closeModel()"></div>
    <div class="body">
      <div class="body-img">
        <div class="arrow">
          <img src="@/assets/fight/left-arrow.png" alt="" />
        </div>
        <div>
          <img src="@/assets/home/house.png" alt="" />
        </div>
        <div class="arrow">
          <img src="@/assets/fight/right-arrow.png" alt="" />
        </div>
      </div>
      <p>LEVEL 2</p>
      <p>+3% BNB rewards</p>
      <div class="bottom">Bank</div>
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
          this.$emit("closeModel")
      } 
  },
};
</script>

<style lang="scss" scoped>
.upgrade-wrap {
  padding: 3rem;
  width: 100%;
  height: 100%;
  background-image: url("~@/assets/home/upgrade-back.png");
  background-size: 100% 100%;
  .title {
    color: #9296ce;
    font-size: 15px;
    text-align: center;
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
    color: #ffffff;
    font-size: 1.75rem;
    text-align: center;
    line-height: 42px;
    .body-img {
        display: flex;
        align-items: center;
        justify-content: space-around;
        div {
            &:nth-child(2) {
                img {
                    width: 250px;
                    height: 250px;
                }
            }
        }
    }
    .bottom {
        background-image: url('~@/assets/market/ribbon.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        display: inline-block;
        min-width: 270px;
        padding-bottom: 10px;
        margin-top: 10px;
    }
  }
}
</style>