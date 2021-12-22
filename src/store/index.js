import Vuex from 'vuex'
import Vue from 'vue'


Vue.use(Vuex)
const state = {
  web3: null, // web3对象
  account: null, // 当前账号
  balance: null, //bnb余额
  bnbhBalance: 0, //bnb余额
  approved: null, //是否授权
  townLevel: 1, //城市等级
  heroDatas:[], //拥有的英雄
}

const mutations = {
  SET_WEB3: (state, payload) => {
    state.web3 = payload
  },
  SET_ACCOUNT: (state, payload) => {
    state.account = payload
  },
  SET_BALANCE: (state, payload) => {
    state.balance = payload
  },
  SET_BNBH_BALANCE: (state, payload) => {
    state.bnbhBalance = payload
  },
  SET_APPROVED: (state, payload) => {
    state.approved = payload
  },
  SET_HERODATAS: (state, payload) => {
    state.heroDatas = payload
  },
  SET_TOWNLEVEL: (state, payload) => {
    state.townLevel = payload
  },
}

const store = new Vuex.Store({
  state,
  mutations,
})

export default store