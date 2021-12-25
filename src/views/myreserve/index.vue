<template>
    <div class="myreserve-wrap container-wrap">
    <img class="static-bg" src="@/assets/myreserve/myheroes-bg.jpg" alt="myreserve-background">
    <div class="page-title">My Reserve</div>
    <div class="heroes-card">
      <div class="hero-item"  v-for="item in cardList" :key="item.key">
        <card :cardInfo="item" @initData="initData"/>
      </div>
    </div>
  </div>
</template>

<script>
import Card from './components/Card'
import { mapState } from 'vuex'
import { getAllHeroesInMyserve } from '@/metamask/myreserve'

export default {
  name:'myreserve',
  components: { Card },
  data() {
    let defaultData = []
    for(let i=1; i<=20;i++) {
      const obj = {
        key:i,
        status:"pending",
        title:'',
      }
      defaultData.push(obj)
    }
    return {
      cardList: defaultData,
    }
  },
  computed:{
    ...mapState([
      'account',
      'heroDatas',
    ]),
  },
  watch: {
    "$store.state.account"(newValue,oldValue) {
      this.initData()
    },
  },
  mounted() {
    this.initData()
  },
  methods: {
    async initData() {
      if (this.account) {
        const heroes = await getAllHeroesInMyserve()
        let newCardList = []
        for (let i=0; i<this.cardList.length; i++) {
          let card = this.cardList[i]
          if (i<heroes.length) {
            card = {...heroes[i],...this.cardList[i]}
            card.status = 'open'
          }
          newCardList.push(card)
        }
        this.cardList = newCardList
      }
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