import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('/services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
   return (
    <div>
      <h2 className="text-center my-4">
        Enjoy Specialized Care Through <br /> Precision, Artistry, And
        Experience
      </h2>
      <section className="container my-4">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {services.map((items) => {
          return (
            <div className="col">
              <div className="card h-100 border-0 shadow-lg rounded">
                <img src={items.img} className=" w-100" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-start">{items.name}</h5>
                  <p className="card-text text-start ">{items.title}</p>
                  
                  <Link to={`/service/${items.id}`}>
                      <button className="btn btn-primary"> Learn more</button>
                    </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
    </div>
  );
};

export default Services;
