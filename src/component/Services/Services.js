import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [dataInfo, setDataInfo] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setDataInfo(data.data));
  }, []);

  return (
    <div>
      <h2 className="text-start ms-5 mt-5">Our Popular Courses</h2>
      <Row
        xs={1}
        md={2}
        lg={3}
        className="container shadow rounded mx-auto my-4 g-4"
      >
        {dataInfo.map((data) => (
          <Service key={data.id} data={data}></Service>
        ))}
      </Row>
    </div>
  );
};

export default Services;
