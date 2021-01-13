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
import { AppContext } from "../../Components/context/ContextState"
import CustomizedDialogs from "./Order"

const menuMeals = [
  {
    index: "1",
    type: "Breakrast meals",
  },
  {
    index: "2",
    type: "Rice meals",
  },
  {
    index: "3",
    type: "Yam meals",
  },
  {
    index: "4",
    type: "Yam meals",
  },
  {
    index: "5",
    type: "Soup",
  },
  {
    index: "6",
    type: "Sauce",
  },
  {
    index: "7",
    type: "Hot spot special",
  },
  {
    index: "8",
    type: "Spagetti pasta",
  },
  {
    index: "9",
    type: "Sides",
  },
  {
    index: "10",
    type: "PLANTAIN MEAL",
  },
  {
    index: "11",
    type: "SNACKS",
  },
  {
    index: "12",
    type: "SMALL CHOPS ",
  },
  {
    index: "13",
    type: "BULK ORDERS",
  },
]

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
      width: "147px",
      borderRadius: ".8em",
    },
  },
  book1: {
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
const Menu = ({ type, infoData, alt, disc }) => {
  const { handleClickOpen, open, setItem } = useContext(AppContext)

  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid container>
          <Grid item style={{ width: "100%" }}>
            <Typography className={classes.type}>{type}</Typography>
            <Typography className={classes.disc}>{disc}</Typography>
            <Grid
              style={{
                height: ".1em",
                backgroundColor: "#3C3C3C",
                opacity: 0.2,
              }}
            />
          </Grid>
          {infoData.map(({ src, title }) => (
            <>
              <Grid
                container
                style={{
                  marginTop: "2em",
                  width: matchesSM ? "25em" : "23em",
                  marginLeft: matchesSM ? "0em" : "3em",
                  marginRight: matchesSM ? "6em" : "1em",
                }}
                direction="row"
                alignItems="stretch"
              >
                <Grid item className={classes.image}>
                  <img className={classes.img} alt={alt} src={src} />
                </Grid>
                <Grid item style={{ marginLeft: "1em" }}>
                  <Typography className={classes.title}>{title}</Typography>
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
            </>
          ))}
        </Grid>
        <Grid container direction="row" justify="center" align="center">
          <Grid
            item
            style={{ width: "192px", marginTop: "5em", marginRight: "3em" }}
          >
            <Button className={classes.book} variant="contained">
              BOOK A TABLE
            </Button>
          </Grid>
          <Grid item style={{ width: "192px", marginTop: "5em" }}>
            <Button
              className={classes.book1}
              variant="contained"
              color="secondary"
              onClick={() => {
                handleClickOpen()
                setItem(type)
              }}
            >
              ORDER
            </Button>
          </Grid>
          {open ? <CustomizedDialogs /> : null}
        </Grid>
      </Grid>
    </div>
  )
}

export default Menu
