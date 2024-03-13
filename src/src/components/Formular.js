import './Formular.css';
import '../App.css'
import { useNavigate } from 'react-router-dom';
import myjson from "./loginData/users.json";
import Dialog from '../dialog/MessageBox';
import MessageBox from '../dialog/MessageBox';

function Formular(props) {
  const navigate = useNavigate();
  function HandleSubmit(e) {
    //HANDLES BUTTON CLICK
    var test = fetch(myjson).then((response) => response.text());
    console.log(test);
    //alert(test[0].users[0].email);
    //alert(e.target.querySelector("#emailField").value);
    navigate(props.redirectTo);
  }

  return (   
    <div>
      <div className="formular">
        <form onSubmit={HandleSubmit} className="formular-container">
          <div>
            <h2 className="formular-title">SignUp</h2>
            <p className="formular-description">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
            </p>
            <div className="formular-items">
              <div>
                <p className="formular-label">Email</p>
                <input inputMode='email' type='email' required className="input" id="emailField" placeholder="JohnDoe@gmail.com" />
              </div>
              
              <div>
                <p className="formular-label">Passwort</p>
                  <input type='password' inputMode='email' className="input" id="passwordField" placeholder="Example123" />
                </div>
              <button className="app-button app-button-primary" id="loginButton" type='submit'>Login</button>

            </div>
          </div>
        </form>
    </div>
    </div>
  )
}

export default Formular;