import React from "react";
import { Container, Jumbotron, Button, Row, Col } from "reactstrap";
import "./concept.css";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChild } from "@fortawesome/free-solid-svg-icons";
import { faRecycle } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

export default class Concept extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="concept_second_img"></div>
        <Container>
          <Row>
            <Col>
              <h4
                className="second-title"
                style={{ textAlign: "center", paddingTop: "2vh" }}
              >
                Nos valeurs
              </h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="concept-item">
                <p style={{ textAlign: "justify" }}>
                  <span className="lettrine">
                    <FontAwesomeIcon icon={faRecycle} className="main-title" />
                  </span>
                  <h3 className="card-title">Réparer plutôt que jeter</h3>
                  Metuentes igitur idem latrones Lycaoniam magna parte
                  campestrem cum se inpares nostris fore congressione stataria.
                  Metuentes igitur idem latrones Lycaoniam magna parte
                  campestrem cum se inpares nostris fore congressione stataria.
                </p>
              </div>
            </Col>
            <Col>
              <div className="concept-item">
                {" "}
                <p style={{ textAlign: "justify" }}>
                  <span className="lettrine">
                    <FontAwesomeIcon icon={faChild} className="main-title" />
                  </span>
                  <h3 className="card-title">Des enfants consomm' acteurs</h3>
                  Metuentes igitur idem latrones Lycaoniam magna parte
                  campestrem cum se inpares nostris fore congressione stataria.
                  Metuentes igitur idem latrones Lycaoniam magna parte
                  campestrem cum se inpares nostris fore congressione stataria.
                </p>
              </div>
            </Col>
            <Col>
              <div className="concept-item">
                {" "}
                <p style={{ textAlign: "justify" }}>
                  <span className="lettrine">
                    <FontAwesomeIcon
                      icon={faHandshake}
                      className="main-title"
                    />
                  </span>
                  <h3 className="card-title">Favoriser l'entraide</h3>
                  Metuentes igitur idem latrones Lycaoniam magna parte
                  campestrem cum se inpares nostris fore congressione stataria.
                  Metuentes igitur idem latrones Lycaoniam magna parte
                  campestrem cum se inpares nostris fore congressione stataria.
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className='centered-button'>
                <Button color="primary" style={{ marginTop: "2vh" }}>
                  <NavLink className="navlink" to={"/Search"}>
                    Découvrir nos activités !
                  </NavLink>
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
