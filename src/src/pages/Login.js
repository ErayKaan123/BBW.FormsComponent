import Form from '../components/Formular';
import Profile from '../components/Profile';
import myjson from '../loginData/users.json' //needed
import React, { useState } from 'react';

function Login() {
    const [state, setState] = useState(false)
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    function Logout(){
        setState(false);
    }
    function afterlogin(email, name){ //This funtion is needed
            setemail(email);
            setname(name);
            setState(true);
    }
    function afterlogout(){
        setemail("");
        setname("");
        setState(false);
}
    if (state){
        return(
            <Profile name={name} email={email}  onafterlogout={afterlogout}/>
        )
    }else{
        return (
            <Form users={myjson} onafterlogin={afterlogin}/>
            //The Form component needs a json with an array, wich contains all useres
            //The users need to have a name, a email and a password
    )
    }
}

export default Login;