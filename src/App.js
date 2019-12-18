import React from 'react';
import {HashRouter, Switch, Route } from 'react-router-dom';
// import Home from './containers/Home';
// import Search from './containers/Home';
// import Activity from './containers/Home';
// import Cart from './containers/Home';
// import NewActivity from './containers/Home';
import Concept from './components/Concept'

function App() {
  return (
    <div className="App">
     <HashRouter>
        <Switch>
            {/* <Route exact path="/" component={Home}></Route>
            <Route path="/search" component={Search}></Route>
            <Route path="/activity" component={Activity}></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route path="/newactivity" component={NewActivity}></Route> */}
            <Route path="/concept" component={Concept}></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
