import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Carousel from 'react-elastic-carousel';
import { Card, CardContent } from '@material-ui/core';

// IMPORT OF img FILES
import sedan from '../../../assets/toyota.jpg';
import bus from '../../../assets/bus.jpg';

const useStyles = makeStyles((theme) => ({
  fleet: {
    backgroundImage: `url(${sedan})`,
  },
  bus: {
    backgroundImage: `url(${bus})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
  container: {
    backgroundImage: `url(${sedan})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
}));

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 },
];

const CustomSlider = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid item>
      <Typography
        variant="h2"
        style={{ marginTop: '2em', marginBottom: '2em' }}
      >
        Our Fleet
      </Typography>
      <Carousel enableAutoPlay showArrows={false} breakPoints={breakPoints}>
        <Grid
          className={classes.container}
          style={{ height: '40em' }}
          direction="row"
          alignItems="center"
          container
        >
          <Grid Item container direction="column">
            <Grid item sm style={{ marginLeft: '5em' }}>
              <Grid container direction="column">
                <Typography
                  variant="h2"
                  style={{ color: theme.palette.primary.light }}
                >
                  About Us
                </Typography>{' '}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          className={classes.bus}
          style={{ height: '40em' }}
          direction="row"
          alignItems="center"
          container
        >
          <Grid Item container direction="column">
            <Grid item sm style={{ marginLeft: '5em' }}>
              <Grid container direction="column">
                <Typography
                  variant="h2"
                  style={{ color: theme.palette.primary.light }}
                >
                  Check
                </Typography>{' '}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Carousel>
    </Grid>
  );
};

export default CustomSlider;
