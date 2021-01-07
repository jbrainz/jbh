import React from "react"
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "355px",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "316px",
      height: "25rem",
    },
    boxShadow: "3px 3px 5px 6px #ccc",
    elevation: 4,
    borderRadius: 15,
    backgroundColor: "#fca311",
    opacity: 0.8,
    height: "28rem",
    width: "32rem",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    borderRadius: 15,
    transition: "transform .2s",
    "&:hover": {
      transform: "scale(1.4)",
    },
  },
}))

const MenuSlider = ({ title, sub, src, imgtitle, body }) => {
  const classes = useStyles()

  return (
    <div
      style={{
        marginTop: 40,
        marginBottom: 40,
        marginLeft: "10px",
        minWidth: "315px",
        marginRight: "60px",
      }}
    >
      <Card className={classes.root}>
        <CardHeader title={title} subheader={sub} />
        <CardMedia className={classes.media} image={src} title={imgtitle} />
        <CardContent style={{ marginBottom: 0 }}>
          <Typography variant="body1" component="p">
            {body}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default MenuSlider
