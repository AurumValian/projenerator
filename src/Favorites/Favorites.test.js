import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Favorites from "./Favorites";

describe("Favorites", () => {
  it("should have cards equal to the number of favorites in array", () => {
    const favorites = [
      {api: {"API":"Transport for Washington, US","Description":"Washington Metro transport API","Auth":"OAuth","HTTPS":true,"Cors":"unknown","Link":"https://developer.wmata.com/","Category":"Transportation"}, audience: "Bicyclists"},
      {api: {"API":"Image-Charts","Description":"Generate charts, QR codes and graph images","Auth":"","HTTPS":true,"Cors":"yes","Link":"https://documentation.image-charts.com/","Category":"Development"}, audience: "Comedians"}
    ]
      render(
      <MemoryRouter>
        <Favorites noLongerHome={jest.fn()} favorites={favorites} deleteFavorite={jest.fn()}/>
      </MemoryRouter>
    )

      const cards = screen.getAllByRole("article");
      expect(cards.length).toBe(2);
  })

  it("should run noLongerHome when it mounts", () => {
    const favorites = [
      {api: {"API":"Transport for Washington, US","Description":"Washington Metro transport API","Auth":"OAuth","HTTPS":true,"Cors":"unknown","Link":"https://developer.wmata.com/","Category":"Transportation"}, audience: "Bicyclists"},
      {api: {"API":"Image-Charts","Description":"Generate charts, QR codes and graph images","Auth":"","HTTPS":true,"Cors":"yes","Link":"https://documentation.image-charts.com/","Category":"Development"}, audience: "Comedians"}
    ]
    const noLongerHome = jest.fn();
      render(
      <MemoryRouter>
        <Favorites noLongerHome={noLongerHome} favorites={favorites} deleteFavorite={jest.fn()}/>
      </MemoryRouter>
    )

    expect(noLongerHome.mock.calls.length).toBe(1);
  })
})
