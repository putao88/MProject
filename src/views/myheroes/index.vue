<template>
  <div class="myheroes-wrap container-wrap">
    <img class="static-bg" src="@/assets/home/myheroes-bg.jpg" alt="myheroes-background">
    <div class="page-title">My Heroes</div>
    <div class="heroes-card">
      <div class="hero-item"  v-for="item in cardList" :key="item.key">
        <card :cardInfo="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import Card from './components/Card'
import { getHeroesByOwner } from '@/metamask/index'
import { mapState } from 'vuex'

export default {
  name:'myheroes',
  components: { Card },
  data() {
    return {
      initCardList:[
        {key:'1',status:'pending',cityLevel:'to Level 1'},
        {key:'2',status:'pending',cityLevel:'to Level 1'},
        {key:'3',status:'lock',cityLevel:'to Level 2'},
        {key:'4',status:'lock',cityLevel:'to Level 3'},
        {key:'5',status:'lock',cityLevel:'to Level 4'},
      ],
      cardList:[
        {key:'1',status:'pending',cityLevel:'to Level 1'},
        {key:'2',status:'pending',cityLevel:'to Level 1'},
        {key:'3',status:'lock',cityLevel:'to Level 2'},
        {key:'4',status:'lock',cityLevel:'to Level 3'},
        {key:'5',status:'lock',cityLevel:'to Level 4'},
      ],
    }
  },
  computed:{
    ...mapState({
      heroDatas: state => state.heroDatas,
      cityLevel: state => state.cityLevel,
    }),
  },
  watch: {
    "$store.state.heroDatas"(newValue,oldValue) {
      this.initCardData()
    },
  },
  mounted() {
    this.initCardData()
  },
  methods: {
    initCardData() {
      let cardData = []
      for (let i=0; i<this.cardList.length; i++) {
        let obj = this.cardList[i]
        // 渲染英雄
        if (i<this.heroDatas.length) {
          obj = {...obj,...this.heroDatas[i]}
          obj.status = "open"
        }
        // 渲染待召唤卡槽
        if (this.heroDatas.length<= i && i<parseInt(this.cityLevel+1)) {
          obj.status = "pending"
        }
        cardData.push(obj)
      }
      this.cardList = cardData
    },
  },
}
</script>

<style>
.myheroes-wrap {
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
  margin: 0.5rem;
  width: 15%;
  min-width: 250px;
}
</style>