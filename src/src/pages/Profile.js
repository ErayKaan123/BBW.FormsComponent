import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import './Profile.css';

function Profile(props) {

    const navigate = useNavigate();
    function Logout() {
        localStorage.setItem('name',null)
        localStorage.setItem('email',null)
        navigate("/");
    }
    useEffect(() => {
        if (localStorage.getItem('name') === null) {
            navigate("/");
        }
        if (localStorage.getItem('name') == 'null') {
            navigate("/");
        }
      });
    
    return(
        <div className='profile'>
            <div className='profile-container'>
                <h1 style={{fontSize:36, textAlign: 'center'}}>Welcome {localStorage.getItem('name')}!</h1>
                <h1 style={{fontSize:36}}>{localStorage.getItem('email')}</h1>
                <center>
                    <button onClick={Logout} style={{marginTop: '60px', textAlign: 'center'}} className='app-button app-button-error'>Logout</button>
                </center>
            </div>
        </div>
    )
}

export default Profile;