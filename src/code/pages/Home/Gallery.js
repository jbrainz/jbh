import React from "react"
import { Typography, Grid, makeStyles, useMediaQuery } from "@material-ui/core"
import { useTheme } from "@material-ui/styles"

import backImg from "../assets/banners/ban3.jpg"

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: "10em",
    marginTop: "20em",
    backgroundImage: `url(${backImg})`,

    [theme.breakpoints.down("md")]: {
      marginRight: 0,
      marginTop: "4em",
    },
  },
  gridList: {
    width: 800,
    height: 600,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  imgStyle: {
    height: "12em",
    width: "12em",
    transition: "transform .4s",
    "&:hover": {
      transform: "scale(1.2)",
    },
    [theme.breakpoints.down("md")]: {
      height: "10em",
      width: "10em",
    },
    [theme.breakpoints.down("sm")]: {
      height: "5em",
      width: "5em",
    },
  },
  gallery: {
    fontFamily: "Raleway",
    fontSize: "2.8rem",
    color: "#fca311",
    lineHeight: "27px",
    fontWeight: "800",
    textAlign: "right",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.6rem",
      textAlign: "center",
    },
  },
  sub: {
    color: "#4FBB5A",
    fontFamily: "Raleway",
    fontSize: "1.6rem",
    fontWeight: "600",
    padding: 5,
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.8rem",
      textAlign: "left",
    },
  },
}))

const tileData = []

const Gallery = ({ tileData, header, direction }) => {
  const classes = useStyles()
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
  console.log(matchesMD)

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid
          container
          direction={direction}
          justify={!matchesSM ? "space-between" : "center"}
        >
          <Grid
            item
            style={{
              marginLeft: !matchesMD ? "3em" : "0.2em",
            }}
          >
            <Grid item>
              <Typography gutterBottom className={classes.gallery}>
                {header}
              </Typography>
              {tileData.map(({ title, author }) => (
                <Grid item>
                  <Typography key={author} className={classes.sub}>
                    {title}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid
            container
            alignItems="center"
            justify="center"
            style={{
              width: !matchesMD ? "40%" : "80%",
              marginLeft: "2em",
              marginTop: matchesMD ? "3em" : 0,
            }}
          >
            {tileData.map(({ img, title, author }) => (
              <Grid
                item
                style={{
                  overflow: "hidden",
                }}
              >
                <img
                  src={img}
                  className={classes.imgStyle}
                  alt="foods"
                  key={author}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Gallery
