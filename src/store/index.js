import Vuex from 'vuex'
import Vue from 'vue'


Vue.use(Vuex)
const state = {
  web3: {},
  address: '',
  balance: '',
}

const mutations = {
  SET_WEB3: (state, payload) => {
    state.web3 = payload
  },
  SET_ADDRESS: (state, payload) => {
    state.address = payload
  },
  SET_BALANCE: (state, payload) => {
    state.balance = payload
  },
}

const store = new Vuex.Store({
  state,
  mutations,
})

export default store