import { NavLink } from "react-router-dom";

import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink as Li,
} from 'reactstrap';
import "./navbar.css";

const Nav2 = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
        <Navbar className="nav" light expand="md" style={{backgroundColor:"transparent", position: "fixed", right:0, justifyContent:"flex-end", outline:"none", zIndex:1}}>
        
        <NavbarToggler onClick={toggle} style={{border: "2px solid white", right:"0", backgroundColor:"lightblue"}}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar >
            <NavItem >
              <Li style={{color: "white", textAlign:"right", backgroundColor:"rgba(0, 0, 0, 0.5)"}}>
              <NavLink className="navlink" to={"/Search"}>notre concept</NavLink></Li>
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
      