import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core"
import useMediaQuery from "@material-ui/core/useMediaQuery"

import use_image from "../../assets/use_image.jpg"
import airport_image from "../assets/img/airport-tax.jpg"
import bus_rentals from "../assets/img/bus_rentals.jpg"

import vip_image from "../assets/img/vip.jpg"
import ButtonArrow from "../layouts/Custom/ButtonArrow"
import bus from "../../assets/bus.jpg"

const useStyles = makeStyles((theme) => ({
  image: { height: "15em" },
  root: { maxWidth: 345 },
  cardComponent: {
    marginTop: "12em",
    marginLeft: "5em",
    marginBottom: "5em",
    [theme.breakpoints.down("sm")]: {
      margin: "2em",
      marginTop: "8em",
    },
  },
  infoBackground: {
    backgroundImage: `url(${bus})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
}))

const Destination = (props) => {
  const { setValue, setSelectedIndex } = props
  const classes = useStyles()
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))

  return (
    <Fragment>
      <Grid item sm={12}>
        <Grid container>
          <Grid item className={classes.cardComponent}>
            <Card className={classes.root}>
              <CardActionArea component={Link} to="/book">
                <CardMedia
                  className={classes.image}
                  title="City Taxi"
                  image={vip_image}
                />
                <CardContent>
                  <Typography variant="h5" component="h2">
                    Vip Transfer
                  </Typography>
                  <Typography variant="body2" component="p">
                    The perfect way to get through <br /> everyday travel needs.
                    Vip transfer services is what you need to avoid a hectic
                    day! <br />
                    Let's get you started.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  component={Link}
                  to="/book"
                  onClick={() => {
                    setValue(1)
                    setSelectedIndex(3)
                  }}
                  size="small"
                  color="primary"
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item item className={classes.cardComponent}>
            <Card className={classes.root}>
              <CardActionArea component={Link} to="/book">
                <CardMedia
                  className={classes.image}
                  title="City Taxi"
                  image={airport_image}
                />
                <CardContent>
                  <Typography variant="h5" component="h2">
                    Airport Transfer
                  </Typography>
                  <Typography variant="body2" component="p">
                    The perfect way to get through <br /> everyday travel needs.
                    City taxi are available 24/7 <br />
                    and you can travel in an instant.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  component={Link}
                  to="/airport-transfer"
                  onClick={() => {
                    setValue(1)
                    setSelectedIndex(1)
                  }}
                  size="small"
                  color="primary"
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item item className={classes.cardComponent}>
            <Card className={classes.root}>
              <CardActionArea component={Link} to="/book">
                <CardMedia
                  className={classes.image}
                  title="City Taxi"
                  image={bus_rentals}
                />
                <CardContent>
                  <Typography variant="h5" component="h2">
                    Bus Rentals
                  </Typography>
                  <Typography variant="body2" component="p">
                    Our rentals services are the <br /> best you can get out
                    there. Anytime any day 24/7 <br />
                    just put a call through or send us a message.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  component={Link}
                  to="/bus-rental"
                  onClick={() => {
                    setValue(1)
                    setSelectedIndex(3)
                  }}
                  size="small"
                  color="primary"
                >
                  Start Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          style={{ height: "40em" }}
          direction="row"
          alignItems="center"
          className={classes.infoBackground}
        >
          <Grid
            item
            container
            style={{
              textAlign: matchesXS ? "center" : "inherit",
            }}
            direction={matchesXS ? "column" : "row"}
          >
            <Grid
              item
              sm
              style={{ marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em" }}
            >
              <Grid
                container
                direction="column"
                style={{ marginBottom: matchesXS ? "8em" : 0 }}
              >
                <Typography
                  variant="h2"
                  style={{ color: theme.palette.primary.light }}
                >
                  About Us
                </Typography>
                <Typography variant="subtitle2">
                  Find out more about who we are.
                </Typography>
                <Grid item>
                  <Button
                    component={Link}
                    to="/about"
                    onClick={() => setValue(3)}
                    variant="outlined"
                    style={{
                      color: "white",
                      borderColor: "white",
                      borderRadius: 20,
                    }}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={10} height={10} fill="white" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sm
              style={{
                marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em",
                textAlign: matchesXS ? "center" : "right",
              }}
            >
              <Grid container direction="column">
                <Typography
                  variant="h2"
                  style={{ color: theme.palette.common.orange }}
                >
                  Contact Us
                </Typography>
                <Typography variant="subtitle2">Send Us a message.</Typography>
                <Grid item>
                  <Button
                    component={Link}
                    to="/contact"
                    onClick={() => setValue(4)}
                    variant="outlined"
                    style={{
                      color: "white",
                      borderColor: "white",
                      borderRadius: 20,
                    }}
                  >
                    <span
                      style={{
                        marginRight: 10,
                        color: "#fff",
                      }}
                    >
                      Now
                    </span>
                    <ButtonArrow width={10} height={10} fill="white" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default Destination
