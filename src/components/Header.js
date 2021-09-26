import React from 'react';
import {
  Button,
  Row,
  Col,
  FormControl,
} from 'react-bootstrap';

/* ---------------------------------------------------------------------------- */

function Header({ clicked, value, changed }) {
  return (
    <>
      <h1 className="my-5 text-center text-primary">Weather App</h1>
      <Row className="justify-content-center px-1">
        <Col md={4} className="d-flex">
          <FormControl value={value} onChange={changed} placeholder="Search city" className="me-3" />
          <Button onClick={clicked} variant="primary" className="text-light">Search</Button>
        </Col>
      </Row>
    </>
  );
}

export default Header;
