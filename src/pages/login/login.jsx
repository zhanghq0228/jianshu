import React, { Component } from 'react'
import { Button } from 'antd';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/actionCreate';
import { LoginWrapper } from './loginStyle';

class Login extends Component {

  handlerLogin() {
    console.log(this.userName.value, this.password.value)
    if (this.userName.value && this.password.value) {
      this.props.login(this.userName.value, this.password.value)
    } else {
      alert('请填写用户名密码!')
    }
  }
  render() {
    const { isLogin } = this.props.header;
    if (!isLogin) {
      return (
        <LoginWrapper>
          <div className="box">
            <input placeholder="账户" ref={input => { this.userName = input }} />
            <input type='password' placeholder="密码" ref={input => { this.password = input }} />
            <Button type="primary" onClick={this.handlerLogin.bind(this)} block>登陆</Button>
          </div>
        </LoginWrapper>
      )
    } else {
      return <Redirect to='/'></Redirect>
    }

  }
}

export default connect((state) => {
  return {
    header: state.header
  }
}, { login })(Login)