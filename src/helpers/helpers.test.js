import React from "react";
import "@testing-library/jest-dom";
import { getRandomIndex, randomProjectApi } from "./helpers"

describe("Helpers", () => {
  it("getRandomIndex should return a random index from an array", () => {
    const array = [2, 3, 8, 6];
    const randomIndex = getRandomIndex(array);

    expect(randomIndex).toBeLessThan(4);
    expect(randomIndex).toBeGreaterThan(-1);
  })

  it("randomProjectApi should return a random API", async () => {
    const api = await randomProjectApi();
    expect(api).toBeDefined();
    expect(api.entries[0]).toHaveProperty("API");
  })
})
