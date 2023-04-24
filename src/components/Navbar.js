import React from 'react';
import {NavLink} from 'react-router-dom';
//import Signout from './Signout';

const Link = {
    width: "100px",
    padding: "6px 12px",
    margin: "0 6px 6px",
    background: "white",
    textDecoration: "none",
    color: "black",
}
/*

            <NavLink to="/" exact style={Link} activeStyle={{background: "blue"}}>Home</NavLink>
            <NavLink to="/products" exact style={Link} activeStyle={{background: "blue"}}>Movies</NavLink>
            <NavLink to="/signin" exact style={Link} activeStyle={{background: "blue"}}>Sign In</NavLink>

*/
const Navbar = () => {
    return (
        <div className="Navbar">
            <NavLink to="/" exact style={Link} activeStyle={{background: "blue"}}>Home</NavLink>
            <NavLink to="/products" exact style={Link} activeStyle={{background: "blue"}}>Movies</NavLink>
            <NavLink to="/signin" exact style={Link} activeStyle={{background: "blue"}}>Sign In</NavLink>
            
        </div>
    )
}

export default Navbar;