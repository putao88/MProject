<template>
  <div>
    <div class="hero-card-title">
      <div class="hero-level-info">{{ cardInfo.title }}</div>
    </div>

    <div style="text-align:center" v-if="cardInfo.status === 'open'">
      <img src="@/assets/common/card.png" class="hero-card-img"/>
      <div class="btn btn-dark disabled mt-5">Recruit</div>
    </div>

    <img v-if="cardInfo.status === 'lock'" src="@/assets/common/card_lock.png" class="hero-card-img"/>
    <div v-if="cardInfo.status === 'lock'" class="hero-card-info fs-4">
      {{ cardInfo.content1 }} <br>
      {{ cardInfo.content2 }} <br>
      {{ cardInfo.content3 }}
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroCard",
  props: {
    cardInfo: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style lang="scss" scoped>
.hero-card-title {
  justify-content: space-between;
  display: flex;
}
.hero-level-info {
  font-size: 30px;
  color: #fff;
  height: 40px;
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