import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  footer: {
    background: 'white',
    padding: theme.spacing(2),
    top:"auto",
    bottom: 0,
    width: '100%',
    marginTop:"20px"
  },
  centerContent: {
    flexGrow: 1,
    textAlign: "center"
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.footer}>
      <Toolbar>
        <Typography variant="body1" color="primary" className={classes.centerContent}>
          Copyright 2023, Faisal Sothe, India.
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
