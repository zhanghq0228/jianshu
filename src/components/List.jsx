import React, { Component } from 'react'
import { List, Icon } from 'antd';
import { connect } from "react-redux";
import { Link} from 'react-router-dom';
import { homeList, getMoreList } from '../store/actionCreate';
const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);
class HomeList extends Component {
  componentDidMount() {
    this.props.homeList();
  }
  handlerClick(pages) {
    this.props.getMoreList(pages)
  }
  render() {
    const { list,pages } = this.props.home
    return (
      <div>
        
        <List
          itemLayout="vertical"
          size="large"
          // pagination={{
          //   onChange: (page) => {
          //     console.log(page);
          //   },
          //   pageSize: 3,
          // }}
          dataSource={list}
          renderItem={item => (
            <List.Item
              key={item.title}
              actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text={item.meta} />]}
              extra={<img width={150} alt="logo" src={item.imgUrl} />}
            >
              <List.Item.Meta
                title={<Link to={/detail/+item.id}>{item.title}</Link>}
                description={item.desc}
              />

            </List.Item>
          )}
        />
        <div className='loadMore' onClick={this.handlerClick.bind(this, pages)}>更多文字</div>
      </div>

    )
  }
}

export default connect((state) => {
  return {
    home: state.home
  }
}, { homeList, getMoreList })(HomeList);