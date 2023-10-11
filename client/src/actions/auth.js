import {AUTH} from "../constants/actionTypes.js"
import * as api from "../api/index.js"

export const loadUser=() => async(dispatch)=>{
    const localUser=JSON.parse(localStorage.getItem("user_info"));

    if(localUser){
        dispatch({type:AUTH,data:localUser})
    }
}

export const signin=(data2,navigate)=> async (dispatch)=>{
    try{
        const {data}=await api.signIn(data2);
        dispatch({type:AUTH,data})
        navigate("/");
    }catch(error){
        console.log(error);
    }
}

export const signup=(formData,navigate)=> async (dispatch)=>{
    try{
        const {data}=await api.signUp(formData);
        dispatch({type:AUTH,data})
        navigate("/");
    }catch(error){
        console.log(error);
    }
}

export const signupGoogle=(accessToken,navigate)=> async (dispatch)=>{
    try{
        const {data}=await api.signUpGoogle(accessToken);
        dispatch({type:AUTH,data})
        navigate("/");
    }catch(error){
        console.log(error);
    }
}

export const signinGoogle=(accessToken,navigate)=> async (dispatch)=>{
    try{
        const {data}=await api.signInGoogle(accessToken);
        dispatch({type:AUTH,data})
        navigate("/");
    }catch(error){
        console.log(error);
    }
}
