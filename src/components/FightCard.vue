<template>
  <div class="fight-card">
    <div class="arrow">
        <img src="@/assets/fight/left-arrow.png" alt="">
    </div>
    <div class="card-body">
      <div v-if="switchOne" class="card-info">Tier 1</div>
      <div v-if="switchOne" class="card-info">Red Skull 1</div>
      <div class="card-img">
        <img src="@/assets/fight/card.png" alt="" />
        <div  v-if="switchOne">
            <p>SUCCESS CHANCE <span>67%</span></p>
            <p>HP REQUIRED TO FIGHT</p>
            <div>
                <img src="@/assets/fight/glod.png" alt="">
                <div>
                   BASE BNB<br/>0.0028215
                </div>
                <img src="@/assets/fight/xp.png" alt="">
                <div>
                    XP<br/>110
                </div>
            </div>
        </div>
      </div>
      <div v-if="switchOne" class="card-bottom">FIGHT</div>
    </div>
    <div class="arrow">
        <img src="@/assets/fight/right-arrow.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "FightCard",
  props: {
    switchOne: {
      type: Boolean,
      default: true,
    }
  }
};
</script>

<style lang="scss" scoped>
.fight-card {
  width: 100%;
  display: flex;
  align-items: center;
  .arrow {
      cursor: pointer;
  }
  .card-body {
    width: 100%;
    .card-info {
      width: 100%;
      font-size: 1.75rem;
      text-align: center;
      line-height: 42px;
    }
    .card-img {
        position: relative;
      width: 300px;
      height: 407px;
      margin: 15px auto;
      img {
          width: 100%;
          height: 100%;
      }
      > div {
          position: absolute;
          width: 260px;
          height: 120px;
          background-color: rgba(0,0,0,.6);
    border-radius: 5px;
    bottom: 0;
    left: 20px;
    padding: 8px 14px;
            font-size: 1rem;
            line-height: 24px;
        p {
            margin-bottom: 0.25rem;
        }
        > div {
            height: 48px;
            display: flex;
            align-items: center;
            img {
                width: 40px;
                height: 40px;
                margin-right: 0.4rem;


            }
            > div {
                margin-right: .7rem;
            }
        }
      }
    }
    .card-bottom {
      background-image: url("~@/assets/fight/buttom.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      width: 160px;
      margin: auto;
      cursor: pointer;
      border-color: #212529;
      opacity: 0.65;
      text-align: center;
      line-height: 48px;
    }
    div {
      color: #ffffff;
    }
  }
}
</style>