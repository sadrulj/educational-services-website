import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Service from "../Service/Service";
import { Badge, Card, CardGroup, InputGroup } from "react-bootstrap";
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
          src="https://themepure.net/template/educal/educal/assets/img/page-title/page-title.jpg"
          alt="Card image"
        />
        <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
      <div className="container box-container shadow rounded p-3 mt-5">
        <div className="card-container shadow rounded p-3 my-3">
          {dataInfo.map((data) => (
            <Service key={data.id} data={data}></Service>
          ))}
        </div>
        <div className="my-3 ms-5">
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
        </div>
      </div>
    </div>
  );
};

export default Home;
