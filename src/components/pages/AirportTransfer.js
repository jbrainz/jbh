import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/styles';
import {
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  Fab,
} from '@material-ui/core';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import CallIcon from '@material-ui/icons/Call';
import BookIcon from '@material-ui/icons/Book';
import back from '../../assets/backArrow.svg';
import foward from '../../assets/forwardArrow.svg';
import time from '../../assets/time.svg';
import cash from '../../assets/paynow.svg';
import pay from '../../assets/flight.svg';

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: '40em',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '20em',
    },
  },
  arrowContainer: {
    marginTop: '0.5em',
  },
  mainContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    paddingTop: '2em',
    paddingBottom: '10em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '2em',
      paddingRight: '2em',
    },
  },
  pay: {
    height: '15em',
    width: '15em',
    marginLeft: '5em',
    [theme.breakpoints.down('md')]: {
      height: '10em',
      width: '10em',
      marginLeft: '1.5em',
    },
  },
  root: {
    '& > *': {
      margin: theme.spacing(3),
    },
    [theme.breakpoints.down('sm')]: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const AirportTransfer = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('md'));
  const matchesS = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container direction='column' className={classes.mainContainer}>
      <Grid item container direction='row'>
        {matchesSM ? null : (
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: '1em', marginLeft: '-3.5em' }}
          >
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              onClick={() => props.setSelectedIndex(0)}
              component={Link}
              to='/services'
            >
              <img alt='back to services page' src={back} />
            </IconButton>
          </Grid>
        )}
        <Grid
          item
          container
          direction='column'
          justify='center'
          className={classes.heading}
          alignItems='center'
        >
          <Grid item>
            <Typography
              variant='h2'
              style={{ fontSize: matchesS ? '1.5rem' : undefined }}
            >
              Airport Transfer Service.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1' paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur.
            </Typography>
            <Typography variant='body1' paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
            <Typography variant='body1' paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
            <Typography variant='body1' paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam. cupiditate
              numquam dignissimos laborum fugiat deleniti? Eum quasi quidem
              quibusdam.
            </Typography>
            <Typography variant='body1' paragraph>
              neque doloribus, cupiditate numquam dignissimos laborum fugiat
              deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </Grid>
        </Grid>
        {matchesSM ? null : (
          <Grid item className={classes.arrowContainer}>
            <IconButton
              component={Link}
              to='/bus-rental'
              onClick={() => props.setSelectedIndex(2)}
              style={{ backgroundColor: 'transparent' }}
            >
              <img src={foward} alt='bus rentals' />
            </IconButton>
          </Grid>
        )}
      </Grid>
      <Grid item container direction='row' justify='center'>
        <Grid
          item
          container
          direction='row'
          alignItems='center'
          className={classes.root}
        >
          <Grid item container direction='column' alignItems='center'>
            <Grid item>
              <Typography
                variant='subtitle1'
                style={{ fontWeight: '600', fontSize: '1.25em' }}
              >
                Try out our services today, our customer services are 24/7
                available
              </Typography>
            </Grid>
          </Grid>
          <Grid item style={{ marginLeft: matchesSM ? '1em' : '30em' }}>
            <Fab color='secondary' aria-label='Whatsapp'>
              <WhatsAppIcon />
            </Fab>
          </Grid>
          <Grid item>
            <Fab color='primary' aria-label='Call us'>
              <CallIcon />
            </Fab>
          </Grid>
          <Grid item>
            <Fab color='default' aria-label='book now' variant='extended'>
              <BookIcon className={classes.extendedIcon} />
              {matchesS ? undefined : 'Book Now'}
            </Fab>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AirportTransfer;
