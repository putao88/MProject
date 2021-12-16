import { Message } from 'element-ui';
import store from '../store'
import Web3 from 'web3'
import { formatUnits } from 'ethers/lib/utils'
import { bnbheroAddress } from './data'
import bnbheroabi from '../abis/bnbheroabi'
import { BigNumber } from 'ethers'


/**
 * @description: 监听网络改变，账号切换
 * @param {*} window
 * @return {*}
 */
if (window.ethereum && window.ethereum.isMetaMask) {
  window.ethereum.on('accountsChanged', function (accounts) {
    store.commit('SET_ACCOUNT', accounts[0])
    const state = store.getState()
    if (!state || !accounts.length) {
      return
    }
    const web3 = new Web3(window.ethereum)
    state.web3 = web3
    // getBalance(state.web3, accounts[0])
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
    store.commit('SET_ACCOUNT', null)
  })
  window.ethereum.on('close', () => {
    store.commit('SET_ACCOUNT', null)
  })
}

// /**
//  * @description: 获取余额
//  * @param {*} web3
//  * @param {*} account
//  * @return {*}
//  */
// export const getBalance = async (web3, account) => {
//   const pool = new web3.eth.Contract(poolabi, bnbheroAddress)
//   let data = await pool.methods.balanceOf(account).call()
//   const balance = formatUnits(data, 18)
//   store.commit('SET_BALANCE',balance)
// }

/**
 * @description: 连接钱包，获取数据
 * @param {*}
 * @return {*}
 */
export const loadBlockchainData = async () => {
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
                // await getBalance(web3, accounts[0])
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

/**
 * @description: BHBHero合约向BNBH代币申请授权
 * @param {*}
 * @return {*}
 */
export const approve = async () => {
  const web3 = await loadBlockchainData()
  const state = store.state
  if (!web3) {
    return false
  }
  const usdt = new web3.eth.Contract(bnbheroabi, bnbheroAddress)
  const res = await usdt.methods.approve(bnbheroAddress, BigNumber.from('115792089237316195423570985008687907853269984665640564039457584007913129639935')).send({ from: state.account })
  if (res.status) {
    const approved = await checkApprove()
    store.commit('SET_APPROVED', approved)
  }
}

export const checkApprove = async () => {
  const web3 = await loadBlockchainData()
  const state = store.state
  if (!web3) {
    return false
  }
  const usdt = new web3.eth.Contract(bnbheroabi, bnbheroAddress)
  const uint256MAX = BigNumber.from('115792089237316195423570985008687907853269984665640564039457584007913129639935')
  if (usdt !== undefined) {
    let allowance = BigNumber.from(await usdt.methods.allowance(state.account, bnbheroAddress).call())
    if (allowance >= uint256MAX / 2) {
      return true
    }
    return false
  }
  return false
}

/**
 * @description: 创建英雄
 * @param {*}
 * @return {*}
 */

 export const createNewHero = async () => {
  const { web3, account, approved }  = store.state
  if(!approved) approve()
  const pool = new web3.eth.Contract(bnbheroabi, bnbheroAddress)
  debugger
  let result = await pool.methods.createNewHero()
  debugger
 } 
//  createNewHero（创建英雄）->expediteHero（加速到达战场，不然要12小时后才能战斗->getHeroesByOwner（获得玩家英雄，数组结构）
/**
 * @description: 获得玩家英雄
 * @param {*}
 * @return {*}
 */
export const getHeroesByOwner = async () => {
  const { web3, account }  = store.state
  const pool = new web3.eth.Contract(bnbheroabi, bnbheroAddress)
  let heros = await pool.methods.getHeroesByOwner(account,false).call()
  console.log(heros)
}