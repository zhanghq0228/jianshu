import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { handlerFocus, getList, mouseEnter, changePage, loginout } from '../../store/actionCreate';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addion, Button, SerchWrapper, SearchInfo } from './style';

class Header extends Component {
  handlerFocus() {
    this.props.handlerFocus();
    (!this.props.fouces && this.props.header.list.length === 0) && this.props.getList()
  }
  handelMouse() {
    this.props.mouseEnter()
  }
  handlerChangePage(spin) {
    let originAngle = spin.style.transform.replace(/[^0-9]/ig, " ");
    originAngle ? originAngle = parseInt(originAngle, 10) : originAngle = 0;
    spin.style.transform = `rotate(${originAngle + 360}deg)`;
    this.props.changePage();
  }
  loginout() {
    this.props.loginout();
  }
  render() {
    const { fouces, list, mouseIn, page, isLogin } = this.props.header;
    return (
      <div>
        <HeaderWrapper>
          <Link to='/'> <Logo></Logo></Link>
          <Addion>
            <Link to='/write'>
              <Button className='weiting'>
                <span className="iconfont">&#xe62d;</span>&nbsp;写文章
              </Button>
            </Link>

            <Button className='reg'>注册</Button>
          </Addion>
          <Nav>
            <NavItem className='left active'>首页</NavItem>
            <NavItem className='left'>下载App</NavItem>
            {
              isLogin ? <NavItem className='right' onClick={this.loginout.bind(this)}>退出</NavItem> :
                <Link to='/login'><NavItem className='right'>登陆</NavItem></Link>
            }

            <NavItem className='right'>
              <span className="iconfont">&#xe636;</span>
            </NavItem>
            {/* 搜索动画 */}
            <CSSTransition
              timeout={200}
              in={fouces}
              classNames='slide'
            >
              <SerchWrapper
                className={fouces ? 'fouces' : ''}
              >

                {/* 搜索框 */}
                <NavSearch
                  className={fouces ? 'fouces' : ''}
                  onFocus={this.handlerFocus.bind(this)}
                  onBlur={this.handlerFocus.bind(this)}
                >
                </NavSearch>
                <span className={fouces ? 'fouces iconfont' : 'iconfont'}>&#xe623;</span>
                {/* 搜索详情 */}
                <SearchInfo onMouseLeave={this.handelMouse.bind(this)} onMouseEnter={this.handelMouse.bind(this)} className={fouces || mouseIn ? '' : 'isShow'}>
                  <div className="infoTitle">热门搜索</div>
                  <div onClick={this.handlerChangePage.bind(this, this.spinIcon)} className="infoSwitch">
                    <i ref={icon => { this.spinIcon = icon }} className="iconfont">&#xe851;</i>
                    换一批
                    </div>
                  <div className='clearFloat'></div>
                  <ul className="infoItem">
                    {list.length ? list[page].map(item => {
                      return (
                        <li key={item}><a href="/index">{item}</a></li>
                      )
                    }) : null}
                  </ul>
                </SearchInfo>
              </SerchWrapper>
            </CSSTransition>
          </Nav>
        </HeaderWrapper>
      </div>
    )
  }
}

export default connect(state => {
  return {
    header: state.header
  }
}, { handlerFocus, getList, mouseEnter, changePage, loginout })(Header);