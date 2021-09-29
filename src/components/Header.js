import React from 'react';

import {
  Row,
  Col,
} from 'react-bootstrap';

/* ---------------------------------------------------------------------------- */

function Header({ clicked, value, changed }) {
  return (
    <>
      <Row className="justify-content-center px-1 mt-5">
        <Col md={10} lg={8} xl={5}>
          <div className="d-flex bg-light px-2 py-1 rounded-3">
            <input type="text" value={value} onChange={changed} placeholder="Search City" />
            <button type="button" className="text-primary" onClick={clicked} aria-label="clik"><i className="fas fa-search" /></button>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Header;
