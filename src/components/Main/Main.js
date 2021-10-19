import React from "react";
import slider1 from "../../images/slider1.png";
import slider2 from "../../images/slider2.png";
import slider3 from "../../images/slider3.png";
import "./Main.css";
const Main = () => {
  return (
    <div style={{ backgroundColor: "#25C5BD" }}>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="container carousel-inner">
          <div className=" carousel-item active d-md-flex justify-content-between align-items-center py-5">
            <div>
              <h2 className=" fw-bold  text-start gray">
                The World Best Dental <br /> Specialist Treatment
              </h2>
              <p className="text-start text-dark ">
                It is so important to brush your teeth,
                <br /> take care of your oral health, and thank your dental
                hygienist.
              </p>
            </div>

            <div className="">
              <img
                src={slider1}
                className=" "
                style={{ width: "500px" }}
                alt="..."
              />
            </div>
          </div>
          <div className="carousel-item d-md-flex justify-content-between align-items-center py-5">
            <div>
              <h2 className=" fw-bold  text-start gray">
                The World Best Dental <br /> Specialist Treatment
              </h2>
              <p className="text-start text-dark ">
                It is so important to brush your teeth,
                <br /> take care of your oral health, and thank your dental
                hygienist.
              </p>
            </div>
            <img
              src={slider2}
              className=""
              style={{ width: "500px" }}
              alt="..."
            />
          </div>
          <div className="carousel-item d-md-flex justify-content-between align-items-center py-5">
            <div>
              <h2 className=" fw-bold  text-start gray">
                The World Best Dental <br /> Specialist Treatment
              </h2>
              <p className="text-start text-dark ">
                It is so important to brush your teeth,
                <br /> take care of your oral health, and thank your dental
                hygienist.
              </p>
            </div>
            <img
              src={slider3}
              className=" "
              style={{ width: "500px" }}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Main;
