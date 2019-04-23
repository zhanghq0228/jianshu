import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width:960px;
  margin:0 auto;
  overflow: hidden;
  .homeLeft{
    float:left;
    margin-left:15px;
    padding-top:30px;
    width:620px;
    .bannerImg{
      width:100%;
    }
  }
  .homeRight{
    float:right;
    width:280px;
  }
  .backTop{
    font-size:12px;
    position:fixed;
    right:100px;
    bottom:100px;
    width:60px;
    height:60px;
    line-height:60px;
    text-align:center;
    border:1px solid #ccc;
  }
`

//轮播
export const TopicWrapper = styled.div`
  color:red;
  overflow: hidden;
  padding:20px 0 10px 0;
  .topicItem{
    float: left;
    background:#f7f7f7;
    line-height:32px;
    font-size:14px;
    color:#000;
    border:1px solid #dcdcdc;
    border-radius:5px;
  }
`

//列表
export const ListWrapper = styled.div`
  width:100%;
  .loadMore{
    width:100%;
    height:40px;
    line-height:40px;
    margin:30px 0;
    background:#a5a5a5;
    text-align:center;
    border-radius:20px;
    cursor: pointer;
  }
`

//热搜
export const RecommentWrapper = styled.div`
  .RecommentWrapper{
    margin:30px 0;
    cursor: pointer;
    img{
      width:280px;
      height:50px;
      margin-bottom:5px;
      
    }
  }
`