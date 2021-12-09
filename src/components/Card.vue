<template>
  <div class="card">
    <div class="card-top">
      <img src="https://play.bnbheroes.io/cards/11.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
}
</script>

<style lang="scss" scoped>
.card {
  background-color: #282334;
  border: 3px solid #000;
  border-radius: 10px;
  padding: 5px 10px;
  width: 15%;
  min-width: 250px;
  .card-top {
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>