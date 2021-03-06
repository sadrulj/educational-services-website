import React from "react";
import { Card, InputGroup } from "react-bootstrap";

const Aside = (props) => {
  const { badge } = props.data;
  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        <h5 className="ms-3">{badge}</h5>
      </InputGroup>
    </div>
  );
};

export default Aside;
