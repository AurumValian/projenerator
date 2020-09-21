import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
jest.mock("../helpers/helpers");
import { getRandomIndex, randomProjectApi } from "../helpers/helpers";

describe("App", () => {
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

  it("shows a project when the button is pressed", async () => {
    randomProjectApi.mockResolvedValue({"count":1,"entries":[{"API":"Image-Charts","Description":"Generate charts, QR codes and graph images","Auth":"","HTTPS":true,"Cors":"yes","Link":"https://documentation.image-charts.com/","Category":"Development"}]})
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    const button = screen.getByRole("button");
    fireEvent.click(button);

    const description = await waitFor(() => screen.getByText("Generate charts, QR codes and graph images", {exact: false}))
    expect(description).toBeInTheDocument();
  })

  it("shows the Your Favorites button after something is saved to favorites", async () => {
    randomProjectApi.mockResolvedValue({"count":1,"entries":[{"API":"Image-Charts","Description":"Generate charts, QR codes and graph images","Auth":"","HTTPS":true,"Cors":"yes","Link":"https://documentation.image-charts.com/","Category":"Development"}]})
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    const notYourFavoritesButton = screen.queryByText("Your Favorites");
    expect(notYourFavoritesButton).not.toBeInTheDocument();

    const createProjectButton = screen.getByText("Create Random Project!");
    fireEvent.click(createProjectButton);

    const saveToFavesButton = await waitFor( () => screen.getByText("Save To Favorites"));
    expect(saveToFavesButton).toBeInTheDocument();
    fireEvent.click(saveToFavesButton);

    const yourFavoritesButton = await waitFor( () => screen.getByText("Your Favorites"));
    expect(yourFavoritesButton).toBeInTheDocument();
  })

  it("shows a card and the home button in Your Favorites", async () => {
    randomProjectApi.mockResolvedValue({"count":1,"entries":[{"API":"Image-Charts","Description":"Generate charts, QR codes and graph images","Auth":"","HTTPS":true,"Cors":"yes","Link":"https://documentation.image-charts.com/","Category":"Development"}]})
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    const createProjectButton = screen.getByText("Create Random Project!");
    fireEvent.click(createProjectButton);

    const saveToFavesButton = await waitFor( () => screen.getByText("Save To Favorites"));
    fireEvent.click(saveToFavesButton);

    const yourFavoritesButton = await waitFor( () => screen.getByText("Your Favorites"));
    fireEvent.click(yourFavoritesButton);

    const link = await waitFor( () => screen.getByText("https://documentation.image-charts.com/", {exact: false}))
    const homeButton = await waitFor( () => screen.getByText("Back to Home"))

    expect(link).toBeInTheDocument();
    expect(homeButton).toBeInTheDocument();
  })
})
