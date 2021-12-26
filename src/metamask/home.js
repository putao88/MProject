import store from '../store'
import { bnbHeroPool, bnbHeroTokenPool } from './poolObject'
import { formatUnits } from 'ethers/lib/utils'
import { bnbheroAddress, bnbHeroToken, bnbhPriceOracle, bnbhCharacter } from './data'
import bnbHeroAbi from '../abis/bnbHeroAbi'
import bnbTokenAbi from '../abis/bnbTokenAbi'



/**
 * @description: 获取bnbh余额
 * @param {*} web3
 * @param {*} account
 * @return {*}
 */
export const getBnbhBalance = async (web3, account) => {
  const pool = new web3.eth.Contract(bnbTokenAbi, bnbHeroToken)
  let data = await pool.methods.balanceOf(account).call()
  const bnbhBalance = formatUnits(data, 18)
  store.commit('SET_BNBHBALANCE', bnbhBalance)
  return bnbhBalance
}

/**
 * @description: 获取余额
 * @param {*} web3
 * @param {*} account
 * @return {*}
 */
export const getBalance = async (web3, account) => {
  const pool = new web3.eth.Contract(bnbHeroAbi, bnbheroAddress)
  let data = await pool.methods.balances(account).call()
  const balance = formatUnits(data, 18)
  store.commit('SET_BALANCE', balance)
  return balance
}

/**
 * @description: 获得到首次解锁时间，只有达到解锁时间，才能够领取奖励
 * @param {*}
 * @return {*}
 */
export const unLockTime = async () => {
  const { account }  = store.state
  const pool = bnbHeroPool()
  const openTime = await pool.methods.unLockTime(account).call()
  return openTime
}