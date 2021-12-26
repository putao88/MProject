import store from '../store'
import { bnbheroAddress, bnbhCharacter } from './data'
import { bnbhCharacterPool, bnbHeroPool } from './poolObject'
import bnbhCharacterAbi from '../abis/bnbhCharacterAbi'
import bnbHeroAbi from '../abis/bnbHeroAbi'
import { getBnbhBalance, getBalance } from './home'
import { getHeroesByOwner } from './index'



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
export const getIsApprovedForAll = async (web3,account) => {
  const pool = new web3.eth.Contract(bnbhCharacterAbi, bnbhCharacter)
  const isApproved = await pool.methods.isApprovedForAll(account,bnbheroAddress).call()
  store.commit('SET_ISAPPROVEDFORALL', isApproved)
  return isApproved
}

/**
 * @description: approve所有英雄
 * @param {*}
 * @return {*}
 */
export const setApproveallHeroes = async () => {
  const { web3, account }  = store.state
  const pool = bnbhCharacterPool()
  const res = await pool.methods.setApprovalForAll(bnbheroAddress,true).send({ from: account })
  if (res.status) {
    getIsApprovedForAll(web3, account)
    getBnbhBalance(web3, account)
    getBalance(web3, account)
  }
}

/**
 * @description: 把英雄放入仓库
 * @param {*}
 * @return {*}
 */
export const moveHeroToMyreserve = async (heroId) => {
  const { web3, account } = store.state
  const pool = new web3.eth.Contract(bnbHeroAbi, bnbheroAddress)
  const res = await pool.methods.moveHeroToBag(heroId).send({ from: account })
  if (res.status) {
    await getHeroesByOwner(web3, account)
  }
}

/**
 * @description: 解锁英雄
 * @param {*}
 * @return {*}
 */
export const unLock = async (heroId) => {
  const { web3, account } = store.state
  const pool =  new web3.eth.Contract(bnbhCharacterAbi, bnbhCharacter)
  const res = await pool.methods.unLockLevel(heroId).send({ from: account })
  if (res.status) {
    await getHeroesByOwner(web3, account)
  }
}


