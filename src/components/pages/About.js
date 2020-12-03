import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme) => ({
  about: {
    fontWeight: 300,
    fontSize: "1.5rem",
    maxWidth: "50em",
    lineHeight: 1.8,
    marginBottom: "3em",
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
}))

const About = () => {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <Grid container direction="column">
      <Grid item className={classes.rowContainer} style={{ marginTop: "4em" }}>
        <Typography variant="h2">About Us</Typography>
      </Grid>
      <Grid
        item
        container
        justify="center"
        alignItems="center"
        style={{ marginTop: "2em" }}
        className={classes.rowContainer}
      >
        <Typography variant="body1" className={classes.about}>
          JBH is on of the leading travel/booking company that helps today’s
          business and leisure travellers search, compare and book the best ride
          options with all your favourite ride types.
        </Typography>
        <Typography variant="body1" className={classes.about}>
          We are based in India NCR, JBH operates in all nation capital region.
          We strife at JBH to always make sure our clients needs are met, being
          one of india fastest growing travelling/touring agency, we have a good
          taste for customer satisfaction and always strife to meet our clients
          demands and needs.
        </Typography>
        <Typography variant="body1" className={classes.about}>
          We are based at guragon and our services emcompases the natinal
          capital region here in india. JBH has become one of India's most
          admired travel companies. Our quest to enhance your travel experience
          continues and we strive to keep going, onwards and upwards.
        </Typography>
      </Grid>
    </Grid>
  )
}

export default About
