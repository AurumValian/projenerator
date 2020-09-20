import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import ProjectCard from "./ProjectCard";

describe("Project Card", () => {
  it("should have an API, an audience, a link, and a button", () => {
    const testApi = {api: {"API":"Transport for Washington, US","Description":"Washington Metro transport API","Auth":"OAuth","HTTPS":true,"Cors":"unknown","Link":"https://developer.wmata.com/","Category":"Transportation"}, audience: "Bicyclists"};
    const mockDeleteFavorite = jest.fn();
    render(
      <MemoryRouter>
        <ProjectCard
          api={testApi.api.API}
          link={testApi.api.Link}
          audience={testApi.audience}
          key="0"
          id="0"
          deleteFavorite={mockDeleteFavorite}
        />
      </MemoryRouter>
    )

    const api = screen.getByText("Transport for Washington, US", { exact: false });
    const link = screen.getByText("https://developer.wmata.com/", { exact: false });
    const audience = screen.getByText("Bicyclists", { exact: false });
    const button = screen.getByRole("button");

    expect(api).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(audience).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  })

  it("should run deleteFavorite when the button is clicked", () => {
    const testApi = {api: {"API":"Transport for Washington, US","Description":"Washington Metro transport API","Auth":"OAuth","HTTPS":true,"Cors":"unknown","Link":"https://developer.wmata.com/","Category":"Transportation"}, audience: "Bicyclists"};
    const mockDeleteFavorite = jest.fn();
    render(
      <MemoryRouter>
        <ProjectCard
          api={testApi.api.API}
          link={testApi.api.Link}
          audience={testApi.audience}
          key="0"
          id="0"
          deleteFavorite={mockDeleteFavorite}
        />
      </MemoryRouter>
    )

    const button = screen.getByRole("button");

    fireEvent.click(button);
    fireEvent.click(button);

    expect(mockDeleteFavorite.mock.calls.length).toBe(2);
  })
})
