<template>
  <div class="fight-card">
    <div class="card-body" style="color:#fff">
      <div class="card-info">Tier 1</div>
      <div class="card-info">{{ enemyInfo.name }}</div>
      <div class="card-img">
        <img src="@/assets/fight/card.png" alt />
        <div>
          <p>
            SUCCESS CHANCE
            <span style="color:rgb(10, 253, 10)">{{ enemyInfo.power }}</span>
          </p>
          <p>HP REQUIRED TO FIGHT 200</p>
          <div>
            <img src="@/assets/fight/glod.png" alt />
            <div>
              BASE BNB
              <br />
              {{ enemyInfo.bnb }}
            </div>
            <img src="@/assets/fight/xp.png" alt />
            <div>
              XP
              <br />
              {{ enemyInfo.xp }}
            </div>
          </div>
        </div>
      </div>
      <div :class="fightBtnClass" @click="toFight">FIGHT</div>
    </div>
  </div>
</template>

<script>
import { toFight } from '@/metamask/fight';

export default {
  name: "FightCard",
  props: {
    enemyInfo: {
      type: Object,
      default: {}
    },
    props: {
      heroInfo:[Object,Array]
    },
  },
  data() {
    return {
      isFight:false,
    };
  },
  computed: {
    fightBtnClass: function () {
      return {
        'card-bottom': true, 
        'btn': true,
        'disabled': !this.isFight,
        'btn-yellow': this.isFight,
      }
    }
  },
  mounted() {},
  methods: {
    toFight() {
      const enemyId = this.enemyInfo.tokenId
      const heroId = this.heroInfo.tokenId
      toFight(heroId,enemyId)
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
    display: flex;
    align-items: center;
    flex-direction: column;
    .card-info {
      width: 100%;
      font-size: 1.75rem;
      text-align: center;
      line-height: 1.5;
    }
    .card-img {
      position: relative;
      width: 300px;
      height: 407px;
      margin-bottom: 1.5rem;
      img {
        width: 100%;
        height: 100%;
      }
      > div {
        position: absolute;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        border-radius: 5px;
        bottom: 0;
        padding: 0.5rem 1rem;
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
            margin-right: 0.7rem;
          }
        }
      }
    }
    .card-bottom {
      padding: 0.5rem 3rem 1rem 3rem;
      width: auto;
      margin: auto;
    }
  }
}
</style>