import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Routes,
  Navigate,
} from "react-router-dom";
  import Yome from './Pages/Onboarding/Yome.js';
import Onboarding0 from './Pages/Onboarding/Onboarding0';
import Onboarding from './Pages/Onboarding/Onboarding';
import SignupOption from './Pages/Signup Option/SignupOption';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import Footer from './Components/Footer/Footer';
import SignupDetails from './Pages/Signup Details/SignupDetails';


function App() {
  
  
  return (
    <div className="App">
      
      <Router>
        <Routes>
      
          <Route exact path="/" element={<Onboarding />} />
          <Route path="/onboarding0" element={<Onboarding0 />} />
          <Route path="/yome" element={<Yome />} />
          <Route path="/signupLogin" element={<SignupOption />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signupDetails" element={<SignupDetails />} />
          <Route path="/login" element={<Login />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
