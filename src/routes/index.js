import React from 'react';
import { Router, Route, IndexRoute} from 'react-router';
import Home from '../containers/Home';
import Detail from '../containers/Detail';
import Frame from '../components/Frame';

const routes = hashHistory => (
  <Router history={hashHistory}>
    <Route path="/" component={Frame} >
      <IndexRoute component={Home} />
      <Route path="/detail/:id" component={Detail} />
    </Route>
  </Router>
)
export default routes;
