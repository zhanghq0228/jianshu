import styled from 'styled-components';

export const LoginWrapper = styled.div `
  z-index:0;
  background: #eee;
  position:absolute;
  top:56px;
  left:0;
  bottom:0;
  right:0;
  .box{
    width:400px;
    margin:80px auto;
    background: #fff;
    height:220px;
    text-align:center;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    input{
      display: block;
      width:80%;
      margin:10px auto;
      padding: 0 10px;
      height:30px;
      border:1px solid #ccc;
    }
    button{
      width:80%;
    }
  }
`
// export const LoginWrapper = styled.div`
//   width:400px;
//   margin:80px auto;
//   background: #eee;
//   height:200px;
// `