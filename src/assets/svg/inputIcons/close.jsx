import React from "react";

const Close = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    fill="none"
    viewBox="0 0 48 48"
  >
    <circle
      cx="24"
      cy="24"
      r="24"
      fill="#fff"
      style={{ boxShadow: "rgb(0, 0, 0) 5px 5px 15px 5px" }}
    ></circle>
    <path
      style={{ fill: "#252525" }}
      fillRule="evenodd"
      d="M22.589 24L14 32.589l1.411 1.41L24 25.412 32.589 34 34 32.589l-8.589-8.59L34 15.412 32.589 14 24 22.589 15.411 14l-1.41 1.411L22.588 24z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default Close;
