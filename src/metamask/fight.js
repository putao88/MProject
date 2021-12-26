import store from '../store'
import { bnbheroAddress } from './data'
import bnbHeroAbi from '../abis/bnbHeroAbi'
import { getBnbhBalance, getBalance } from './home'
import { getHeroesByOwner } from './index'


/**
 * @description: 英雄战斗接口
 * @param {*}
 * @return {*}
 */
export const toFight = async (heroId,enemyId) => {
  const { web3, account }  = store.state
  const pool = new web3.eth.Contract(bnbHeroAbi, bnbheroAddress)
  const res = await  await pool.methods.fight(heroId,enemyId).send({ from: account })
  if (res.status) {
    getHeroesByOwner(web3, account)
    getBnbhBalance(web3, account)
    getBalance(web3, account)
  }
 } 