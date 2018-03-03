'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import HomeUserPage from './components/HomeUser';
import PhotoPage from './components/PhotoPage';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <Route path="user/:id" component={HomeUserPage}/>
    <Route path="photo/:id" component={PhotoPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
