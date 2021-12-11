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

export default {
  name:'myreserve',
  components: { HeroCard },
  data() {
    return {
      cardlist:[
        {key:'1',status:'open',title:''},
        {key:'2',status:'open',title:''},
        {key:'3',status:'lock',title:''},
        {key:'4',status:'lock',title:''},
        {key:'5',status:'lock',title:''},
        {key:'6',status:'lock',title:''},
        {key:'7',status:'lock',title:''},
        {key:'8',status:'lock',title:''},
        {key:'9',status:'lock',title:''},
        {key:'10',status:'lock',title:''},
        {key:'11',status:'lock',title:''},
        {key:'12',status:'lock',title:''},
        {key:'13',status:'lock',title:''},
        {key:'14',status:'lock',title:''},
      ]
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