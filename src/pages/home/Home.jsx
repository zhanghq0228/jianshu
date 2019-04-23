import React, { PureComponent} from 'react';
import { HomeWrapper, ListWrapper,RecommentWrapper } from './style';
import {connect} from 'react-redux';
import HomeList from '../../components/List';
import Recomment from '../../components/Recomment';
import Writer from '../../components/Writer';
import {changeScrollShow} from '../../store/actionCreate';


class Home extends PureComponent {
  componentDidMount () {
   this.binEvent() 
  }
  
  binEvent(){
    window.addEventListener('scroll',this.props.changeScrollShow)
  }
  handlerTop(){
    window.scrollTo(0,0)
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.props.changeScrollShow)
  }
  render() {
    const { showScroll } = this.props.home
    return (
      <div>
        <HomeWrapper>
          <div className='homeLeft'>
            <img className="bannerImg" src="https://upload.jianshu.io/admin_banners/web_images/4634/164728948a52095cd70453d065ccd9e0a9f1ee8c.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="" />
            {/* <TopicWrapper><Topic></Topic></TopicWrapper> */}
            <ListWrapper>
              <HomeList/>
            </ListWrapper>
          </div>
          <div className='homeRight'>
            <RecommentWrapper><Recomment /></RecommentWrapper>
            <Writer />
          </div>
          {showScroll?<div className="backTop" onClick={this.handlerTop.bind(this)}>返回顶部</div>:null}
        </HomeWrapper>
      </div>
    )
  }
}

export default connect((state)=>{
  return {
    home: state.home
  }
},{changeScrollShow})(Home);