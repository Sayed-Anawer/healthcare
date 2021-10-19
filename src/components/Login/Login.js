import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import loginImg from "../../images/login.jpg";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logInUsingGoogle, emailAndPasswordSignIn } = useAuth();

  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };
  const handleGoogleLogIn = (e) => {
    e.preventDefault();
    logInUsingGoogle();
  };
  const handleLogIn = (e) => {
    e.preventDefault();
    emailAndPasswordSignIn(email, password);
  };
  return (
    <div>
      <div
        className="bg-primary text-light d-flex justify-content-center align-items-center mb-5"
        style={{ height: "15vh" }}
      >
        <h2 className="fs-1">Log in</h2>
      </div>

      <div className="container">
        <section className=" row align-items-md-center">
          <form className="col-md-6">
            <div className="mb-3 text-start">
              <label for="exampleInputEmail1" className="form-label ">
                Email
              </label>
              <input
                type="email"
                className="form-control w-50"
                id="exampleInputEmail1"
                onBlur={handleEmail}
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3 text-start">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control w-50"
                onBlur={handlePassword}
                id="exampleInputPassword1"
              />
            </div>
            <div className="text-start">
              <button
                type="submit"
                className="btn btn-primary w-50"
                onClick={handleLogIn}
              >
                Login
              </button>
            </div>
            <p className="my-2 text-start">Or</p>

            <div className="text-start">
              <button
                type="submit"
                className="btn btn-dark w-50"
                onClick={handleGoogleLogIn}
              >
                <i className="bi bi-google me-1 text-danger"></i> Sign in with
                Google
              </button>
            </div>  
            <div>
              <p className="text-start mt-2">Don't have an account ? <Link to="/signup">Register</Link></p>
            </div>
          </form>
          <div className="col-md-6">
            <img src={loginImg} alt="" className="img-fluid " />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
