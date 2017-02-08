import React, { PropTypes, Component } from 'react';

export default class Article extends Component {

  componentDidMount() {
    this.props.loadOneArticle(this.props.params.id);
  }
  
  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: this.props.detail.content}}></div>
    )
  }
}
