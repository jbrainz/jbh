import React, { useContext } from "react"
import {
  Grid,
  Typography,
  makeStyles,
  Button,
  useMediaQuery,
} from "@material-ui/core"
import back from "../data/assets/foodIamges/open.jpg"
import { useTheme } from "@material-ui/styles"
import { AppContext } from "../../Components/context/ContextState"

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "20rem",
    marginLeft: "5em",
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginTop: "5rem",
      background: "linear-gradient(45deg, #fff  50%, #ced4da 100%)",
    },
  },
  head: {
    fontFamily: "Raleway",
    fontSize: "22px",
    color: "#262626",
    lineHeight: "33px",
    fontWeight: "600",
    marginBottom: "1em",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
  },
  sub: {
    fontFamily: "Roboto",
    fontSize: "48px",
    color: "#000000",
    lineHeight: "62.35px",
    fontWeight: "300",
    opacity: 0.6,
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
      lineHeight: "22.35px",
      width: "322px",

      textAlign: "center",
    },
  },
  contact: {
    fontFamily: "OpenSans",
    fontWeight: "300",
    fontSize: "0.8rem",
    color: "#3C3C3C",
  },
  main: {
    width: "532px",
    marginTop: "2em",
    marginBottom: "5em",
    [theme.breakpoints.down("sm")]: {
      width: "132px",
    },
  },
  back: {
    height: "726px",
    width: "703px",
  },
  book: {
    background: "linear-gradient(45deg, #ffbe0b  10%, #f48c06 100%)",
    color: "#fff",
    borderRadius: "2em",
    height: "57.6px",
    width: "187px",
    [theme.breakpoints.down("sm")]: {
      height: "30.6px",
      width: "147px",
      borderRadius: ".8em",
    },
  },
}))
const Contact = () => {
  const { sendWhatsapp } = useContext(AppContext)

  const classes = useStyles()
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
  return (
    <div>
      <Grid
        container
        className={classes.container}
        direction={!matchesMD ? "row" : "column"}
      >
        <Grid container className={classes.main}>
          <Grid item style={{ marginLeft: matchesSM ? "2em" : "1em" }}>
            <Typography className={classes.head} gutterBottom>
              CONTACT US
            </Typography>
            <Typography className={classes.sub}>
              EAT WITH DELIGHT AT OUR RESTAURANT. MAKE YOUR OWN MENU. LET THE
              EXPLORATION UNFOLD.
            </Typography>
            <Grid
              direction={!matchesSM ? "row" : "column"}
              container
              justify="space-between"
              style={{ width: "556px", marginTop: "51px" }}
            >
              <Grid item style={{ width: "192px" }}>
                <Typography gutterBottom>Address</Typography>
                <Typography className={classes.contact}>
                  367, Unit B Wilson Avenue Toronto, Ontario, Canada. Postal
                  code: M312H7
                </Typography>
              </Grid>
              <Grid item style={{ width: "192px" }}>
                <Typography gutterBottom>Lunch Services</Typography>
                <Typography className={classes.contact}>
                  Friday to Saturday Booking from 11pm- 3pm
                </Typography>
              </Grid>
              <Grid item style={{ width: "192px", marginTop: "3em" }}>
                <Typography gutterBottom>Call Directly</Typography>
                <Typography className={classes.contact}>
                  +1 647 303 7851, +16478197515
                </Typography>
              </Grid>
              <Grid item style={{ width: "192px", marginTop: "3em" }}>
                <Typography gutterBottom>Dinner Services</Typography>
                <Typography className={classes.contact}>
                  Daily : Booking from 6pm-9:30pm
                </Typography>
              </Grid>
              <Grid item style={{ width: "192px", marginTop: "3em" }}>
                <Button
                  onClick={() => sendWhatsapp("Table Reservation")}
                  className={classes.book}
                  variant="contained"
                >
                  BOOK A TABLE
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {!matchesMD ? (
          <Grid container item style={{ marginLeft: "15em", width: "532px" }}>
            <Grid>
              <img src={back} alt="open" className={classes.back} />
            </Grid>
          </Grid>
        ) : null}
      </Grid>
    </div>
  )
}

export default Contact
