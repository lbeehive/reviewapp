import React from 'react';
//import Button from 'react-bootstrap/Button';
/*import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';*/

const handleClick = () => {
    fetch("/users/sign_up", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        // body: JSON.stringify(userDetails)
    })
    .then(resp => resp.json())
    .then(resp => console.log('Sign Up'))
}

const Signup = () => {
    if (signedIn()) {
        return <button className="Signup" variant="danger" type="submit" onClick={() => handleClick()}>Sign Up</button>;
    };
    return(null)
};

function signedIn() {
    return (localStorage.getItem("token") != null) ? true : false
}

export default Signup;