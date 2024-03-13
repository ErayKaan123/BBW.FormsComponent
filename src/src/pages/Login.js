import Form from '../components/Formular';

function Login() {

    function onSubmit(email, password) {
        // Gets triggered when the form has successfully succeeded.
    }

    return (
        <Form onSubmit={onSubmit}/>
    )
}

export default Login;