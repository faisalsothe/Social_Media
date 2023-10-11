import React, { useEffect } from 'react'
import {Pagination,PaginationItem} from "@material-ui/lab"
import {Link} from "react-router-dom"
import useStyles from "./styles.js"
import { useDispatch,useSelector} from 'react-redux'
import { getPost } from '../../actions/posts.js'

const Paginate = ({page}) => {
  const {numberOfPages}=useSelector((state)=>state.posts);
  const classes=useStyles();
  const dispatch=useDispatch();
  
    useEffect(()=>{
      if(page){
        dispatch(getPost(page));
      }
    },[page,dispatch]);

  return (
    <Pagination
      classes={{ul:classes.ul}}
      count={numberOfPages}
      page={Number(page)}
      variant="outlined"
      color="primary"
      renderItem={(item)=>(
        <PaginationItem {...item} component={Link} to={`/posts?page=${item.page}`} />
      )}
    />
  );
};

export default Paginate