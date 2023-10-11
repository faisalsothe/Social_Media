import React,{useEffect} from 'react';
import {Paper,Typography,CircularProgress,Divider,Grid} from "@material-ui/core";
import { useDispatch,useSelector } from 'react-redux';
import moment from 'moment';
import {useParams,useNavigate} from "react-router-dom"
import useStyles from "./styles.js"
import {getPostById,getPostBySearch} from '../../actions/posts.js';

import CommentSection from './CommentSection.jsx';

const PostDetails = () => {
  const classes=useStyles();
  const {post,posts,isLoading}=useSelector((state)=>state.posts);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const {id}=useParams();

  useEffect(()=>{
    dispatch(getPostById(id));
  },[dispatch,id]);

  useEffect(()=>{
    if(post){
      dispatch(getPostBySearch({search:"none",tags:post?.tags.join(",")}));
    }
  },[dispatch,post])

  if(!post){
    return null;
  }
  if(isLoading){
    return <Paper elevation={6} className={classes.loadingPaper}>
      <CircularProgress size="7em" />
    </Paper>
  }

  const recommendedPosts=posts.filter(({_id})=>_id !== post._id);

  const openPost=(_id)=>{
    navigate(`/posts/${_id}`)
  }

  return (
    <Paper style={{ padding: "20px", borderRadius: "15px" }} elevation={6}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={7}>
          <div className={classes.card}>
            <div className={classes.section}>
              <Typography variant="h3" component="h2">{post.title}</Typography>
              <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
              <Typography gutterBottom variant="body1" component="p">{post.message}</Typography>
              <Typography variant="h6">Created by: {post.name}</Typography>
              <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
              <Divider style={{ margin: '20px 0' }} />
              <Typography component={'span'} variant="body2"><strong><CommentSection isLoading={isLoading} post={post} /></strong></Typography>
              <Divider style={{ margin: '20px 0' }} />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={5}>
          <div className={classes.imageSection}>
            <img className={classes.media} src={post.selectedFile || ''} alt={post.title}/>
          </div>
        </Grid>
      </Grid>
      {recommendedPosts.length && (
        <Paper style={{ padding: "10px", margin: "20px", borderRadius: "15px" }} elevation={6}>
          <div className={classes.section}>
            <Typography gutterBottom variant='h5'>You might also like:</Typography>
            <Divider />
            <div className={classes.recommendedPosts}>
              {recommendedPosts.map(({ title, message, name, likes, selectedFile, _id }) => (
                <div style={{ margin: "20px", cursor: "pointer" }} onClick={() => openPost(_id)} key={_id}>
                  <Typography gutterBottom variant='h6'>{title}</Typography>
                  <Typography gutterBottom variant='h6'>{name}</Typography>
                  <Typography gutterBottom variant='h6'>{message}</Typography>
                  <Typography gutterBottom variant='h6'>Likes: {likes.length}</Typography>
                  <img src={selectedFile} alt="" width={200} height={200} />
                </div>
              ))}
            </div>
          </div>
        </Paper>
      )}
    </Paper>
  )
}

export default PostDetails