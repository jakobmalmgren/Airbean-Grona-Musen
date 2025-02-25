import homepage from "../../images/homepage.png";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./Landing.css";

const HomePage: React.FC = ({ handleClick, home }) => {
  return home ? (
    <div className="wrapper" onClick={handleClick}>
      <img className="homepage__img" src={homepage} alt="homepage" />
    </div>
  ) : null;
};

export default HomePage;
