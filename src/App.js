import React from 'react';
import {HashRouter, Switch, Route } from 'react-router-dom';
// import List from './containers/Test'
import Search from './containers/Search';
// import Home from './containers/Home';
// import Activity from './containers/Home';
// import Cart from './containers/Home';
// import NewActivity from './containers/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <List /> */}
     <HashRouter>
        <Switch>
          <Route path="/search" component={Search}></Route>
            {/* <Route exact path="/" component={Home}></Route>
            <Route path="/activity" component={Activity}></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route path="/newactivity" component={NewActivity}></Route> */}
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
