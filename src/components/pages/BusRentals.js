import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Grid, Typography, useMediaQuery, Fab } from '@material-ui/core';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import CallIcon from '@material-ui/icons/Call';
import BookIcon from '@material-ui/icons/Book';

//Images Import.
import rentals from '../../assets/carRentals.svg';
import out from '../../assets/outstation.jpg';

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
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

const BusRentals = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid container direction='column'>
      <Grid item className={classes.rowContainer} style={{ marginTop: '2em' }}>
        <Typography variant='h2' style={{ fontFamily: 'Raleway' }}>
          Bus Rentals
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction='row'
        alignItems='center'
        className={classes.rowContainer}
      >
        <Grid item lg>
          <img
            src={rentals}
            alt='Car rentals'
            style={{
              height: matchesSM ? '15em' : '30em',
              width: '40em',
              maxWidth: matchesSM ? '20em' : '40em',
              marginRight: matchesSM ? '2em' : '5em',
            }}
          />
        </Grid>
        <Grid item container direction='column' lg style={{ maxWidth: '40em' }}>
          <Grid item>
            <Typography align='right' variant='h4' gutterBottom>
              Our Offer.
            </Typography>
            <Grid item>
              <Typography align='right' variant='body1' paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore
                consectetur, neque doloribus, cupiditate numquam dignissimos
                laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
              <Typography align='right' variant='body1' paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore
                consectetur, neque doloribus, cupiditate numquam dignissimos
                laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
              <Typography align='right' variant='body1' paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore
                consectetur, neque doloribus, cupiditate numquam dignissimos
                laborum fugiat deleniti? Eum quasi quidem quibusdam. cupiditate
                numquam dignissimos laborum fugiat deleniti? Eum quasi quidem
                quibusdam.
              </Typography>
              <Typography align='right' variant='body1' paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore
                consectetur, neque doloribus, cupiditate numquam dignissimos
                laborum fugiat deleniti? Eum quasi quidem quibusdam. cupiditate
                numquam dignissimos laborum fugiat deleniti? Eum quasi quidem
                quibusdam.
              </Typography>
              <Typography align='right' variant='body1' paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore
                consectetur, neque doloribus, cupiditate numquam dignissimos
                laborum fugiat deleniti? Eum quasi quidem quibusdam. cupiditate
                numquam dignissimos laborum fugiat deleniti? Eum quasi quidem
                quibusdam.
              </Typography>
              <Typography align='right' variant='body1' paragraph>
                neque doloribus, cupiditate numquam dignissimos laborum fugiat
                deleniti? Eum quasi quidem quibusdam.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction='row'
        alignItems='center'
        className={classes.rowContainer}
      >
        <Grid item container direction='column' lg style={{ maxWidth: '40em' }}>
          <Grid item>
            <Typography align='left' variant='h4' gutterBottom>
              Outstation
            </Typography>
            <Grid item>
              <Typography align='left' variant='body1' paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore
                consectetur, neque doloribus, cupiditate numquam dignissimos
                laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
              <Typography align='left' variant='body1' paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore
                consectetur, neque doloribus, cupiditate numquam dignissimos
                laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
              <Typography align='left' variant='body1' paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore
                consectetur, neque doloribus, cupiditate numquam dignissimos
                laborum fugiat deleniti? Eum quasi quidem quibusdam. cupiditate
                numquam dignissimos laborum fugiat deleniti? Eum quasi quidem
                quibusdam.
              </Typography>
              <Typography align='left' variant='body1' paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore
                consectetur, neque doloribus, cupiditate numquam dignissimos
                laborum fugiat deleniti? Eum quasi quidem quibusdam. cupiditate
                numquam dignissimos laborum fugiat deleniti? Eum quasi quidem
                quibusdam.
              </Typography>
              <Typography align='left' variant='body1' paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore
                consectetur, neque doloribus, cupiditate numquam dignissimos
                laborum fugiat deleniti? Eum quasi quidem quibusdam. cupiditate
                numquam dignissimos laborum fugiat deleniti? Eum quasi quidem
                quibusdam.
              </Typography>
              <Typography align='left' variant='body1' paragraph>
                neque doloribus, cupiditate numquam dignissimos laborum fugiat
                deleniti? Eum quasi quidem quibusdam.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container justify='center' lg>
          <img
            src={out}
            alt='Car rentals'
            style={{
              height: '100%',
              width: '100%',
              maxWidth: '40em',
              margin: 0,
            }}
          />
        </Grid>
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
          <Grid item style={{ marginLeft: matchesMD ? '1em' : '30em' }}>
            <Fab
              rel='noopener noreferrer'
              target='_blank'
              href='https://api.whatsapp.com/send?phone=%27+2348057783760'
              color='secondary'
              aria-label='Whatsapp'
            >
              <WhatsAppIcon />
            </Fab>
          </Grid>
          <Grid item>
            <Fab
              rel='noopener noreferrer'
              target='_blank'
              href='tel:08059744080'
              color='primary'
              aria-label='Call us'
            >
              <CallIcon />
            </Fab>
          </Grid>
          <Grid item>
            <Fab color='default' aria-label='book now' variant='extended'>
              <BookIcon className={classes.extendedIcon} />
              {matchesSM ? undefined : 'Book Now'}
            </Fab>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BusRentals;
