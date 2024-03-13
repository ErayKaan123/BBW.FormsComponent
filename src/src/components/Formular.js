import './Formular.css';
import '../App.css';
import React from 'react';

function Formular(props) {
  function HandleSubmit(e) {
    var users = props.users.users;
    var email = e.target.querySelector("#emailField").value;
    var password = e.target.querySelector("#passwordField").value;
    var i = 0;
    while(i < users.length - 1){
      if(users[i].email == email){
        if(users[i].password == password){
          props.onafterlogin(email, users[i].name)
          return;
        }
      }
      i++
    }
    alert("Failed to log in")
  }

  return (   
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
  )
}

export default Formular;