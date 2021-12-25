import store from '../store'
import { bnbhCharacterPool, bnbHeroPool } from './poolObject'
import { bnbheroAddress } from './data'


// ---------------------------------myheroes页面

//  createNewHero（创建英雄）->expediteHero（加速到达战场，不然要12小时后才能战斗->getHeroesByOwner（获得玩家英雄，数组结构）
/**
 * @description: 创建英雄
 * @param {*}
 * @return {*}
 */
export const createNewHero = async () => {
  // const { web3, account, approved }  = store.state
  // if(!approved) approve()
  // const pool = new web3.eth.Contract(bnbHeroAbi, bnbheroAddress)
  // let result = await pool.methods.createNewHero()
 } 

/**
 * @description: 获取英雄是否approved结果
 * @param {*}
 * @return {*}
 */
export const isApprovedForAll = async () => {
  const { account }  = store.state
  const pool = bnbhCharacterPool()
  const isApproved = await pool.methods.isApprovedForAll(account,bnbheroAddress).call()
  return isApproved
}

/**
 * @description: approve所有英雄
 * @param {*}
 * @return {*}
 */
export const setApproveallHeroes = async () => {
  const { account }  = store.state
  const pool = bnbhCharacterPool()
  const isApproved = await pool.methods.setApprovalForAll(bnbheroAddress,true).call()
  return isApproved
}

/**
 * @description: 把英雄放入仓库
 * @param {*}
 * @return {*}
 */
export const moveHeroToMyreserve = async (heroId) => {
  const pool = bnbHeroPool()
  const isMoved = await pool.methods.moveHeroToBag(heroId).call()
  return isMoved
}

/**
 * @description: 解锁英雄
 * @param {*}
 * @return {*}
 */
export const unLock = async (heroId) => {
  const pool = bnbhCharacterPool()
  const isUnlock = await pool.methods.unLockLevel(heroId).call()
  return isUnlock
}


