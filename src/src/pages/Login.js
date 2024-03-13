import Form from '../components/Formular';
import {useNavigate} from 'react-router-dom'

function Login() {
    const navigate = useNavigate();
    function onSubmit(email, password) {
        // Gets triggered when the form has successfully succeeded.
        navigate("/profile");
    }

    return (
        <Form onSubmit={onSubmit}/>
    )

}

export default Login;