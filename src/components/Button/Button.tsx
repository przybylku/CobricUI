import React, { useEffect } from "react";
import "../../index.css";
import { ButtonCobricProps } from "./Button.types";
/** @typedef {import("./Button.types.ts").ButtonCobricProps} ButtonCobricProps */

/**
 * @param {ButtonCobricProps} size, color, animations, gradient, loading, disabled
 * @returns {Button} A Animated Button Component.
 */
export const Button = ({
  size = "medium",
  color = "primary",
  animations,
  gradient,
  loading = false,
  disabled = false,
  children,
}: ButtonCobricProps) => {
  const [style, setStyle] = React.useState<string>("");
  useEffect(() => {
    // Size hadnling
    const _size =
      size == "large"
        ? "py-2 px-4 scale-120"
        : size == "medium"
        ? "py-2 px-4"
        : "py-2 px-4 scale-75";

    // Color handling
    const _color = color == "primary" ? "bg-blue-500" : "bg-green-500";

    // Loading handling
    const _loading = loading ? "animate-pulse" : "";

    // Disabled handling
    const _disabled = disabled ? "opacity-50 cursor-not-allowed" : "";

    // Gradient handling

    if (gradient) {
      if (gradient.from === gradient.to) {
        throw new Error(
          "The 'from' and 'to' properties of the gradient object must be different"
        );
      }

      if (gradient.colorFrom === gradient.colorTo) {
        throw new Error(
          "The 'colorFrom' and 'colorTo' properties of the gradient object must be different"
        );
      }

      if (!gradient.colorFrom || !gradient.colorTo) {
        throw new Error(
          "The 'colorFrom' and 'colorTo' properties of the gradient object must be provided"
        );
      }

      if (!gradient.from || !gradient.to) {
        throw new Error(
          "The 'from' and 'to' properties of the gradient object must be provided"
        );
      }

      if (!["top", "right", "bottom", "left"].includes(gradient.from)) {
        throw new Error(
          "The 'from' property of the gradient object must be one of 'top', 'right', 'bottom', 'left'"
        );
      }

      if (!["top", "right", "bottom", "left"].includes(gradient.to)) {
        throw new Error(
          "The 'to' property of the gradient object must be one of 'top', 'right', 'bottom', 'left'"
        );
      }
    }

    const _gradient = gradient
      ? `bg-gradient-to-tl from-red to-blue bg-gradient-from-br`
      : "";

    setStyle(`${_size} ${_color} ${_loading} ${_disabled} ${_gradient}`);
  }, [size, color, loading]);

  return (
    <button
      id="cobric-button"
      data-testid="cobric-button"
      className={`cobric-button ${style}`}
    >
      {children || "Click me!"}
    </button>
  );
};

export default Button;
