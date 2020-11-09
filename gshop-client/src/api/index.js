/*
与后台交互模块
 */
import ajax from './ajax'
const BASE_URL = '/api'

/**
 * 获取地址信息(根据经纬度串)
 */
export const reqAddress = geohash => ajax(BASE_URL+'/position/'+geohash)

/**
 * 获取msite页面食品分类列表
 */
export const reqCategorys = () => ajax(BASE_URL+'/index_category')

/**
 * 获取msite商铺列表(根据经纬度)
 */
export const reqShops = ({latitude, longitude}) => ajax(BASE_URL+'/shops', {latitude, longitude})

export const reqSearchShop = ({geohash,keyword}) => ajax(BASE_URL+'/search_shops', {geohash, keyword})

// [6、用户名密码登陆](#6用户名密码登陆)<br/>
export const reqPwdLogin = ({name, pwd,captcha}) => ajax(BASE_URL+'/login_pwd', {name, pwd,captcha},'POST')
// [7、发送短信验证码](#7发送短信验证码)<br/>
export const reqSendCode = (phone) => ajax(BASE_URL+'/sendcode', {phone})
// [8、手机号验证码登陆](#8手机号验证码登陆)<br/>
export const reqSmsLogin = ({phone, code}) => ajax(BASE_URL+'/login_sms', {phone,code},'POST')
// [9、根据会话获取用户信息](#9根据会话获取用户信息)<br/>
export const reqUserInfo = () => ajax(BASE_URL+'/userinfo')
// [10、用户登出](#10用户登出)<br/>
export const reqLogout = () => ajax(BASE_URL+'/logout')

export const reqShopGoods = ()=>ajax('/goods')

export const reqShopRatings = ()=>ajax('/ratings')

export const reqShopInfo = ()=>ajax('/info')



