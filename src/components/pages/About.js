import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  about: {
    fontStyle: 'italic',
    fontWeight: 300,
    fontSize: '1.5rem',
    maxWidth: '50em',
    lineHeight: 1.4,
  },
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
  },
}));

const About = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid container direction='column'>
      <Grid item className={classes.rowContainer} style={{ marginTop: '4em' }}>
        <Typography variant='h2'>About Us</Typography>
      </Grid>
      <Grid
        item
        container
        justify='center'
        style={{ marginTop: '2em' }}
        className={classes.rowContainer}
      >
        <Typography variant='h4' align='center' className={classes.about}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nulla
          omnis rem ipsa quam tempore harum. At, voluptatem. Vitae ipsa harum
          voluptate consequatur adipisci dolorem recusandae soluta reiciendis
          At, voluptatem. Vitae ipsa harum voluptate consequatur adipisci
          dolorem recusandae soluta reiciendis explicabo! Vel!
        </Typography>
      </Grid>
      <Grid item container className={classes.rowContainer}>
        <Grid item container direction='column'>
          <Grid item>
            <Typography variant='h4' gutterBottom>
              History
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              paragraph
              style={{ fontWeight: 700, fontStyle: 'italic' }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
            <Typography variant='body1' paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
              voluptatem. Vitae ipsa harum voluptate consequatur adipisci
              dolorem recusandae soluta reiciendis explicabo! Vel! Lorem ipsum
              dolor sit amet consectetur adipisicing elit.
            </Typography>
            <Typography variant='body1' paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nulla
              omnis rem ipsa quam tempore harum. At, voluptatem. Vitae ipsa
              harum voluptate consequatur adipisci dolorem recusandae soluta
              reiciendis explicabo! Vel! Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </Typography>
            <Typography variant='body1' paragraph>
              At, voluptatem. Vitae ipsa harum voluptate consequatur adipisci
              dolorem recusandae soluta reiciendis explicabo! Vel! Lorem ipsum
              dolor sit amet consectetur adipisicing elit.
            </Typography>
            <Typography variant='body1' paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nulla
              omnis rem ipsa quam tempore harum.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
