import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import Blog from './Blog'

export default function App() {
  return (
    <BrowserRouter>
        <div class="App">
        <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Register" exact component={Register} />
            <Route path="/Login" exact component={Login} />
            <Route path="/Blog" exact component={Blog} />
        </Switch>
        </div>
    </BrowserRouter>
  );
}

