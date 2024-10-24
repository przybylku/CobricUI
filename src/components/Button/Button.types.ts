import React from "react";

export interface ButtonCobricProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary";
  animations?: "glow" | "bounce" | "none";
  gradient?: {
    from: "top" | "right" | "bottom" | "left";
    to: "top" | "right" | "bottom" | "left";
    colorFrom: string;
    colorTo: string;
    fontColor?: string;
  };
  loading?: boolean;
  disabled?: boolean;
}

export type ButtonCobricGradientProps = {
  gradient?: {
    from: "top" | "right" | "bottom" | "left";
    to: "top" | "right" | "bottom" | "left";
    colorFrom: string;
    colorTo: string;
    fontColor?: string;
  };
};
