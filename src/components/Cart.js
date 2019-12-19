import React from 'react';
import NavBar from './NavBar';

const Cart = () => {
    return (
        <div>
            <NavBar/>
            <div style={{width:"100vw", height:"100vh", backgroundColor:"#DAF5FF", display:"flex", justifyContent:"center", alignItems:"center"}}>
                <div style={{width:"70vw", height:"70vh", backgroundColor:"white", borderRadius: "50px", display:"flex", justifyContent:"space-around", padding:"50px"}}>
                    <div style={{width:"400px", height:"200px", backgroundColor:"grey", borderRadius:"20px", color:"white", display:"flex", justifyContent:"center", alignItems:"center" }}>Activité commandée</div>
                    <input style={{width:"50px", height:"50px"}} value="quantité"></input>
                    <div style={{width:"50px", height:"50px", backgroundColor:"grey", borderRadius:"20px", color:"white", display:"flex", justifyContent:"center", alignItems:"center" }}>prix</div>

                </div>
            </div>
        </div>
    )
}

export default Cart;