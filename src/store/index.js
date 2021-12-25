import Vuex from 'vuex'
import Vue from 'vue'


Vue.use(Vuex)
const state = {
  web3: null, // web3对象
  account: null, // 当前账号
  approved: null, //是否授权
  townList: [0,0,0,0], //4种城市的对应等级,默认为1级即值为0
  heroDatas:[], //拥有的英雄
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
}

const store = new Vuex.Store({
  state,
  mutations,
})

export default store