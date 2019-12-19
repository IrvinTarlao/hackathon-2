import React from 'react';
import { Row, Col, FormGroup, Form, Label, Input } from 'reactstrap';
// import Filter from './containers/Filter'; // A faire
// import Map from './containers/Map' // Fait par Irvin
// import Cards from './containers/Cards'; // A faire

function Search() {

  return (
    <div>
      <Row>
        <Col col="6">
          <Form>
            <FormGroup>
              {/* <Label for="exampleSearch">Search</Label> */}
              <Input
                type="search"
                name="search"
                id="exampleSearch"
                placeholder="Tapez un truc..."
              />
            </FormGroup>
          </Form>
          <div>filter</div>
          <div>map</div>
          cards
        </Col>
      </Row>
    </div>
  );

};

export default Search;
