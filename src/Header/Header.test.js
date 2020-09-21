import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

describe("Header", () => {
  it("should have a title", () => {
    render(
    <MemoryRouter>
      <Header isHome={true} favorites={[]} />
    </MemoryRouter>
  )

  const title = screen.getByText("The Project Project", { exact: false })

  expect(title).toBeInTheDocument();
  })

  it("should have a Back To Home button if isHome is false", () => {
    render(
    <MemoryRouter>
      <Header isHome={false} favorites={[]} />
    </MemoryRouter>
  )

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
  })

  it("should have a Your Favorites button if there are favorites", () => {
    render(
    <MemoryRouter>
      <Header isHome={true} favorites={[{api: {"API":"Transport for Washington, US","Description":"Washington Metro transport API","Auth":"OAuth","HTTPS":true,"Cors":"unknown","Link":"https://developer.wmata.com/","Category":"Transportation"}, audience: "Bicyclists"}]} />
    </MemoryRouter>
  )

  expect(screen.getByRole("button")).toBeInTheDocument();
  })

  it("should have both buttons if there are favorites and isHome is false", () => {
    render(
    <MemoryRouter>
      <Header isHome={false} favorites={[{api: {"API":"Transport for Washington, US","Description":"Washington Metro transport API","Auth":"OAuth","HTTPS":true,"Cors":"unknown","Link":"https://developer.wmata.com/","Category":"Transportation"}, audience: "Bicyclists"}]} />
    </MemoryRouter>
    )

    expect(screen.getAllByRole("button").length).toBe(2);
  })

  it("should run the backHome function after clicking on the home button", () => {
    const backHome = jest.fn();
    render(
    <MemoryRouter>
      <Header isHome={false} favorites={[]} backHome={backHome}/>
    </MemoryRouter>
    )

    const button = screen.getByRole("button");

    fireEvent.click(button);
    expect(backHome.mock.calls.length).toBe(1);
  })
})
