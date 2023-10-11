import {COMMENT,FETCH_ALL,FETCH_BY_SEARCH,START_LOADING,END_LOADING,LIKE,CREATE,UPDATE,DELETE,FETCH_POST} from "../constants/actionTypes";
import * as api from "../api";

//Action Creators
export const getPost= (page) => async (dispatch) => {
    try{
        dispatch({type:START_LOADING})
        const {data}=await api.fetchPost(page);
        dispatch({type:FETCH_ALL,payload:data});
        dispatch({type:END_LOADING})
    }catch(error){
        console.log(error);
    }
}

//FETCH POST BY ID
export const getPostById= (id) => async (dispatch) => {
    try{
        dispatch({type:START_LOADING})
        const {data}=await api.fetchPostById(id);
        dispatch({type:FETCH_POST,payload:data});
        dispatch({type:END_LOADING})
    }catch(error){
        console.log(error);
    }
}

export const getPostBySearch=(searchQuery)=>async (dispatch)=>{
    try{
        dispatch({type:START_LOADING})
        const {data:{data}}=await api.fetchPostBySearch(searchQuery);
        dispatch({type:FETCH_BY_SEARCH,payload:data});
        dispatch({type:END_LOADING})
    }catch(error){
        console.log(error);
    }
}

export const createPost=(posts)=> async(dispatch)=>{
    try{
        dispatch({type:START_LOADING})
        const {data}=await api.createPost(posts);
        dispatch({type:CREATE,payload:data});
        dispatch({type:END_LOADING})
    }catch(error){
        console.log(error);
    }
}

export const updatePost=(id,post)=> async (dispatch)=>{
    try{
        const {data}=await api.updatePost(id,post);
        dispatch({type:UPDATE,payload:data});
    }catch(error){
        console.log(error);
    }
}

export const deletePost=(id)=> async (dispatch)=>{
    try{
        await api.deletePost(id);
        dispatch({type:DELETE,payload:id});
    }
    catch(error){
        console.log(error);
    }
}

export const likePost=(id)=>async (dispatch) => {
    try{
        const {data}=await api.likePost(id);
        dispatch({type:LIKE,payload:data});
    }
    catch(error){
        console.log(error);
    }
}

export const commentPost=(value,id)=>async (dispatch) => {
    try{
        const {data}=await api.comment(value,id);
        dispatch({type:COMMENT,payload:data});
        return data.comments;
    }catch(error){
        console.log(error);
    }
}