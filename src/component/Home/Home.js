import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Service from "../Service/Service";
import { Card, Row } from "react-bootstrap";
import "./Home.css";
import Aside from "../Aside/Aside";

const Home = () => {
  const [dataInfo, setDataInfo] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setDataInfo(data));
  }, []);
  return (
    <div>
      <Card className="bg-dark text-white shadow border-0">
        <Card.Img
          style={{ maxHeight: "600px" }}
          src="https://photodune.img.customer.envatousercontent.com/files%2F237412249%2FDSC09133.jpg?w=600&fit=max&mark=https%3A%2F%2Fassets.shopfront.envato-static.com%2Fimages%2Fwatermarks-19012018.png&markalign=top%2Cleft&markpad=0&markfit=crop&fm=pjpg&q=40&s=9a472912a927bedd52f9a1b4f9ca9ae4"
          alt="Card image"
        />
        <Card.ImgOverlay className="float-xl-start">
          <Card.Title
            style={{ fontSize: "36px", fontWeight: "900", marginTop: "150px" }}
          >
            EDx.edu Online Course
          </Card.Title>
          <Card.Text
            style={{ fontSize: "24px", fontWeight: "700", marginTop: "10px" }}
          >
            Online yellow-shapeTutorial From Top Instructor.
          </Card.Text>
          <Card.Text
            style={{ fontSize: "24px", fontWeight: "600", marginTop: "10px" }}
          >
            Meet university,and cultural institutions, who'll share their
            experience.
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      <h1 className="text-start ms-3 mt-3">Our Populer Courses</h1>
      <div className="box-container">
        <div className="container shadow rounded p-3 mt-3 mx-auto">
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
        <div className="my-3 mx-3 d-none d-sm-none d-md-none d-lg-block">
          <Aside></Aside>
        </div>
      </div>
    </div>
  );
};

export default Home;
