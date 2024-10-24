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

  it("should render the Button component with the correct gradient", () => {
    render(
      <Button
        gradient={{
          from: "top",
          to: "bottom",
          colorFrom: "red",
          colorTo: "blue",
        }}
      />
    );
    expect(screen.getByTestId("cobric-button").getAttribute("class")).toContain(
      "from-red to-blue"
    );
  });

  // it("should throw a validation error when the gradient 'from' and 'to' properties are the same", () => {
  //   const err = console.error;
  //   console.error = jest.fn();
  //   let actError;
  //   try {
  //     render(
  //       <Button
  //         gradient={{
  //           from: "top",
  //           to: "top",
  //           colorFrom: "red",
  //           colorTo: "blue",
  //         }}
  //       />
  //     );
  //   } catch (e) {
  //     actError = e.message;
  //   }
  //   expect(actError).toEqual(
  //     "The 'from' and 'to' properties of the gradient object must be different"
  //   );
  // });
  // it("should throw a validation error when the gradient 'colorFrom' and 'colorTo' properties are the same", () => {
  //   expect(() =>
  //     render(
  //       <Button
  //         gradient={{
  //           from: "top",
  //           to: "bottom",
  //           colorFrom: "red",
  //           colorTo: "red",
  //         }}
  //       />
  //     )
  //   ).toThrow(Error);
  // });
  // it("should throw a validation error when the gradient 'colorFrom' and 'colorTo' properties are not provided", () => {
  //   expect(() =>
  //     render(
  //       <Button
  //         gradient={{
  //           from: "top",
  //           to: "bottom",
  //           colorFrom: "",
  //           colorTo: "",
  //         }}
  //       />
  //     )
  //   ).toThrow(Error);
  // });
});
