import React, { Component } from "react"
import { TextField, Button, Grid } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/core/styles"

export class UserDestination extends Component {
  continue = (e) => {
    e.preventDefault()
    this.props.nextStep()
  }
  previous = (e) => {
    e.preventDefault()
    this.props.prevStep()
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
                helperText="Enter Pick Up"
                placeholder="Enter Pickup"
                onChange={handleChange("pickUp")}
                defaultValue={values.pickUp}
                variant="outlined"
              />
              <br />
              <TextField
                helperText="Enter Drop off"
                placeholder="Your Drop off"
                onChange={handleChange("dropOff")}
                defaultValue={values.dropOff}
                variant="outlined"
              />
              <br />
              <TextField
                id="date"
                label="Pick Up date"
                type="date"
                defaultValue="11-11-2021"
                onChange={handleChange("dateTime")}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <br />
              <Grid
                item
                justify="center"
                alignItems="center"
                container
                direction="row-reverse"
                style={{ padding: "1em" }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.continue}
                  style={{ marginBottom: "2em", marginLeft: "1em" }}
                >
                  Send
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={this.previous}
                  style={{ marginBottom: "2em" }}
                >
                  Prev Step
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </>
      </ThemeProvider>
    )
  }
}

export default UserDestination
