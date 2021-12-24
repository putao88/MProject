<template>
  <div>

    <div class="hero-card-title" v-if="cardInfo.status === 'open'">
      <div class="hero-level-info">LV.{{ cardInfo.level }}</div>
      <div class="hero-card-title-right">
        <div class="hero-xp-info">
           XP: {{ cardInfo.xp }}/{{ cardInfo.level*1000+999 }}
        </div>
        <div :class="unlockBtnClass" @click="unclock">
          Unlock LV.{{ cardInfo.level*1+1 }}
        </div>
      </div>
    </div>
    <div style="height:43px" v-if="cardInfo.status != 'open'"></div>

    <!-- 已召唤英雄渲染 -->
    <HeroCard v-if="cardInfo.status === 'open'" :heroInfo="cardInfo" />
    <!-- 已经解锁卡槽，待召唤 -->
    <div style="text-align:center" v-if="cardInfo.status === 'pending'">
      <img src="@/assets/common/card.png" class="hero-card-img"/>
      <div :class="recruitBtnClass" @click="recruit">Recruit</div>
    </div>

    <!-- 待解锁卡槽 -->
    <img v-if="cardInfo.status === 'lock'" src="@/assets/common/card_lock.png" class="hero-card-img"/>
    <div v-if="cardInfo.status === 'lock'" class="hero-card-info fs-4">
      Upgrade <br>
      Town Inn<br>
      to Level {{ cardInfo.townLevel }}
    </div>

  </div>
</template>

<script>
import HeroCard from "./HeroCard";
import { approve, createNewHero } from '@/metamask/index';
import { mapState } from 'vuex'
export default {
  name: "Card",
  components: { HeroCard },
  props: {
    cardInfo: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {}
  },
  computed: {
    ...mapState([
      'account',
      'bnbhBalance'
    ]),
    recruitBtnClass: function () {
      return {
        'mt-5': true, 
        'btn': true,
        'disabled': !this.account,
        'btn-dark': !this.account,
        'btn-yellow': this.account,
      }
    },
    unlockBtnClass: function () {
      const isYellow = this.cardInfo.xp > (this.cardInfo.level*1000+999)
      return {
        'unlock-btn': true, 
        'btn': true,
        'disabled': !isYellow,
        'btn-dark': !isYellow,
        'btn-yellow': isYellow,
      }
    }
  },
  methods: {
    async recruit () {
      const isApprove = await approve()
      createNewHero()
    },
    unclock() {},
  },
};
</script>

<style lang="scss" scoped>
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

.hero-card-img {
  width: 100%;
  margin: auto;
  padding: 20px 7px;
}
.hero-card-info {
  width: 70%;
  font-size: 30px;
  line-height:36px;
  margin: auto;
  text-align: center;
  --bs-text-opacity: 1;
  color: rgba(255,255,255,1);
}
</style>