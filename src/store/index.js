import Vuex from 'vuex'
import Vue from 'vue'


Vue.use(Vuex)
const state = {
  web3: null, // web3对象
  account: null, // 当前账号
  approved: false, //城市是否授权
  townList: ['0','0','0','0'], //4种城市的对应等级,默认为1级即值为0
  townUpTime:['0','0','0','0'], //4种城市升级时间
  townUpPrice:['0','0','0','0'],// 4种城市升级价格
  heroDatas:[], //myheroes页面拥有的英雄
  heroIdList:[], //myreserve页面的英雄ID
  heroInMyreserve:[], //myreserve页面的所有英雄
  isApprovedForAll: false, //所有英雄是否已经授权
  balance: 0, //余额
  bnbhBalance: 0, //bnbh余额
}

const mutations = {
  SET_WEB3: (state, payload) => {
    state.web3 = payload
  },
  SET_ACCOUNT: (state, payload) => {
    state.account = payload
  },
  SET_APPROVED: (state, payload) => {
    state.approved = payload
  },
  SET_HERODATAS: (state, payload) => {
    state.heroDatas = payload
  },
  SET_TOWNLIST: (state, payload) => {
    state.townList = payload
  },
  SET_TOWNUPTIME: (state, payload) => {
    state.townUpTime = payload
  },
  SET_TOWNUPRICE: (state, payload) => {
    state.townUpPrice = payload
  },
  SET_HEROIDLIST: (state, payload) => {
    state.heroIdList = payload
  },
  SET_HEROINMYRESERVE: (state, payload) => {
    state.heroInMyreserve = payload
  },
  SET_ISAPPROVEDFORALL: (state, payload) => {
    state.isApprovedForAll = payload
  },
  SET_BALANCE: (state, payload) => {
    state.balance = payload
  },
  SET_BNBHBALANCE: (state, payload) => {
    state.bnbhBalance = payload
  },

}

const store = new Vuex.Store({
  state,
  mutations,
})

export default store