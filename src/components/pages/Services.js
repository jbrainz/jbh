import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Services from "../Home/Services"
import { Typography, useMediaQuery } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 350,
  },
  text: {
    marginLeft: "5em",
    marginRight: "5em",
    marginBottom: "2em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "2em",
      marginRight: "2em",
    },
  },
}))

const Service = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <Grid container justify="center">
      <Grid item className={classes.text}>
        <Typography gutterBottom variant="h4">
          Tour and Travels
        </Typography>
        <Typography gutterBottom variant="body1" paragraph>
          Here at JBH we provide the best tour and travels services in india,
          <br />
          Our services are first class in india if you you look on having great
          experience in you next travel <br />
          you might want to contact us.
        </Typography>
        <Typography gutterBottom variant="body1" paragraph>
          Our mission is not just to be a travel agency which helps you book a
          holiday; we want to be your <br /> travel partner who would go an
          extra mile to help you choose an ideal destination and learn more
          about the <br /> place you have been dreaming to visit.
        </Typography>
        <Typography gutterBottom variant="body1" paragraph>
          Since holidays are more about personal choices and interests, we bring
          to you customizable tour packages as well.
          <br /> We give you the prerogative to pick and choose anything that
          matches your interest. <br /> No matter how many travel experiences we
          sell every day, we ensure that you are the protagonist of your own
          travel story.
        </Typography>
        <Typography gutterBottom variant="body1" paragraph>
          Through our specially curated holiday packages, we want to take you on
          a journey where you intimately indulge with the <br /> exquisite
          beauty of India and distant lands.
          <br /> We want you to witness dramatic landscapes that are far beyond
          your imagination.
          <br /> The irresistible urge of Indian travellers to travel more these
          days is something that keeps us motivated to fulfil your holiday
          requirements.
          <br /> Our vision to give you a seamless holiday experience makes us
          one of the leading tour operators in the <br /> ever-expanding travel
          industry.
        </Typography>
        <Typography style={{ marginTop: "2em" }} gutterBottom variant="h4">
          Airport Transfer.
        </Typography>
        <Typography variant="body1" paragraph>
          At JBH ride we provide a service that is reliable and affordable in
          National capital region in india.
          <br /> We make transportation from airports simple with professional
          drivers and high quality vehicles.
        </Typography>
        <Typography variant="body1" paragraph>
          As part of your airport transfer with us, one of our
          professionally-trained drivers <br /> will greet you with a name sign
          in the arrivals hall of the airport,
          <br /> ready to help you with your luggage and guide you to your top
          of the range vehicle.
        </Typography>
        <Typography gutterBottom variant="h3" style={{ marginTop: "2em" }}>
          Rentel Services
        </Typography>
        <Typography variant="body1" paragraph>
          Our car rental services include a variety of vehicle options for any
          purpose or occasion such as touring cities,
          <br /> road trips, weddings, anniversaries, corporate functions and
          more.
          <br /> We offer options for economy or compact class cars,
          <br /> large SUVs or pick-up trucks, as well as premium and luxury car
          rentals that can seat as little as
          <br /> three or as many as seven passengers.
        </Typography>
        <Typography variant="body1" paragraph>
          Our moving trucks and vans are late model year, well maintained and
          offer an easy do-it-yourself <br /> way to move your belongings across
          town or across the country.
          <br /> Our trucks are also perfect for any business needs.
          <br /> Our fleet offers ½ ton, ¾ ton to 1 ton pick-up trucks, 16 to 26
          <br />
          foot cube trucks, cargo vans with various roof heights, as well as
          refrigerated trucks to keep your cargo at the right temperature.
          <br />
          We offer national and local account management and can help with all
          your short and long term <br />
          project needs with a customizable commercial fleet.
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Service
