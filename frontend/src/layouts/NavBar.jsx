import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css"

const NavBar = () => {

   
  return (
    <nav>
      <ul>
        <NavLink onClick={()=>ChangeColor1} to="/" className={(isActive) =>isActive  ?  'active-link':''}>
          <li>All</li>
        </NavLink>
        <NavLink to="/active" onClick={()=>ChangeColor2} className={(isActive) =>isActive  ?  'active-link':''}>
          <li>Active</li>
        </NavLink>
        <NavLink to="/completed" onClick={()=>ChangeColor3} className={(isActive) =>isActive  ?  'active-link':''}>
          <li>Completed</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
