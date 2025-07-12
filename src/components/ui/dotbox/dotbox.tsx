import React from "react";
import type { DotBoxProps } from "../../../types";

const DotBox: React.FC<DotBoxProps> = ({
  width,
  height,
  dotSize = 4,
  dotSpacing = 10,
  color = "white",
}) => {
  const dotStyle: React.CSSProperties = {
    width: dotSize,
    height: dotSize,
    borderRadius: "50%",
    backgroundColor: color,
    margin: dotSpacing / 2,
  };

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    width,
    height,
    backgroundColor: "transparent",
  };

  const cols = Math.floor(
    (typeof width === "number" ? width : parseInt(width)) /
      (dotSize + dotSpacing),
  );
  const rows = Math.floor(
    (typeof height === "number" ? height : parseInt(height)) /
      (dotSize + dotSpacing),
  );
  const totalDots = cols * rows;

  return (
    <div style={containerStyle}>
      {Array.from({ length: totalDots }).map((_, i) => (
        <div key={i} style={dotStyle} />
      ))}
    </div>
  );
};

export default DotBox;
