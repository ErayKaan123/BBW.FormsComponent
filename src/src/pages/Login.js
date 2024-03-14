import Form from '../components/Formular';
import myjson from '../loginData/users.json' //needed
import { useNavigate } from 'react-router-dom'

function Login() {
    
    const navigate = useNavigate();
    function onSuccess(email, name){ 
        navigate("/profile");
    }
    function onFailed(email, password){ 
        alert("Incorrect Email or Password");
    }

    return (
        <Form data={myjson} onSuccess={onSuccess} onFailed={onFailed}/>
        //The Form component needs a json with an array, wich contains all useres
        //The users need to have a name, a email and a password
    )
    
}

export default Login;