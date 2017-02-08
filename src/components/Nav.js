import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Nav extends Component {

  render() {
    return (
      <div className="nav">
      <nav>
        <Link to="/">返回首页</Link>
      </nav>
      </div>
    )
  }
}
