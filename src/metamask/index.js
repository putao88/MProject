import { Message } from 'element-ui';
import store from '../store'
import Web3 from 'web3'
import { formatUnits } from 'ethers/lib/utils'
import { IGOAddress, usdtAddress} from './data'
import usdtabi from '../abis/usdtabi'
import poolabi from '../abis/poolabi'
import { BigNumber } from 'ethers'

if (window.ethereum && window.ethereum.isMetaMask) {
  window.ethereum.on('accountsChanged', function (accounts) {
    store.commit('SET_ADDRESS', accounts[0])
    const state = store.getState()
    if (!state || !accounts.length) {
      return
    }
    const web3 = new Web3(window.ethereum)
    state.web3 = web3
    getBalance(state.web3, accounts[0])
    checkApprove().then((result) => {
      store.commit('SET_APPROVED', result)
    })
  })
  window.ethereum.on('networkChanged', function (networkId) {
    location.reload()
  })
  window.ethereum.on('connect', (accounts) => {
  })
  window.ethereum.on('disconnect', () => {
    store.commit('SET_ADDRESS', null)
  })
  window.ethereum.on('close', () => {
    store.commit('SET_ADDRESS', null)
  })
}

export const getBalance = async (web3, account) => {
  const pool = new web3.eth.Contract(poolabi, IGOAddress)
  let balance = await pool.methods.balanceOf(account).call()
  const display = formatUnits(balance, 18)
  store.commit('SET_BALANCE',display)
}


export const loadBlockchainData = async () => {
    const state = store.state
    if (JSON.stringify(state.web3) != "{}") {
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
                store.commit('SET_ADDRESS', accounts[0])
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


export const checkApprove = async () => {
  const web3 = await loadBlockchainData()
  const state = store.state
  if (!web3) {
    return false
  }
  const usdt = new web3.eth.Contract(usdtabi, usdtAddress)
  const uint256MAX = BigNumber.from('115792089237316195423570985008687907853269984665640564039457584007913129639935')
  if (usdt !== undefined) {
    let allowance = BigNumber.from(await usdt.methods.allowance(state.address, IGOAddress).call())
    if (allowance >= uint256MAX / 2) {
      return true
    }
    return false
  }
  return false
}