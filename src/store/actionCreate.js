import * as actionType from './actionType';
import axios from 'axios';

const change_list = (data) => ({
  type: actionType.CHANGE_LIST,
  list: data,
  totalPage: Math.ceil(data.length / 10)
})
const home_list = (data) => ({
  type: actionType.HOME_LIST,
  list: data
})
const home_hot = (data) => ({
  type: actionType.HOME_HOT,
  data: data
})
const add_home_list = (data,pages) => ({
  type: actionType.ADD_HOME_LIST,
  data,pages
})
const detail_list = (data)=>({
  type: actionType.DETAIL_LIST,
  data
})
const login_success = (data)=>({
  type: actionType.LOGIN_SUCCESS,
  data
})
const login_out = (data)=>({
  type: actionType.LOGIN_OUT,
  data
})

//头部
export const handlerFocus = () => {
  return {
    type: actionType.SEARCH_FOCUS
  }
}
export const getList = () => {
  return async (dispatch) => {
    const res = await axios.get('/api/headerList.json')
    dispatch(change_list(res.data.data));
  }
}
export const mouseEnter = () => {
  return {
    type: actionType.MOUSE_ENTER
  }
}
export const changePage = () => {
  return {
    type: actionType.CHANGE_PAGE
  }
}
export const toggleTopShow = (data) => {
  return {
    type: actionType.TOGGLE_TOP_SHOW,
    data
  }
}

/**首页 */
//列表
export const homeList = () => {
  return async (dispatch) => {
    const res = await axios.get('/api/homeList.json');
    dispatch(home_list(res.data.data))
  }
}
export const getMoreList = (pages) => {
  return async (dispatch) => {
    const res = await axios.get('/api/addHomeList.json?page='+pages)
    dispatch(add_home_list(res.data.data,pages+1))
  }
}

//热门
export const homeHot = () => {
  return async (dispatch) => {
    const res = await axios.get('/api/homeHot.json')
    dispatch(home_hot(res.data.recommendList))
  }
}
//返回顶部
export const changeScrollShow = ()=>{
  let scroll_top = document.documentElement.scrollTop
  if(scroll_top>400){
    return (dispatch)=>{
      dispatch(toggleTopShow(true))
    }
  }else{
    return (dispatch)=>{
      dispatch(toggleTopShow(false))
    }
  }
  
}

//详情
export const getDetailList = (ids)=>{
  return async (dispatch)=>{
    const res = await axios.get('/api/detailList.json?id='+ids);
    dispatch(detail_list(res.data))
  }
}

//登陆
export const login = (user,psw)=>{
  return (dispatch)=>{
    // const res = await axios.post('/api/login.json',{
    //   user,psw
    // })
    dispatch(login_success(true))
  }
}
export const loginout = ()=>{
  return (dispatch)=>{
    // const res = await axios.post('/api/login.json',{
    //   user,psw
    // })
    dispatch(login_out(false))
  }
}