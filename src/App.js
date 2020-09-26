import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import {Switch} from 'react-router'; 
import { HeroSearch } from './components/heroSearch/HeroSearch.js';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={HeroSearch} />
    </Switch>
  </BrowserRouter>
);

export default App;
