import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../images/logo.png";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} style={{ width: "50px", height: "" }} />
            <span
              className="ms-2 fs-4"
              style={{ fontFamily: "'Righteous', cursive" }}
            >
              Just Smile
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link className="nav-link text-dark" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link text-dark" to="/about">
                  About us
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link text-dark me-2" to="/faq">
                  FaQ
                </Link>
              </li>

              {user?.email ? (
                <>
                  {" "}
                  {user.displayName ? (
                    <li className="me-2 bg-primary text-light p-2 my-md-0 my-4" style={{borderRadius:"50px"}}>Hello, {user?.displayName}</li>
                  ) : (
                    <span className="me-2">Your account</span>
                  )}
                  <button className="btn btn-danger rounded" onClick={logOut}>
                    {" "}
                    Logout
                  </button>
                </>
              ) : (
                <>
                  {" "}
                  <li className="nav-item">
                    <Link className="nav-link text-light btn btn-success my-md-0 my-4" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link  btn btn-warning mx-3" to="/signup">
                      Sign up
                    </Link>
                  </li>{" "}
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
