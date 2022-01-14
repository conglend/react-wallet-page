import React from "react";
import { render } from "@testing-library/react";
import ActivityItem from "./ActivityItem";
import "@testing-library/jest-dom"

import { activities } from "../constants";


const props = {
  activity: activities[0]
}

describe("Experience Detail > Activity Item", () => {

  it("Should render activity icon on the activity item", () => {
    const { getByTestId } = render(<ActivityItem {...props} />)
    expect(getByTestId("activity-icon")).toBeInTheDocument()
  })

  it("Should render activity description on the activity item", () => {
    const { getByTestId } = render(<ActivityItem {...props} />)
    expect(getByTestId("activity-description")).toBeInTheDocument()
  })

  it("Should render activity date on the activity item", () => {
    const { getByTestId } = render(<ActivityItem {...props} />)
    expect(getByTestId("activity-date")).toBeInTheDocument()
  })
})