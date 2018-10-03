import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { Panel } from "react-bootstrap"

import { DebouncedInput } from "./index"
import docString from "./README.md"

// See https://storybook.js.org/basics/writing-stories/ for more info

class Consumer extends React.Component {
  render() {
    return (
      <div>

        <Panel>
          <Panel.Heading>
            <Panel.Title componentClass={`h2`}>
              DebouncedInput Example
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <DebouncedInput {...this.props} />
          </Panel.Body>
          <Panel.Footer>
            <div
              dangerouslySetInnerHTML={{ __html: docString }}
              style={{ margin: 20 }}
            />
          </Panel.Footer>
        </Panel>
      </div>
    )
  }
}

storiesOf("DebouncedInput", module).add("text input control", () => {
  // Define properties, callbacks, etc., then invoke the Consumer
  const formControl = props => <input {...props} />
  return (
    <Consumer
      formControl={formControl}
      onChange={action("onChange")}
      type="text"
      name="name"
      id="input-control-name"
      className="form-control"
    />
  )
})
