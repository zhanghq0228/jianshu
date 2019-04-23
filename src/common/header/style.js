/* eslint-disable no-unexpected-multiline*/
import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div `
  border-bottom:1px solid #f0f0f0;
  height:56px;
  .clearFloat{
    clear: both;
    content:'';

  }
`
export const Logo = styled.div`
  width:100px;
  height:56px;
  float:left;
  background:url(${logoPic});
  background-size:contain;
`
export const Nav = styled.div `
  width:930px;
  margin-left:auto;
  margin-right:auto;
  height:56px;
  .slide-enter{
    transition : all .2s ease-out;
  }
  .slide-enter-action{
    width:200px;
  }
  .slide-exit{
    transition : all .2s ease-out;
    width:160px;
  }
`
export const NavItem = styled.div `
  line-height:56px;
  padding:0 15px;
  font-size:17px;
  color:#333;
  &.left{
    float:left;
  }
  &.right{
    float:right;
    color:#969696
  }
  &.active{
    color:#ea6f5a;
  }
`
export const SerchWrapper = styled.div `
  z-index:1;
  float:left;
  position:relative;
  width:160px;
  height:38px;
  top:9px;
  span{
    position:absolute;
    right:5px;
    top:4px;
    cursor: pointer;
    border-radius:50%;
    width:30px;
    height:30px;
    line-height:30px;
    text-align:center;
    &.fouces{
      color:#fff;
      background-color:#777;
    }
  }
  &.fouces{
    width:200px;
  }
`
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})
`
  position:absolute;
  width:160px;
  height:38px;
  border:none;
  outline:none;
  padding-left:20px;
  background:#eee;
  padding:0 40px 0 20px;
  box-sizing:border-box;
  border-radius:16px;
  font-size:14px;
  color:#666;
  &.fouces{
    width:200px;
  }
  &::placeholder{
    color:#999;
  }
`
export const SearchInfo = styled.div`
  &.isShow{
    display:none;
  }
  position:absolute;
  background-color:#fff;
  width:200px;
  top:47px;
  padding: 0 20px;
  box-shadow:0 0 8px rgba(0,0,0,.2);
  .infoTitle{
    margin-top:20px;
    font-size:14px;
    color:#969696;
    float:left;
  }
  .infoSwitch{
    cursor: pointer;
    margin-top:20px;
    font-size:14px;
    color:#969696;
    float:right;
    .iconfont{
      display: inline-block;
      font-style:normal;
      margin-right:5px;
      font-size:12px;
      line-height:1;
      transition:all .2s ease-in;
      transform-origin:center center;
    }
  }
  .infoItem{
    padding-top:10px;
  }
  .infoItem a{
    line-height:20px;
    padding: 0 10px;
    font-size:12px;
    border:1px solid #ddd;
    float:left;
    color:#787878;
    border-radius:5px;
    display:block;
    margin:0 10px 10px 0;
    text-decoration:none;
  }
`


export const Addion = styled.div `
  float:right;
`
export const Button = styled.div `
  font-size:14px;
 line-height:38px;
 margin-top:9px;
 float:right;
 border-radius:19px;
 border:1px solid #ec6149;
 margin-right:20px;
 padding:0 20px;
 &.reg{
   color:#ec6149;
 }
 &.weiting{
   color:#fff;
   background:#ec6149
 }
`