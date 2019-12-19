import React, { useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import {Button} from 'reactstrap';
import mapStyle from './mapStyle';


const Map = (props) => {
    const {activities} = props
    const [ selectedActivity, setSelectedActivity ] = useState(null);
    
    // const [ userPosition, setUserPosition ] = useState(null);
    // const { currentLocation, filteredNurseries, distanceFilter} = props;

    return (
        <GoogleMap
            defaultZoom={13} 
            defaultCenter={{lat: 45.764042, lng: 4.835659}}
            defaultOptions={{styles : mapStyle}}
        >
            {activities.map((activity) => 
                
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
