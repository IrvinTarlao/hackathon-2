import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./containers/LandingPage";
// import Search from './containers/Home';
// import Activity from './containers/Home';
// import Cart from './containers/Home';
import NewActivity from './containers/NewActivity';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          {/* <Route path="/search" component={Search}></Route>
          <Route path="/activity" component={Activity}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/newactivity" component={NewActivity}></Route> */} */}
        </Switch> 
     </HashRouter>
    </div>
  );
}

export default App;
