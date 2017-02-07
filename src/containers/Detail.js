import React, { PropTypes, Component } from 'react';
import Article from '../components/Article';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { listActions } from '../redux/action';
import '../styles/Detail.css'

class Detail extends Component {

  render() {
    return (
      <div style={{maxWidth: '100vw'}}  className="showMyBlog" id="detail">
        <Article {...this.props} />
      </div>
    )
  }
}

export default connect(state => {

  let pathname = state.routing.locationBeforeTransitions.pathname.replace(/\/detail\//, '');
  let list = state.home.list.articleList.data.filter(item => {
    if (item.id === pathname) {
      return item
    }
  })
  
  return {
    list: list[0],
  }
}, dispatch => {
  return {
    listActions: bindActionCreators(listActions, dispatch),
    push: bindActionCreators(push, dispatch),
  };
})(Detail);
