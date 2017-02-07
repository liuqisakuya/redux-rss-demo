import React, { PropTypes, Component } from 'react';
import Preview from './Preview';

export default class PreviewList extends Component {
  static PropTypes = {
    loading: PropTypes.bool,
    error: PropTypes.bool,
    articleList: PropTypes.arrayOf(PropTypes.object),
    loadArticles: PropTypes.func,
  };

  componentDidMount() {
    this.props.loadArticles();
  }

  render() {
    const { loading, error, articleList} = this.props;
    //console.log('PreviewList', this.props);
    if (error) {
      return <p className="message">Oops, something is wrong.</p>
    }
    if (loading) {
      return <p className="message">loading...</p>
    }
    return (
      <div>
        <ul className="list-item-box">
        {articleList.data.map(item => {
         return (
           <li className="list-item" key={item.id}>
             <Preview {...item} key={item.id} push={this.props.push} more={this.props.more} />
           </li>
         )
       })}
        </ul>
      </div>
    )
  }
}
