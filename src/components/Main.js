import React from 'react';
import { Row, Col } from 'react-bootstrap';
import wave from '../assets/wave.svg';

/* ------------------------------------------------------------------------ */

function Main({
  img,
  temp,
  name,
  country,
  weather,
  wind,
  humidity,
  visibility,
}) {
  return (
    <Row className="justify-content-center mt-2 px-1">
      <Col md={10} lg={8} xl={5}>
        <div className="bg-primary text-light d-flex justify-content-center align-items-center position-relative rounded">
          <span className="position-absolute top-0 mt-2">
            <i className="fas fa-map-marker-alt" />
            {` ${name}, ${country}`}
          </span>
          <img
            className="my-3"
            src={`http://openweathermap.org/img/wn/${img}@2x.png`}
            alt="weather-img"
            width="150"
          />
          <span className="temp my-3">{`${Math.round(temp)}°C`}</span>
          <span className="position-absolute bottom-0 mb-2">{weather}</span>
          <img
            id="wave"
            src={wave}
            alt="wave"
            className="position-absolute bottom-0"
          />
        </div>
        <div className="mt-3 p-2 bg-light text-light rounded d-flex justify-content-around text-center">
          <div className="p-3">
            <span className="text-muted">Wind</span>
            <br />
            <strong className="text-dark">{`${wind}m/s`}</strong>
          </div>
          <div className="p-3">
            <span className="text-muted">Humidity</span>
            <br />
            <strong className="text-dark">{`${humidity}%`}</strong>
          </div>
          <div className="p-3">
            <span className="text-muted">Visibility</span>
            <br />
            <strong className="text-dark">{`${visibility}km`}</strong>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Main;
