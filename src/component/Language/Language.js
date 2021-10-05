import React from "react";
import { InputGroup } from "react-bootstrap";

const Language = (props) => {
  const { lang } = props.lan;
  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        <h5 className="ms-3">{lang}</h5>
      </InputGroup>
    </div>
  );
};

export default Language;
