import React from 'react';
import { Row, Col } from 'react-bootstrap';

/* -------------------------------------------------------------------- */

function ErrorMessage({ show }) {
  return (
    <Row className="justify-content-center px-1">
      <Col className={show} md={10} lg={8} xl={5}>
        <div className="p-2 rounded bg-light text-danger">
          Sorry, city not found
        </div>
      </Col>
    </Row>
  );
}

export default ErrorMessage;
