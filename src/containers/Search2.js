import React, { Component } from "react";
import Map from "../components/Map";
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render() {

    const { activities } = this.props;

    return (
      <div>
        <NavBar />
        <Map
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBrWwzj5tzzX9MpBFXqfkKjzFYZIoGUuwI`}
            loadingElement={<div id="div1" style={{ height: `100%` }} />}
            containerElement={<div id="div2" style={{ height: `71%`, position:"fixed", top:"219px", right:0, width: "100vw", zIndex:"1"}} />}
            mapElement={<div id="div3" style={{ height: `100%` }} />}
            activities={activities}
        />

      </div>
    );
  }
}
const mapStateToProps = state => ({
    activities: state.activities
  });
  export default connect(mapStateToProps)(Search);
