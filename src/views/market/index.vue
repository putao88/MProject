<template>
  <div class="market">
    <Card/>
  </div>
</template>

<script>
import Card from '@/components/Card'
export default {
  name: 'Market',
  components: {Card}
}
</script>

<style lang="scss" scoped>
.market {
  height: 100%;
  width: 100%;
  background-color: #ffffff;
}
</style>