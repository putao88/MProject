<template>
  <div class="myheroes-wrap container-wrap">
    <img class="static-bg" src="@/assets/home/myheroes-bg.jpg" alt="myheroes-background">
    <div class="page-title">My Heroes</div>
    <div class="heroes-card">
      <div class="hero-item"  v-for="item in cardList" :key="item.key">
        <card :cardInfo="item" @setApproveallHeroes="setApproveallHeroes"/>
      </div>
    </div>
  </div>
</template>

<script>
import Card from './components/Card'
import { getHeroesByOwner } from '@/metamask/index'
import { isApprovedForAll, setApproveallHeroes } from '@/metamask/myheroes'
import { mapState } from 'vuex'

export default {
  name:'myheroes',
  components: { Card },
  data() {
    return {
      cardList:[
        {key:'1',status:'pending',townLevel:'1'},
        {key:'2',status:'pending',townLevel:'1'},
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
    ]),
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
    async initCardData() {
      if (this.account) {
        let cardData = []
        const isApproved = await isApprovedForAll()
        // 卡槽总共四种状态：lock:锁定；pending:等待召唤英雄； pengding:有英雄了待approved, approved:英雄已经approved
        for (let i=0; i<this.cardList.length; i++) {
          let obj = this.cardList[i]
          // 渲染英雄
          if (i<this.heroDatas.length) {
            obj = {...obj,...this.heroDatas[i]}
            obj.status = "open"
            if (isApproved) obj.status = "approved"
          }
          // 渲染待召唤卡槽
          if (this.heroDatas.length<= i && i<=parseInt(this.townList[1]*1+1)) {
            obj.status = "pending"
          }
          cardData.push(obj)
        }
        this.cardList = cardData
      }
    },
    async setApproveallHeroes() {
      const res = await setApproveallHeroes()
      this.initCardData()
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