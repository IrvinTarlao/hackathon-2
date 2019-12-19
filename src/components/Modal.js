import React, { Component } from 'react';
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
    Button,
    Jumbotron,
} from "reactstrap";

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        const { showModal, activity } = this.props;
        console.log(this.props)
        return (
            <>
                <div className="firstModal" style={{ display: showModal ? "flex" : "none" }} onClick={() => this.props.closeModal()}></div>
                {showModal ?
                    <aside className="secondModal" role="dialog">
                        <div class="close-container" onClick={this.props.closeModal}>
                            <div class="leftright"></div>
                            <div class="rightleft"></div>
                            <label class="close" ></label>
                        </div>
                        <div>
                            <Jumbotron>
                                <h1 className="display-3">{activity.activity_title}</h1>
                                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                                <hr className="my-2" />
                                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                                <p className="lead">
                                <Button color="primary">Learn More</Button>
                                </p>
                            </Jumbotron>
                        </div>
                    </aside> : null
                }
            </>
        )
    }
}

export default Modal;