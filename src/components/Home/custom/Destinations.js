import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonArrow from '../../layouts/Custom/ButtonArrow';
import Typography from '@material-ui/core/Typography';
import { Card, CardContent } from '@material-ui/core';
import Carousel from 'react-elastic-carousel';

// IMPORT OF img FILES
import sedan from '../../svg_files/sedan.svg';

const useStyles = makeStyles((theme) => ({
  image_fleet: {
    height: '20rem',
    width: '20rem',
  },
}));

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 },
];

const Destinations = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid item>
      <Typography variant="h2">Our Fleet</Typography>
      <Carousel enableAutoPlay showArrows={false} breakPoints={breakPoints}>
        <Card>
          <CardContent>
            <Grid className={classes.car_fleet} container direction="column">
              <img
                className={classes.image_fleet}
                alt="fleet_comfort"
                src={sedan}
              />
            </Grid>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Grid container className={classes.car_fleet} direction="column">
              <img
                className={classes.image_fleet}
                alt="fleet_comfort"
                src={sedan}
              />
            </Grid>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Grid container className={classes.car_fleet} direction="column">
              <img
                className={classes.image_fleet}
                alt="fleet_comfort"
                src={sedan}
              />
            </Grid>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Grid container className={classes.car_fleet} direction="column">
              <img
                className={classes.image_fleet}
                alt="fleet_comfort"
                src={sedan}
              />
            </Grid>
          </CardContent>
        </Card>
      </Carousel>
    </Grid>
  );
};

export default Destinations;
