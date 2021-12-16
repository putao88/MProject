<template>
  <div class="myheroes-wrap container-wrap">
    <img class="static-bg" src="@/assets/home/myheroes-bg.jpg" alt="myheroes-background">
    <div class="page-title">My Heroes</div>
    <div class="heroes-card">
      <div class="hero-item"  v-for="item in cardlist" :key="item.key">
        <card :cardInfo="item" @createCallback="createCallback"/>
      </div>
    </div>
  </div>
</template>

<script>
import Card from './components/Card'
import { getHeroesByOwner } from '@/metamask/index'

export default {
  name:'myheroes',
  components: { Card },
  data() {
    return {
      cardlist:[
        {key:'1',status:'open',xp:'6200',level:6,title:'',cityLevel:'to Level 1'},
        {key:'2',status:'pending',title:'',cityLevel:'to Level 1'},
        {key:'3',status:'lock',title:'',cityLevel:'to Level 2'},
        {key:'4',status:'lock',title:'',cityLevel:'to Level 3'},
        {key:'5',status:'lock',title:'',cityLevel:'to Level 4'},
      ]
    }
  },
  mounted() {
    // this.getHeroList()
  },
  methods: {
    createCallback() {
      this.getHeroList()
    },
    async getHeroList() {
      const res = await getHeroesByOwner()
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