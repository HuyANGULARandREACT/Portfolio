import React from "react";

// Simple coding animation using SVG
const CodingAnimation = () => (
  <svg
    width="300"
    height="300"
    viewBox="0 0 180 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="20"
      y="40"
      width="140"
      height="100"
      rx="12"
      fill="#23272b"
      stroke="#007bff"
      strokeWidth="4"
    />
    <rect x="35" y="60" width="110" height="15" rx="4" fill="#007bff">
      <animate
        attributeName="width"
        values="30;110;30"
        dur="2s"
        repeatCount="indefinite"
      />
    </rect>
    <rect x="35" y="85" width="80" height="15" rx="4" fill="#007bff">
      <animate
        attributeName="width"
        values="20;80;20"
        dur="1.5s"
        repeatCount="indefinite"
      />
    </rect>
    <rect x="35" y="110" width="60" height="15" rx="4" fill="#007bff">
      <animate
        attributeName="width"
        values="10;60;10"
        dur="1s"
        repeatCount="indefinite"
      />
    </rect>
    <circle cx="40" cy="50" r="4" fill="#e06c75">
      <animate
        attributeName="fill"
        values="#e06c75;#98c379;#e5c07b;#e06c75"
        dur="2s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="52" cy="50" r="4" fill="#98c379">
      <animate
        attributeName="fill"
        values="#98c379;#e5c07b;#e06c75;#98c379"
        dur="2s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="64" cy="50" r="4" fill="#e5c07b">
      <animate
        attributeName="fill"
        values="#e5c07b;#e06c75;#98c379;#e5c07b"
        dur="2s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

export default CodingAnimation;
