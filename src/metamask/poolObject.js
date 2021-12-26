import store from '../store'
import { bnbheroAddress, bnbHeroToken, bnbhCharacter } from './data'
import bnbHeroAbi from '../abis/bnbHeroAbi'
import bnbTokenAbi from '../abis/bnbTokenAbi'
import bnbhCharacterAbi from '../abis/bnbhCharacterAbi'

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

/**
 * @description: 获取bnbhCharacter连接对象
 * @param {*}
 * @return {*}
 */
export const bnbhCharacterPool = () => {
  const { web3 }  = store.state
  const pool = new web3.eth.Contract(bnbhCharacterAbi, bnbhCharacter)
  return pool
}

