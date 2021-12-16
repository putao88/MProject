import Vuex from 'vuex'
import Vue from 'vue'


Vue.use(Vuex)
const state = {
  web3: null,
  account: null,
  balance: null,
  approved: null,
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
  SET_APPROVED: (state, payload) => {
    state.approved = payload
  },
}

const store = new Vuex.Store({
  state,
  mutations,
})

export default store