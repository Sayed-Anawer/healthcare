import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import loginImg from "../../images/login.jpg";

const Signup = () => {
  const { logInUsingGoogle, signUpWithEmailAndPassword } = useAuth();

  const handleGoogleLogIn = (e) => {
    e.preventDefault();
    logInUsingGoogle();
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signUpWithEmailAndPassword(email, password, name);
  };
  // handleSubmit.addEventListener("click", setNav(true));
  const handleNameChange = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };
  // const setUserName = () => {
  //   setDisplayName(name);
  // };
  console.log(name);
  return (
    <div>
      <div
        className="bg-primary text-light d-flex justify-content-center align-items-center mb-5"
        style={{ height: "15vh" }}
      >
        <h2 className="fs-1">Register</h2>
      </div>

      <div className="container">
        <section className=" row align-items-md-center">
          <form className="col-md-6">
            <div className="mb-3 text-start">
              <label for="exampleInputname" className="form-label ">
                Name
              </label>
              <input
                type="email"
                className="form-control w-50"
                id="exampleInputname"
                aria-describedby="emailHelp"
                onBlur={handleNameChange}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3 text-start">
              <label for="exampleInputEmail1" className="form-label ">
                Email
              </label>
              <input
                type="email"
                className="form-control w-50"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onBlur={handleEmailChange}
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
                id="exampleInputPassword1"
                onBlur={handlePasswordChange}
              />
            </div>
            <div className="text-start">
              <button
                type="submit"
                className="btn btn-primary w-50"
                onClick={handleSubmit}
              >
                Register
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
              <p className="text-start mt-2">
                Already have an account ? <Link to="/login"> Login</Link>
              </p>
            </div>
          </form>
          <div className="col-md-6">
            <img src={loginImg} alt="" className="img-fluid" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Signup;
