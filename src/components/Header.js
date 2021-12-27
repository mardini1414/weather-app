import React from 'react';

/* ---------------------------------------------------------------------------- */

function Header({ clicked, value, changed }) {
  return (
    <>
      <div className="row justify-content-center px-1 mb-2 mt-5">
        <div className="col-md-5">
          <div className="d-flex bg-light p-2 rounded-3">
            <input type="text" value={value} onChange={changed} placeholder="Search City" />
            <button type="button" className="text-primary" onClick={clicked} aria-label="clik"><i className="fas fa-search" /></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
