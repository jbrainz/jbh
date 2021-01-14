import React from "react"
import { Grid, Typography, useMediaQuery, makeStyles } from "@material-ui/core"
import { useTheme } from "@material-ui/styles"
import Header from "../layouts/Header"

import banner from "./assets/banners/ban.jpg"
import chef from "./assets/banners/ab15.png"

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "2em",
  },
  chef: {
    fontFamily: "Roboto",
    fontSize: "4em",
    color: "#3C3C3C",
    fontWeight: "700",
    lineHeight: "82px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.8em",
      lineHeight: "32px",
    },
  },
  name: {
    fontFamily: "Raleway",
    fontSize: "1em",
    color: "#3C3C3C",
    fontWeight: "bold",
    lineHeight: "82px",
  },
  history: {
    fontSize: "1.6em",
    color: "#3C3C3C",
    fontWeight: "400",
    fontFamily: "Raleway",
    paddingRight: 35,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1em",
    },
  },
}))
const About = () => {
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
  const classes = useStyles()
  return (
    <>
      <Header header="Find Out About Us" back={banner} />
      <div className={classes.container}>
        <Typography className={classes.chef}>Get to know who we are</Typography>
        <Grid container justify="center" alignItems="center">
          <Grid
            item
            style={{
              margin: "1em",
            }}
          >
            <img
              src={chef}
              alt="chef"
              style={{
                height: !matchesSM ? "30em" : "15em",
                width: !matchesSM ? "30em" : "15em",
              }}
            />
          </Grid>
          <Grid
            item
            style={{
              width: "45em",
              margin: "1em",
            }}
          >
            <Typography
              align={!matchesSM ? "right" : "center"}
              className={classes.chef}
            >
              Meet Our Chef
            </Typography>
            <Typography
              align={!matchesSM ? "right" : "left"}
              className={classes.name}
            >
              Mary Olufunmilayo O
            </Typography>
            <Typography
              align={!matchesSM ? "right" : "left"}
              gutterBottom
              className={classes.history}
            >
              Cooking has always been a part of my life ever since I was a
              child. I have many early childhood food
              <br /> memories that have established a strong <br /> foundation
              to learn as much as I can and grow
              <br /> as a cook. I've had the opportunity to cater for many
              events in Nigeria and abroad. I've been catering
              <br /> for parties and events for over 10 years.
            </Typography>
            <Typography
              align={!matchesSM ? "right" : "left"}
              className={classes.history}
            >
              I am a typical youruba woman from Nigeria with the crave for good
              Nigerian food and I have made all my time to learn and cook this
              dishes over the years with so much creativity and the result as
              been superb.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default About
