import './Formular.css';


function Formular() {
    return (   
      <form className="formular">
        <div>
          <div className="formular-container">
            <input id="usernameField" placeholder="Username" />
            <input id="passwordField" placeholder="password" />
            <button id="loginButton" type="submit">Login</button>
          </div>
        </div>
      </form>
    )
}

export default Formular;