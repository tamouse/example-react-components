import React from 'react'
import T from 'prop-types'
import {Panel, FormGroup, Label, LabelTitle, TextBox, ActionGroup, Button, Success, Failure} from './styles'

export class NotesAndTerms extends React.Component {
  static propTypes = {
    notes: T.string.isRequired,
    terms: T.string.isRequired,
    onSubmit: T.func.isRequired,
    successDisplayDuration: T.number,
    submitButtonLabel: T.string,
    successMessage: T.any,
    failureMessage: T.any,
  };

  static defaultProps = {
    successDisplayDuration: 5000,
    submitButtonLabel: `Submit`,
    successMessage: `Saved!`,
    failureMessage: `Failed!`
  }

  state = {
    notes: '',
    notes_orig: '',
    terms: '',
    terms_orig: '',
    disableSubmit: true,
    displaySaved: false,
    displayError: false
  };

  componentWillMount() {
    this.updateStateFromProps(this.props)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.didPropsChange(this.props, prevProps)) {
      this.updateStateFromProps(this.props)
    } else if (this.isStateChanged(this.state, prevState)) {
      this.enableSubmit()
    }
  }

  handleChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      disableSubmit: true
    });
    this.props.onSubmit(this.state.notes, this.state.terms)
      .then(() => {
        this.setState({
            displaySaved: true,
          },
          () => {
            setTimeout(() => this.setState({displaySaved: false}), this.props.successDisplayDuration)
          })
      })
      .catch(() => {
        this.setState({displayError: true})
      })
  };

  didPropsChange = (currProps, prevProps) => {
    return (currProps.notes !== prevProps.notes || currProps.terms !== prevProps.terms)
  }

  updateStateFromProps = ({notes, terms}) => {
    this.setState({
      notes,
      notes_orig: notes,
      terms,
      terms_orig: terms
    })
  }

  isStateChanged = (currState, prevState) => {
    return (currState.notes !== prevState.notes || currState.terms !== prevState.terms)
  }

  enableSubmit = () => {
    this.setState({
      disableSubmit: (this.state.notes === this.state.notes_orig && this.state.terms === this.state.terms_orig)
    })
  }

  render() {
    return (
      <Panel>
        <FormGroup>
          <Label>
            <LabelTitle>Notes</LabelTitle>
            <TextBox name="notes" value={this.state.notes} onChange={this.handleChange}/>
          </Label>
        </FormGroup>
        <FormGroup>
          <Label>
            <LabelTitle>Terms</LabelTitle>
            <TextBox name="terms" value={this.state.terms} onChange={this.handleChange}/>
          </Label>
        </FormGroup>
        <ActionGroup>
          <Button disabled={this.state.disableSubmit} onClick={this.handleSubmit}>{this.props.submitButtonLabel}</Button>
          {this.state.displaySaved && <Success>{this.props.successMessage}</Success>}
          {this.state.displayError && <Failure>{this.props.failureMessage}</Failure>}
        </ActionGroup>
      </Panel>
    )
  }

}

export default NotesAndTerms
