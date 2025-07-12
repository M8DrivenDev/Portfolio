import React from "react";

export interface HollowRectProps {
  width: number | string;
  height: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  border?: string;
}

export const HollowRect: React.FC<HollowRectProps> = ({
  width,
  height,
  color = "var(--color-gray)",
  className,
  style,
  border = "1px",
  ...rest
}) => (
  <div
    {...rest}
    className={className}
    style={{
      width,
      height,
      border: `${border} solid ${color}`,
      boxSizing: "border-box",
      ...style,
    }}
  />
);
