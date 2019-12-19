import React, {Component} from 'react';
import ModalActivity from '../containers/ModalActivity';
import {
    Button
  } from "reactstrap";

class ButtonOpenModal extends Component {
    constructor(props) {
        super(props);
        this.state= {
            showModalActivity: false,
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
        let {showModalActivity} = this.state;
        e.preventDefault()
        showModalActivity = true;
        this.setState({ showModalActivity })
    }

    closeModal=()=> {
        let {showModalActivity} = this.state;
        showModalActivity = false;
        setTimeout(()=>this.setState({ showModalActivity }), 500)
    }

    render(){
        
        return(
            <div className="SectionContainer">
                <Button color="primary" size="lg" style={{marginTop: "2vh"}} onClick={this.openModal}>En savoir plus</Button>
                <ModalActivity showModalActivity={this.state.showModalActivity} closeModal={this.closeModal} activity={this.props.activity}/>
            </div>
        )
    }
}

export default ButtonOpenModal;