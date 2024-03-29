import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route exact path="/profile" element={<Profile/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
