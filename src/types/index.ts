import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface IPrimaryBtn extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
export type DotBoxProps = {
  width: number | string;
  height: number | string;
  dotSize?: number;
  dotSpacing?: number;
};
