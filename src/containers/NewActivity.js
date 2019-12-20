import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import '../App.css';
import './modalActivity.css';
import NavBar from '../components/NavBar'
import { Container, Row,Col, Button, Form, FormGroup, Label, Input, CustomInput, CardText, Jumbotron } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faChild } from "@fortawesome/free-solid-svg-icons";
import { faCoins } from "@fortawesome/free-solid-svg-icons";

const NewActivity = ({ activities, dispatch }) => {

    const [resum, displayResum] = useState(false)


    const submitForm = (event) => {
        event.preventDefault()
        let data = Array.from(new FormData(event.target).entries())
        // console.log(data)

        //Récupération de catégories séléctionnées
        const cat = ['art', 'bricolage', 'cosmetique', 'cuisine', 'recyclage', 'technologie']

        let filteredActivitys = []

        for (let i = 0; i < cat.length; i++) {
            if (data.find(item => item[0] === cat[i]) !== undefined) {
                filteredActivitys.push(data.find(item => item[0] === cat[i])[0])
            }
        }

        //Récupération de jours séléctionnés
        const day = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche']

        let filteredDays = []

        for (let i = 0; i < day.length; i++) {
            if (data.find(item => item[0] === day[i]) !== undefined) {
                filteredDays.push(data.find(item => item[0] === day[i])[0])
            }
        }

        const newEntry = {
            "id": activities.length + 1,
            "first_name": data.filter(item => item[0] === 'first_name')[0][1],
            "last_name": data.filter(item => item[0] === 'last_name')[0][1],
            "avatar": 'https://ca.slack-edge.com/T6SG2QGG2-UHMT26ABH-01631d2a9d69-512',
            "longitude": "4.8269787",
            "latitude": "45.7463242",
            "location": data.filter(item => item[0] === 'location')[0][1],
            "activity_title": data.filter(item => item[0] === 'activity_title')[0][1],
            "activity_picture": 'https://images.unsplash.com/photo-1465808883813-7d2959af2252?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            "activity_duration": parseInt(data.filter(item => item[0] === 'activity_duration')[0][1]),
            "activity_age_min": parseInt(data.filter(item => item[0] === 'activity_age_min')[0][1]),
            "activity_age_max": parseInt(data.filter(item => item[0] === 'activity_age_max')[0][1]),
            "category": filteredActivitys,
            "description": data.filter(item => item[0] === 'description')[0][1],
            "price": parseInt(data.filter(item => item[0] === 'price')[0][1]),
            "dispo": filteredDays
        }

        dispatch({ type: 'ADD_NEW_ACT', id: newEntry })

        displayResum(true)

    }

    return (
        <div className="newActivityContainer">
            <NavBar />
      
            <div className='newActivityForm' style={{ display: resum ? 'none' : 'block'}}>
               
                <Form onSubmit={submitForm} >
                    <FormGroup row >
                        <Col lg={{ size: 4, offset: 1 }} sm={12}>
                            <div className="newActivityID" style={{ width:"30vw", position:"absolute", left:"-30vw"}}>
                  <h2 className="second-title" style={{textAlign:'left'}}>Qui êtes vous ? </h2>
                                <FormGroup row>
                                    <Label for="last_name" sm={2}>Nom</Label>
                                    <Col sm={10}>
                                        <Input type="text" name="last_name" id="last_name" placeholder="" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="first_name" sm={2}>Prénom</Label>
                                    <Col sm={10}>
                                        <Input type="text" name="first_name" id="first_name" placeholder="" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="adresse" sm={2}>Adresse</Label>
                                    <Col sm={10}>
                                        <Input type="text" name="adresse" id="adresse" placeholder="" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="zip" sm={2}>CP</Label>
                                    <Col sm={10}>
                                        <Input type="text" name="zip" id="zip" placeholder="" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="location" sm={2}>Ville</Label>
                                    <Col sm={10}>
                                        <Input type="text" name="location" id="location" placeholder="" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="avatar" sm={2}>Avatar</Label>
                                    <Col sm={10}>
                                        <Input type="file" name="avatar" id="avatar" />
                                    </Col>
                                </FormGroup>
                            </div>
                        </Col>
                        <Col lg={6} sm={12}>
                            <div className="newActivityDescription" style={{ width:"40vw", position:"absolute", left:"2vw"}}>
                                <FormGroup row>
                                <h2 className="second-title" style={{textAlign:'left'}}>Que proposez-vous ? </h2>

                                    <Col sm={10}>
                                        <Input type="text" name="activity_title" id="activity_title" placeholder="" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="activity_duration" sm={2}>Durée</Label>
                                    <Col sm={10}>
                                        <Input type="select" name="activity_duration" id="activity_duration">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="activity_age_min" sm={2}>Age minimum</Label>
                                    <Col sm={2}>
                                        <Input type="select" name="activity_age_min" id="activity_age_min">
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                            <option>11</option>
                                            <option>12</option>
                                        </Input>
                                    </Col>
                                    <Label for="activity_age_max" sm={2}>Age maximum</Label>
                                    <Col sm={2}>
                                        <Input type="select" name="activity_age_max" id="activity_age_max">
                                        <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                            <option>11</option>
                                            <option>12</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="category" sm={2}>Categorie</Label>
                                    <div>
                                        <Col sm={10}>
                                            <CustomInput type="checkbox" name="art" id="category1" label="Art" />
                                            <CustomInput type="checkbox" name="bricolage" id="category2" label="Bricolage" />
                                            <CustomInput type="checkbox" name="cosmetique" id="category3" label="Cosmetique" />
                                            <CustomInput type="checkbox" name="cuisine" id="category4" label="Cuisine" />
                                            <CustomInput type="checkbox" name="recyclage" id="category5" label="Recyclage" />
                                            <CustomInput type="checkbox" name="technologie" id="category6" label="Technologie" />
                                        </Col>
                                    </div>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="description" sm={2}>Description</Label>
                                    <Col sm={10}>
                                        <Input type="textarea" name="description" id="description" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="price" sm={2}>Prix</Label>
                                    <Col sm={10}>
                                        <Input type="text" name="price" id="price" placeholder="" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="dispo" sm={2}>Disponibilité</Label>
                                    <div>
                                        <Col sm={10}>
                                            <CustomInput type="checkbox" name='lundi' id="dispo1" label="Lundi" />
                                            <CustomInput type="checkbox" name='mardi' id="dispo2" label="Mardi" />
                                            <CustomInput type="checkbox" name='mercredi' id="dispo3" label="Mercredi" />
                                            <CustomInput type="checkbox" name='jeudi' id="dispo4" label="Jeudi" />
                                            <CustomInput type="checkbox" name='vendredi' id="dispo5" label="Vendredi" />
                                            <CustomInput type="checkbox" name='samedi' id="dispo6" label="Samedi" />
                                            <CustomInput type="checkbox" name='dimanche' id="dispo7" label="Dimanche" />
                                        </Col>
                                    </div>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="activity_picture" sm={2}>Image</Label>
                                    <Col sm={10}>
                                        <Input type="file" name="activity_picture" id="activity_picture" />
                                    </Col>
                                </FormGroup>
                                <FormGroup check row>
                                    <Col sm={{ size: 6, offset: 3 }}>
                                        <Button color="primary" size="lg" block>Submit</Button>
                                    </Col>
                                </FormGroup>
                            </div>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
            <div className='newActivityRecap' style={{ display: resum ? 'block' : 'none' }}>
                {activities
                    .filter((item, i) => {
                        return i === activities.length - 1
                    })
                    .map((item, i) => {
                        return (
                            <div className='recapContainer'>
                                <img src={item.activity_picture} className="modalActivity_img"></img>
                                <div style={{
                                    display: 'flex',
                                    flexDirection:'column',
                                    height: '90%',
                                    justifyContent:'space-between',
                                    alignItems:'center'
                                }}>
                                    <Jumbotron className="modalActivity_jumbotron">
                                        <h4 className="display-3">{item.activity_title}</h4>

                                        <h5>Cette activité se situe à {item.location}</h5>
                                        <p>Lors de cet atelier avec {item.first_name} {item.last_name} de {item.activity_duration} heure(s), vous aurez l'occasion de passer un moment en famille tout en vous cultivant. Pour pouvoir profiter pleinement de ce moment, cette activités vous est conseillée pour des enfants âgés de {item.activity_age_min} à {item.activity_age_max} ans.
                                    </p>
                                        <br />
                                        <br />
                                        <CardText>
                                            <FontAwesomeIcon icon={faHome} className="espacer_icones" />&nbsp;{item.location}<FontAwesomeIcon icon={faClock} className="espacer_icones" />&nbsp;{item.activity_duration} heure(s)<FontAwesomeIcon icon={faChild} className="espacer_icones" />&nbsp;{item.activity_age_min} -{" "}{item.activity_age_max} ans<FontAwesomeIcon icon={faCoins} className="espacer_icones" />&nbsp;{item.price} euros
                                    </CardText>
                                        <br />
                                    </Jumbotron>
                                    <Button color="primary" style={{width: '50%'}}><NavLink className="navlink" to={"/"}>Retourner au menu</NavLink></Button>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    activities: state.activities
})

export default connect(mapStateToProps)(NewActivity)