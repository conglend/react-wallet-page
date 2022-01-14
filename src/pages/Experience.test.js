import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import Experience from "./Experience";
import "@testing-library/jest-dom"

describe("Experience Page", () => {

  it("Should render search input field on the page", () => {
    const { getByTestId } = render(<Router><Experience /></Router>)
    expect(getByTestId("search-input")).toBeInTheDocument()
    fireEvent.change(getByTestId("search-input"), {target: {value: 'Ab'}})
  })

  it("Should render 6 experience on initial render", async () => {
    const { queryByTestId } = render(<Router><Experience /></Router>)
    await(() => expect(queryByTestId("experience-item").length).toEqual(6))
  })

  it("Should render 1 experience on 'Ab' search", async () => {
    const { getByTestId, queryByTestId } = render(<Router><Experience /></Router>)
    fireEvent.change(getByTestId("search-input"), {target: {value: 'Ab'}})
    await(() => expect(queryByTestId("experience-item").length).toEqual(1))
  })

})