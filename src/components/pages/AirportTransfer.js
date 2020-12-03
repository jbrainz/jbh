import React from "react"
import { Link } from "react-router-dom"
import { makeStyles, useTheme } from "@material-ui/styles"
import {
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  Fab,
} from "@material-ui/core"
import WhatsAppIcon from "@material-ui/icons/WhatsApp"
import CallIcon from "@material-ui/icons/Call"
import BookIcon from "@material-ui/icons/Book"
import back from "../../assets/backArrow.svg"
import foward from "../../assets/forwardArrow.svg"
import time from "../../assets/time.svg"
import cash from "../../assets/paynow.svg"
import pay from "../../assets/flight.svg"

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "20em",
    },
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  mainContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    paddingTop: "2em",
    paddingBottom: "10em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "2em",
      paddingRight: "2em",
    },
  },
  pay: {
    height: "15em",
    width: "15em",
    marginLeft: "5em",
    [theme.breakpoints.down("md")]: {
      height: "10em",
      width: "10em",
      marginLeft: "1.5em",
    },
  },
  root: {
    "& > *": {
      margin: theme.spacing(3),
    },
    [theme.breakpoints.down("sm")]: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}))

const AirportTransfer = (props) => {
  const classes = useStyles()
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down("md"))
  const matchesS = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid
        item
        container
        direction="row"
        justify="center"
        style={{ marginTop: "3em", paddingBottom: "5em" }}
      >
        {matchesSM ? null : (
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: "1em", marginLeft: "-3.5em" }}
          >
            <IconButton
              style={{ backgroundColor: "transparent" }}
              onClick={() => props.setSelectedIndex(0)}
              component={Link}
              to="/services"
            >
              <img alt="back to services page" src={back} />
            </IconButton>
          </Grid>
        )}
        <Grid
          item
          container
          direction="column"
          justify="center"
          className={classes.heading}
          alignItems="center"
        >
          <Grid item>
            <Typography
              variant="h2"
              style={{ fontSize: matchesS ? "1.5rem" : undefined }}
            >
              Airport Transfer Service.
            </Typography>
          </Grid>
          <Grid item style={{ marginTop: "3em" }}>
            <Typography variant="body1" paragraph>
              At JBH ride we provide a service that is reliable and affordable
              in National capital region in india. We make transportation from
              airports simple with professional drivers and high quality
              vehicles.
            </Typography>
            <Typography variant="body1" paragraph>
              As part of your airport transfer with us, one of our
              professionally-trained drivers will greet you with a name sign in
              the arrivals hall of the airport, ready to help you with your
              luggage and guide you to your top of the range vehicle.
            </Typography>
            <Grid item style={{ marginTop: "5em" }}>
              <Typography
                variant="h4"
                style={{ fontSize: matchesS ? "1.5rem" : undefined }}
              >
                Why us?.
              </Typography>
            </Grid>
            <Typography
              variant="h6"
              style={{
                fontSize: matchesS ? "1.5rem" : undefined,
                marginBottom: "1em",
                marginTop: "1em",
              }}
            >
              Convinient Pickup
            </Typography>
            <Typography variant="body1" paragraph>
              With JBH ride our driver will pick you up from inside the airport
              terminal. As soon as you have collected your baggage you'll meet
              your driver who will be holding up a sign with your name on it.
              From there you will be shown straight to your car to get to your
              destination as soon as possible.
            </Typography>{" "}
            <Typography
              variant="h6"
              style={{
                fontSize: matchesS ? "1.5rem" : undefined,
                marginBottom: "1em",
                marginTop: "1em",
              }}
            >
              Free waiting time
            </Typography>
            <Typography variant="body1" paragraph>
              Once you have arrived at the airport there is up to 60 minutes
              free waiting time included in each booking - depending on your
              booking class. We understand it can often take longer than
              expected to reach your driver and so we give you a bit of extra
              time.
            </Typography>
          </Grid>
        </Grid>
        {matchesSM ? null : (
          <Grid item className={classes.arrowContainer}>
            <IconButton
              component={Link}
              to="/bus-rental"
              onClick={() => props.setSelectedIndex(2)}
              style={{ backgroundColor: "transparent" }}
            >
              <img src={foward} alt="bus rentals" />
            </IconButton>
          </Grid>
        )}
      </Grid>
      <Grid item container direction="row" justify="center">
        <Grid
          item
          container
          direction="row"
          alignItems="center"
          className={classes.root}
        >
          <Grid item container direction="column" alignItems="center">
            <Grid item>
              <Typography
                variant="subtitle1"
                style={{ fontWeight: "600", fontSize: "1.25em" }}
              >
                Try out our services today, our customer services are 24/7
                available
              </Typography>
            </Grid>
          </Grid>
          <Grid item style={{ marginLeft: matchesSM ? "1em" : "30em" }}>
            <Fab color="secondary" aria-label="Whatsapp">
              <WhatsAppIcon />
            </Fab>
          </Grid>
          <Grid item>
            <Fab color="primary" aria-label="Call us">
              <CallIcon />
            </Fab>
          </Grid>
          <Grid item>
            <Fab color="default" aria-label="book now" variant="extended">
              <BookIcon className={classes.extendedIcon} />
              {matchesS ? undefined : "Book Now"}
            </Fab>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default AirportTransfer
