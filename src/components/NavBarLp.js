import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
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
        <Navbar className="nav" light expand="md" style={{backgroundColor:"transparent", position: "fixed", right:0, justifyContent:"flex-end", outline:"none", zIndex:5}}>
                
        <NavbarToggler onClick={toggle} style={{border: "2px solid white", right:"0", backgroundColor:"#5BD2FF"}}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar >
            <NavItem >
              <Li style={{color: "white", textAlign:"right", backgroundColor:"rgba(0, 0, 0, 0.5)"}}>
              <NavLink className="navlink" to={"/Search"}>découvrir</NavLink></Li>
            </NavItem>            
            <NavItem >
              <Li style={{color: "white", textAlign:"right", backgroundColor:"rgba(0, 0, 0, 0.5)"}}>
              <NavLink className="navlink" to={"/NewActivity"}>proposer</NavLink></Li>
            </NavItem>                        
            <NavItem >
              <Li style={{color: "white", textAlign:"right", backgroundColor:"rgba(0, 0, 0, 0.5)"}}>
                <NavLink className="navlink" to={"/Concept"}>notre concept</NavLink>
              </Li>
            </NavItem>            
            <NavItem>
              <Li className="cartcontainer" style={{color: "white", textAlign:"right", height:"40px"}}>
                <NavLink className="cart" to={"/Cart"}>
                  <div style={{display:"flex", flexFlow:"row"}}>
                    <img src="/cart.png" alt="cart" style={{ height:"27px"}}></img>
                    <p style={{color:"green", fontWeight:"bold"}}>{props.activitySelected.length}</p>
                  </div>
                </NavLink>
              </Li>
            </NavItem>            
            
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}


function mstp(state) {
  console.log(state);    
  return { activitySelected: state.activitySelected };
}

export default connect(mstp)(Nav2);
      