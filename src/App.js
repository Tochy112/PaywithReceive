import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Onboarding from './Pages/Onboarding/Onboarding';
import SignupOption from './Pages/Signup Option/SignupOption';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/signupLogin" element={<SignupOption />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
