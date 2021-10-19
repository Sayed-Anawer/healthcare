import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";

const DetailsService = () => {
  const [details, setDetails] = useState([]);
  const { serviceId } = useParams();

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  const newData = details.find((datas) => datas.id == serviceId);
  console.log(newData);

  return (
    <div>
      <div
        className="bg-primary text-light d-flex justify-content-center align-items-center mb-5"
        style={{ height: "15vh" }}
      >
        <h2 className="fs-1">Service</h2>
      </div>
      <section className="container ">
        <div className="text-start">
          <img src={newData?.img} alt="" className="img-fluid" />
        </div>
        <h3 className="text-start mt-4">{newData?.name}</h3>
        <p className="text-start w-75 ">{newData?.desc}</p>
        <div className="text-start"></div>
        <ul>
          <li className="text-start">{newData?.bullet1}</li>
          <li className="text-start">{newData?.bullet2}</li>
          <li className="text-start">{newData?.bullet3}</li>
        </ul>
        <h3 className="text-start mt-5">Watch the procedure</h3>
        <div className="text-start">
          <iframe
            className="img-fluid my-2"
            src="https://www.youtube.com/embed/yXuiA_6q1eQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default DetailsService;
