import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));

const About = () => {
    const classes=useStyles();
  return (
    <div className={classes.root}>
    <Typography variant="h2" gutterBottom>
      About Us
    </Typography>
    <Typography variant="body1">
    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis euismod volutpat mauris, a varius dolor rhoncus quis. Aliquam a euismod augue. Nam nec risus fringilla, mollis neque ut, laoreet urna. Donec posuere vel mauris nec bibendum. Fusce in quam fermentum lorem placerat gravida. Aenean et congue felis. Ut ultricies eleifend sagittis. Morbi ipsum purus, eleifend vitae est et, iaculis varius nisi. Nam luctus, massa et sodales tristique, nibh nunc rutrum eros, eget posuere ipsum nulla et eros. Praesent vel euismod metus, sit amet euismod dui. Nulla viverra commodo libero, nec lacinia mi consectetur vitae. Phasellus bibendum.
    </Typography>
    <Typography variant="body1">
    Maecenas consequat, urna eu ornare elementum, arcu lorem dapibus nisl, at finibus dui erat luctus quam. Proin nec egestas libero. Maecenas ultricies interdum enim, non blandit ligula blandit non. Sed id elit sed massa vestibulum tristique. Vestibulum consectetur, mauris ac egestas pellentesque, turpis lectus cursus est, vitae interdum magna urna eu eros. Nullam a ex ante. Sed pellentesque interdum lorem eu iaculis. Morbi dignissim quis nulla id ultrices. Fusce et enim eros. Donec vitae tristique dui.Etiam sit amet eros a nisi consectetur vulputate vitae eu est. Fusce convallis facilisis nibh ut efficitur. Aenean tristique libero a est semper laoreet.
    </Typography>
  </div>
  )
}

export default About