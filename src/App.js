import React from 'react';
import {HashRouter, Switch, Route } from 'react-router-dom';
import Search from './containers/Search';
import LandingPage from "./containers/LandingPage";
import Concept from './components/Concept'
import './App.css';
import NewActivity from './containers/NewActivity';
// import Cart from './containers/Home';

function App() {
  return (
    <div className="App">
      {/* <List /> */}
     <HashRouter>
        <Switch>
          <Route path="/search" component={Search}></Route>
          <Route exact path="/" component={LandingPage}></Route>
          <Route path="/concept" component={Concept}></Route>
          {/* <Route path="/cart" component={Cart}></Route>         */}
          <Route path="/newactivity" component={NewActivity}></Route>
        </Switch> 
     </HashRouter>
    </div>
  );
}

export default App;
