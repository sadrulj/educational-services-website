import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [dataInfo, setDataInfo] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setDataInfo(data));
  }, []);

  return (
    <div>
      <h2 className="text-start ms-5 mt-3">Our Popular Courses</h2>
      {dataInfo.map((data) => (
        <Service key={data.id} data={data}></Service>
      ))}
    </div>
  );
};

export default Services;
