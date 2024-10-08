import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import App from "./App";

describe("Homework 31052024", () => {
  test("testing jest to the limits", async () => {
    render(<App />);
    const inputFieldName = screen.getByTestId("inputName");
    // const inputFieldName = screen.getByRole('textbox', { name: /name/i})
    const inputFieldEmail = screen.getByTestId("inputEmail");
    // const inputFieldName = screen.getByRole('textbox', { name: /email/i})
    const sendButton = screen.getByTestId("sendButton");
    // const sendButton = screen.getByRole('button')

    await user.click(inputFieldName);
    await user.keyboard("Hallo");

    await user.click(inputFieldEmail);
    await user.keyboard("Hallo@hallo.com");

    await user.click(sendButton);

    const tableName = screen.getByTestId("tableName");
    //const tableName = screen.getByTestId('tableName', {name:  Hallo})
    const tableEmail = screen.getByTestId("tableEmail");
    //const tableName = screen.getByTestId('tableName', {name:  Hallo})

    expect(tableName).toBeInTheDocument();
    expect(tableEmail).toBeInTheDocument();
  });
});

/* test("render learn react", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("button click flow", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: /blau/i }); // i ist für case insensitive
  const checkboxElement = screen.getByRole("checkbox", { name: /toggle/i });
  expect(buttonElement).toHaveClass("rot");

  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveClass("blau");

  fireEvent.click(checkboxElement);
  expect(checkboxElement).toBeChecked();
  expect(buttonElement).toBeDisabled();
  expect(buttonElement).toHaveClass("grey");

  fireEvent.click(checkboxElement);
  expect(checkboxElement).not.toBeChecked();
  expect(buttonElement).toBeEnabled();
  expect(buttonElement).toHaveClass("blau");
});

test("checkbox checker", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: /blau/i });
  const checkboxElement = screen.getByRole("checkbox", { name: /toggle/i });

  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();

  fireEvent.click(checkboxElement);
  expect(checkboxElement).toBeChecked();
  expect(buttonElement).toBeDisabled();

  fireEvent.click(checkboxElement);
  expect(checkboxElement).not.toBeChecked();
  expect(buttonElement).toBeEnabled();
}); */
