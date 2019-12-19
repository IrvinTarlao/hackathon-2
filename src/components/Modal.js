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
    Button
} from "reactstrap";


class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        const { showModal } = this.props;
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
                            <h1>name:{this.props.activity.first_name}</h1>
                        </div>
                    </aside> : null
                }
            </>
        )
    }
}

export default Modal;