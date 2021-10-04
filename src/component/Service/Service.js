import React from "react";
import { Badge, Card, Col, Row } from "react-bootstrap";

const service = (props) => {
  const { badge, image, lesson, title, imageInstructer, instructer, price } =
    props.data;
  return (
    <Col>
      <Card className="shadow mb-4">
        <Card.Img variant="top" style={{ height: "220px" }} src={image} />
        <Card.ImgOverlay>
          <div className="d-flex justify-content-start">
            <Badge bg="warning">{badge}</Badge>{" "}
          </div>
        </Card.ImgOverlay>
        <Card.Body className="text-start">
          <Card.Title>{lesson} Lesson</Card.Title>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="d-flex justify-content-start">
            <Card.Img
              variant="rounded"
              className="rounded-circle"
              src={imageInstructer}
            />
            <Card.Text className="ms-3">{instructer}</Card.Text>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          <h4
            style={{ color: "#b128ff", fontWeight: "700" }}
            className="bold muted"
          >
            $ {price}
          </h4>
          <button
            style={{
              backgroundColor: "#b128ff",
              fontWeight: "700",
              color: "white",
            }}
            className="btn"
          >
            Know more
          </button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default service;
