<template>
    <div class="myreserve-wrap container-wrap">
    <img class="static-bg" src="@/assets/myreserve/myheroes-bg.jpg" alt="myreserve-background">
    <div class="page-title">My Reserve</div>
    <div class="heroes-card">
      <div class="hero-item"  v-for="item in cardlist" :key="item.key">
        <hero-card :cardInfo="item" />
      </div>
    </div>
  </div>
</template>

<script>
import HeroCard from './components/HeroCard'
import { mapState } from 'vuex'

export default {
  name:'myreserve',
  components: { HeroCard },
  data() {
    let defaultData = []
    for(let i=1; i<=20;i++) {
      const obj = {
        key:i,
        status:"lock",
        title:'',
      }
      defaultData.push(obj)
    }
    return {
      cardlist: defaultData,
    }
  },
  computed:{
    ...mapState([
      'account',
    ]),
  },
  watch: {
    "$store.state.account"(newValue,oldValue) {
      this.initCardData()
    },
  },
  mounted() {
    this.initCardData()
  },
  methods: {
    async initCardData() {
      if (this.account) {}
    }
  }
}
</script>

<style>
.myreserve-wrap {
  width:100%;
}
.heroes-card {
  justify-content: center;
  flex-wrap: wrap;
  display: flex;
  padding: 0 0.5rem;
}
.hero-item {
  background-color: #282334;
  border: 3px solid #000;
  border-radius: 10px;
  padding: 10px;
  width: 15%;
  min-width: 250px;
  margin: 0.5rem;
}
</style>