import React, { Component } from 'react'
import { connect } from 'react-redux';
import { homeHot } from '../store/actionCreate';

class Recomment extends Component {
  componentDidMount() {
    this.props.homeHot()
  }
  render() {
    const { hotList } = this.props.home;
    return (
      <div className='RecommentWrapper'>
        {hotList.data? hotList.data.map(item => {
          return (
            <img src={item.imgUrl} key={item.id} alt="" />
          )
        }):null}
        {/* <img src="http://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png" alt=""/>
        <img src="http://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png" alt=""/> */}

      </div>

    )
  }
}

export default connect((state) => {
  return {
    home: state.home
  }
}, { homeHot })(Recomment)