import { useNavigate } from 'react-router-dom'
import './Profile.css'

function Profile() {

    const navigate = useNavigate();
    function Logout() {
        navigate("/");
    }

    return(
        <div className='profile'>
            <div className='profile-container'>
                <h1 style={{fontSize:36, textAlign: 'center'}}>Welcome ErayKaan!</h1>
                <h1 style={{fontSize:36}}>115eraykaan32@gmail.com</h1>
                <center>
                    <button onClick={Logout} style={{marginTop: '60px', textAlign: 'center'}} className='app-button app-button-error'>Logout</button>
                </center>
            </div>
        </div>
        )
}

export default Profile;