import React, {Component} from 'react';
import Modal from './Modal';
import './buttonModal.css'

class ButtonModal extends Component {
    constructor(props) {
        super(props);
        this.state= {
            showModal: false,
            selectedActivity: {},
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
                <button className="button" onClick={this.openModal}>Bouton OpenModal pour charles</button>
                <Modal showModal={this.state.showModal} closeModal={this.closeModal} activity={this.props.activity}/>
            </div>
        )
    }
}

export default ButtonModal;