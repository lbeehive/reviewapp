import React from 'react';
import Navbar from './Navbar';
import Login from './Login';
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

                <Navbar />
                
            </div>
            <Login/>
        </div>
    ) 
}

function signedIn() {
    return (localStorage.getItem("token") != null) ? true : false
}

export default Header;
