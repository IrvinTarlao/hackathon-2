import React, {Component} from 'react';
import './modal.css';
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


class Modal extends Component {
        constructor(props){
            super(props);
            this.state={};
        }

        render(){
            const {showModal} = this.props;
            return(
                <>           
                    <div className="firstModal" style={{display : showModal? "flex" : "none"}} onClick={() => this.props.closeModal()}></div>
                    {showModal ? 
                        <aside className="secondModal" role="dialog">
                        <div class="close-container" onClick={ this.props.closeModal}>
                            <div class="leftright"></div>
                            <div class="rightleft"></div>
                            <label class="close" ></label>
                        </div>
                        <Container>
            <Row>
              <Col xs="12" md="4">
                <div className="card-item">
                  <Card>
                    <CardImg
                      top
                      width="100%"
                      src="https://www.maman-plume.fr/wp-content/uploads/2019/04/shoot-7112-1080x720.jpg"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle>Activité</CardTitle>
                      <CardSubtitle>Age - Ville - Catégorie</CardSubtitle>
                      <CardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </CardText>
                      <Button>En savoir plus</Button>
                    </CardBody>
                  </Card>
                </div>
              </Col>
              <Col xs="12" md="4">
                <div className="card-item">
                  <Card>
                    <CardImg
                      top
                      width="100%"
                      src="https://www.maman-plume.fr/wp-content/uploads/2019/04/shoot-7112-1080x720.jpg"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle>Activité</CardTitle>
                      <CardSubtitle>Age - Ville - Catégorie</CardSubtitle>
                      <CardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </CardText>
                      <Button>En savoir plus</Button>
                    </CardBody>
                  </Card>
                </div>
              </Col>
              <Col xs="12" md="4">
                <div className="card-item">
                  <Card>
                    <CardImg
                      top
                      width="100%"
                      src="https://www.maman-plume.fr/wp-content/uploads/2019/04/shoot-7112-1080x720.jpg"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle>Activité</CardTitle>
                      <CardSubtitle>Age - Ville - Catégorie</CardSubtitle>
                      <CardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </CardText>
                      <Button>En savoir plus</Button>
                    </CardBody>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col xs="12" md="4">
                <div className="card-item">
                  <Card>
                    <CardImg
                      top
                      width="100%"
                      src="https://www.maman-plume.fr/wp-content/uploads/2019/04/shoot-7112-1080x720.jpg"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle>Activité</CardTitle>
                      <CardSubtitle>Age - Ville - Catégorie</CardSubtitle>
                      <CardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </CardText>
                      <Button>En savoir plus</Button>
                    </CardBody>
                  </Card>
                </div>
              </Col>
              <Col xs="12" md="4">
                <div className="card-item">
                  <Card>
                    <CardImg
                      top
                      width="100%"
                      src="https://www.maman-plume.fr/wp-content/uploads/2019/04/shoot-7112-1080x720.jpg"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle>Activité</CardTitle>
                      <CardSubtitle>Age - Ville - Catégorie</CardSubtitle>
                      <CardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </CardText>
                      <Button>En savoir plus</Button>
                    </CardBody>
                  </Card>
                </div>
              </Col>
              <Col xs="12" md="4">
                <div className="card-item">
                  <Card>
                    <CardImg
                      top
                      width="100%"
                      src="https://www.maman-plume.fr/wp-content/uploads/2019/04/shoot-7112-1080x720.jpg"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle>Activité</CardTitle>
                      <CardSubtitle>Age - Ville - Catégorie</CardSubtitle>
                      <CardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </CardText>
                      <Button>En savoir plus</Button>
                    </CardBody>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
                        </aside> : null
                    }
                </>
            )
        }
}

export default Modal;