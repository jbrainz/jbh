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
import MenuItem from "../Menu/MenuItem"
import { useHistory } from "react-router-dom"

import friedRice from "../assets/foods/friedrice.jpg"
import efoRiro from "../assets/foods/vegetable.jpg"
import afang from "../assets/foods/afang1.jpg"
import okra from "../assets/foods/okro1.jpg"
import jollof from "../assets/foods/jollof.jpg"
import whiteRice from "../assets/foods/whiterice.jpg"
import arrowR from "../assets/icons/iconR.png"
import arrowL from "../assets/icons/iconL.png"
import menu from "../assets/icons/menu.png"
import backgroundImg from "../assets/banners/ban3.jpg"

import akara from "../data/assets/foodIamges/akara.jpeg"
import moimoi from "../data/assets/foodIamges/moimoi.jpeg"
import yamEgg from "../data/assets/foodIamges/yameggsauce.jpg"
import cocnoutrice from "../data/assets/foodIamges/coconut rice.jpeg"
import yammeal from "../data/assets/foodIamges/Yam pottage with assorted meat.jpg"
import eforiro from "../data/assets/foodIamges/Efo riro.jpg"
import bangasoup from "../data/assets/foodIamges/bangasoup.jpeg"
import beansbread from "../data/assets/foodIamges/beans and bread.jpeg"
import yamarita from "../data/assets/foodIamges/yamarita.jpeg"

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
    [theme.breakpoints.down("sm")]: {
      marginTop: 500,
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
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5em",
    },
  },
  menu: {
    fontWeight: "800",
    color: "#1d3557",
    fontFamily: "Gentona",
    fontSize: "2.4em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1em",
    },
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
const menuData = [
  {
    index: 0,
    title: "Akara",
    disc: "fried cake or fritter, is a common breakfast staple or fast food.",
    src: akara,
  },
  {
    index: 1,
    title: "Moi Moi",
    disc: `Moi Moi is a Nigerian steamed beans 
      pudding which has its origin in South West Nigeria.`,
    src: moimoi,
  },
  {
    index: 3,
    title: "Yam and egg sauce",
    disc: `Boiled or fried yam and egg sauce is a usual suspect on the table of Nigerians.`,
    src: yamEgg,
  },
  {
    index: 5,
    title: "Fried Rice",
    disc: `This colourful delicacy is food to many West African Countries, 
    not just Nigeria.`,
    src: friedRice,
    imgtitle: "rice",
  },
  {
    index: 6,
    title: "coconout Rice",
    disc: `Delicious coconout flavored rice, garnished with spices.`,
    src: cocnoutrice,
    imgtitle: "rice",
  },
  {
    index: 7,
    title: "Yamaritta",
    disc: `Yamarita (also known as “Dundun Oniyeri”. Made from flour coated boiled Yam.`,
    src: yamarita,
    imgtitle: "yam",
  },
  {
    index: 7,
    title: "Yam pottage",
    disc: `Yam with vegetables and and meat or boiled fish, soft and smoothe`,
    src: yammeal,
    imgtitle: "yam-pottage",
  },
  {
    index: 8,
    title: "Efo Riro",
    disc: `stirred leafy vegetable, garnished with fish and meats, and some spices`,
    src: eforiro,
    imgtitle: "Efo riro",
  },
  {
    index: 9,
    title: "Banga",
    disc: `Palm nut soup, it’s a Delta/Urhobo (Ngerian south) favourite`,
    src: bangasoup,
    imgtitle: "banga",
  },
  {
    index: 10,
    title: "Afang",
    disc: ` It is also very nutritious as the soup consists mainly of vegetables`,
    src: afang,
    imgtitle: "afang",
  },
  {
    index: 11,
    title: "Okra",
    disc: ` Just like ogbono soup and Ewedu soup, Okro soup has a viscous texture which makes it an acquired taste.`,
    src: okra,
    imgtitle: "okra",
  },
  {
    index: 12,
    title: "Ewa agoyin",
    disc: ` Ewa Aganyin is made up of cooked beans and pepper sauce.`,
    src: beansbread,
    imgtitle: "okra",
  },
]
const SlideMenu = () => {
  const history = useHistory()
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
    if (touchStart - touchEnd > 180) {
      nextData()
    }
    if (touchStart - touchEnd < -180) {
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
              onClick={() => history.push("/menu")}
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
            ? "linear-gradient(45deg, #fff  30%, #ccc 100%)"
            : "",
          marginLeft: "5em",
        }}
      >
        <Grid item>
          <Typography className={classes.next}>More Dishes</Typography>
          <Typography className={classes.menu}>From Our Menu</Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-around"
        style={{
          marginTop: "2em",
          backgroundImage: !matchesSM ? `url(${backgroundImg})` : undefined,
        }}
      >
        {menuData.map(({ index, src, title, disc, imgtitle }) => (
          <MenuItem
            key={index}
            src={src}
            alt={imgtitle}
            disc={disc}
            title={title}
          />
        ))}
      </Grid>
      <Grid
        container
        justify="center"
        align="center"
        style={{ marginTop: matchesSM ? "1em" : "3em" }}
      >
        <Button
          variant="contained"
          color="secondary"
          style={{ borderRadius: 20, height: 50, width: "15em" }}
          onClick={() => history.push("/menu")}
        >
          View Our menu
        </Button>
      </Grid>
    </>
  )
}

export default SlideMenu
