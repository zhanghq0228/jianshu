import {
  SEARCH_FOCUS,
  CHANGE_LIST,
  MOUSE_ENTER,
  CHANGE_PAGE,
  HOME_LIST,
  HOME_HOT,
  ADD_HOME_LIST,
  TOGGLE_TOP_SHOW,
  DETAIL_LIST,
  LOGIN_SUCCESS,
  LOGIN_OUT
} from './actionType';
// import { fromJS } from 'immutable';
import {
  combineReducers
} from 'redux';

const group = (array, subGroupLength) => {
  let index = 0;
  let newArray = [];
  while (index < array.length) {
    newArray.push(array.slice(index, index += subGroupLength));
  }
  return newArray;
}
//头部
const initHeaderState = {
  fouces: false,
  mouseIn: false,
  list: [],
  page: 0,
  totalPage: 1,
  isLogin:false
};
// 
const header = (state = initHeaderState, action) => {
  switch (action.type) {
    case CHANGE_LIST:
      const {
        list,
        totalPage
      } = action;
      return {
        ...state,
        list: group(list, 10),
        totalPage: totalPage,
      };
    case SEARCH_FOCUS:
      return {
        ...state,
        fouces: !state.fouces
      }
      //state.set('fouces', !action.fouces)
    case MOUSE_ENTER:
      return {
        ...state,
        mouseIn: !state.mouseIn
      }
    case CHANGE_PAGE:
      return {
        ...state,
        page: state.page + 1 === state.totalPage ? state.page = 0 : state.page + 1,
        totalPage: state.totalPage
      }
      case LOGIN_SUCCESS:
      return{...state,isLogin:true}
      case LOGIN_OUT:
      return{...state,isLogin:false}
    default:
      return state;
  }
}
//首页
const initHomeState = {
  home: 1,
  list: [],
  hotList: [],
  pages: 1,
  showScroll: true
}
const home = (state = initHomeState, action) => {
  switch (action.type) {
    case HOME_LIST:
      return {
        ...state,
        list: action.list
      }
    case HOME_HOT:
      return {
        ...state,
        hotList: action
      }
    case ADD_HOME_LIST:
      return {
        ...state,
        list: state.list.concat(action.data),
        pages: action.pages
      };
    case TOGGLE_TOP_SHOW:
      return {
        ...state,
        showScroll: action.data
      }
    default:
      return state
  }
}
//详情页
const initDetail = {
  header:'',
  content:''
}
const detail = (state=initDetail,action)=>{
  switch (action.type){
    case DETAIL_LIST:
    const { header,content} = action.data
    return {header:header,content:content}
    default:
    return state;
  }
}

//登陆

export default combineReducers({
  header,
  home,
  detail
})