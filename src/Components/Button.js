// src/components/Button.js

import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button className="nav-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
