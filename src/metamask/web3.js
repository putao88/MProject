import { Message } from 'element-ui';
import store from '../store'
import Web3 from 'web3'


const web3 = async () => {
  const state = store.state
  if (state.web3) {
      return state.web3
  }
  if (window.ethereum && window.ethereum.isMetaMask) {
      const web3 = new Web3(window.ethereum)
      try {
          await window.ethereum.enable()
      } catch (ex) {
          console.log(ex)
      }
      const chainId = await web3.eth.getChainId()
      if (chainId != 56 && chainId != 97) {
        Message({
          message: 'Please configure the corresponding chain',
          type: 'info'
        });
        return null
      }
      const accounts = await web3.eth.getAccounts()
      try {
          if (accounts.length == 0) {
            Message({
              message: 'Contracts not deployed to the current network',
              type: 'info'
            });
          } else {
              store.commit('SET_ACCOUNT', accounts[0])
              store.commit('SET_WEB3', web3)
              await getBalance(web3, accounts[0])
              return web3
          }
        } catch (e) {
          console.log('Error', e)
          Message({
            message: 'Contracts not deployed to the current network',
            type: 'info'
          });
      }
  } else {
      Message({
        message: 'Please install MetaMask',
        type: 'info'
      });
  }
  return null
}

export default web3