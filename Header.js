import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Talrn</h1>
      <p>Talrn is the world’s largest network of pre-vetted talent.</p>
      <div>
        <p><strong>Contact:</strong> 305, IRIS Corporate Centre, Hiranandani Meadows, 400610.</p>
        <p><a href="mailto:hello@talrn.com">hello@talrn.com</a> | +919820045154</p>
        <p>Follow Us</p> {/* Add social links later if needed */}
      </div>
    </header>
  );
};

export default Header;