import React from "react"
import {render, fireEvent, screen, cleanup} from '@testing-library/react'
import Clickers from "./TestingExampleTwo";

afterEach(cleanup);

it("displays the count", () => {
  const { getByTestId } = render(<Clickers />);
  expect(getByTestId("count")).toHaveTextContent("0");
});


it("increments count", () => {
    render(<Clickers />);
    // screen.debug();
    fireEvent.click(screen.getByText(/Up/));
    // screen.debug();
    expect(screen.getByTestId("count")).toHaveTextContent("1");
  });