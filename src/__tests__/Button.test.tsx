/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import { Button } from "../components";
import React from "react";

describe("[Button] Renderer", () => {
  it("should render the Button component", () => {
    render(<Button />);
    expect(screen.findAllByTestId("cobric-button")).toBeDefined();
  });
  it("should render the Button component with the correct text", () => {
    render(<Button>Test</Button>);
    expect(screen.getByText("Test")).toBeDefined();
  });
  it("should render the Button component with the default text", () => {
    render(<Button />);
    expect(screen.getByText("Click me!")).toBeDefined();
  });
  it("should render the Button component with the correct class", () => {
    render(<Button />);
    expect(screen.getByTestId("cobric-button").getAttribute("class")).toContain(
      "cobric-button"
    );
  });
  it("should render the Button component with the correct class when disabled", () => {
    render(<Button disabled />);
    expect(screen.getByTestId("cobric-button").getAttribute("class")).toContain(
      "opacity-50"
    );
  });
  it("should render the Button component with the correct class when loading", () => {
    render(<Button loading />);
    expect(screen.getByTestId("cobric-button").getAttribute("class")).toContain(
      "animate-pulse"
    );
  });
  it("should render the Button component with the correct class when loading and disabled", () => {
    render(<Button loading disabled />);
    expect(screen.getByTestId("cobric-button").getAttribute("class")).toContain(
      "opacity-50"
    );
    expect(screen.getByTestId("cobric-button").getAttribute("class")).toContain(
      "animate-pulse"
    );
  });

  it("should throw a validation error when the gradient 'from' and 'to' properties are the same", () => {
    const t = () => {
      throw new Error(
        "The 'from' and 'to' properties of the gradient object must be different"
      );
    };
    expect(() =>
      render(
        <Button
          gradient={{
            from: "top",
            to: "top",
            colorFrom: "red",
            colorTo: "blue",
          }}
        />
      )
    ).toThrow(Error);
  });
});
