import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import PreviewList from '../components/PreviewList';
import { listActions } from '../redux/action';
import { push } from 'react-router-redux';

class Home extends Component {

  test() {
    this.props.listActions.more(this.props.list.articleList.data, this.props.page + 1)
  }
  render() {
    return (
      <div>
        <div style={{paddingLeft: '100px', paddingTop: '6px', position: 'fixed', top: 0, fontSize: '16px'}}>
          <Link onClick={this.test.bind(this)}>加载更多</Link>
        </div>
        <PreviewList
        {...this.props.list}
        {...this.props.listActions}
        push={this.props.push}
        />
      </div>
    )
  }
}

export default connect(state => {
  return {
    list: state.home.moreList.page === 1 ? state.home.list : state.home.moreList,
    page: state.home.moreList.page ? state.home.moreList.page : state.home.list.page,
  };
}, dispatch => {
  //console.log('listActions');
  return {
    listActions: bindActionCreators(listActions, dispatch),
    push: bindActionCreators(push, dispatch),
  };
})(Home);
