import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./containers/LandingPage";
import Search2 from "./containers/Search2.js";
// import Search from './containers/Home';
// import Activity from './containers/Home';
// import Cart from './containers/Home';
import NewActivity from './containers/NewActivity';
import Concept from './components/Concept'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route path="/search2" component={Search2}></Route>
          <Route path="/concept" component={Concept}></Route>
          {/* <Route path="/cart" component={Cart}></Route>         */}
          <Route path="/newactivity" component={NewActivity}></Route>
        </Switch> 
     </HashRouter>
    </div>
  );
}

export default App;
