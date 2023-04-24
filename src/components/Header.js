import React from 'react';
import Navbar from './Navbar';
import {NavLink} from 'react-router-dom';
//import Signout from './Signout';

/*
import Signin from './Signin';
import Signup from './Signup';
import Form from './Form';
        <Signin />
        <Signup/>
                <Signout />
                <h1 id="siteTitle"><NavLink to={'/'}><span>Review App</span></NavLink></h1>
*/

const Header = () => {
    return (
        <div>
            <div className="Header">

                <h1 id="siteTitle"><NavLink to={'/'}><span>Review App</span></NavLink></h1>
                <Navbar />
                
            </div>
            
        </div>
    ) 
}

function signedIn() {
    return (localStorage.getItem("token") != null) ? true : false
}

export default Header;
