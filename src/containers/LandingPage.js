import React, { Component } from "react";
import "../App.css";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import { connect } from 'react-redux'

class LandingPage extends Component {
    constructor(props){
        super(props);
    }
    
    
    
    render() {

        const activitiesLp = 
        [this.props.activities[Math.floor(Math.random() * this.props.activities.length)],
        this.props.activities[Math.floor(Math.random() * this.props.activities.length)],
        this.props.activities[Math.floor(Math.random() * this.props.activities.length)]]

        return (
      <div className="landingPage">
        <div className="lpsection-home">
          <Container>
            <div className="lp-maintext-section">
              <h1>KidDo</h1>
              <h3>Mon cadeau ? </h3>
              <h3>C'est moi qui l'a fé !</h3>
            </div>
            <div>
              <Button>Découvrir</Button>
            </div>
          </Container>
        </div>
        <div className="lpsection-examples">
          <h2>Venez en prendre plein les mirettes</h2>
          <Container>
            <Row>
                {activitiesLp.map((activity, index) => 
                     <Col xs="12" md="4" key={index}>
                     <div className="card-item">
                       <Card>
                         <CardImg
                           top
                           width="100%"
                           src={activity.avatar}
                           alt={activity.title}
                         />
                         <CardBody>
                           <CardTitle>{activity.activity_title}</CardTitle>
                           <CardSubtitle>{activity.category}</CardSubtitle>
                           <CardText>
                           {activity.location} <br/>
                           {activity.duration} heures <br/>
                           {activity.activity_age_min} - {activity.activity_age_max} ans <br/>
                           Prix : {activity.price} euros

                           </CardText>
                           <Button>En savoir plus</Button>
                         </CardBody>
                       </Card>
                     </div>
                   </Col>
                    
                    )}

            </Row>
          </Container>
        </div>

        <div className="lpsection-proposez">
          <Container>
            <Row>
              <Col sm="12" md="6">
                <h2>Proposez votre activité</h2>
                <p>
                  Vous avez un talent particulier pour la couture, la
                  programmation, l'ébénisterie, la peinture, la pirogravure sur
                  palette ? Vous souhaitez proposer un atelier pour les enfants,
                  avec ou sans leurs parents ? En voiture Simone !{" "}
                </p>
                <Button>Proposez</Button>
              </Col>
              <Col sm="12" md="6"></Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

function mapState (state) {
    return { activities: state.activities }
  }
  
  export default connect(mapState)(LandingPage)