import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Services from '../Home/Services';
import { Typography, useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 350,
  },
  text: {
    marginLeft: '5em',
    marginRight: '5em',
    marginBottom: '5em',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '2em',
      marginRight: '2em',
      marginBottom: '2em',
    },
  },
}));

const Service = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid container direction="column">
      <Services />
      <Grid item className={classes.text}>
        <Typography gutterBottom variant="h5" style={{ color: '#6c757d' }}>
          JBH Services
        </Typography>
        <Typography gutterBottom variant="body2" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam. body1. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
          suscipit, quam beatae rerum inventore consectetur, neque doloribus,
          cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi
          quidem quibusdam. body1. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae
          rerum inventore consectetur, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Service;
