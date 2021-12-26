import { Message } from 'element-ui';
import moment from 'moment';
import store from '../store'
import Web3 from 'web3'
import { bnbheroAddress, bnbHeroToken, bnbhPriceOracle, bnbhCharacter } from './data'
import bnbHeroAbi from '../abis/bnbHeroAbi'
import bnbTokenAbi from '../abis/bnbTokenAbi'
import bnbhCharacterAbi from '../abis/bnbhCharacterAbi'
import bnbhPriceAbi from '../abis/bnbhPriceAbi'
import { BigNumber } from 'ethers'
import { formatUnits } from 'ethers/lib/utils'
import { getIsApprovedForAll } from './myheroes'



/**
 * @description: 监听网络改变，账号切换
 * @param {*} window
 * @return {*}
 */
if (window.ethereum && window.ethereum.isMetaMask) {
  window.ethereum.on('accountsChanged', function (accounts) {
    location.reload()
  })
  window.ethereum.on('networkChanged', function (networkId) {
    location.reload()
  })
  window.ethereum.on('connect', (accounts) => {
  })
  window.ethereum.on('disconnect', () => {
    location.reload()
  })
  window.ethereum.on('close', () => {
    location.reload()
  })
}

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
                await getHeroesByOwner(web3, accounts[0])
                await getTownsOfPlayer(web3, accounts[0])
                await checkApprove(web3, accounts[0])
                await getIsApprovedForAll(web3, accounts[0])
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
 * @description: BHBHero合约向BNBH代币申请授权——城市
 * @param {*}
 * @return {*}
 */
export const approve = async () => {
  const { account, web3 } = store.state
  const pool = new web3.eth.Contract(bnbTokenAbi, bnbHeroToken)
  const uint256MAX = BigNumber.from('115792089237316195423570985008687907853269984665640564039457584007913129639935')
  const res = await pool.methods.approve(bnbheroAddress, uint256MAX).send({ from: account })
  if (res.status) {
    checkApprove(web3, account)
  }
}

/**
 * @description: 查询城市是否已经申请过了
 * @param {*}
 * @return {*}
 */
export const checkApprove = async (web3, account) => {
  const pool = new web3.eth.Contract(bnbTokenAbi, bnbHeroToken)
  const uint256MAX = BigNumber.from('115792089237316195423570985008687907853269984665640564039457584007913129639935')
  let allowance = BigNumber.from(await pool.methods.allowance(account,bnbheroAddress).call())
  let isApproved = allowance >= uint256MAX / 2
  store.commit('SET_APPROVED', isApproved)
  return isApproved
}

/**
 * @description: 获得玩家英雄
 * @param {*}
 * @return {*}
 */
export const getHeroesByOwner = async (web3, account) => {
  const pool = new web3.eth.Contract(bnbHeroAbi, bnbheroAddress)
  let heroes = await pool.methods.getHeroesByOwner(account,false).call()
  store.commit('SET_HERODATAS',heroes)
}

/**
 * @description: 获取城市等级
 * @param {*}
 * @return {*}
 */
 export const getTownLevel = async (web3, account) => {
  const pool = new web3.eth.Contract(bnbHeroAbi, bnbheroAddress)
  let townList = []
  for(let i=0; i<4;i++) {
    const townLevel = await pool.methods.getTownLevel(account,i).call() || 0
    townList.push(townLevel)
  }
  store.commit('SET_TOWNLIST',townList)
}


/**
 * @description: 获取城市升级详情，城市等级及升级时间
 * @param {*}
 * @return {*}
 */
export const getTownsOfPlayer = async (web3, account) => {
  const pool = new web3.eth.Contract(bnbHeroAbi, bnbheroAddress)
  const townsOfPlayer = await pool.methods.getTownsOfPlayer(account).call()
  let townList = []
  let townUpTime = []
  let townUpPrice = []
  for (let i=0; i< townsOfPlayer.length; i++) {
    townList.push(townsOfPlayer[i].level)
    townUpTime.push(townsOfPlayer[i].lastUpgradedTimeStamp)
    //获取每个城市升级价格
    let price = (townsOfPlayer[i].lastUpgradedTimeStamp > moment().format('X') || townsOfPlayer[i].level === '3' )
                ?  '0'
                : await getTownUpgradePrice(i,parseInt(townsOfPlayer[i].level+1))
    townUpPrice.push(price)
  }
  store.commit('SET_TOWNLIST',townList)
  store.commit('SET_TOWNUPTIME',townUpTime)
  store.commit('SET_TOWNUPRICE',townUpPrice)
}

/**
 * @description: 获取城市升级价格
 * @param {*}
 * @return {*}
 */
export const getTownUpgradePrice = async (kind,level) => {
  const { web3 } = store.state
  const pool = new web3.eth.Contract(bnbhPriceAbi, bnbhPriceOracle)
  const data = await pool.methods.getTownUpgradePrice(kind,level).call()
  const price = formatUnits(data, 18)
  return price
}


/**
 * @description: 升级城市
 * @param {*}
 * @return {*}
 */
export const upgradeTown = async (townType) => {
  const { web3, account } = store.state
  const pool = new web3.eth.Contract(bnbHeroAbi, bnbheroAddress)
  const res = await pool.methods.upgradeTown(townType).send({ from: account })
  if (res.status) {
    getTownsOfPlayer(web3, account)
  }
}

