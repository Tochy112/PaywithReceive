import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignupOption from './pages/sign-option-page/SignupOption';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route path="/signupLogin" element={<SignupOption />} />
          
        </Routes>
       
      </BrowserRouter>
    </div>
  );
}
export default App