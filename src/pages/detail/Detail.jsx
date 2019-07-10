import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import { DetailWrapper } from './detailStyle';
import {getDetailList} from '../../store/actionCreate';
class Detaile extends Component {
  componentDidMount () {
    this.props.getDetailList(this.props.match.params.id)
  }
  
  mapList(arr) {
    var newarr = []
    for (const key in arr) {
      newarr.push({ arr: arr[key] })
    }
    return newarr
  }
  render() {
    const { detail } = this.props;
    return (
      <DetailWrapper>
        <header>{detail.header}</header>
        <div className="content"
        dangerouslySetInnerHTML={{__html: detail.content}}>
        
        </div>
      </DetailWrapper>
    )
  }
}

export default connect((state) => {
  return {
    detail: state.detail
  }
}, {getDetailList})(withRouter(Detaile))