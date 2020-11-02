import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Services from '../Home/Services';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 350,
  },
}));

const Service = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Services />
      <Typography variant=""></Typography>
    </Grid>
  );
};

export default Service;
