
import React, { useCallback, useEffect, useState } from 'react'
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core'
import {Link,useNavigate,useLocation } from "react-router-dom"
import memoriesLogo from "./images/memoriesLogo.png";
import memoriesText from "./images/memoriesText.png";

import useStyles from './styles.js'
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../constants/actionTypes';
import jwt_decode from "jwt-decode"

const NavBar = () => {
    const classes=useStyles();
    const [user,setUser]=useState(JSON.parse(localStorage.getItem("user_info")));
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const location=useLocation();

    const logOut=useCallback(()=>{
        dispatch({type:LOGOUT});
        navigate("/");
        setUser(null);
        window.location.reload();
    },[dispatch,navigate]);
    
    useEffect(()=>{
        const token=user?.token;
        if(token)
        {
            const decodedToken=jwt_decode(token);
            if(decodedToken.exp *1000 <new Date().getTime()){
                logOut();
            }
        }
        setUser(JSON.parse(localStorage.getItem("user_info")));
        // eslint-disable-next-line
    },[location,user?.token,logOut])
  return (
        <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
            <Link to="/" className={classes.brandContainer}>
                <img src={memoriesText} alt="icon" height="40"/>
                <img className={classes.image} src={memoriesLogo} alt="memories" height="40"/>
            </Link>
        </div>
        <div className={classes.navButton}>
        <Button component={Link} to="/" variant="contained" color="primary">Home</Button>
        &nbsp;&nbsp;&nbsp;
        <Button component={Link} to="/about" variant="contained" color="primary">About</Button>
        &nbsp;&nbsp;&nbsp;
        <Button component={Link} to="/contact" variant="contained" color="primary">Contact</Button>
        </div>
        <Toolbar className={classes.toolBar}>
        {user?(
                <div className={classes.profile}>
                <Avatar className={classes.purple}>
                {user.result.profilePicture ? (
                         <img src={user.result.profilePicture} alt="user_profile_img" width={80} height={80}/>
                ):
                (user.result.name.charAt(0).toUpperCase())}
                </Avatar>
                <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
                <Button variant="contained" className={classes.logout} onClick={logOut} color='secondary'>Log Out</Button>
                </div>
            ):(
                <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
            )}
        </Toolbar>
        </AppBar>
  )
}

export default NavBar;