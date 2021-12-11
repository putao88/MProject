<template>
  <div>
    <div class="hero-card-title">
      <div class="hero-level-info">{{ cardInfo.title }}</div>
    </div>
    <div style="text-align:center">
      <img src="@/assets/common/card.png" class="hero-card-img"/>
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
</style>