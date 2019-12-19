import React, { Component } from 'react';
import { Row, Col, FormGroup, Form, Label, Input } from 'reactstrap';
import { Container, CardColumns, Card, CardBody, CardTitle, CardSubtitle, CardText, Button, CardImg } from 'reactstrap';
import { connect } from 'react-redux';

// import Filter from './containers/Filter'; // A faire
// import Map from './containers/Map' // Fait par Irvin
// import Cards from './containers/Cards'; // A faire

class Search extends Component {
  
  displayCards = () => {
    const { activities, dispatch } = this.props;
    console.log(activities)

    return activities.map(item =>
      <Card className="mb-2 mt-2 d-block">
        <Row>
          <Col className="col">
            <a href="test">
              <CardImg className="m-1"
                src={item.avatar}
                alt="Card image cap" />
            </a>
          </Col>
          <Col className="col-8">
            <CardBody className="p-0">
              <CardTitle  className="pt-2"><h5>{item.activity_title}</h5></CardTitle>
              <CardSubtitle className="p-0"><h6>avec {item.first_name}</h6></CardSubtitle>
              <CardText className="pb-2">
                {item.category}<br />
                {item.activity_duration}&nbsp;heure{item.activity_duration > 1 && 's'}<br />
                {item.activity_age_min} - {item.activity_age_max}&nbsp;ans <br />
                <Button className="p-1 m-1 float-right">En savoir plus</Button>
              </CardText>
            </CardBody>
          </Col>
        </Row>
      </Card>
    );
  }

  render(){

  return (
    <div className="search"> 
    <Container>
      <Row className="mx-auto mt-3">
        <Col className="col-12">
          <Form>
            <FormGroup>
              {/* <Label for="exampleSearch">Search</Label> */}
              <Input
                type="search"
                name="search"
                id="exampleSearch"
                placeholder="Tapez un truc... mais pas un enfant !"
              />
            </FormGroup>
          </Form>
          <Row>
            <Col className="col-6 md-6">
              {this.displayCards()}
            </Col>
          <Col className="col-6 md-6">
            <div>MAP</div>
          </Col>
          </Row>
        </Col>
      </Row>
      </Container>
    </div>
  );
  }
};

const mapStateToProps = state => ({
  activities: state.activities,
  filter: state.filter
});
export default connect(mapStateToProps)(Search);
