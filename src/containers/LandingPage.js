import React, { Component } from "react";
import { NavLink } from "react-router-dom";
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
import NavBar from '../components/NavBar'
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faChild } from "@fortawesome/free-solid-svg-icons";
import { faCoins } from "@fortawesome/free-solid-svg-icons";

class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const activitiesLp = [
      this.props.activities[
        Math.floor(Math.random() * this.props.activities.length)
      ],
      this.props.activities[
        Math.floor(Math.random() * this.props.activities.length)
      ],
      this.props.activities[
        Math.floor(Math.random() * this.props.activities.length)
      ]
    ];

    return (
      <div className="landingPage">
        <NavBar/>
        <div className="lpsection-home" key={Math.random()}>
          <Container key={Math.random()}>
            <Row key={Math.random()}>
              <Col key={Math.random()}>
                <div className="lp-fond-txt" key={Math.random()}>
                  <h1 className='main-title'>KidDo</h1>
                  <h3 className='second-title'>Mon cadeau ? </h3>
                  <h3 className='second-title'>C moa ki la fé !</h3>

                  <Button color="primary" size="lg" style={{marginTop: "2vh"}}>Découvrir nos activités</Button>
                </div>
              </Col>
              <Col key={Math.random()}></Col>
            </Row>
          </Container>
        </div>
        <div className="lpsection-examples" key={Math.random()}>
          <Container key={Math.random()}>
        <div className="lp-fond-txt" key={Math.random()}>
        <h2 className="second-title">Venez en prendre plein les mirettes</h2>
          </div>
            <Row key={Math.random()}>
              {activitiesLp.map((activity, index) => (
                <Col xs="12" md="4" key={Math.random()}>
                  <div className="card-item">
                    <Card key={Math.random()}>
                      <CardImg
                         key={Math.random()}
                        top
                        width="100%"
                        src={activity.activity_picture}
                        alt={activity.title}
                      />
                      <CardBody>
                        <CardTitle key={Math.random()}>
                          <h4 className="card-title">{activity.activity_title}</h4>
                        </CardTitle>

                        <CardSubtitle key={Math.random()}>
                          {activity.category.map(cat=>(<span key={Math.random()}>
                            <em>{cat}</em>
                            &nbsp;
                            </span>
                            ))}
                        </CardSubtitle>
                        <CardText key={Math.random()}>
                          <FontAwesomeIcon icon={faHome} />
                          &nbsp;{activity.location} <br />
                          <FontAwesomeIcon icon={faClock} />
                          &nbsp;{activity.activity_duration} heure(s) <br />
                          <FontAwesomeIcon icon={faChild} />
                          &nbsp;{activity.activity_age_min} -{" "}
                          {activity.activity_age_max} ans <br />
                          <FontAwesomeIcon icon={faCoins} />
                          &nbsp;{activity.price} euros
                        </CardText>
                        <Button color="primary">En savoir plus</Button>
                      </CardBody>
                    </Card>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>

        <div className="lpsection-proposez" key={Math.random()}>
          <Container key={Math.random()}>
            <Row key={Math.random()}>
              <Col sm="12" md="6" key={Math.random()}>
                <div className="lp-fond-txt" key={Math.random()}>
                  <h2 className="second-title">Proposez votre activité</h2>
                  <p style={{marginTop:"2vh"}}>
                    Vous avez un talent particulier pour la couture, la
                    programmation, l'ébénisterie, la peinture, la pirogravure
                    sur palette ? Vous souhaitez proposer un atelier pour les
                    enfants, avec ou sans leurs parents ? {" "}
                  </p>
                  <Button color="primary" size="lg" style={{marginTop: "2vh"}}><NavLink className="navlink" to={"/newactivity"}>En voiture Simone !</NavLink></Button>
                </div>
              </Col>
              <Col sm="12" md="6"></Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

function mapState(state) {
  return { activities: state.activities };
}

export default connect(mapState)(LandingPage);
