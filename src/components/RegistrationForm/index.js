// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isSubmitted: false,
    isFirstNameError: false,
    isLastNameError: false,
  }

  validateFirstName = () => {
    const {firstName} = this.state
    return firstName !== ''
  }

  validateLastName = () => {
    const {lastName} = this.state
    return lastName !== ''
  }

  logLastNameError = () => {
    const isValidLastName = this.validateLastName()
    this.setState({isLastNameError: !isValidLastName})
  }

  logFirstNameError = () => {
    const isValidFirstName = this.validateFirstName()
    this.setState({isFirstNameError: !isValidFirstName})
  }

  onSubmitForm = event => {
    event.preventDefault()

    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()

    if (isValidFirstName && isValidLastName) {
      this.setState({isSubmitted: true})
    } else {
      this.setState({
        isFirstNameError: !isValidFirstName,
        isLastNameError: !isValidLastName,
        isSubmitted: false,
      })
    }

    // if (firstName !== '' && lastName !== '') {
    //   this.setState({firstName: '', lastName: '', isSubmitted: true})
    // } else {
    //   this.setState({isSubmitted: false})
    //   this.logFirstNameError()
    //   this.logLastNameError()
    // }
  }

  resubmitForm = () => {
    this.setState({isSubmitted: false})
  }

  changeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  changeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  renderFormElement = () => {
    const {firstName, lastName, isFirstNameError, isLastNameError} = this.state
    return (
      <form onSubmit={this.onSubmitForm} className="form-container">
        <label htmlFor="firstName" className="label-element">
          FIRST NAME
        </label>
        <input
          id="firstName"
          type="text"
          value={firstName}
          placeholder="First Name"
          className="input-element"
          onBlur={this.logFirstNameError}
          onChange={this.changeFirstName}
        />
        {isFirstNameError && <p className="error-message">Required</p>}
        <label htmlFor="lastName" className="label-element">
          LAST NAME
        </label>
        <input
          id="lastName"
          value={lastName}
          type="text"
          placeholder="Last Name"
          className="input-element"
          onBlur={this.logLastNameError}
          onChange={this.changeLastName}
        />
        {isLastNameError && <p className="error-message">Required</p>}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    )
  }

  renderResultElement = () => (
    <div className="success-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        onClick={this.resubmitForm}
        className="submit-button"
      >
        Submit another response
      </button>
    </div>
  )

  render() {
    const {isSubmitted} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading"> Registration Form </h1>
        {!isSubmitted ? this.renderFormElement() : this.renderResultElement()}
      </div>
    )
  }
}
export default RegistrationForm
