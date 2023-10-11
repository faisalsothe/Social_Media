import React, { useState} from 'react'
import {useNavigate} from "react-router-dom";
import {Avatar,Button,Paper,Grid,Typography,Container} from "@material-ui/core"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined.js"
import {useGoogleLogin} from '@react-oauth/google'
import Input from "./Input.js"
import useStyles from './styles.js'
import {useDispatch} from 'react-redux';
import {signinGoogle,signin,signup,signupGoogle} from "../../actions/auth.js"
import Icon from "./Icon.js"
import FileBase from "react-file-base64"

const InitState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: ""
}

const Auth = () => {
    const user=JSON.parse(localStorage.getItem("user_info"));
    const classes=useStyles();
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [sForm,setSForm]=useState(InitState);
    const [isSignUp, setIssSignUp] = useState(!user);
    const [showPassword, setShowPassword] = useState(false);

    // GOOGLE SIGN UP
  function handleGoogleSignIn(tokenResponse) {
    const accessToken = tokenResponse.access_token;
    if(isSignUp){
      dispatch(signupGoogle(accessToken,navigate))
    }else{
      dispatch(signinGoogle(accessToken,navigate))
    }
    }
    const signGoogleUp=useGoogleLogin({onSuccess:handleGoogleSignIn});
    const signGoogleIn=useGoogleLogin({onSuccess:handleGoogleSignIn});
  
    //NORMAL SIGN UP / SIGN IN
  function handleSubmit(e) 
  {
    e.preventDefault();
    if(isSignUp)
    {
        dispatch(signup(sForm,navigate));
    }else{
      dispatch(signin(sForm,navigate));
    }
  }
  
  const handleChange = (e) => setSForm({
    ...sForm,
    [e.target.name]: e.target.value
});

    const handleShowPassword=()=>
    {
      setShowPassword((prevShowPassword)=>!prevShowPassword);
    }

    const SwitchMode=()=>
    {
      setIssSignUp((prevIsSignUp)=>!prevIsSignUp);
      handleShowPassword(false);
    }

    return (
      <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography variant='h5'>{isSignUp?"Sign Up":"Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
          {
            isSignUp &&(
              <>
              <Input name="firstName" label="First Name" handleChange={handleChange} half/>
              <Input name="lastName" label="Last Name" handleChange={handleChange} half/>
              </>
            )
          }
          <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
          <Input name="password" label="Password" handleChange={handleChange} type={showPassword?"text":"password"} handleShowPassword={handleShowPassword}/>
          {isSignUp && (
            <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type="password"/>
          )}
          </Grid>
          {isSignUp && (
            <Paper elevation={6} style={{ padding: '20px' }}>
          <Typography style={{fontSize:"0.9rem"}} variant="h6">Upload Profile Picture *</Typography>
          <div style={{width:'97%',margin:'10px 0'}}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({base64})=>{
                    setSForm({...sForm,profilePicture:base64});
                }}
            />
          </div>
          </Paper>
          )}
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            {isSignUp? "Sign Up":"Sign In"}
          </Button>
          <Button className={classes.googleButton} color="primary" fullWidth 
          onClick={isSignUp? signGoogleUp : signGoogleIn} 
          startIcon={<Icon/>} variant="contained">
          {isSignUp? "Sign Up with Google":"Sign In with Google"}
          </Button>
          <Grid container justifyContent="flex-start">
            <Grid item style={{marginLeft:"30px"}}>
              <Button onClick={SwitchMode}>
                {isSignUp ? "Already Have an Account? Sign In." : "Don't have an account? Sign Up."}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
      </Container>
  )
}

export default Auth;