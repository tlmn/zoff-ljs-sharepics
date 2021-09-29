import React from "react";

const LogoArrow = ({
  width = 123,
  height = 129,
  fillColor = "#252525",
  ...props
}) => (
  <svg width={width} height={height} viewBox="0 0 123 129" {...props}>
    <path
      d="M0.738403 109.476L9.478 0L118.924 8.74615L116.03 45.0453L68.6982 41.2742L122.767 104.789L94.8431 128.61L40.8065 65.1641L37.0358 112.372L0.738403 109.476Z"
      fill={fillColor}
    />
  </svg>
);

export default LogoArrow;
