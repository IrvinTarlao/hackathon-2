import React, { Component } from 'react';
import './modal.css';


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
                    </aside> : null
                }
            </>
        )
    }
}

export default Modal;