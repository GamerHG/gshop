/*
vuex的actions模块
 */
import {
  reqAddress,
  reqCategorys,
  reqShops,
  reqUserInfo,
  reqShopGoods,
  reqShopRatings,
  reqShopInfo,
  reqSearchGoods,
  reqLogout,
  reqSearchShop,
  

} from '../api'

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RECEIVE_INFO,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RESET_USERINFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SEARCH_SHOPS
  

} from './mutation-types'

export default {
  // 异步获取地址
  async getAddress({commit, state}) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    commit(RECEIVE_ADDRESS, {address: result.data})
  },

  // 异步获取分类列表
  async getCategorys({commit}) {
    const result = await reqCategorys()
    commit(RECEIVE_CATEGORYS, {categorys: result.data})
  },

  // 异步获取商家列表
  async getShops({commit, state}) {
    const {latitude, longitude} = state
    const result = await reqShops({latitude, longitude})
    commit(RECEIVE_SHOPS, {shops: result.data})
  },
     recordUser({commit},userInfo) {
      commit(RECEIVE_USER_INFO, {userInfo}) 
  },
     async getUserInfo({commit}) {
    const result = await reqUserInfo()
    if(result.code===0)
    {  
      const userInfo = result.data
      commit(RECEIVE_USER_INFO, {userInfo}) 
    }
  },
  async searchShop({commit, state}, keyword) {
    const {latitude, longitude} = state
    const result = await reqSearchShop(latitude+','+longitude, keyword)
    commit(RECEIVE_SEARCH_SHOPS, {searchShops: result.data})
  },
  async logout ({commit}){
    const result = await reqLogout()
    if(result.code===0)
    {  
      commit(RESET_USERINFO, {userInfo})
    }
  },
  async getShopGoods({commit},callback) {
    const result = await reqShopGoods()
    if(result.code===0)
    {  
      const goods = result.data
      commit(RECEIVE_GOODS, {goods}) 
      callback&&callback()
    }
  },
  async getShopRatings({commit},callback) {
    const result = await reqShopRatings()
    if(result.code===0)
    {  
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings}) 
      callback&&callback()
    }
  },
  async getShopInfo({commit}) {
    const result = await reqShopInfo()
    if(result.code===0)
    {  
      const info = result.data
      commit(RECEIVE_INFO, {info}) 
    }
  },
  updateFoodCount({commit},{isAdd,food}){
     if(isAdd){
       commit(INCREMENT_FOOD_COUNT,{food})
     }
     else{
       commit(DECREMENT_FOOD_COUNT,{food})
     }
  },
   clearCart({commit}) {
    commit(CLEAR_CART)
  },
  async searchShops({commit,state},keyword) {
    const geohash = state.latitude + ',' + state.longitude

    const result = await reqSearchShop(geohash,keyword)
    if(result.code===0)
    {  
      const searchShop = result.data
      commit(RECEIVE_SEARCH_SHOPS, {searchShop}) 
    }
  },
}