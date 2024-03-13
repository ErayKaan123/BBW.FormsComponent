import Form from '../components/Formular';
import myjson from '../loginData/users.json'
import React, { useState } from 'react';

function Login() {

    function onSubmit(email, password) {
        // Gets triggered when the form has successfully succeeded.
    }

    return (
        <Form onSubmit={onSubmit}/>
    )
    }
    else if (state == true){
        return(
        <div className='profile'>
            <div className='profile-container'>
                <h1 style={{fontSize:36, textAlign: 'center'}}>Welcome ErayKaan!</h1>
                <h1 style={{fontSize:36}}>115eraykaan32@gmail.com</h1>
                <button onClick={Logout} style={{marginTop: '60px'}} className='app-button app-button-error'>Logout</button>
            </div>
        </div>
        )
    }
}

export default Login;