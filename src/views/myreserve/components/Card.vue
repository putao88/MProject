<template>
  <div>
    <div style="height:43px" v-if="cardInfo.status != 'open'"></div>

    <!-- 英雄渲染 -->
    <HeroCard v-if="cardInfo.status === 'open'" :heroInfo="cardInfo" />

    <div v-if="cardInfo.status === 'open'">
      <div class="btn btn-yellow" style="width:100%" @click="moveToSolt(cardInfo.tokenId)">Move To Solt</div>
    </div>

    <!-- 未渲染英雄卡片 -->
    <div style="text-align:center" v-if="cardInfo.status === 'pending'">
      <img src="@/assets/common/card.png" class="hero-card-img"/>
    </div>

  </div>
</template>

<script>
import HeroCard from "@/components/HeroCard";
import { approve } from '@/metamask/index';
import { moveToSolt } from '@/metamask/myreserve'
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
    ]),
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
    async moveToSolt() {
      await moveToSolt(heroId)
      this.$emit('initData')
    }
  },
};
</script>

<style lang="scss" scoped>
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