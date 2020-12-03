import React, { useState } from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { Grid, Typography, Button, TextField } from "@material-ui/core"

import fleet from "../../assets/fleet.jpg"
import phoneIcon from "../../assets/phone.svg"
import emailIcon from "../../assets/email.svg"
import airplane from "../../assets/send.svg"

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${fleet})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: "5em",
    borderRadius: 10,
  },
  send: {
    ...theme.typography.book,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: "1rem",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}))

const ContactUs = () => {
  const classes = useStyles()
  const theme = useTheme()
  const [name, setName] = useState("")

  const [email, setEmail] = useState("")
  const [emailHelper, setEmailHelper] = useState("")

  const [phone, setPhone] = useState("")
  const [phoneHelper, setPhoneHelper] = useState("")

  const [message, setMessage] = useState("")

  const onChange = (e) => {
    let valid

    switch (e.target.id) {
      case "email":
        setEmail(e.target.value)
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          e.target.value,
        )
        if (!valid) {
          setEmailHelper("Invalid Email")
        } else {
          setEmailHelper("")
        }
        break

      case "phone":
        setPhone(e.target.value)
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          e.target.value,
        )
        if (!valid) {
          setPhoneHelper("Invalid Phone")
        } else {
          setPhoneHelper("")
        }
        break
      default:
        break
    }
  }

  return (
    <Grid container direction="row">
      <Grid
        item
        container
        style={{ marginBottom: "4em", marginTop: "4em" }}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h2" style={{ lineHeight: 1 }}>
            Contact Us
          </Typography>
          <Typography
            variant="body1"
            style={{ color: theme.palette.common.blue }}
          >
            We're waiting...
          </Typography>
        </Grid>
        <Grid justify="center" alignItems="center" item container>
          <Grid item>
            <img
              src={phoneIcon}
              alt="Phone"
              style={{ marginRight: "0.5rem" }}
            />
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
            >
              +1-555-444-555
            </Typography>
          </Grid>
        </Grid>
        <Grid item justify="center" alignItems="center" container>
          <Grid item>
            <img
              src={emailIcon}
              alt="Envelope"
              style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
            />
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
            >
              jdoe@gmail.com
            </Typography>
          </Grid>
        </Grid>
        <Grid item container direction="column" style={{ maxWidth: "20em" }}>
          <Grid item>
            <TextField
              label="Name"
              id="name"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Email"
              helperText={emailHelper}
              error={emailHelper.length !== 0}
              id="email"
              fullWidth
              value={email}
              onChange={onChange}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Phone"
              helperText={phoneHelper}
              error={phoneHelper.length !== 0}
              id="phone"
              fullWidth
              value={phone}
              onChange={onChange}
            />
          </Grid>
        </Grid>
        <Grid item style={{ maxWidth: "20em" }}>
          <TextField
            InputProps={{ disableUnderline: true }}
            value={message}
            className={classes.message}
            id="message"
            multiline
            fullWidth
            rows={10}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Grid>
        <Grid item style={{ marginTop: "2em" }}>
          <Button variant="contained" className={classes.send}>
            Send Message
            <img
              src={airplane}
              style={{ marginLeft: "1em" }}
              alt="paper airplane"
            />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ContactUs
