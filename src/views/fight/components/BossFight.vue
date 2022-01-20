<template>
  <div>
    <p class="boss-fight-p">Boss of Chapter 1: {{curItem.name }}</p>
    <div class="boss-fight-div">
      <div class="img">
        <div class="fight-card">
          <div class="arrow" @click="previous">
            <img src="@/assets/fight/left-arrow.png" alt />
          </div>
          <div class="card-body" v-if="bossList.length">
            <div class="card-img">
              <img src="@/assets/fight/boss2.png" alt />
            </div>
          </div>
          <div class="arrow" @click="next">
            <img src="@/assets/fight/right-arrow.png" alt />
          </div>
        </div>
      </div>
      <div class="info">
        <p class="title">
          BOSS NAME:
          <span>{{ curItem.name }}</span>
        </p>
        <div class="description">
          <p>DESCRIPTION:</p>
          <p class="des-info">
            {{ curItem.description }}
          </p>
        </div>
        <div class="enemy-detail">
          <div class="xp-info">
            <p>
              SUCCESS CHANCE
              <span span style="color:rgb(10, 253, 10)">{{ curItem.power }}</span>
            </p>
            <p>HP REQUIRED TO FIGHT</p>
            <div>
              <img src="@/assets/fight/glod.png" alt />
              <div>
                BASE BNB
                <br />{{ curItem.bnb }}
              </div>
              <img src="@/assets/fight/xp.png" alt />
              <div>
                XP
                <br />{{ curItem.xp }}
              </div>
            </div>
          </div>
          <div :class="fightBtnClass" @click="toFight">FIGHT</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toFight } from '@/metamask/fight';

export default {
  name: "BossFight",
  props: {
    bossList: {
      type: Array,
      default: true
    },
    heroInfo:[Object,Array]
  },
  data() {
    return {
      curItem: {},
      curIndex: 0,
    };
  },
  computed: {
    fightBtnClass: function () {
       // 当英雄的血量大于200时，就可以和boss打仗
      const isFight = this.heroInfo && this.heroInfo.hp && this.heroInfo.hp >= 400
      return {
        'fight-btn': true, 
        'btn': true,
        'btn-yellow': true,
        'disabled': !isFight,
      }
    }
  },
  mounted() {
    if (this.bossList.length) {
      this.curItem = this.bossList[this.curIndex];
    }
  },
  methods: {
    toFight() {
      const enemyId = this.bossList[this.curIndex].tokenId
      const heroId = this.heroInfo.tokenId
      toFight(heroId,enemyId)
    },
    // 上一张卡片
    previous() {
      let newIndex = 0
      if (!this.bossList.length) return
      if (this.curIndex === 0) {
        newIndex = this.bossList.length - 1
      } else {
        newIndex = this.curIndex - 1
      }
      this.curIndex = newIndex
      this.curItem = this.bossList[newIndex]
    },
    // 下一张
    next() {
      let newIndex = 0
      if (!this.bossList.length) return
      if ((this.curIndex + 1) === this.bossList.length) {
        newIndex = 0
      } else {
        newIndex = this.curIndex + 1
      }
      this.curIndex = newIndex
      this.curItem = this.bossList[newIndex]
    }
  }
};
</script>

<style lang="scss" scoped>
.fight-card {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1.5rem;
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
        height: 120px;
        background-color: rgba(0, 0, 0, 0.6);
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
            margin-right: 0.7rem;
          }
        }
      }
    }
    div {
      color: #ffffff;
    }
  }
}
.boss-fight-p {
  font-size: 1.75rem;
  line-height: 50px;
  text-align: center;
}
.boss-fight-div {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.info {
  margin: 1.5rem;
  padding: 1.5rem;
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
  .enemy-detail {
    display: flex;;
    align-items: center;
    justify-content: center;
    flex-direction: column
  }
  .xp-info {
    margin: auto;
    height: 120px;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 5px;
    padding: 8px 14px;
    font-size: 1rem;
    line-height: 24px;
    margin-bottom: 0.5rem;
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
  .fight-btn {
    padding: 0.5rem 3rem 1rem 3rem; 
  }

}
</style>