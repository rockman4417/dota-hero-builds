import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {Switch} from 'react-router'; 
import { HeroSearch } from './components/heroSearch/HeroSearch.js';
import './App.scss';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={HeroSearch} />
    </Switch>
  </BrowserRouter>
);

export default App;
