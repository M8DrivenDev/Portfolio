import React from "react";

export interface HollowRectProps {
  width: number | string;
  height: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const HollowRect: React.FC<HollowRectProps> = ({
  width,
  height,
  color = "var(--color-gray)",
  className,
  style,
  ...rest
}) => (
  <div
    {...rest}
    className={className}
    style={{
      width,
      height,
      border: `1px solid ${color}`,
      boxSizing: "border-box",
      ...style,
    }}
  />
);
