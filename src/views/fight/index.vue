<template>
  <div class="fight-wrap container-wrap">
    <img class="static-bg" src="@/assets/fight/Village.jpg" alt="fight-background" />
    <div class="page-title">Chapter 1: Enemy at the gates</div>
    <div class="fight-body">
      <div class="fight-container">
        <div class="fight-tab">
          <div @click="switchTo" :class="{ active: active }">
            <img src="@/assets/fight/icon-tab1.png" alt />
            <span>Basic Enemy</span>
          </div>
          <div @click="switchTo" :class="{ active: !active }">
            <img src="@/assets/fight/icon-tab2.png" alt />
            <span>Boss Fight</span>
          </div>
        </div>
        <div v-show="active" class="fight-block-one">
          <div>
            <FightCard :dataSource="tireList1" />
          </div>
          <div>
            <FightCard :dataSource="tireList2" />
          </div>
        </div>
        <div v-show="!active" class="fight-block-two">
          <BossFight  :dataSource="bossList" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FightCard from "./components/FightCard";
import BossFight from "./components/BossFight";
export default {
  name: "fight",
  components: { FightCard, BossFight },
  data() {
    return {
      active: true,
      tireList1:[
        {name:'Red Skull 1',imgurl:'@/assets/fight/card.png',power:'63%',bnbInfo:0.0028200, xpInfo: 100 },
        {name:'Red Skull 1',imgurl:'@/assets/fight/card.png',power:'67%',bnbInfo:0.0028215, xpInfo: 110 },
        {name:'Red Skull 1',imgurl:'@/assets/fight/card.png',power:'70%',bnbInfo:0.00329175, xpInfo: 200 },
      ],
      tireList2:[
                {name:'Red Skull 1',imgurl:'@/assets/fight/card.png',power:'63%',bnbInfo:0.0028200, xpInfo: 100 },
        {name:'Red Skull 1',imgurl:'@/assets/fight/card.png',power:'67%',bnbInfo:0.0028215, xpInfo: 110 },
        {name:'Red Skull 1',imgurl:'@/assets/fight/card.png',power:'70%',bnbInfo:0.00329175, xpInfo: 200 },
      ],
      bossList:[
        {name:'Red Skull 1',imgurl:'@/assets/fight/card.png',power:'63%',bnbInfo:0.0028200, xpInfo: 100, description:'Your squad spots ZANGRIEF at the stronghold gates chargingtowards them. Defeat Him in order to claim the stronghold once and for all!' },
        {name:'Red Skull 1',imgurl:'@/assets/fight/card.png',power:'0%',bnbInfo:0.0028200, xpInfo: 80, description:'Your squad spots ZANGRIEF at the stronghold gates chargingtowards them. Defeat Him in order to claim the stronghold once and for all!' },
        {name:'Red Skull 1',imgurl:'@/assets/fight/card.png',power:'72%',bnbInfo:0.0028200, xpInfo: 10, description:'Your squad spots ZANGRIEF at the stronghold gates chargingtowards them. Defeat Him in order to claim the stronghold once and for all!' },
        {name:'Red Skull 1',imgurl:'@/assets/fight/card.png',power:'100%',bnbInfo:0.0028200, xpInfo: 50, description:'Your squad spots ZANGRIEF at the stronghold gates chargingtowards them. Defeat Him in order to claim the stronghold once and for all!' },
      ],
    };
  },
  methods: {
    switchTo() {
      this.active = !this.active;
    }
  }
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
    }
  }
}
</style>