import React from "react";
import aboutImg from "../../images/aboutImg.png";
const About = () => {
  return (
    <div>
      <div
        className="bg-primary text-light d-flex justify-content-center align-items-center mb-5"
        style={{ height: "15vh" }}
      >
        <h2 className="fs-1">About us</h2>
      </div>

      <div className="container">
        <div className="row my-4 justify-content-center align-items-center">
          <div className="col-md-6">
              <h4 className="text-start shadow-lg p-5 rounded">
              At Just Smile Dental Care, we’re not interested in overselling patients or talking them into accepting unnecessary services – our doctors and staff members want to do what’s best for you each time and every time you come in. Transparency, kindness, and personalization are the cornerstones of our approach, and we never discriminate against patients either. Contact our Boulder, CO location today to schedule your first visit, or if you have any questions our team can help you with.
              </h4>
          </div>
          <div className="col-md-6">
            <img src={aboutImg} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
