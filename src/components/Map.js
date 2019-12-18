import React, { useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import {Button} from 'reactstrap';
import mapStyle from './mapStyle'


const activitiesData = [
    {
      "id": 1,
      "first_name": "Manon",
      "last_name": "Dumont",
      "avatar": "https://randomuser.me/api/portraits/women/89.jpg",
      "longitude": "4.859937684375041",
      "latitude": "45.752073898715146",
      "location": "Lyon",
      "activity_title": "Réparer son vélo",
      "activity_picture": null,
      "activity_duration": 2,
      "activity_age_min": 8,
      "activity_age_max": 14,
      "category": "Recyclage",
      "description": null,
      "price": 30,
      "dispo": "LMMJVS"
    },
    {
      "id": 2,
      "first_name": "Héloïse",
      "last_name": "Gaillard",
      "avatar": "https://randomuser.me/api/portraits/women/59.jpg",
      "longitude": "4.909376160937541",
      "latitude": "45.73961546958843",
      "location": "Bron",
      "activity_title": "Apprendre à coder un jeu",
      "activity_picture": null,
      "activity_duration": 4,
      "activity_age_min": 12,
      "activity_age_max": 18,
      "category": "Technologie",
      "description": null,
      "price": 50,
      "dispo": "LMMJVS"
    },
    {
      "id": 3,
      "first_name": "Elias",
      "last_name": "Lacroix",
      "avatar": "https://randomuser.me/api/portraits/men/56.jpg",
      "longitude": "4.843458192187541",
      "latitude": "45.746324200000046",
      "location": "Lyon",
      "activity_title": "Réparer une peluche",
      "activity_picture": null,
      "activity_duration": 2,
      "activity_age_min": 5,
      "activity_age_max": 8,
      "category": "Recyclage",
      "description": null,
      "price": 20,
      "dispo": "LMMJVS"
    },
    {
      "id": 4,
      "first_name": "Flora",
      "last_name": "Morin",
      "avatar": "https://randomuser.me/api/portraits/women/21.jpg",
      "longitude": "4.787153260546916",
      "latitude": "45.77698241575689",
      "location": "Ecully",
      "activity_title": "Fabriquer un jouet en bois",
      "activity_picture": null,
      "activity_duration": 3,
      "activity_age_min": 6,
      "activity_age_max": 12,
      "category": "Bricolage",
      "description": null,
      "price": 50,
      "dispo": "LMMJVS"
    },
    {
      "id": 5,
      "first_name": "Louise",
      "last_name": "Lucas",
      "avatar": "https://randomuser.me/api/portraits/women/10.jpg",
      "longitude": "4.826978700000041",
      "latitude": "45.75878113197653",
      "location": "Lyon",
      "activity_title": "Fabriquer une guitare",
      "activity_picture": null,
      "activity_duration": 4,
      "activity_age_min": 8,
      "activity_age_max": 16,
      "category": "Bricolage",
      "description": null,
      "price": 60,
      "dispo": "LMMJVS"
    },
    {
      "id": 6,
      "first_name": "Tessa",
      "last_name": "Lemoine",
      "avatar": "https://randomuser.me/api/portraits/women/88.jpg",
      "longitude": "4.853071229296916",
      "latitude": "45.73961546958847",
      "location": "Lyon",
      "activity_title": "Réparer un jouet électronique ",
      "activity_picture": null,
      "activity_duration": 2,
      "activity_age_min": 10,
      "activity_age_max": 14,
      "category": "Technologie, Recyclage",
      "description": null,
      "price": 30,
      "dispo": "LMMJVS"
    },
    {
      "id": 7,
      "first_name": "Louanne",
      "last_name": "Martin",
      "avatar": "https://randomuser.me/api/portraits/women/45.jpg",
      "longitude": "4.873670594531291",
      "latitude": "45.77794021354255",
      "location": "Lyon",
      "activity_title": "Peindre un tableau",
      "activity_picture": null,
      "activity_duration": 3,
      "activity_age_min": 6,
      "activity_age_max": 12,
      "category": "Art",
      "description": null,
      "price": 25,
      "dispo": "LMMJVS"
    },
    {
      "id": 8,
      "first_name": "Léandre",
      "last_name": "Rodriguez",
      "avatar": "https://randomuser.me/api/portraits/men/57.jpg",
      "longitude": "4.829725282031291",
      "latitude": "45.776982415756976",
      "location": "Lyon",
      "activity_title": "Recycler un vêtement",
      "activity_picture": null,
      "activity_duration": 1,
      "activity_age_min": 8,
      "activity_age_max": 14,
      "category": "Recyclage",
      "description": null,
      "price": 15,
      "dispo": "LMMJVS"
    },
    {
      "id": 9,
      "first_name": "Kiara",
      "last_name": "Perez",
      "avatar": "https://randomuser.me/api/portraits/women/31.jpg",
      "longitude": "4.865430848437541",
      "latitude": "45.778897994876374",
      "location": "Villeurbanne",
      "activity_title": "Créer son déguisement",
      "activity_picture": null,
      "activity_duration": 2,
      "activity_age_min": 4,
      "activity_age_max": 10,
      "category": "Bricolage",
      "description": null,
      "price": 20,
      "dispo": "LMMJVS"
    },
    {
      "id": 10,
      "first_name": "Albane",
      "last_name": "Moulin",
      "avatar": "https://randomuser.me/api/portraits/women/23.jpg",
      "longitude": "4.820112244921916",
      "latitude": "45.79613524565125",
      "location": "Lyon",
      "activity_title": "Fabriquer un bateau à hélices",
      "activity_picture": null,
      "activity_duration": 3,
      "activity_age_min": 7,
      "activity_age_max": 12,
      "category": "Bricolage",
      "description": null,
      "price": 40,
      "dispo": "LMMJVS"
    },
    {
      "id": 11,
      "first_name": "Eloïse",
      "last_name": "Arnaud",
      "avatar": "https://randomuser.me/api/portraits/women/68.jpg",
      "longitude": "4.880537049609416",
      "latitude": "45.78751728655404",
      "location": "Villeurbanne",
      "activity_title": "Fabriquer des savons",
      "activity_picture": null,
      "activity_duration": 1,
      "activity_age_min": 6,
      "activity_age_max": 10,
      "category": "Cosmétique",
      "description": null,
      "price": 25,
      "dispo": "LMMJVS"
    },
    {
      "id": 12,
      "first_name": "Stella",
      "last_name": "Moulin",
      "avatar": "https://randomuser.me/api/portraits/women/4.jpg",
      "longitude": "4.843458192187541",
      "latitude": "45.75111565672654",
      "location": "Lyon",
      "activity_title": "Créer une bande dessinée",
      "activity_picture": null,
      "activity_duration": 3,
      "activity_age_min": 8,
      "activity_age_max": 18,
      "category": "Art",
      "description": null,
      "price": 40,
      "dispo": "LMMJVS"
    },
    {
      "id": 13,
      "first_name": "Eléna",
      "last_name": "Morel",
      "avatar": "https://randomuser.me/api/portraits/women/8.jpg",
      "longitude": "4.825605408984416",
      "latitude": "45.73290593301209",
      "location": "Lyon",
      "activity_title": "Fabrique ton skate-board",
      "activity_picture": null,
      "activity_duration": 2,
      "activity_age_min": 10,
      "activity_age_max": 16,
      "category": "Bricolage",
      "description": null,
      "price": 50,
      "dispo": "LMMJVS"
    },
    {
      "id": 14,
      "first_name": "Liam",
      "last_name": "Garnier",
      "avatar": "https://randomuser.me/api/portraits/men/91.jpg",
      "longitude": "4.872297303515666",
      "latitude": "45.78464433739321",
      "location": "Villeurbanne",
      "activity_title": "Customiser un jouet",
      "activity_picture": null,
      "activity_duration": 1,
      "activity_age_min": 4,
      "activity_age_max": 8,
      "category": "Bricolage, Recyclage",
      "description": null,
      "price": 15,
      "dispo": "LMMJVS"
    },
    {
      "id": 15,
      "first_name": "Sandra",
      "last_name": "Fleury",
      "avatar": "https://randomuser.me/api/portraits/women/28.jpg",
      "longitude": "4.918989198046916",
      "latitude": "45.75015739828569",
      "location": "Vaulx-en-Velin",
      "activity_title": "Apprendre à imprimer en 3D",
      "activity_picture": null,
      "activity_duration": 2,
      "activity_age_min": 12,
      "activity_age_max": 18,
      "category": "Technologie",
      "description": null,
      "price": 35,
      "dispo": "LMMJVS"
    },
    {
      "id": 16,
      "first_name": "Grégory",
      "last_name": "Petit",
      "avatar": "https://avatars0.githubusercontent.com/u/10416182?s=128&v=4",
      "longitude": "4.8269787",
      "latitude": "45.7463242",
      "location": "Lyon",
      "activity_title": "Fabriquer un nerf avec des objets recylcables",
      "activity_picture": null,
      "activity_duration": 3,
      "activity_age_min": 14,
      "activity_age_max": 16,
      "category": "Bricolage, Recyclage",
      "description": null,
      "price": 60,
      "dispo": "LMMJVS"
    },
    {
      "id": 17,
      "first_name": "Grégory",
      "last_name": "Petit",
      "avatar": "https://avatars0.githubusercontent.com/u/10416182?s=128&v=4",
      "longitude": "4.8269787",
      "latitude": "45.7463242",
      "location": "Lyon",
      "activity_title": "Apprendre à faire des blagues incomprises",
      "activity_picture": null,
      "activity_duration": 1,
      "activity_age_min": 4,
      "activity_age_max": 14,
      "category": "Art",
      "description": null,
      "price": 5,
      "dispo": "LMMJVS"
    }
  ];

const Map = (props) => {
    const [ selectedActivity, setSelectedActivity ] = useState(null);
    
    // const [ userPosition, setUserPosition ] = useState(null);
    // const { currentLocation, filteredNurseries, distanceFilter} = props;

    return (
        <GoogleMap
            defaultZoom={13} 
            defaultCenter={{lat: 45.764042, lng: 4.835659}}
            defaultOptions={{styles : mapStyle}}
        >
            {activitiesData.map((activity) => 
            // console.log("actID", activity.id)
                
                <Marker 
                    key={activity.id} 
                    position={{
                        lat: parseFloat(activity.latitude),
                        lng: parseFloat(activity.longitude),
                    }}
                    onClick={()=>{
                        setSelectedActivity(activity)
                    }}
                    icon={{
                        url: "logo192.png", 
                        scaledSize: new window.google.maps.Size(40, 40)
                    }}
                />
            )}
            
            {selectedActivity && (
                <InfoWindow 
                    position={{
                        lat: parseFloat(selectedActivity.latitude),
                        lng: parseFloat(selectedActivity.longitude)
                    }}
                    onCloseClick={()=> {
                        setSelectedActivity(null)
                    }}
                    style={{backgroundColor:"red"}}
                    >
                    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", width:"200px", textAlign:"center"}}>
                        <h2 style={{fontWeight:"bold", fontSize:"1.6em", color:"#646464"}}>{selectedActivity.activity_title} avec :</h2>
                        
                        <img src={selectedActivity.avatar} style={{width: "100%"}}></img>
                        <h3 style={{fontWeight:"bold", fontSize:"1.3em", color:"#646464"}}>{selectedActivity.first_name}</h3>
                        <p>durée : {selectedActivity.activity_duration}h</p>
                        <p>âge : {selectedActivity.activity_age_min} - {selectedActivity.activity_age_max}</p>
                        <Button style={{width:"180px", height:"35px", backgroundColor:"#21FF93", borderRadius:"30px", border:"2px solid #21FF93", color:"#646464", outline:"none", fontWeight:"bold", fontSize:"1em"}}>Choisir cette activité</Button>
                    </div>
                </InfoWindow>
            )}
            
        </GoogleMap>
        
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;
