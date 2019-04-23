import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/actionCreate';

class Write extends Component {
  handlerLogin() {
    if (this.userName.value && this.password.value) {
      this.props.login(this.userName.value, this.password.value)
    } else {
      alert('请填写用户名密码!')
    }
  }
  render() {
    const { isLogin } = this.props.header;
    if (isLogin) {
      return (
        <div className="box">
          写文章页面
          </div>
      )
    } else {
      return <Redirect to='/login'></Redirect>
    }

  }
}

export default connect((state) => {
  return {
    header: state.header
  }
}, { login })(Write)