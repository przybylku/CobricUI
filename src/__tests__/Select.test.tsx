/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import { ClassicSelect } from "../components/Select/Select";
import React from "react";

describe("[Button] Renderer", () => {
  it("should render the Button component", () => {
    render(<ClassicSelect />);
    expect(screen.getByTestId("cobric-test-select")).toBeDefined();
  });
});
