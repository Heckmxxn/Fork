import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';

import Header from '../components/Header';
import Home from '../pages/Home';
import Recipe from '../pages/Recipe';
import Search from '../pages/Search';
import Favourites from '../pages/Favourites';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Home} isClosed={false} />
      <MyRoute exact path="/recipe/" component={Recipe} isClosed={false} />
      <MyRoute exact path="/search/" component={Search} isClosed={false} />
      <MyRoute exact path="/favourites" component={Favourites} isClosed />
      <MyRoute exact path="/login/" component={Login} isClosed={false} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
