import React, { PropTypes, Component } from 'react';

export default class Article extends Component {

  render() {
    //console.log('Article', this.props);
    return (
      <div dangerouslySetInnerHTML={{__html: this.props.list.content}}></div>
    )
  }
}
