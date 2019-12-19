import React, {Component} from 'react';
import Modal from './Modal';
import './buttonOpenModal.css'

class ButtonOpenModal extends Component {
    constructor(props) {
        super(props);
        this.state= {
            showModal: false,
        };
    }

    componentDidMount(){
        const focus = window.addEventListener('keydown',(e)=>{
            if(e.key === "Escape" || e.key === "Esc"){
                return this.closeModal();
            }
        });
    }

    openModal=(e)=> {
        let {showModal} = this.state;
        e.preventDefault()
        showModal = true;
        this.setState({ showModal })
    }

    closeModal=()=> {
        let {showModal} = this.state;
        showModal = false;
        setTimeout(()=>this.setState({ showModal }), 500)
    }

    render(){
        
        return(
            <div className="SectionContainer">
                <button className="button" onClick={this.openModal}>En savoir plus</button>
                <Modal showModal={this.state.showModal} closeModal={this.closeModal} />
            </div>
        )
    }
}

export default ButtonOpenModal;