import React from "react";

const tooltipStyle = {
  position: "relative",
  display: "inline-flex", // Changed from "inline-block"
  alignItems: "center",   // Ensures icon centers vertically with button
  justifyContent: "center",
  marginRight: "6px",     // Optional: spacing between icon and button
  cursor: "default",
};

const tooltipTextStyle = {
  visibility: "hidden",
  width: "180px",
  backgroundColor: "rgba(0,0,0,0.8)",
  color: "#fff",
  textAlign: "center",
  borderRadius: "6px",
  padding: "6px 8px",
  position: "absolute",
  zIndex: 1,
  bottom: "125%",
  left: "50%",
  marginLeft: "-90px",
  opacity: 0,
  transition: "opacity 0.3s",
  fontSize: "0.85rem",
  pointerEvents: "none",
};

const tooltipTextVisibleStyle = {
  visibility: "visible",
  opacity: 1,
  pointerEvents: "auto",
};

export default function InfoTooltip({ text }) {
  const [hover, setHover] = React.useState(false);

  return (
    <span
      style={tooltipStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-label={text}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        style={{ verticalAlign: "middle" }}
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
      <span
        style={{
          ...tooltipTextStyle,
          ...(hover ? tooltipTextVisibleStyle : {}),
        }}
      >
        {text}
      </span>
    </span>
  );
}