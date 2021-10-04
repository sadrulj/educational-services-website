import React, { useState } from "react";
import { useEffect } from "react";
import { Row } from "react-bootstrap";
import Teacher from "../Teacher/Teacher";
import "../Teacher/Teacher.css";

const Teachers = () => {
  const [instructer, setInstructer] = useState([]);

  useEffect(() => {
    fetch("./instructer.json")
      .then((res) => res.json())
      .then((data) => setInstructer(data));
  }, []);

  return (
    <div>
      <h2 className="text-start ms-5 mt-4">Our Instructor</h2>
      <Row xs={1} md={3} className="mx-auto my-2 g-4">
        {instructer.map((inst) => (
          <Teacher key={inst.id} inst={inst}></Teacher>
        ))}
      </Row>
    </div>
  );
};

export default Teachers;
