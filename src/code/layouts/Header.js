import React, { Fragment, useState, useEffect, useContext } from "react"
import {
  AppBar,
  useScrollTrigger,
  Toolbar,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  IconButton,
  Typography,
  Grid,
} from "@material-ui/core"
import { Link, useHistory } from "react-router-dom"
import { useTheme } from "@material-ui/styles"
import MenuIcons from "@material-ui/icons/Menu"
import Theme from "../Components/Theme"

import logo from "../assets/img/logo.png"
import cart from "../assets/img/order.png"
import reserve from "../assets/img/reservation.png"

import CustomIcon from "../Components/CustomIcon"
import { AppContext } from "../Components/context/ContextState"

const useStyles = makeStyles((theme) => ({
  toolBarMargin: {
    ...Theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "1.25em",
    },
  },
  logo: {
    height: "5em",
    [theme.breakpoints.down("md")]: {
      height: "6em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5em",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
    color: theme.palette.common.black,
    "&:hover": {
      color: theme.palette.common.orange,
      textDecoration: "underline",
    },
  },
  button: {
    color: theme.palette.common.black,
    marginLeft: 30,
    marginRight: 211,
    backgroundColor: theme.palette.common.white,
    borderRadius: 288,
    height: 51,
    width: 230,
    "&:hover": {
      color: "#fff",
      backgroundColor: "#fca311",
    },
  },
  logoContainer: {
    padding: 10,
    backgroundColor: "#fff",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  menu: {
    color: "#fff",
    borderRadius: "0px",
  },
  menuItem: {
    color: "#fff",
    "&:hover": {
      opacity: 1,
    },
  },
  menuStyle: {
    height: "30px",
    width: "30px",
    borderRadius: 15,
    backgroundColor: theme.palette.common.orange,
    color: theme.palette.common.white,
  },
  iconDrawer: {
    "&:hover": { backgroundColor: "transparent" },
    marginLeft: "auto",
  },
  drawer: {
    backgroundColor: theme.palette.common.white,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: theme.palette.common.orange,
    opacity: 0.8,
    padding: 10,
    "&:hover": {
      opacity: 1,
      backgroundColor: theme.palette.common.orange,
      color: "#fff",
      borderRadius: 15,
    },
  },
  bookList: {
    backgroundColor: theme.palette.secondary.main,
    "&:hover": { backgroundColor: "#fca311" },
    color: "#fff",
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
    opacity: 0.8,
    backgroundColor: "white",
  },
  root: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    minHeight: "70vh",
    [theme.breakpoints.down("sm")]: {
      minHeight: "40vh",
    },
  },
  heroText: {
    marginTop: "10em",
    minWidth: "20em",
    marginLeft: "0.3em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
      minWidth: "15em",
    },
  },
  buttonR: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 288,
    height: 45,
    width: 180,
    marginButtom: "3em",
    "&:hover": {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.secondary.sub,
    },
  },
  buttonContainer: {
    marginTop: 30,
    [theme.breakpoints.down("xs")]: {
      marginButtom: "3em",
    },
  },
}))

function ElevationScroll(props) {
  const { children } = props

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}
const Header = ({ back, button, header }) => {
  const history = useHistory()
  const {
    selectedIndex,
    setSelectedIndex,
    value,
    setValue,
    sendWhatsapp,
  } = useContext(AppContext)
  const theme = useTheme()
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)
  const matches = useMediaQuery(theme.breakpoints.down("md"))
  const matchesS = useMediaQuery(theme.breakpoints.down("sm"))

  const [openDrawer, setOpenDrawer] = useState(false)
  const classes = useStyles()

  // Handles Changes in the tabs
  const handleChange = (e, newValue) => {
    setValue(newValue)
  }
  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    {
      name: "Menu",
      link: "/menu",
      activeIndex: 1,
    },
    { name: "About Us", link: "/about", activeIndex: 2 },
    { name: "Contact Us", link: "/contact", activeIndex: 3 },
  ]

  useEffect(() => {
    ;[...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex)
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex)
            }
          }
          break
        case "/order":
          setValue(5)
          break
        default:
          break
      }
    })
  }, [value, selectedIndex, routes])

  const tabs = (
    <Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            to={route.link}
            component={Link}
            label={route.name}
          />
        ))}
      </Tabs>
      <div
        style={{
          backgroundColor: "#fff",
          elevation: 10,
        }}
      >
        <Button
          to="/menu"
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<CustomIcon src={cart} />}
          onClick={() => history.push("/menu")}
        >
          Order Online
        </Button>
      </div>
    </Fragment>
  )
  const drawer = (
    <Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => openDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolBarMargin} />
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              divider
              key={`${route}${route.activeIndex}`}
              button
              component={Link}
              to={route.link}
              className={classes.options}
              selected={value === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
              onClick={() => {
                setOpenDrawer(false)
                setValue(route.selectedIndex)
              }}
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.iconDrawer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcons className={classes.menuStyle} />
      </IconButton>
    </Fragment>
  )

  return (
    <Fragment>
      <div className={classes.root} style={{ backgroundImage: `url(${back})` }}>
        <ElevationScroll>
          <AppBar position="fixed" className={classes.appbar}>
            <Toolbar disableGutters>
              <Button
                disableRipple
                onClick={() => setValue(0)}
                to="/"
                className={classes.logoContainer}
              >
                <img className={classes.logo} src={logo} alt="caterfoods" />
              </Button>
              {matches ? drawer : tabs}
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <div className={classes.toolBarMargin} />
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.heroText}
        >
          <Typography align="left">
            <Typography variant={matches ? "h4" : "h1"}>
              CaterFoods Restaurant
            </Typography>
            <Typography variant={matches ? "h4" : "h1"}>{header}</Typography>
          </Typography>
        </Grid>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          className={classes.buttonContainer}
        >
          {!matchesS && button ? (
            <Button
              to="/order"
              variant="contained"
              className={classes.buttonR}
              startIcon={<CustomIcon src={reserve} height={35} />}
              onClick={() => sendWhatsapp("New Reservation")}
            >
              RESERVATION
            </Button>
          ) : null}
        </Grid>
      </div>
    </Fragment>
  )
}

export default Header
