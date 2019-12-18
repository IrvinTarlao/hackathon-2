import React from 'react';
import {HashRouter, Switch, Route } from 'react-router-dom';
import Map from './components/Map'

// import Home from './containers/Home';
// import Search from './containers/Home';
// import Activity from './containers/Home';
// import Cart from './containers/Home';
// import NewActivity from './containers/Home';

function App() {
  return (
    <div className="App">
     <HashRouter>
        <Switch>
        <Map
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBrWwzj5tzzX9MpBFXqfkKjzFYZIoGUuwI`}
            loadingElement={<div id="div1" style={{ height: `100%` }} />}
            containerElement={<div id="div2" style={{ height: `71%`, position:"fixed", top:"219px", right:0, width: "100vw", zIndex:"1"}} />}
            mapElement={<div id="div3" style={{ height: `100%` }} />}
            // currentLocation={currentLocation}
            // filteredNurseries={filteredNurseries}
            // distanceFilter={distanceFilter}
        />
            {/* <Route exact path="/" component={Home}></Route>
            <Route path="/search" component={SearchPage}></Route>
            <Route path="/activity" component={Activity}></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route path="/newactivity" component={NewActivity}></Route> */}
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
