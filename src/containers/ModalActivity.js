import React, { Component } from 'react';
import './modalActivity.css';
import {
    Button,
    Jumbotron,
} from "reactstrap";
import {connect} from 'react-redux';
import {isSelected} from '../actions';



class ModalActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {};
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
                            <Jumbotron className="modalActivity_jumbotron">
                                <h4 className="display-3">{activity.activity_title}</h4>
                                <h5>Cette activité se situe à {activity.location}</h5>
                                <p>Lors de cet atelier avec {activity.first_name} {activity.last_name} de {activity.activity_duration} heure(s), vous aurez l'occasion de passer un moment en famille tout en vous cultivant. Pour pouvoir profiter pleinement de ce moment, cette activités vous est conseillée pour des enfants âgés de {activity.activity_age_min} à {activity.activity_age_max} ans.
                                </p>
                                <h5>Déroulement de l'atelier :</h5>
                                <p>citia, veteribus sint anteponendi, ut equis vetulis teneros anteponere solemus. Indigna homine dubitatio! Non enim debent esse amicitiarum sicut aliarum rerum satietates; veterrima quaeque, ut ea vina, quae vetustatem ferunt, esse debet suavissima; verumque illud est, quod dicitur, multos modios salis simul edendos esse, ut amicitiae munus expletu</p>
                            </Jumbotron>
                        </div>
                        <Button color="primary" size="lg" style={{marginTop: "2vh"}} onClick={()=>{this.props.isSelected(activity)}}>Mettre dans le panier</Button>
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