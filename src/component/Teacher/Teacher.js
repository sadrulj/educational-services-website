import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Teacher = (props) => {
  const { imageInstructer, instructer } = props.inst;

  const iconFacebook = <FontAwesomeIcon icon={faFacebookSquare} />;
  const iconTwitter = <FontAwesomeIcon icon={faTwitterSquare} />;
  const iconLinkedIn = <FontAwesomeIcon icon={faLinkedinIn} />;
  return (
    <div>
      <Col>
        <Card className="p-3">
          <Card.Img
            className="mx-auto"
            variant="top"
            style={{ width: "400px" }}
            src={imageInstructer}
          />
          <Card.Body className="shadow">
            <Card.Title>{instructer}</Card.Title>
            <Card.Text
              className="d-flex justify-content-around"
              style={{ fontSize: "24px" }}
            >
              <a href="#facebook">{iconFacebook}</a>
              <a href="#linkedin">{iconLinkedIn}</a>
              <a href="#twitter">{iconTwitter}</a>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Teacher;
