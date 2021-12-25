import store from '../store'
import { bnbHeroPool } from './poolObject'
import { bnbheroAddress } from './data'

/**
 * @description: 获得myreserve所有英雄
 * @param {*}
 * @return {*}
 */
export const getAllHeroesInMyserve = async () => {
  const { account }  = store.state
  const pool = bnbHeroPool()
  const heroIdList = await pool.methods.getHeroesInBag(account).call()
  store.commit('SET_HEROIDLIST', heroIdList)
  let heroInMyreserve = []
  for(let i=0; i<heroIdList.length; i++) {
    const detail = getHeroDetail()
    heroInMyreserve.push(detail)
  }
  store.commit('SET_HEROINMYRESERVE', heroInMyreserve)
  return heroInMyreserve
}

/**
 * @description: 获得hero详情
 * @param {*}
 * @return {*}
 */
export const getHeroDetail = async (id) => {
  const pool = bnbHeroPool()
  const heroDetail = await pool.methods.getHero(id,true).call()
  return heroDetail
}

/**
 * @description: 把英雄放入卡槽
 * @param {*}
 * @return {*}
 */
export const moveToSolt = async (heroId) => {
  const pool = bnbHeroPool()
  const isMoved = await pool.methods.takeHeroFromBag(heroId).call()
  return isMoved
}