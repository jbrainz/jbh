import React, { useState } from "react"
import {
  Typography,
  Grid,
  makeStyles,
  useMediaQuery,
  Button,
} from "@material-ui/core"
import MenuSlider from "./Menu"
import { useTheme } from "@material-ui/styles"

import friedRice from "../assets/foods/friedrice.jpg"
import efoRiro from "../assets/foods/vegetable.jpg"
import afang from "../assets/foods/afang1.jpg"
import okra from "../assets/foods/okro1.jpg"
import jollof from "../assets/foods/jollof.jpg"
import whiteRice from "../assets/foods/whiterice.jpg"
import arrowR from "../assets/icons/iconR.png"
import arrowL from "../assets/icons/iconL.png"
import menu from "../assets/icons/menu.png"

import CustomIcon from "../../Components/CustomIcon"

const useStyles = makeStyles((theme) => ({
  header: {
    marginLeft: "5%",
    marginTop: "150px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  button: {
    position: "absolute",
    right: 120,
    marginTop: 70,
    [theme.breakpoints.down("xs")]: {
      marginTop: 650,
    },
    borderRadius: 25,
  },
  next: {
    fontWeight: "600",
    color: "#03071e",
    lineHeight: "126.64px",
    fontFamily: "Pacifico",
    fontSize: "3em",
    opacity: 0.8,
    [theme.breakpoints.down("xs")]: {
      fontSize: "2em",
    },
  },
  menu: {
    ontWeight: "800",
    color: "#1d3557",
    fontFamily: "Gentona",
    fontSize: "2.4em",
  },
}))
const datas = {
  property: [
    {
      index: 0,
      title: "Fried Rice ",
      sub: "General",
      body: `This colourful delicacy is food to many West African Countries, 
      not just Nigeria. the Nigerian special taste is what makes this meal stand out.`,
      src: friedRice,
      imgtitle: "fried rice",
    },
    {
      index: 1,
      title: "Efo Riro",
      sub: "Yoruba Special",
      body: `Efo Riro is a mix of pumpkin green leaves, meat, 
      like chicken and offal or smoked fish. 
      Efo Riro is a Yoruba delicacy originating from Western Nigeria.`,
      src: efoRiro,
      imgtitle: "efo riro",
    },
    {
      index: 2,
      title: "Afang Soup",
      sub: "Calabar Special",
      body: `The soup is made with local Afang leaves and water 
              leaves together with dried fish, meat and snails, 
              as well as seasonings.The meal takes about an hour to prepare,
               and is often served with Pounded yam, fufu or Garri.`,
      src: afang,
      imgtitle: "affang soup",
    },
    {
      index: 3,
      title: "Okro Soup",
      sub: "General",
      body: `The soup is made with okra and water 
              leaves together with dried fish, meat and snails, 
              as well as seasonings and spice.The meal takes about half an hour to prepare,
               and is often served with Pounded yam, fufu or Garri.`,
      src: okra,
      imgtitle: "okra soup",
    },
    {
      index: 4,
      title: "Jollof fice",
      sub: "General",
      body: `The soup is made with okra and water 
              leaves together with dried fish, meat and snails, 
              as well as seasonings and spice.The meal takes about 
              half an hour to prepare,
              and is often served with Pounded yam, fufu or Garri.`,
      src: jollof,
      imgtitle: "Jollof rice",
    },
    {
      index: 5,
      title: "Offada Rice",
      sub: "Yoruba Special",
      body: `Ofada Rice is produced locally in Nigeria. 
      What makes it special is its unique flavour and aroma.
       Most Nigerians will jump 
      with excitement at the sight of Ofada rice and stew.`,
      src: whiteRice,
      imgtitle: "offada rice",
    },
  ],
}
const SlideMenu = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
  const [nDatas, setDatas] = useState(datas.property)
  const [nData, setData] = useState(datas.property[0])
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const nextData = () => {
    const newIndex = nData.index + 1
    if (nData.index !== datas.property.length - 1) {
      setData(datas.property[newIndex])
    }
  }
  const prevData = () => {
    const newIndex = nData.index - 1
    if (nData.index !== 0) {
      setData(datas.property[newIndex])
    }
  }

  function handleTouchStart(e) {
    setTouchStart(e.targetTouches[0].clientX)
  }

  function handleTouchMove(e) {
    setTouchEnd(e.targetTouches[0].clientX)
  }
  function handleTouchEnd() {
    if (touchStart - touchEnd > 170) {
      nextData()
    }
    if (touchStart - touchEnd < -150) {
      prevData()
    }
  }
  return (
    <>
      <div className={classes.header}>
        <Grid container>
          <Grid item style={{ marginLeft: "30px", paddingBottom: 10 }}>
            <Typography
              variant={matchesSM ? "h5" : "h3"}
              style={{ paddingBottom: 10 }}
            >
              Delicious Flavour of Cuisine
            </Typography>
            <Typography variant={matchesSM ? "subtitle1" : "h6"} gutterBottom>
              We are Poised at giving you a great taste in all our delicacy
            </Typography>
          </Grid>
          <Grid item justify="flex-end" className={classes.button}>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<CustomIcon src={menu} height={25} />}
              style={{ borderRadius: 10 }}
            >
              View Our menu
            </Button>
          </Grid>
        </Grid>
        <div style={{ position: "relative", maxWidth: 300 }}>
          <div
            onTouchStart={(e) => handleTouchStart(e)}
            onTouchEnd={(e) => handleTouchEnd(e)}
            onTouchMove={(e) => handleTouchMove(e)}
            style={{
              display: "flex",
              flex: 1,
              minWidth: matchesSM ? 200 : 314,
              overflow: "hidden",
              transform: `translateX(-${nData.index * (100 / nDatas.length)}%)`,
              transition: `transform 300ms cubic-bezier(0.17,0.67,0.83,0.67)`,
              position: "absolute",
            }}
          >
            {nDatas.map(({ title, sub, body, src, imgtitle, index }) => (
              <MenuSlider
                title={title}
                sub={sub}
                body={body}
                src={src}
                imgtitle={imgtitle}
                key={index}
              />
            ))}
          </div>
          <Grid container direction="row">
            {!matchesSM ? (
              <Grid item container style={{ marginTop: 400, marginLeft: -20 }}>
                <Button
                  disableRipple
                  onClick={() => nextData()}
                  disabled={nData.index === datas.property.length - 1}
                >
                  <CustomIcon src={arrowR} />
                </Button>
                <Button
                  disableRipple
                  onClick={() => prevData()}
                  disabled={nData.index === 0}
                >
                  <CustomIcon src={arrowL} />
                </Button>
              </Grid>
            ) : null}
          </Grid>
        </div>
      </div>
      <Grid
        container
        justify={!matchesSM ? "center" : "flex-start"}
        align="center"
        style={{
          marginTop: matchesSM ? "40em" : "10em",
          background: !matchesSM
            ? "linear-gradient(45deg, #fff  30%, #D96262 100%)"
            : "",
          marginLeft: "5em",
        }}
      >
        <Grid item>
          <Typography className={classes.next}>More Dishes</Typography>
          <Typography className={classes.menu}>From Our Menu</Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default SlideMenu
