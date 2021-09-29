import React from "react";

const BreakerLine = ({ fillColor = "#252525", ...props }) => (
  <svg width="1080" height="345" viewBox="0 0 1080 345" {...props}>
    <path
      d="M0 124.377L1080 0.958984V344.995H540H0V124.377Z"
      fill={fillColor}
    />
  </svg>
);

export default BreakerLine;
