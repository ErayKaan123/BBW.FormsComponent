import Form from '../components/Formular';
import myjson from '../loginData/users.json'
import React, { useState } from 'react';

function Login() {
    const [state, setState] = useState(false)
    function Logout(){
        setState(false);
    }
    function afterlogin(name, email){

    }
    return (
            <Form users={myjson} onafterlogin={afterlogin}/>
    )
}

export default Login;