import React from 'react';
import { connect } from 'react-redux';
import '../App.css';
import { Col, Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';

const NewActivity = (form, dispatch) => {

    const submitForm = (event) => {
        event.preventDefault()
        let data = Array.from(new FormData(event.target).entries())
        // dispatch({type: 'SUBMIT', id: Array.from(data.entries())[0]})
        console.log(data)
        
    }

    return (
        <div className="newActivityContainer">
            <Form onSubmit={submitForm}>
                <FormGroup row>
                    <Col lg={5} sm={12}>
                        <div className="newActivityID">
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
                                <Label for="zip" sm={2}>Code postal</Label>
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
                    <Col lg={7} sm={12}>
                        <div className="newActivityDescription">
                            <FormGroup row>
                                <Label for="activity_title" sm={2}>Titre</Label>
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
                                <Col sm={10}>
                                    <Input type="select" name="activity_age_min" id="activity_age_min">
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="activity_age_max" sm={2}>Age maximum</Label>
                                <Col sm={10}>
                                    <Input type="select" name="activity_duration" id="activity_age_max">
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="category" sm={2}>Categorie</Label>
                                <div>
                                    <Col sm={10}>
                                        <CustomInput type="checkbox" id="category1" label="Art" />
                                        <CustomInput type="checkbox" id="category2" label="Bricolage" />
                                        <CustomInput type="checkbox" id="category3" label="Cosmetique" />
                                        <CustomInput type="checkbox" id="category4" label="Recyclage" />
                                        <CustomInput type="checkbox" id="category5" label="Technologie" />
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
                                        <CustomInput type="checkbox" id="dispo1" label="Lundi" />
                                        <CustomInput type="checkbox" id="dispo2" label="Mardi" />
                                        <CustomInput type="checkbox" id="dispo3" label="Mercredi" />
                                        <CustomInput type="checkbox" id="dispo4" label="Jeudi" />
                                        <CustomInput type="checkbox" id="dispo5" label="Vendredi" />
                                        <CustomInput type="checkbox" id="dispo6" label="Samedi" />
                                        <CustomInput type="checkbox" id="dispo7" label="Dimanche" />
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
                                <Col sm={{ size: 10, offset: 2 }}>
                                    <Button>Submit</Button>
                                </Col>
                            </FormGroup>
                        </div>
                    </Col>
                </FormGroup>
            </Form>
        </div>
    )
}

const mapStateToProps = state => ({
    form: state.newActivForm
})

export default connect(mapStateToProps)(NewActivity)