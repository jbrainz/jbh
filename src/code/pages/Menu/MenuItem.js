import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import ButtonBase from "@material-ui/core/ButtonBase"

const useStyles = makeStyles((theme) => ({
  root: { marginBottom: "2em" },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
    background: "linear-gradient(45deg, #fff  10%, #ccc 100%)",
    borderRadius: 15,
  },
  image: {
    width: 128,
    height: 128,
    [theme.breakpoints.down("md")]: {
      width: 80,
      height: 80,
    },
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: 54,
  },
  disc: {
    fontSize: "1rem",
    color: "#00000099",
    fontWeight: "700",
    fontFamily: "Gentona",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.5rem",
    },
  },
}))

function MenuItem({ src, alt, title, disc }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.paper}>
        <Grid container spacing={4}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt={alt} src={src} />
            </ButtonBase>
          </Grid>
          <Grid item xs={6} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="subtitle1">{title}</Typography>
                <Typography className={classes.disc}>{disc}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
export default MenuItem
