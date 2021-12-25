import store from '../store'
import { bnbheroAddress, bnbHeroToken } from './data'
import bnbHeroAbi from '../abis/bnbHeroAbi'
import bnbTokenAbi from '../abis/bnbTokenAbi'
import bnbhPriceAbi from '../abis/bnbhPriceAbi'

/**
 * @description: 获取bnbHero连接对象
 * @param {*}
 * @return {*}
 */
export const bnbHeroPool = () => {
  const { web3 }  = store.state
  const pool = new web3.eth.Contract(bnbHeroAbi, bnbheroAddress)
  return pool
}

/**
 * @description: 获取bnbHeroToken连接对象
 * @param {*}
 * @return {*}
 */
export const bnbHeroTokenPool = () => {
  const { web3 }  = store.state
  const pool = new web3.eth.Contract(bnbTokenAbi, bnbHeroToken)
  return pool
}
