import React from "react"
import renderer from "react-test-renderer"

import { DebouncedInput } from "./index"

describe("DebouncedInput", () => {
  it("renders the DebouncedInput component", () => {
    const formControl = (props)=>(<input {...props} />)
    const onChange = jest.fn()
    const actual = renderer.create(
      <DebouncedInput formControl={formControl} onChange={onChange}/>
    )
    expect(actual).toMatchSnapshot()
  })
})
