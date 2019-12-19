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



class ModalActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    selectedActivityAndCloseModal= () =>{
        const { activity } = this.props;
        this.props.isSelected(activity);
        this.props.closeModal();
    }

    render() {
        const { showModalActivity, activity } = this.props;
        return (
            <>
                <div className="firstModalActivity" style={{ display: showModalActivity ? "flex" : "none" }} onClick={() => this.props.closeModal()}></div>
                {showModalActivity ?
                    <aside className="secondModalActivity" role="dialog">
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
                        <Button color="primary" size="lg" style={{marginTop: "2vh"}} onClick={this.selectedActivityAndCloseModal}>Sélectionner cette activité</Button>
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