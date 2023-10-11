// Contact.js
import React, { useRef} from 'react';
import {Typography,TextField,Button} from '@material-ui/core';
import useStyles from "./styles.js"
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2"
function Contact() {
  const formRef=useRef(null);
  const classes = useStyles();

  const handleSubmit = (e)=>{
    e.preventDefault();
        emailjs.sendForm("service_qne406j", 'template_w51iu28',formRef.current, '-690n2hqHlGQe75Rw')
          .then((result) => {
              console.log(result.text);
              Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Message Sent Successfully.',
              })
              e.target.reset();
          }).catch((error) => {
              console.log(error.text);
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.text,
              })
          });
  }

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <form ref={formRef} className={classes.form} onSubmit={handleSubmit} method={'POST'}>
        <TextField
          className={classes.input}
          label="Name"
          variant="outlined"
          required
          name="name"
        />
        <TextField
          className={classes.input}
          label="Email"
          variant="outlined"
          type="email"
          required
          name="email"
        />
        <TextField
          className={classes.input}
          label="Message"
          variant="outlined"
          multiline
          minRows={4}
          required
          name="description"
        />
        <Button variant="contained" color="primary" type="submit"> 
          Send
        </Button>
      </form>
    </div>
  );
}

export default Contact;


