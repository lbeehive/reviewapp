import React from 'react';
import {NavLink} from 'react-router-dom';
//import Signout from './Signout';
/*
const Link = {
    width: "100px",
    padding: "6px 12px",
    margin: "0 6px 6px",
    background: "white",
    textDecoration: "none",
    color: "black",
}


            <NavLink to="/" exact style={Link} activeStyle={{background: "blue"}}>Home</NavLink>
            <NavLink to="/products" exact style={Link} activeStyle={{background: "blue"}}>Movies</NavLink>
            <NavLink to="/signin" exact style={Link} activeStyle={{background: "blue"}}>Sign In</NavLink>
            <NavLink to="/" exact style={Link} activeStyle={{background: "blue"}}>Home</NavLink>
            <NavLink to="/movies" exact style={Link} activeStyle={{background: "blue"}}>Movies</NavLink>
            <NavLink to="/signup" exact style={Link} activeStyle={{background: "blue"}}>Sign Up</NavLink>
            <NavLink to="/login" exact style={Link} activeStyle={{background: "blue"}}>Login</NavLink>

*/
const Navbar = () => {
    return (
        <header id="main-nav">
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movies"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
    
}

export default Navbar;