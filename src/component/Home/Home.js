import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Service from "../Service/Service";
import { Badge, Card, CardGroup, InputGroup, Row } from "react-bootstrap";
import "./Home.css";

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
      <h1 className="text-start ms-5 mt-3">Our Populer Courses</h1>
      <div className="container box-container shadow rounded p-3 mt-5 mx-auto">
        <Row
          xs={1}
          md={3}
          className="container shadow rounded mx-auto my-4 g-4"
        >
          {dataInfo.map((data) => (
            <Service key={data.id} data={data}></Service>
          ))}
        </Row>
        <div className="my-3 ms-5 d-none d-sm-none d-md-none d-lg-block">
          <Card border="primary" style={{ width: "18rem" }}>
            <Card.Header>Categories</Card.Header>
            <Card.Body>
              <Card.Text>
                <InputGroup className="mb-3">
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                  <h5 className="ms-3">English(6)</h5>
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                  <h5 className="ms-3">Education(8)</h5>
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                  <h5 className="ms-3">Business(5)</h5>
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                  <h5 className="ms-3">UX Design(3)</h5>
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                  <h5 className="ms-3">Mathematics(3)</h5>
                </InputGroup>
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
          <Card border="primary" style={{ width: "18rem" }}>
            <Card.Header>Language</Card.Header>
            <Card.Body>
              <Card.Text>
                <InputGroup className="mb-3">
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                  <h5 className="ms-3">English</h5>
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                  <h5 className="ms-3">Bangla</h5>
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                  <h5 className="ms-3">Franch</h5>
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                  <h5 className="ms-3">Arabic</h5>
                </InputGroup>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
