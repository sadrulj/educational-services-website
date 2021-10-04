import React from "react";
import { Card, InputGroup } from "react-bootstrap";

const Aside = () => {
  return (
    <div>
      <Card border="primary" style={{ width: "16rem" }}>
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
      <Card border="primary" style={{ width: "16rem" }}>
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
  );
};

export default Aside;
