import React from "react"
import {render, fireEvent, screen, cleanup, getByText} from '@testing-library/react'
import ApiByHook from "./CounterByHook";

afterEach(cleanup);

it("displays the count", () => {
  render(<ApiByHook />);
  expect(screen.getByText("This counter uses Hooks!")).toBeInTheDocument()
});


it("increments count", () => {
    render(<ApiByHook />);
     screen.debug();
    fireEvent.click(screen.getByText(/Increment Me/));
     screen.debug();
    expect(screen.getByTestId("count")).toHaveTextContent("1");
  });