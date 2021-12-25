import Vuex from 'vuex'
import Vue from 'vue'


Vue.use(Vuex)
const state = {
  web3: null, // web3对象
  account: null, // 当前账号
  approved: null, //是否授权
  townList: [0,0,0,0], //4种城市的对应等级,默认为1级即值为0
  heroDatas:[], //myheroes页面拥有的英雄
  heroIdList:[], //myreserve页面的英雄ID
  heroInMyreserve:[], //myreserve页面的所有英雄
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
  SET_HEROIDLIST: (state, payload) => {
    state.heroIdList = payload
  },
  SET_HEROINMYRESERVE: (state, payload) => {
    state.heroInMyreserve = payload
  },
}

const store = new Vuex.Store({
  state,
  mutations,
})

export default store