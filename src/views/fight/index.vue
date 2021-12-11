<template>
  <div class="fight-wrap container-wrap">
    <img
      class="static-bg"
      src="@/assets/fight/Village.jpg"
      alt="fight-background"
    />
    <div class="page-title">Chapter 1: Enemy at the gates</div>
    <div class="fight-body">
      <div class="fight-container">
        <div class="fight-tab">
          <div @click="switchTo" :class="{ active: active }">
            <img src="@/assets/fight/icon-tab1.png" alt="" />
            <span>Basic Enemy</span>
          </div>
          <div @click="switchTo" :class="{ active: !active }">
            <img src="@/assets/fight/icon-tab2.png" alt="" />
            <span>Boss Fight</span>
          </div>
        </div>
        <div v-show="active" class="fight-block-one">
          <div><FightCard /></div>
          <div><FightCard /></div>
        </div>
        <div v-show="!active" class="fight-block-two">
          <p>Boss of Chapter 1:</p>
          <div>
            <div class="img">
              <FightCard :switchOne="false" />
            </div>
            <div class="info">
              <p class="title">BOSS NAME: <span></span></p>
              <div class="description">
                <p>DESCRIPTION:</p>
                <p class="des-info">
                  Your squad spots ZANGRIEF at the stronghold gates charging
                  towards them. Defeat Him in order to claim the stronghold once
                  and for all!
                </p>
              </div>
              <div class="xp-info">
                <p>SUCCESS CHANCE <span>67%</span></p>
                <p>HP REQUIRED TO FIGHT</p>
                <div>
                  <img src="@/assets/fight/glod.png" alt="" />
                  <div>BASE BNB<br />0.0028215</div>
                  <img src="@/assets/fight/xp.png" alt="" />
                  <div>XP<br />110</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FightCard from "@/components/FightCard";
export default {
  name: "fight",
  components: { FightCard },
  data() {
    return {
      active: true,
    };
  },
  methods: {
    switchTo() {
      this.active = !this.active;
    },
  },
};
</script>

<style lang='scss' scoped>
.fight-body {
  width: 100%;
  .fight-container {
    max-width: 850px;
    min-height: 620px;
    margin: auto;
    .fight-tab {
      .active {
        background: rgba(70, 64, 85, 0.9686274509803922);
        border-radius: 10px;
      }
      border-radius: 10px;
      border: 1px solid #000;
      width: 380px;
      display: flex;
      background: rgba(40, 35, 52, 0.9686274509803922);
      > div {
        display: flex !important;
        align-items: center;
        color: #fff;
        cursor: pointer;
        padding: 10px 22px;
        width: 50%;
        img {
          width: 20px;
          height: 20px;
          margin-right: 10px;
        }
        &:hover {
          background: rgba(70, 64, 85, 0.9686274509803922);
          border-radius: 10px;
        }
      }
    }
    .fight-block-one {
      display: flex;
      background-color: rgba(40, 35, 52, 0.8313725490196079);
      border: 3px solid #000;
      border-radius: 10px;

      padding: 1rem;
      justify-content: space-around;
      flex-wrap: nowrap;
      padding: 16px;
      > div {
        width: 46%;
      }
    }
    .fight-block-two {
      background-color: rgba(40, 35, 52, 0.8313725490196079);
      border: 3px solid #000;
      border-radius: 10px;
      padding: 3rem 1rem;
      color: #ffffff;
      > p {
        font-size: 1.75rem;
        line-height: 50px;
        text-align: center;
      }
      > div {
        display: flex;
        justify-content: space-around;
        align-items: center;
        .info {
          padding: 24px;
          text-align: left;
          background: rgba(0, 0, 0, 0.76);
          border-radius: 5% 5%;
          width: 355px;
          height: auto;
          font-size: 1rem;
          line-height: 24px;
          > p {
            &:nth-child(1) {
              margin-bottom: 16px;
            }
          }
          .description {
            margin-bottom: 1rem;
          }
          .xp-info {
            margin: auto;
            height: 120px;
            background-color: rgba(0, 0, 0, 0.6);
            border-radius: 5px;
            padding: 8px 14px;
            font-size: 1rem;
            line-height: 24px;
            > p {
              margin-bottom: 0.25rem;
            }
            > div {
              height: 48px;
              display: flex;
              align-items: center;
              img {
                width: 40px;
                height: 40px;
                margin-right: 0.5rem;
              }
              > div {
                margin-right: 1rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>