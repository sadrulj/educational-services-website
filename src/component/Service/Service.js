import React from "react";
import { Badge, Card, Col, Row } from "react-bootstrap";

const service = (props) => {
  const {
    badge,
    image,
    lesson,
    rating,
    title,
    imageInstructer,
    instructer,
    price,
  } = props.data;
  return (
    <Row xs={1} md={3} className="container shadow rounded mx-auto my-4 g-4">
      {Array.from({ length: 3 }).map((_, idx) => (
        <Col>
          <Card className="shadow mb-4">
            <Card.Img variant="top" src={image} />
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
      ))}
    </Row>
  );
};

export default service;
