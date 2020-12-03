import React, { Component } from "react"
import { TextField, Button, Grid } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/core/styles"

export class UserDetails extends Component {
  state = {
    emailHelper: "",
  }
  continue = (e) => {
    e.preventDefault()
    this.props.nextStep()
  }

  validate = (e) => {
    let valid
    if (e.target.id === "email") {
      valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)
      if (!valid) {
        this.setState({
          emailHelper: "Invalid email",
        })
      } else {
        this.setState({
          emailHelper: "",
        })
      }
    }
  }
  render() {
    const { values, handleChange } = this.props
    return (
      <ThemeProvider>
        <>
          <Grid container>
            <Grid
              item
              direction="column"
              container
              alignItems="center"
              justify="center"
              style={{ marginTop: "2em" }}
            >
              <TextField
                helperText="Enter First name"
                placeholder="firstname"
                onChange={handleChange("firstName")}
                defaultValue={values.firstName}
                variant="outlined"
                required
              />
              <br />
              <TextField
                helperText="Enter Last name"
                placeholder="lastname"
                onChange={handleChange("lastName")}
                defaultValue={values.lastName}
                variant="outlined"
                required
              />
              <br />
              <TextField
                helperText={this.emailHelper}
                placeholder="Email"
                onChange={handleChange("email")}
                defaultValue={values.email}
                variant="outlined"
                id="email"
                required
                type="email"
              />
              <br />
              <Button
                variant="contained"
                color="primary"
                onClick={this.continue}
                style={{ marginBottom: "2em" }}
              >
                Next Step
              </Button>
            </Grid>
          </Grid>
        </>
      </ThemeProvider>
    )
  }
}

export default UserDetails
