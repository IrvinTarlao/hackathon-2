import React, { useState } from 'react';
import Map from "../components/Map";
import { Row, Col, FormGroup, Form, Input } from 'reactstrap';
import { Container, Card, CardBody, CardTitle, CardSubtitle, CardText, Button, CardImg } from 'reactstrap';
import NavBar from '../components/NavBar'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faChild } from "@fortawesome/free-solid-svg-icons";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import ButtonOpenModalActivity from '../components/ButtonOpenModalActivity'


const Search = (props) => {
  
  const { activities, filtre, dispatch } = props;
  const [search, setSearch] = useState('')
  const [ newFilter, setNewFilter ] = useState(activities.filter(item=>item.activity_title.includes(search)));
  // const { activities, dispatch } = props;
  // const [ newFilter, setNewFilter ] = useState(activities);
  
  const handleChange = (event) => {
    event.preventDefault()
    setSearch(event.target.value)
    setNewFilter(activities.filter(item=>item.activity_title.includes(search)))
  } 
  
  const DisplayCards = ({newFilter}) => {

    return newFilter.length > 0 && newFilter.map((item, i) =>
      <Card className="mb-2 mt-2 d-block" key={`newfilter-${i}`}>
        <Row >
          <Col className="col" >
            <CardImg className="m-1"
              src={item.avatar}
              alt="Card image cap" />
          </Col>
          <Col className="col-8">
            <CardBody className="p-0">
              <CardTitle  className="pt-2"><h5>{item.activity_title}</h5></CardTitle>
              <CardSubtitle className="p-0"><h6>avec {item.first_name}</h6></CardSubtitle>
              <CardText className="pb-2">
                <em>{item.category}</em><br /><br />
                <tbody>
                  <tr>
                    <td>
                      <FontAwesomeIcon icon={faHome} />&nbsp;{item.location}
                    </td>
                    <td>
                      <FontAwesomeIcon icon={faClock} />&nbsp;{item.activity_duration}&nbsp;heure{item.activity_duration > 1 && 's'}
                    </td>
                  </tr>
                  <tr>
                    <td><FontAwesomeIcon icon={faChild} />&nbsp;{item.activity_age_min} - {item.activity_age_max}&nbsp;ans&nbsp;</td>
                    <td><FontAwesomeIcon icon={faCoins} />&nbsp;{item.price}&nbsp;euros</td>
                  </tr>
                </tbody>
                <ButtonOpenModalActivity activity={item}/>
              </CardText>
            </CardBody>
          </Col>
        </Row>
      </Card>
    );
  }

  return (    
    <>
    <NavBar/>
      <div className="search"> 
        <Container fluid id="input_search">
          <Row className="mx-auto mt-12" >
            <Col className="col-12">
              
                
                  <Input 
                    onChange={handleChange}
                    value={search}
                    type="search"
                    name="search"
                    id="exampleSearch"
                    placeholder="Tapez un truc... mais pas un enfant !"
                  />
                
              
            </Col>
          </Row>
        </Container>   
        <Container fluid id="Cards">
          <Row className="mx-auto mt-3" >
            <Col className="col-12" id="test">
              <Row >
                <Col className="col-5" >
                  <DisplayCards newFilter={newFilter}/>
                </Col>
                <Col className="col-7">
                  <Map
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBrWwzj5tzzX9MpBFXqfkKjzFYZIoGUuwI`}
                    loadingElement={<div id="div1" style={{ height: `100%` }} />}
                    containerElement={<div id="div2" style={{ height: `80%`, position:"fixed", bottom:"10px", right:"10px", width: "57vw", zIndex:"1"}} />}
                    mapElement={<div id="div3" style={{ height: `100%` }} />}
                    activities={newFilter}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  activities: state.activities,
  filter: state.filter
});

export default connect(mapStateToProps)(Search);
