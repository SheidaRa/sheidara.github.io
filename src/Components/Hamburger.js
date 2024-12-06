import React from "react";

const Hamburger = ({ expandedBurger }) => {
  return (
    <div className={`burger ${expandedBurger ? "opened" : "closed"} `}>
      <div className="burger-line"></div>
      <div className="burger-line"></div>
      <div className="burger-line"></div>
    </div>
  );
};

export default Hamburger;
