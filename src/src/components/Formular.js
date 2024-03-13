import './Formular.css';
import '../App.css'
import { useNavigate } from 'react-router-dom';

function Formular(props) {

  function handleSubmit(e) {
    if (props.onSubmit) {
      let emailField = document.getElementById("emailField");
      let passwordField = document.getElementById("passwordField");
      props.onSubmit(emailField.value, passwordField.value);
    }

  }

  return (   
    <div>
      <div className="formular">
        <form onSubmit={handleSubmit} className="formular-container">
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