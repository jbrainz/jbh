import React, { useContext } from "react"
import {
  Grid,
  Typography,
  makeStyles,
  useMediaQuery,
  Button,
} from "@material-ui/core"
import background from "../assets/banners/ban3.jpg"
import { useTheme } from "@material-ui/styles"
import { bulk } from "../data/data"

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10em",
    marginLeft: "5em",
    marginRight: "5em",
    marginBottom: "5em",
    backgroundImage: `url(${background})`,
    [theme.breakpoints.down("md")]: {
      marginTop: "5em",
      marginLeft: "1em",
      marginRight: "1em",
      marginBottom: "5em",
    },
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
    background: "linear-gradient(45deg, #fff  10%, #ccc 100%)",
    borderRadius: 15,
    [theme.breakpoints.down("sm")]: {
      margin: 0,
    },
  },
  image: {
    width: "6em",
    height: "6em",
    [theme.breakpoints.down("sm")]: {
      width: "5em",
      height: "5em",
    },
  },
  img: {
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: 20,
  },
  disc: {
    fontSize: "1.3rem",
    color: "#000",
    fontWeight: "400",
    fontFamily: "Roboto",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  title: {
    fontSize: "1.3rem",
    fontWeight: "500",
    color: "#000",
    fontFamily: "Roboto",
  },
  type: {
    fontSize: "1.7rem",
    fontWeight: "700",
    color: "#3C3C3C",
    fontFamily: "Raleway",
  },
  book: {
    background: "linear-gradient(45deg, #ffbe0b  10%, #f48c06 100%)",
    color: "#fff",
    borderRadius: "2em",
    height: "57.6px",
    width: "187px",
    [theme.breakpoints.down("sm")]: {
      height: "30.6px",
      width: "127px",
      borderRadius: ".8em",
    },
  },
  book1: {
    borderRadius: "2em",
    height: "57.6px",
    width: "187px",
    [theme.breakpoints.down("sm")]: {
      height: "30.6px",
      width: "127px",
      borderRadius: ".8em",
    },
  },
}))

const sendWhatsapp = () => {
  const newWindow = window.open(
    `//api.whatsapp.com/send?phone=+2348139714746&text=New Bulk Order`,
    "_blank",
    "noopener,noreferrer",
  )
  if (newWindow) newWindow.opener = null
}

const Bulk = () => {
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid container>
          {bulk.map(({ title, disc, alt, info }) => (
            <>
              <Grid item style={{ width: "100%" }}>
                <Typography className={classes.type}>{title}</Typography>
                <Typography className={classes.disc}>{disc}</Typography>
                <Grid
                  style={{
                    height: ".1em",
                    backgroundColor: "#3C3C3C",
                    opacity: 0.2,
                  }}
                />
              </Grid>
              {info.map(({ index, src, title, low, medium, large }) => (
                <Grid
                  container
                  style={{
                    marginTop: "2em",
                    width: matchesSM ? "25em" : "25em",
                    marginLeft: matchesSM ? "0em" : "3em",
                    marginRight: matchesSM ? "6em" : "1em",
                  }}
                  direction="row"
                  alignItems="stretch"
                >
                  <Grid item className={classes.image}>
                    <img
                      className={classes.img}
                      key={index}
                      alt={alt}
                      src={src}
                    />
                  </Grid>
                  <Grid item style={{ marginLeft: "1em" }}>
                    <Typography className={classes.title}>{title}</Typography>
                    <Typography
                      className={classes.title}
                      style={{
                        fontSize: 20,
                        color: "green",
                        marginLeft: "2em",
                        fontFamily: "Pacifico",
                      }}
                    >
                      small:{""} {low}$
                    </Typography>
                    <Typography
                      className={classes.title}
                      style={{
                        fontSize: 20,
                        color: "blue",
                        marginLeft: "2em",
                        fontFamily: "Pacifico",
                      }}
                    >
                      medium:{""} {medium}$
                    </Typography>
                    <Typography
                      className={classes.title}
                      style={{
                        fontSize: 20,
                        color: "red",
                        marginLeft: "2em",
                        fontFamily: "Pacifico",
                      }}
                    >
                      large:{""} {large}$
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    style={{
                      height: ".1em",
                      width: "20em",
                      backgroundColor: "red",
                      opacity: 0.2,
                    }}
                  />
                </Grid>
              ))}
            </>
          ))}
          <Grid item style={{ width: "192px", marginTop: "5em" }}>
            <Button
              className={classes.book1}
              variant="contained"
              color="secondary"
              onClick={() => sendWhatsapp()}
            >
              ORDER
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
export default Bulk
