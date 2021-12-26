<template>
  <div>
    <div style="height:43px" v-if="cardInfo.status != 'open'"></div>

    <!-- 已召唤英雄渲染 -->
    <HeroCard v-if="cardInfo.status === 'open'||cardInfo.status === 'approved'" :heroInfo="cardInfo" />

    <!-- 渲染英雄底部按钮 -->
    <div v-if="cardInfo.status === 'open'||cardInfo.status === 'approved'">
      <div class="btn-wrap">
        <div class="btn btn-green me-1 w-100" @click="toFight(cardInfo.tokenId)">FIGHT</div>
        <div class="btn btn-red w-100 disabled">SELL</div>
      </div>
      <div>
        <div class="btn btn-red" style="width:100%" v-if="cardInfo.status === 'open'" @click="setApproveallHeroes">Approve BNBH</div>
      </div>
      <div>
        <div class="btn btn-yellow" style="width:100%" v-if="cardInfo.status === 'approved'" @click="moveHeroToMyreserve(cardInfo.tokenId)">Move To Reserve</div>
      </div>
    </div>

    <!-- 已经解锁卡槽，待召唤 -->
    <div style="text-align:center" v-if="cardInfo.status === 'pending'">
      <img src="@/assets/common/card.png" class="hero-card-img"/>
      <div :class="recruitBtnClass" @click="recruit">Recruit</div>
    </div>

    <!-- 待解锁卡槽 -->
    <div v-if="cardInfo.status === 'lock'">
      <img src="@/assets/common/card_lock.png" class="hero-card-img"/>
      <div class="hero-card-info fs-4">
        Upgrade <br>
        Town Inn<br>
        to Level {{ cardInfo.townLevel }}
      </div>
    </div>

  </div>
</template>

<script>
import HeroCard from "@/components/HeroCard";
import { approve } from '@/metamask/index';
import { createNewHero } from '@/metamask/myheroes';
import { setApproveallHeroes, moveHeroToMyreserve } from '@/metamask/myheroes'
import { loadBlockchainData } from '@/metamask/index'
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
    recruitBtnClass: function () {
      return {
        'mt-5': true, 
        'btn': true,
        'disabled': !this.account,
        'btn-dark': !this.account,
        'btn-yellow': this.account,
      }
    },
  },
  methods: {
    async recruit () {
      const isApprove = await approve()
      createNewHero()
    },
    toFight(tokenId) {
       this.$router.push({
        path: 'fight',
        query: { tokenId }
      });
    },
    async setApproveallHeroes() {
      await setApproveallHeroes()
    },
    async moveHeroToMyreserve(heroId) {
      await moveHeroToMyreserve(heroId)
      loadBlockchainData()
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
.btn-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem 0;
}
</style>