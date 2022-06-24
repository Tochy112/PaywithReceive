import React from 'react'
import './Login.css'

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
            <a href="/dashboard" rel="noreferrer">
              Log In
            </a>
          </button>
        </div>
        <p class="p">
          Don't have an account?
          <a href="/signup" rel="noreferrer">
            Sign Up
          </a>
        </p>
        <p class="p">
          <a href="/forgotPassword" rel="noreferrer">
            Forgot Password?
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login