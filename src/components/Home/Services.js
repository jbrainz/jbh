import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonArrow from '../layouts/Custom/ButtonArrow';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';

//svg imports
import price_new from '../../svg_files/price_new.svg';
import free_time from '../../svg_files/free_time.svg';
import safe from '../../svg_files/safe.png';

const useStyles = makeStyles((theme) => ({
  time: {
    width: '15em',
    height: '15em',
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      width: '10em',
      height: '10em',
    },
  },
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.orange,
    fontWeight: '300',
  },
  learnMore: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginTop: '2em',
      marginBottom: '2em',
    },
  },
  subtitle: {
    marginBottom: '1em',
  },
  serviceBlock: {
    marginTop: '6em',
    marginBottom: '5em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
      marginTop: '3em',
    },
  },
}));

const Services = (props) => {
  const { setValue, setSelectedIndex } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Fragment>
      <Grid item>
        <Grid
          container
          direction="row"
          justify={matchesSM ? 'center' : undefined}
          className={classes.serviceBlock}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              textAlign: matchesSM ? 'center' : undefined,
            }}
          >
            <Typography variant="h4">Best Price Guarantee</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              We return the difference in price
            </Typography>
            <Typography variant="subtitle1">
              We provide rides, without any extra hidden{' '}
              <span className={classes.specialText}>charges.</span>
            </Typography>
            <Button
              component={Link}
              to="/book"
              onClick={() => setValue(5)}
              variant="outlined"
              className={classes.learnMore}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              alt="free time waiting"
              src={price_new}
              className={classes.time}
            />
          </Grid>
        </Grid>
      </Grid>
      {/*---New block for the services block--- */}
      <Grid item>
        <Grid
          container
          direction="row"
          justify={matchesSM ? 'center' : 'flex-end'}
          className={classes.serviceBlock}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : undefined,
            }}
          >
            <Typography variant="h4">Free Waiting Time</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              We allow 60 minutes of waiting time at airports
            </Typography>
            <Typography variant="subtitle1">
              All other locations includes a free 15 minutes{' '}
              <span className={classes.specialText}> waiting time.</span>
            </Typography>
            <Button
              component={Link}
              to="/book"
              onClick={() => {
                setValue(5);
              }}
              variant="outlined"
              className={classes.learnMore}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
            <img
              alt="free time waiting"
              src={free_time}
              className={classes.time}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="row"
          justify={matchesSM ? 'center' : undefined}
          className={classes.serviceBlock}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              textAlign: matchesSM ? 'center' : undefined,
            }}
          >
            <Typography variant="h4">Safe Rides and Transfer</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              You will always know your carrier,
            </Typography>
            <Typography variant="subtitle1">
              all carriers are carefully{' '}
              <span className={classes.specialText}> selected</span>
            </Typography>
            <Button
              component={Link}
              to="/book"
              onClick={() => setValue(5)}
              variant="outlined"
              variant="outlined"
              className={classes.learnMore}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item style={{}}>
            <img alt="free time waiting" src={safe} className={classes.time} />
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Services;
