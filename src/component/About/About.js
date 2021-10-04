import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Card style={{ color: "#b128ff" }} className="container shadow my-5">
      <Card.Header
        style={{ fontSize: "36px", fontWeight: "700" }}
        className="d-flex justify-content-start ps-5"
      >
        About us . . .
      </Card.Header>
      <Card.Body>
        <Card.Title style={{ fontSize: "48px", fontWeight: "700" }}>
          Why us?
        </Card.Title>
        <Card.Text
          style={{ fontSize: "24px", fontWeight: "300" }}
          className="container shadow rounded p-4"
        >
          At Edx.edu, we’ve seen again and again how the seemingly simple act of
          creating can be a force for growth, change, and discovery in people’s
          lives. We want to inspire and multiply the kind of creative
          exploration that furthers expression, learning and application.
          <br />
          Edx.edu is an online learning community with thousands of classes for
          creative and curious people, on topics including illustration, design,
          photography, video, freelancing, and more. On Edx.edu, millions of
          members come together to find inspiration and take the next step in
          their creative journey.
        </Card.Text>
        <Link to="/services" className="nav-link">
          <Button variant="warning">Expolre</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default About;
