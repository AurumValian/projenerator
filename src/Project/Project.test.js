import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Project from "./Project";


describe("Project", () => {
  const testApi = {api: {"API":"Transport for Washington, US","Description":"Washington Metro transport API","Auth":"OAuth","HTTPS":true,"Cors":"unknown","Link":"https://developer.wmata.com/","Category":"Transportation"}, audience: "Bicyclists"};
  const mockSaveProject = jest.fn();
  it("should render an audience, a description, an API, a link, and a button", () => {
    render(
      <MemoryRouter>
        <Project
          api={testApi.api.API}
          description={testApi.api.Description}
          link={testApi.api.Link}
          audience={testApi.audience}
          saveProject={mockSaveProject}
        />
      </MemoryRouter>
    )

    const api = screen.getByText("Transport for Washington, US", { exact: false });
    const description = screen.getByText("Washington Metro transport API", { exact: false });
    const link = screen.getByText("Link to your API!", { exact: false });
    const audience = screen.getByText("Bicyclists", { exact: false });
    const button = screen.getByRole("button");

    expect(api).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(audience).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  })

  it("should run the saveProject function when the button is clicked", () => {
    const testApi = {api: {"API":"Transport for Washington, US","Description":"Washington Metro transport API","Auth":"OAuth","HTTPS":true,"Cors":"unknown","Link":"https://developer.wmata.com/","Category":"Transportation"}, audience: "Bicyclists"};
    const mockSaveProject = jest.fn();
    render(
      <MemoryRouter>
        <Project
          api={testApi.api.API}
          description={testApi.api.Description}
          link={testApi.api.Link}
          audience={testApi.audience}
          saveProject={mockSaveProject}
        />
      </MemoryRouter>
    )

      const button = screen.getByRole("button");

      fireEvent.click(button);

      expect(mockSaveProject.mock.calls.length).toBe(1);
  })
})
