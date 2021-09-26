import React from 'react';
import { Row, Col } from 'react-bootstrap';

/* ------------------------------------------------------------------------ */

function CardBody({
  img, temp, name, country, weather,
}) {
  return (
    <Row className="justify-content-center mt-5 px-1">
      <Col md={4}>
        <div className="bg-primary text-light d-flex justify-content-center align-items-center position-relative rounded">
          <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="weather-img" width="150" />
          <span className="display-1">{`${Math.round(temp)}°C`}</span>
        </div>
        <div className="mt-3 shadow-sm p-2 bg-primary text-light rounded">
          <span>{`City name : ${name}`}</span>
          <br />
          <span>{`Country : ${country}`}</span>
          <br />
          <span id="weather">{`Weather  : ${weather}`}</span>
        </div>
      </Col>
    </Row>
  );
}

export default CardBody;
