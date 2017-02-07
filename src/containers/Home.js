import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PreviewList from '../components/PreviewList';
import { listActions } from '../redux/action';
import { push } from 'react-router-redux';

class Home extends Component {
  render() {
    //console.log('home', this.props);
    return (
      <div>
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
  console.log('state', state);
  return {
    list: state.home.list,
  };
}, dispatch => {
  //console.log('listActions');
  return {
    listActions: bindActionCreators(listActions, dispatch),
    push: bindActionCreators(push, dispatch),
  };
})(Home);
