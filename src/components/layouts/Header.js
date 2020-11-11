import React, { Fragment, useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/styles';
import logo from '../../assets/jbh_logo.svg';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcons from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { makeStyles } from '@material-ui/core/styles';
import Theme from './Theme';

const useStyles = makeStyles((theme) => ({
  toolBarMargin: {
    ...Theme.mixins.toolbar,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '1.25em',
    },
  },
  logo: {
    height: '7em',
    [theme.breakpoints.down('md')]: {
      height: '6em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '5em',
    },
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
    color: '#000000',
  },
  button: {
    ...theme.typography.book,
    borderBottomLeftRadius: '10px',
    borderTopLeftRadius: '30px',
    borderTopRightRadius: '15px',
    color: '#fff',
    marginLeft: '50px',
    marginRight: '25px',
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  menu: {
    backgroundColor: theme.palette.common.orange,
    color: '#fff',
    borderRadius: '0px',
  },
  menuItem: {
    ...theme.typography.tab,
    color: '#000',
    opacity: 0.6,
    '&:hover': {
      opacity: 1,
    },
  },
  menuStyle: {
    height: '50px',
    width: '50px',
    color: '#adb5bd',
  },
  iconDrawer: {
    '&:hover': { backgroundColor: 'transparent' },
    marginLeft: 'auto',
  },
  drawer: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: '#fff',
    opacity: 0.6,
    '&:hover': { opacity: 1 },
  },
  bookList: {
    backgroundColor: theme.palette.secondary.main,
    '&:hover': { backgroundColor: '#2A9E00' },
    color: '#fff',
  },
  drawerItemSelected: {
    '& .MuiListItemText-root': {
      opacity: 1,
    },
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
const Header = (props) => {
  const { setValue, value, selectedIndex, setSelectedIndex } = props;
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const [openDrawer, setOpenDrawer] = useState(false);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  //Handles Changes in the tabs
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const menuOptions = [
    { name: 'Services', link: '/services', activeIndex: 1, selectedIndex: 0 },
    {
      name: 'Airport Transfer',
      link: '/airport-transfer',
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: 'Bus Rentals',
      link: '/bus-rental',
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: 'Vip Transfer',
      link: '/vip-transfer',
      activeIndex: 1,
      selectedIndex: 3,
    },
  ];
  const routes = [
    { name: 'Home', link: '/', activeIndex: 0 },
    {
      name: 'Services',
      link: '/services',
      activeIndex: 1,
      ariaOwns: anchorEl ? 'simple-menu' : undefined,
      ariaPopup: anchorEl ? 'true' : undefined,
      mouseOver: (event) => handleClick(event),
    },
    { name: 'About Us', link: '/about', activeIndex: 2 },
    { name: 'Contact Us', link: '/contact', activeIndex: 3 },
  ];

  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        case '/book':
          setValue(5);
          break;
        default:
          break;
      }
    });
  }, [value, menuOptions, selectedIndex, routes]);

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
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
      </Tabs>
      <Button
        component={Link}
        to='/book'
        onClick={() => setValue(5)}
        variant='contained'
        color='secondary'
        className={classes.button}
        component={Link}
        to='/book'
      >
        Book Now
      </Button>
      <Menu
        keepMounted
        id='simple-menu'
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        classes={{ paper: classes.menu }}
        elevation={0}
        style={{ zIndex: 1302 }}
      >
        {menuOptions.map((option, i) => {
          return (
            <MenuItem
              key={`${option}${i}`}
              component={Link}
              to={option.link}
              classes={{ root: classes.menuItem }}
              onClick={(event) => {
                handleMenuItemClick(event, i);
                handleClose();
                setValue(1);
              }}
              selected={i === selectedIndex && value === 1}
            >
              {option.name}
            </MenuItem>
          );
        })}
      </Menu>
    </Fragment>
  );

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
                setOpenDrawer(false);
                setValue(route.selectedIndex);
              }}
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            divider
            component={Link}
            to='/book'
            selected={value === 5}
            classes={{ selected: classes.drawerItemSelected }}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Book
            </ListItemText>
          </ListItem>
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
  );

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position='fixed' className={classes.appbar}>
          <Toolbar disableGutters>
            <Button
              disableRipple
              onClick={() => setValue(0)}
              component={Link}
              to='/'
              className={classes.logoContainer}
            >
              <img className={classes.logo} src={logo} alt='company logo' />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolBarMargin} />
    </Fragment>
  );
};

export default Header;
