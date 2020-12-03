import React from "react"
import { Link } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import Hidden from "@material-ui/core/Hidden"
import footerAdornment from "../../assets/Footer Adornment.svg"
import facebook from "../../assets/facebook.svg"
import twitter from "../../assets/twitter.svg"
import instagram from "../../assets/instagram.svg"

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.orange,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "#ccc",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "700",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
  icon: {
    height: "3em",
    width: "3em",
    [theme.breakpoints.down("xs")]: {
      height: "2em",
      width: "2em",
    },
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
      right: "0.6em",
    },
  },
}))
const Footer = (props) => {
  const { setValue, setSelectedIndex } = props
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item style={{ margin: "3em" }}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => {
                  setValue(0)
                }}
                to="/"
                className={classes.link}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item style={{ margin: "3em" }}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => {
                  setValue(1)
                  setSelectedIndex(0)
                }}
                to="/services"
                className={classes.link}
              >
                Services
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  setValue(1)
                  setSelectedIndex(1)
                }}
                to="/airport-transfer"
                className={classes.link}
              >
                Airport Transfer
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  setValue(1)
                  setSelectedIndex(2)
                }}
                to="/bus-rentals"
                className={classes.link}
              >
                Bus Rentals
              </Grid>
            </Grid>
          </Grid>
          <Grid item style={{ margin: "3em" }}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => {
                  setValue(3)
                }}
                to="/about"
                className={classes.link}
              >
                About Us
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  setValue(3)
                }}
                to="/about"
                className={classes.link}
              >
                History
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  setValue(3)
                }}
                to="/about"
                className={classes.link}
              >
                Meet Our Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item style={{ margin: "3em" }}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => {
                  setValue(4)
                }}
                to="/contact"
                className={classes.link}
              >
                Contact us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        alt="black decorative slash"
        src={footerAdornment}
        className={classes.adornment}
      />
      <Grid
        container
        justify="flex-end"
        spacing={2}
        className={classes.socialContainer}
      >
        <Grid
          item
          component={"a"}
          href="https://www.facebook.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="facebook" src={facebook} className={classes.icon} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="twitter" src={twitter} className={classes.icon} />
        </Grid>
        <Grid
          component={"a"}
          href="https://www.instagram.com"
          item
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="instagram" src={instagram} className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer
