import './Profile.css';
import '../App.css'
import { useNavigate } from 'react-router-dom';
function Profile() {
    const navigate = useNavigate();
    function LogOut() {
        navigate("/");
    }

    return (
        <div className='profile'>
            <div className='profile-container'>
                <h1 style={{fontSize:36, textAlign: 'center'}}>Welcome ErayKaan!</h1>
                <h1 style={{fontSize:36}}>115eraykaan32@gmail.com</h1>
                <button onClick={LogOut} style={{marginTop: '60px'}} className='app-button app-button-error'>Logout</button>
            </div>
        </div>
    )
}

export default Profile;