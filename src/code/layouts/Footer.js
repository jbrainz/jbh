import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { makeStyles, Grid, Typography, Button } from "@material-ui/core"
import { AppContext } from "../Components/context/ContextState"

import insta from "../assets/icons/instagram.png"
import facebook from "../assets/icons/facebook.png"
import twitter from "../assets/icons/twitter.png"

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.orange,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },

  mainContainer: {
    position: "absolute",
    background: "linear-gradient(45deg, #ffbe0b  10%, #ff7b00 100%)",
  },
  link: {
    color: "#fff",
    fontFamily: "Arial",
    fontSize: "1rem",
    fontWeight: "700",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
  icon: {
    height: "3em",
    width: "3em",
    [theme.breakpoints.down("sm")]: {
      height: "1.5em",
      width: "1.5em",
    },
  },
  socialContainer: {
    position: "absolute",
    marginTop: "3em",
    right: "2em",
    [theme.breakpoints.down("sm")]: {
      right: "0.8em",
      marginTop: "15em",
    },
  },
}))
const Footer = () => {
  const { setValue, setSelectedIndex } = useContext(AppContext)
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Grid container justify="center" className={classes.mainContainer}>
        <Grid item style={{ margin: "3em" }}>
          <Grid container direction="column" spacing={1}>
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
          <Grid container direction="column" spacing={4}>
            <Grid
              item
              component={Link}
              onClick={() => {
                setValue(1)
                setSelectedIndex(0)
              }}
              to="/menu"
              className={classes.link}
            >
              Menu
            </Grid>
            <Grid
              item
              component={Link}
              onClick={() => {
                setValue(1)
                setSelectedIndex(1)
              }}
              to="/order"
              className={classes.link}
            >
              Order Now
            </Grid>
            <Grid
              item
              component={Link}
              onClick={() => {
                setValue(1)
                setSelectedIndex(2)
              }}
              to="/about"
              className={classes.link}
            >
              About Us
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
              to="/contact"
              className={classes.link}
            >
              Contact Us
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
              to="/reservation"
              className={classes.link}
            >
              Book a table
            </Grid>
          </Grid>
        </Grid>
      </Grid>
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
          <img alt="instagram" src={insta} className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer
