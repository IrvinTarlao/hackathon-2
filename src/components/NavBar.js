// import React from "react";
import { NavLink } from "react-router-dom";
// import "./navbar.css";

// function NavBar() {

//   return (
//     <div className="nav" style={{display: "flex", width: "100vw", height:"30px", top: "20px", justifyContent:"flex-end", color:"white", position: "absolute"}}>
//         <ul style={{display: "flex", width: "50vw", height:"30px", justifyContent:"center", color:"white", position: "absolute"}}>
//             <NavLink className="navlink" to={"/Search2"}>notre concept</NavLink>
//             <NavLink className="navlink" to={"/Search2"}>proposer une activité</NavLink>
//             <NavLink className="navlink" to={"/Search2"}>mon compte</NavLink>
//             <NavLink className="navlink" to={"/Search2"}>Panier</NavLink>
//         </ul>
      
//     </div>
//   );
// }

// export default NavBar;

import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink as Li,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import "./navbar.css";

const Nav2 = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
        <Navbar className="nav" light expand="md" style={{backgroundColor:"transparent", position: "absolute", right:0, justifyContent:"flex-end", outline:"none"}}>
        
        <NavbarToggler onClick={toggle} style={{border: "2px solid white", right:"0", backgroundColor:"lightblue"}}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar >
            <NavItem >
              <Li style={{color: "white", textAlign:"right", backgroundColor:"rgba(0, 0, 0, 0.5)"}}>
              <NavLink className="navlink" to={"/Search2"}>notre concept</NavLink></Li>
            </NavItem>            
            <NavItem >
              <Li style={{color: "white", textAlign:"right", backgroundColor:"rgba(0, 0, 0, 0.5)"}}>
              <NavLink className="navlink" to={"/Search2"}>découvrir</NavLink></Li>
            </NavItem>            
            <NavItem >
              <Li style={{color: "white", textAlign:"right", backgroundColor:"rgba(0, 0, 0, 0.5)"}}>
              <NavLink className="navlink" to={"/Search2"}>proposer</NavLink></Li>
            </NavItem>            
            <NavItem >
              <Li style={{color: "white", textAlign:"right", backgroundColor:"rgba(0, 0, 0, 0.5)"}}>
              <NavLink className="navlink" to={"/Search2"}>mon compte</NavLink></Li>
            </NavItem>            
            <NavItem >
              <Li style={{color: "white", textAlign:"right", backgroundColor:"rgba(0, 0, 0, 0.5)"}}>
              <NavLink className="navlink" to={"/Search2"}>panier</NavLink></Li>
            </NavItem>            
            
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Nav2;
      