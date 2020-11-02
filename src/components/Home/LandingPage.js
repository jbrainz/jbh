import React, { Fragment } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonArrow from '../layouts/Custom/ButtonArrow';
import Typography from '@material-ui/core/Typography';
import Services from './Services';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ride from '../../svg_files/ride.svg';
import Destination from './Destination';

const useStyles = makeStyles((theme) => ({
  svgImage: {
    marginTop: '3em',
    marginLeft: '10%',
    maxWidth: '50em',
    minWidth: '20em',
    [theme.breakpoints.down('md')]: {
      maxWidth: '25em',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '10em',
    },
  },
  block_image: {
    height: '30em',
    width: '30em',
    [theme.breakpoints.down('md')]: {
      width: '20em',
      height: '20em',
    },
    [theme.breakpoints.down('sm')]: {
      width: '15em',
      height: '15em',
    },
  },
  bookNow: {
    ...theme.typography.book,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 45,
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
    color: 'white',
  },
  buttonContainer: {
    marginTop: '1em',
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    height: 45,
    width: 145,
  },
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em',
      marginBottom: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em',
    },
  },
  heroTextContainer: {
    minWidth: '21.5em',
    marginLeft: '1em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      minWidth: '15em',
    },
  },
}));

const LandingPage = (props) => {
  const { setValue, setSelectedIndex } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Fragment>
      <Grid container className={classes.mainContainer} direction="column">
        <Grid item>
          {' '}
          {/*-Hero Block Start Here-*/}
          <Grid
            container
            justify="flex-end"
            alignItems="center"
            direction="row"
          >
            <Grid sm item className={classes.heroTextContainer}>
              <Typography variant={matchesSM ? 'h4' : 'h2'} align="center">
                Best Rides and Transfer Service in India
              </Typography>
              <Grid
                container
                className={classes.buttonContainer}
                justify="center"
              >
                <Grid item>
                  <Button
                    component={Link}
                    to="/book"
                    onClick={() => setValue(5)}
                    className={classes.bookNow}
                    variant="contained"
                  >
                    Book Now
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    className={classes.learnButtonHero}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid sm item className={classes.svgImage}>
              <img
                alt="city-rides"
                className={classes.block_image}
                src={ride}
              />
            </Grid>
          </Grid>
        </Grid>
        <Services setValue={setValue} setSelectedIndex={setSelectedIndex} />
        <Destination setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </Grid>
    </Fragment>
  );
};

export default LandingPage;
