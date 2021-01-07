import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { Link } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import useMediaQuery from "@material-ui/core/useMediaQuery"

import banner from "../assets/banners/ban.jpg"
import chef from "../assets/icons/chef.png"
import delivery from "../assets/icons/delivery.png"
import food from "../assets/icons/qualityFood.png"

const useStyles = makeStyles((theme) => ({
  bookNow: {
    color: "#fff",
    fontFamily: "Gentona",
    fontSize: "48px",
    fontWeight: "400",
    lineHeight: "82px",
    opacity: 1,
    [theme.breakpoints.down("xs")]: {
      color: "#F25041",
      fontSize: "28px",
    },
  },
  mainContainer: {
    padding: 30,
    [theme.breakpoints.down("xs")]: {
      backgroundColor: "#fff",
      backgroundImage: "none",
      marginTop: "100em",
    },
    backgroundImage: `url(${banner})`,
    clipPath: " polygon( 10% 0, 100% 0,100% 100% ,25% 98% )",
    opacity: 0.9,
    backgroundSize: "cover",
    marginTop: "120em",
    backgroundRepeat: "no-repeat",
  },
  heroTextContainer: {
    backgroundColor: "#fff",
    marginRight: "2em",
    height: "20em",
    width: "20em",
    boxShadow: "3px 3px 5px 4px #003",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
      minWidth: "15em",
      height: "15em",
      width: "80%",
      marginBottom: "5em",
      marginRight: 0,
      boxShadow: "none",
    },
  },
  imageIcon: { height: "3em", width: "4em" },
}))
const WhyUs = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down("xs"))

  return (
    <Grid container className={classes.mainContainer} direction="column">
      <Typography align="center" gutterBottom className={classes.bookNow}>
        WHY CATERFOODS?
      </Typography>
      <Grid item className={classes.backImage}>
        <Grid
          container
          justify="center"
          align="center"
          direction="row"
          className={classes.history}
        >
          <Grid
            item
            justify="center"
            align="center"
            className={classes.heroTextContainer}
          >
            <Grid
              item
              style={{
                marginTop: 30,
              }}
            >
              <img className={classes.imageIcon} src={food} alt="quality" />
            </Grid>
            <Grid
              item
              style={{
                paddingLeft: "3em",
                paddingRight: "3em",
                marginTop: "3em",
              }}
            >
              <Typography variant="body2" align="center">
                We have the reputation of 10 years serving end to end customers
                with great pride and our food quality top.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            justify="center"
            align="center"
            className={classes.heroTextContainer}
          >
            <Grid
              item
              style={{
                marginTop: 30,
              }}
            >
              <img className={classes.imageIcon} src={delivery} alt="quality" />
            </Grid>
            <Grid
              item
              style={{
                paddingLeft: "3em",
                paddingRight: "3em",
                marginTop: "3em",
              }}
            >
              <Typography variant="body2" align="center">
                We have the reputation of 10 years serving end to end customers
                with great pride and our food quality top.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            justify="center"
            align="center"
            className={classes.heroTextContainer}
          >
            <Grid
              item
              style={{
                marginTop: 30,
              }}
            >
              <img className={classes.imageIcon} src={chef} alt="quality" />
            </Grid>
            <Grid
              item
              style={{
                paddingLeft: "3em",
                paddingRight: "3em",
                marginTop: "3em",
              }}
            >
              <Typography variant="body2" align="center">
                We have the reputation of 10 years serving end to end customers
                with great pride and our food quality top.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default WhyUs
