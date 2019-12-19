import React, {Component} from 'react';
import NavBar from './NavBar';
import { Container, Card, CardBody, CardTitle, CardSubtitle, CardText, Button, CardImg } from 'reactstrap';
import { Row, Col, FormGroup, Form, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faChild } from "@fortawesome/free-solid-svg-icons";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import ButtonOpenModalActivity from '../components/ButtonOpenModalActivity';

class Cart extends Component {
    constructor(props) {
      super(props);
      this.state = {
          isClicked:false
      }
    }

    render() {

    
    const { activities } = this.props;

    const priceSum = () => {
        let sum = 0;
        for (let i = 0; i < activities.length; i++) {
            sum += activities[i].price;
         
        } 
        return sum
    }

    const displayCards = (arrays) => {

        

        return activities.map(item =>
          <Card className="mb-2 mt-2 d-block" key={Math.floor(Math.random())*100}>
            <Row>
              <Col className="col">
                {/* <a href="lien modale"> */}
                  <CardImg className="m-1"
                    src={item.avatar}
                    alt="Card image cap" />
                {/* </a> */}
              </Col>
              <Col className="col-8">
                <CardBody className="p-0">
                  <CardTitle  className="pt-2"><h5>{item.activity_title}</h5></CardTitle>
                  <CardSubtitle className="p-0"><h6>avec {item.first_name}</h6></CardSubtitle>
                  <CardText className="pb-2">
                    <em>{item.price} €</em><br />
                    {/* <Button className="p-1 m-1 float-right">En savoir plus</Button> */}
                    {/* <ButtonOpenModalActivity activity={item}/> */}
                  </CardText>
                </CardBody>
              </Col>
            </Row>
          </Card>
        );
      }

    return (
        <div>
            <NavBar/>
            <div style={{width:"100vw", height:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
                <div style={{position:"relative", width:"70vw", height:"50vh", borderRadius:"40px", backgroundColor:"#F4F4F4", padding:"50px", display:"flex", justifyContent:"space-around", overflow:"auto"}}>

                    <div style={{display: this.state.isClicked ? "none" : "flex", width:"70vw", justifyContent:"space-evenly", alignItems:"center"}}>
                        <div style={{width:"30vw"}}>{displayCards(activities)}</div>
                        {/* <div style={{display:"flex", flexDirection:"column", alignItems:"center", height:"70px"}}>
                            <p>quantité</p>
                            <select style={{height:"20px"}}>quantité
                                <option selected value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div> */}
                        <div style={{display:"flex", flexDirection:"column", alignItems:"center", height:"70px"}}>
                            <p>Total :</p>
                            <p>{priceSum()} €</p>
                        </div>

                    </div>
                    <div style={{display: this.state.isClicked ? "flex" : "none", width:"70vw", justifyContent:"space-evenly", alignItems:"center"}}>
                        <div style={{width:"30vw"}}>input</div>
                        {/* <div style={{display:"flex", flexDirection:"column", alignItems:"center", height:"70px"}}>
                            <p>quantité</p>
                            <select style={{height:"20px"}}>quantité
                                <option selected value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div> */}


                    </div>
                    <Button 
                        style={{position:"absolute", bottom:"20px", right:"20px", height:"50px", borderRadius:"40px"}} 
                        onClick={()=>this.setState({
                            isClicked:true
                        })}
                    >Paiement</Button>

                </div>
            </div>
            
        </div>
    )
}
}


const mapStateToProps = state => ({
    activities: state.activitySelected,
  });
  
export default connect(mapStateToProps)(Cart);