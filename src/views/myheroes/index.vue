<template>
  <div class="myheroes-wrap container-wrap">
    <img class="static-bg" src="@/assets/home/myheroes-bg.jpg" alt="myheroes-background">
    <div class="page-title">My Heroes</div>
    <div class="heroes-card">
      <div class="hero-item"  v-for="item in cardList" :key="item.key">
        <card :cardInfo="item" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from './components/Card'
import { getHeroesByOwner } from '@/metamask/index'
import moment from 'moment';
import { mapState } from 'vuex'

export default {
  name:'myheroes',
  components: { Card },
  data() {
    return {
      cardList:[
        {key:'1',status:'recruit',townLevel:'1'},
        {key:'2',status:'recruit',townLevel:'1'},
        {key:'3',status:'lock',townLevel:'2'},
        {key:'4',status:'lock',townLevel:'3'},
        {key:'5',status:'lock',townLevel:'4'},
      ],
    }
  },
  computed:{
    ...mapState([
      'account',
      'heroDatas',
      'townList',
      'townUpTime',
      'isApprovedForAll',
    ]),
  },
  watch: {
    "$store.state.heroDatas"(newValue,oldValue) {
      this.initCardData()
    },
    "$store.state.isApprovedForAll"(newValue,oldValue) {
      this.initCardData()
    },
  },
  mounted() {
    this.initCardData()
  },
  methods: {
    async initCardData() {
      if (this.account) {
        let cardData = []
        // 卡槽总共五种状态：lock:锁定； recruit:等待召唤英雄； expedite:已经召唤英雄，待加速回到战场（冷却期）； open:有英雄，且英雄度过了冷却期，待approved, approved:英雄已经approved
        for (let i=0; i<this.cardList.length; i++) {
          let obj = this.cardList[i]
          // 渲染英雄
          if (i<this.heroDatas.length) {
            obj = {...obj,...this.heroDatas[i]}
            // expedite判断条件：当英雄的arrivalTime不等于0，那么英雄就在冷却期
            obj.status = obj.arrivalTime != '0' ? 'expedite':"open"
            if (this.isApprovedForAll && obj.arrivalTime === '0') obj.status = "approved"
          }
          // 渲染待召唤卡槽
          let level = this.townUpTime[1]  > moment().format('X') ? this.townList[1]*1 : parseInt(this.townList[1]*1+1)
          if (this.heroDatas.length<= i && i<=level) {
            obj.status = "recruit"
          }
          cardData.push(obj)
        }
        this.cardList = cardData
      }
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