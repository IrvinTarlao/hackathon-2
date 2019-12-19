import React, { Component } from 'react';
import './modalActivity.css';
import {
    Button,
    Jumbotron,
} from "reactstrap";
import {
    CardText,
  } from "reactstrap";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faHome } from "@fortawesome/free-solid-svg-icons";
  import { faClock } from "@fortawesome/free-solid-svg-icons";
  import { faChild } from "@fortawesome/free-solid-svg-icons";
  import { faCoins } from "@fortawesome/free-solid-svg-icons";
import {connect} from 'react-redux';
import {isSelected} from '../actions';
import validation from '../img/validation.gif'



class ModalActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAddCart: false,
        };
    }

    selectedActivityAndCloseModal= () =>{
        const { activity } = this.props;
        let { isAddCart } = this.state;
        this.props.isSelected(activity);
        this.props.closeModal();
        isAddCart=true;
        this.setState({isAddCart});
        setTimeout(()=>{
                isAddCart=false;
                this.setState({isAddCart});
            }, 3000);
        
    }

    render() {
        const { showModalActivity, activity } = this.props;
        const isAddStyle={display:"none"};
        const textIsAddStyle={
                width:"100px",
                height:"100px",
                backgroundImage: "url(https://images.unsplash.com/photo-1502355984-b735cb2550ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)",
            }
        return (
            <>
                <div className="firstModalActivity" style={{ display: showModalActivity ? "flex" : "none" }} onClick={() => this.props.closeModal()}></div>
                {showModalActivity ?
                    <aside className="secondModalActivity" role="dialog">
                        <div style={this.state.isAddCart? isAddStyle:null}>
                            <div className="close-container " onClick={this.props.closeModal}>
                                <div className="leftright"></div>
                                <div className="rightleft"></div>
                                <label className="close" ></label>
                            </div>
                            <div className="flex">
                                <img src={activity.activity_picture} className="modalActivity_img"></img>
                                <div>
                                    <Jumbotron className="modalActivity_jumbotron">
                                        <h4 className="display-3">{activity.activity_title}</h4>
                                
                                        <h5>Cette activité se situe à {activity.location}</h5>
                                        <p>Lors de cet atelier avec {activity.first_name} {activity.last_name} de {activity.activity_duration} heure(s), vous aurez l'occasion de passer un moment en famille tout en vous cultivant. Pour pouvoir profiter pleinement de ce moment, cette activités vous est conseillée pour des enfants âgés de {activity.activity_age_min} à {activity.activity_age_max} ans.
                                        </p>
                                        <br />
                                        <br />
                                        <CardText>
                                            <FontAwesomeIcon icon={faHome} className="espacer_icones" />&nbsp;{activity.location}<FontAwesomeIcon icon={faClock} className="espacer_icones" />&nbsp;{activity.activity_duration} heure(s)<FontAwesomeIcon icon={faChild} className="espacer_icones" />&nbsp;{activity.activity_age_min} -{" "}{activity.activity_age_max} ans<FontAwesomeIcon icon={faCoins} className="espacer_icones" />&nbsp;{activity.price} euros
                                        </CardText>
                                        <br />
                                    </Jumbotron>
                                </div>
                            </div>
                            <Button color="primary" size="lg" style={{marginTop: "2vh", bottom:"10vh", right:"15vw", fontSize:"1.2em"}} onClick={this.selectedActivityAndCloseModal}>Sélectionner cette activité</Button>
                        </div>
                        {this.state.isAddCart ? 
                            <div style={textIsAddStyle}>
                                    <img style={{width:"80vw",height:"auto"}}src="https://images.unsplash.com/photo-1502355984-b735cb2550ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
                                    <div>
                                        <p style={{position:"absolute", top:"30%", left:"55%", transform: "translate(-50%,-50%)", fontSize:"2em", color:"black"}}>Bien ajouté au panier</p>
                                        <img src={validation} style={{position:"absolute", top:"30%", left:"35%", transform: "translate(-50%,-50%)", width:"6em", height:"auto", borderRadius:"50%"}}/>
                                    </div> 
                            </div> : null}
                    </aside> : null
                }
            </>
        )
    }
}

const mdtp = dispatch => ({
    isSelected : activity => dispatch(isSelected(activity)),
})

export default connect(null,mdtp)(ModalActivity);