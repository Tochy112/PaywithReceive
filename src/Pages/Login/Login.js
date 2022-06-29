import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <div className="container">
      <h1>Login to your account</h1>
      <p class="p">Securely login to your account</p>
      <form class="form">
        <div class="row">
          <div class="col">
            <input
              type="email"
              placeholder="Email"
              id="email"
              required
              maxlength="35"
              minlength="10"
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <input
              type="password"
              placeholder="Password"
              id="password"
              required
              maxlength="20"
              minlength="5"
              pattern="(?=.*d)(?=.*[a - z])(?.*[A - Z])(.8,)"
            />
          </div>
        </div>
        <div class="login">
          <button>
            <Link to ='/dashboard'>Log In</Link>
          </button>
        </div>
        <p class="p">
          Don't have an account?
          <Link to ='/signup'> Sign Up</Link>
        </p>
        <p class="p">
  
          <Link to='/forgotPassword'>Forgot Password?</Link>
        </p>
      </form>
    </div>
  );
}

export default Login