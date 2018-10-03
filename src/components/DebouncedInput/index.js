import React from "react"
import T from "prop-types"

/**
 * Provides a wrapper around an input form control function to wait until the user has stopped typing in the form control.
 *
 * Debouncing stops if the user presses the "Enter" key or the input form control is blurred.
 *
 * The caller can provide their own `onKeyUp` and `onBlur` callbacks, which are called when the local processing is finished.
 *
 * @export
 * @class DebouncedInput
 * @extends {React.Component}
 * @property {function} formControl render function for the form control
 * @property {function} onChange callback function to receive the input value when bouncing stops
 * @property {function} [onKeyUp] callback function for additional processing of the keyUp event by the consumer
 * @property {function} [onBlur] callback function for additional processing of the blur event by the consumer
 * @property {number} [debounceTimeout] milliseconds to wait until bouncing stops
 */
export class DebouncedInput extends React.Component {
  static propTypes = {
    /**
     * formControl is a functional render prop to let the consumer provide the type of input control they wish.
     *
     * @param {object} props an object containing the properties passed to the form control
     *
     * @example
     * props => (<input {...props} />)
     */
    formControl: T.func.isRequired,

    /**
     * onChange is a functional callback that receives the input value once bouncing is finished
     *
     * @param {string} value current content of the form control
     *
     * @example
     * string => {
     *   // ... do something with the input value
     * }
     *
     */
    onChange: T.func.isRequired,
    /**
     * onKeyUp is an optional funcctional callback that receives the keyUp event for additional processing
     *
     * @param {object} event synthetic event when a keyUp occurs
     *
     * @example
     * event => {
     *   // ... do domething with the keyUp event
     * }
     */
    onKeyUp: T.func,
    /**
     * onBlur is an optional functional callback that recieves the blur event for addtional processing
     *
     * @param {object} event synthetic event when a blur occurs
     *
     * @example
     * event => {
     *   // ... do something with the blur event
     * }
     */
    onBlur: T.func,
    /**
     * debounceTimeout is the number of milliseconds to wait for typing activity to stop in the form control
     *
     * @type number
     */
    debounceTimeout: T.number
  }

  static defaultProps = {
    onKeyUp: () => {},
    onBlur: () => {},
    debounceTimeout: 1000
  }

  state = {
    value: "",
    bouncing: false
  }

  parentOnBlur = null
  parentOnChange = null
  parentOnKeyUp = null

  debouncer = setTimeout(() => {}, 1) // just a dummy initially so we can call `clearTimeout` on it later if need be

  handleBlur = e => {
    this.stopBouncing()
    if (this.parentOnBlur) {
      this.parentOnBlur(e)
    }
  }
  handleChange = e => {
    this.setState({ value: e.target.value })
  }
  handleKeyUp = e => {
    if (e.key === "Enter") {
      this.stopBouncing()
    } else {
      this.startBouncing()
    }
    if (this.parentOnKeyUp) {
      this.parentOnKeyUp(e)
    }
  }
  startBouncing = () => {
    this.setState({ bouncing: true }, () => {
      clearTimeout(this.debouncer)
      setTimeout(() => {
        this.setState({ bouncing: false })
      }, this.props.debounceTimeout)
    })
  }
  stopBouncing = () => {
    clearTimeout(this.debouncer)
    this.setState({ bouncing: false })
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.bouncing !== prevState.bouncing) {
      if (!this.state.bouncing) {
        this.parentOnChange(this.state.value)
      }
    }
  }
  render() {
    const {
      formControl,
      onChange,
      onKeyUp,
      onBlur,
      ...formControlProps
    } = this.props
    delete formControlProps["debounceTimeout"] // remove this so we don't send it to the form control
    this.parentOnChange = onChange
    this.parentOnKeyUp = onKeyUp
    this.parentOnBlur = onBlur
    formControlProps.onChange = this.handleChange
    formControlProps.onKeyUp = this.handleKeyUp
    formControlProps.onBlur = this.handleBlur
    return <React.Fragment>{formControl(formControlProps)}</React.Fragment>
  }
}
export default DebouncedInput
