import React from "react";
import notFoundImg from "../../images/404_dental-removebg-preview.png";
const NotFound = () => {
  return (
    <div className="bg-primary" style={{ height: "100vh" }}>
      <img src={notFoundImg} alt="" className="img-fluid" />
      <h1 className="text-light">404</h1>
      <h2 className="text-light">Requested Page Not Found !</h2>
    </div>
  );
};

export default NotFound;
