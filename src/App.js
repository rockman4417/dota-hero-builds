import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {Switch} from 'react-router'; 
import { HeroSearch, ItemBuild } from './components';
import './App.scss';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={HeroSearch} />
      <Route exact path='/build' component={ItemBuild} />
    </Switch>
  </BrowserRouter>
);

export default App;
