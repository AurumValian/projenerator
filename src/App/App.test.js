import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { getRandomIndex, randomProjectApi } from "../helpers/helpers";

it("renders the title and the create project button on load", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )

  const title = screen.getByText("The Project Project");
  const button = screen.getByText("Create Random Project!");

  expect(title).toBeInTheDocument();
  expect(button).toBeInTheDocument();

})
