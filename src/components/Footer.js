import React from 'react';

function Footer() {
  return (
    <div className="text-center mt-5">
      <span className="text-muted">Created by Mardini</span>
      <br />
      <span className="text-muted">
        Api
        {' '}
        <a href="https://openweathermap.org/" target="_blank" rel="noreferrer">openweathermap</a>
      </span>
    </div>
  );
}

export default Footer;
