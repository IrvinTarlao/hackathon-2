import React, { useState } from 'react';
import Map from "../components/Map";
import { Row, Col, FormGroup, Form, Input } from 'reactstrap';
import { Container, Card, CardBody, CardTitle, CardSubtitle, CardText, Button, CardImg } from 'reactstrap';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faChild } from "@fortawesome/free-solid-svg-icons";
import { faCoins } from "@fortawesome/free-solid-svg-icons";


const Search = (props) => {
  
  const { activities, filter, dispatch } = props;
  const [ newFilter, setNewFilter ] = useState(activities);
  
  const handleChange = (event) => {
    
    setNewFilter('')
    let ret = ''
    if (newFilter.length !== 0) {
      ret = newFilter.filter((i, index, test) => {
        if (JSON.stringify(i).toLowerCase().includes((event.target.value).toLowerCase())) {
          return i;
        }
      })
      setNewFilter(ret)
      dispatch({
        type: "FILTER_VALUE",
        filter: event.target.value
        })
      };
  } 
  
  const displayCards = (arrays) => {

    return arrays.map(item =>
      <Card className="mb-2 mt-2 d-block" key={Math.floor(Math.random())*100}>
        <Row>
          <Col className="col">
            {/* <a href="lien modale"> */}
              <CardImg className="m-1"
                src={item.avatar}
                alt="Card image cap" />
            {/* </a> */}
          </Col>
          <Col className="col-8">
            <CardBody className="p-0">
              <CardTitle  className="pt-2"><h5>{item.activity_title}</h5></CardTitle>
              <CardSubtitle className="p-0"><h6>avec {item.first_name}</h6></CardSubtitle>
              <CardText className="pb-2">
                <em>{item.category}</em><br />
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
                <Button className="p-1 m-1 float-right">En savoir plus</Button>
              </CardText>
            </CardBody>
          </Col>
        </Row>
      </Card>
    );
  }

  return (
    <div className="search"> 
      <Container fluid>
        <Row className="mx-auto mt-3">
          <Col className="col-12">
            <Form>
              <FormGroup>
                <Input
                  onChange={(event) => handleChange(event)}
                  type="search"
                  name="search"
                  id="exampleSearch"
                  placeholder="Tapez un truc... mais pas un enfant !"
                />
              </FormGroup>
            </Form>
            <Row>
              <Col className="col-6 md-6">
                {displayCards(newFilter)}
              </Col>
              <Col className="col-6">
                <Map
                  googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBrWwzj5tzzX9MpBFXqfkKjzFYZIoGUuwI`}
                  loadingElement={<div id="div1" style={{ height: `100%` }} />}
                  containerElement={<div id="div2" style={{ height: `80%`, position:"fixed", bottom:"10px", right:"10px", width: "49vw", zIndex:"1"}} />}
                  mapElement={<div id="div3" style={{ height: `100%` }} />}
                  activities={newFilter}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = state => ({
  activities: state.activities,
  filter: state.filter
});

export default connect(mapStateToProps)(Search);
