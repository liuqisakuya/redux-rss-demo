import React, { PropTypes, Component } from 'react';
import Article from '../components/Article';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { listActions } from '../redux/action';
import '../styles/Detail.css'

class Detail extends Component {

  render() {
    // console.log('Detail', this.props);
    return (
      <div style={{maxWidth: '100vw'}}  className="showMyBlog" id="detail">
        <Article
        {...this.props}
        {...this.props.listActions}
         />
      </div>
    )
  }
}

export default connect(state => {
  return {
    detail: state.detail.oneArticle.data
  }
}, dispatch => {
  return {
    listActions: bindActionCreators(listActions, dispatch),
    push: bindActionCreators(push, dispatch),
  };
})(Detail);
