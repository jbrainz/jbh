import React, { Component } from "react"
import UserDetails from "./UserDetails"
import UserDestination from "./UserDestination"

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    pickUp: "",
    dropOff: "",
    dateTime: Date,
  }

  //Proceed to next strep
  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1,
    })
  }
  //Previous Step.
  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1,
    })
  }

  //Handle Fields change.
  handleChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    })
  }

  render() {
    const { step } = this.state
    const { firstName, lastName, pickUp, dropOff, email, dateTime } = this.state
    const values = { firstName, lastName, pickUp, dropOff, dateTime, email }

    switch (step) {
      case 1:
        return (
          <UserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2:
        return (
          <UserDestination
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            prevStep={this.prevStep}
          />
        )
      default:
        break
    }
  }
}

export default UserForm
