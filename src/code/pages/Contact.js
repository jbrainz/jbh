import React from "react"
import { Typography, useMediaQuery, makeStyles } from "@material-ui/core"
import { useTheme } from "@material-ui/styles"
import Header from "../layouts/Header"

import banner from "./assets/banners/location.jpg"
import Contact from "./Home/Contact"

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
}))
const ContactUs = () => {
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
  const classes = useStyles()
  return (
    <>
      <Header header="Contact Us Now" back={banner} />
      <div className={classes.container}>
        <Typography className={classes.chef}>Know Where to find us.</Typography>
        <Contact />
      </div>
    </>
  )
}

export default ContactUs
